'use client';

import { useState, useRef } from 'react';
import { Mic, StopCircle, Play, Loader2, PartyPopper } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { getPronunciationFeedback } from '@/ai/flows/pronunciation-feedback';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { useToast } from '@/hooks/use-toast';

const textToPronounce = "The quick brown fox jumps over the lazy dog.";

export function PronunciationPractice() {
  const [isRecording, setIsRecording] = useState(false);
  const [audioURL, setAudioURL] = useState('');
  const [feedback, setFeedback] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const { toast } = useToast();

  const startRecording = async () => {
    setAudioURL('');
    setFeedback('');
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      mediaRecorderRef.current.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data);
      };
      mediaRecorderRef.current.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        const audioUrl = URL.createObjectURL(audioBlob);
        setAudioURL(audioUrl);
        audioChunksRef.current = [];
        await submitForFeedback(audioBlob);
        stream.getTracks().forEach(track => track.stop()); // Stop the mic access
      };
      audioChunksRef.current = [];
      mediaRecorderRef.current.start();
      setIsRecording(true);
    } catch (err) {
      console.error('Error accessing microphone:', err);
      toast({
        variant: 'destructive',
        title: 'Microphone Error',
        description: 'Could not access the microphone. Please check your browser permissions.',
      });
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      setIsLoading(true);
    }
  };

  const blobToBase64 = (blob: Blob): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  };

  const submitForFeedback = async (audioBlob: Blob) => {
    try {
      const audioDataUri = await blobToBase64(audioBlob);
      const result = await getPronunciationFeedback({
        audioDataUri,
        textToPronounce,
      });
      setFeedback(result.feedback);
    } catch (error) {
      console.error('Error getting feedback:', error);
      toast({
        variant: 'destructive',
        title: 'Feedback Error',
        description: 'Could not get feedback from the AI. Please try again.',
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  const playAudio = () => {
    if(audioURL) {
      const audio = new Audio(audioURL);
      audio.play();
    }
  }


  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Speak and Get Feedback</CardTitle>
        <CardDescription>
          Read the sentence below and record your voice. Our AI will give you feedback on your pronunciation.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="p-6 text-center bg-muted rounded-lg">
          <p className="text-xl md:text-2xl font-serif">{textToPronounce}</p>
        </div>
        <div className="flex items-center justify-center gap-4">
          <Button
            size="lg"
            onClick={isRecording ? stopRecording : startRecording}
            className="w-40"
          >
            {isRecording ? (
              <>
                <StopCircle className="w-5 h-5 mr-2 animate-pulse" />
                Stop
              </>
            ) : (
              <>
                <Mic className="w-5 h-5 mr-2" />
                Record
              </>
            )}
          </Button>
          {audioURL && !isRecording && (
            <Button size="lg" variant="outline" onClick={playAudio} disabled={isLoading}>
                <Play className="w-5 h-5 mr-2" />
                Play
            </Button>
          )}
        </div>
        {isLoading && (
          <div className="flex flex-col items-center justify-center text-muted-foreground">
            <Loader2 className="w-8 h-8 animate-spin" />
            <p className="mt-2">Analyzing your speech...</p>
          </div>
        )}
        {feedback && !isLoading && (
          <Alert>
            <PartyPopper className="h-4 w-4 text-accent-foreground" />
            <AlertTitle>Pronunciation Feedback</AlertTitle>
            <AlertDescription>
              <div
                className="prose prose-sm dark:prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: feedback }}
              />
            </AlertDescription>
          </Alert>
        )}
      </CardContent>
    </Card>
  );
}
