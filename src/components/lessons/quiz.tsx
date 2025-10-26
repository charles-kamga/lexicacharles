'use client';

import { useState } from 'react';
import type { QuizQuestion } from '@/lib/types';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, XCircle, Award, RotateCw } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

type QuizProps = {
  questions: QuizQuestion[];
};

export function Quiz({ questions }: QuizProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleAnswerChange = (value: string) => {
    setSelectedAnswers({ ...selectedAnswers, [currentQuestionIndex]: value });
  };
  
  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setShowResults(false);
  };

  if (showResults) {
    const score = questions.reduce((acc, question, index) => {
      return selectedAnswers[index] === question.correctAnswer ? acc + 1 : acc;
    }, 0);
    const scorePercentage = Math.round((score / questions.length) * 100);

    return (
      <div className="text-center space-y-4">
        <Award className="w-16 h-16 mx-auto text-accent-foreground" />
        <h3 className="text-2xl font-bold">Quiz Complete!</h3>
        <p className="text-muted-foreground">You scored</p>
        <p className="text-4xl font-bold">{scorePercentage}%</p>
        <p>
          ({score} out of {questions.length} correct)
        </p>
        <div className="space-y-4 text-left pt-4">
          {questions.map((q, i) => (
            <Card key={i} className={selectedAnswers[i] === q.correctAnswer ? 'border-green-500' : 'border-red-500'}>
              <CardContent className="p-4 space-y-2">
                <p className="font-semibold">{q.question}</p>
                <div className="flex items-center gap-2">
                  {selectedAnswers[i] === q.correctAnswer ? <CheckCircle className="w-4 h-4 text-green-500" /> : <XCircle className="w-4 h-4 text-red-500" />}
                  <p className="text-sm">Your answer: {selectedAnswers[i]}</p>
                </div>
                {selectedAnswers[i] !== q.correctAnswer && <p className="text-sm text-green-600">Correct answer: {q.correctAnswer}</p>}
              </CardContent>
            </Card>
          ))}
        </div>
        <Button onClick={handleRestart}>
          <RotateCw className="w-4 h-4 mr-2" />
          Retake Quiz
        </Button>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  return (
    <div className="space-y-6">
      <div>
        <Progress value={progress} className="h-2" />
        <p className="text-sm text-muted-foreground mt-2">
          Question {currentQuestionIndex + 1} of {questions.length}
        </p>
      </div>

      <p className="text-lg font-semibold">{currentQuestion.question}</p>
      <RadioGroup
        value={selectedAnswers[currentQuestionIndex] || ''}
        onValueChange={handleAnswerChange}
        className="space-y-2"
      >
        {currentQuestion.options.map((option) => (
          <div key={option} className="flex items-center space-x-2">
            <RadioGroupItem value={option} id={option} />
            <Label htmlFor={option} className="flex-1 cursor-pointer">{option}</Label>
          </div>
        ))}
      </RadioGroup>
      <Button onClick={handleNext} disabled={!selectedAnswers[currentQuestionIndex]}>
        {currentQuestionIndex < questions.length - 1 ? 'Next' : 'Finish Quiz'}
      </Button>
    </div>
  );
}
