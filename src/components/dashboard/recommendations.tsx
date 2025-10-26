'use client';

import { getPersonalizedLessonRecommendations } from '@/ai/flows/personalized-lesson-recommendations';
import { translateText } from '@/ai/flows/translate-text';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Lightbulb, BookOpen, Languages } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Skeleton } from '../ui/skeleton';
import { Suspense, useState, useTransition, useEffect } from 'react';

function RecommendationContent() {
  const [recommendations, setRecommendations] = useState<{ reasoning: string; recommendedLessons: string[] } | null>(null);
  const [translatedReasoning, setTranslatedReasoning] = useState<string | null>(null);
  const [isTranslated, setIsTranslated] = useState(false);
  const [isTranslating, startTransition] = useTransition();

  useEffect(() => {
    getPersonalizedLessonRecommendations({
      progressSummary:
        'User has spent 4 hours learning this week, completed 3 lessons on tenses, and scored an average of 88% on quizzes. They struggled slightly with "articles".',
      userGoals: 'Improve grammar for business communication.',
    }).then(setRecommendations);
  }, []);

  const handleTranslate = () => {
    if (isTranslated) {
      setIsTranslated(false);
      return;
    }
    
    if (translatedReasoning) {
        setIsTranslated(true);
        return;
    }

    if (recommendations) {
      startTransition(async () => {
        const { translatedText } = await translateText({
          text: recommendations.reasoning,
          targetLanguage: 'French',
        });
        setTranslatedReasoning(translatedText);
        setIsTranslated(true);
      });
    }
  };

  if (!recommendations) {
    return <RecommendationsSkeleton />;
  }

  const reasoningText = isTranslated ? translatedReasoning : recommendations.reasoning;

  return (
    <div className="space-y-4">
      <div className="relative">
        <h4 className="font-semibold">Reasoning</h4>
        <p className="text-sm text-muted-foreground pr-10 min-h-[4rem]">
            {isTranslating && isTranslated ? 'Translating...' : reasoningText}
            {isTranslating && !isTranslated && recommendations.reasoning}
        </p>
        <Button 
            variant="ghost" 
            size="icon" 
            className="absolute top-0 right-0 h-8 w-8"
            onClick={handleTranslate}
            disabled={isTranslating}
            >
            <Languages className="w-4 h-4" />
            <span className="sr-only">Translate Reasoning</span>
        </Button>
      </div>
      <div>
        <h4 className="mb-2 font-semibold">Recommended Lessons</h4>
        <ul className="space-y-2">
          {recommendations.recommendedLessons.map((lesson, index) => (
            <li key={index}>
              <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                <Link href="/lessons">
                  <BookOpen className="w-4 h-4 mr-2" />
                  {lesson}
                </Link>
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function RecommendationsSkeleton() {
  return (
    <div className="space-y-4">
       <div>
        <h4 className="font-semibold">Reasoning</h4>
        <div className='space-y-2 mt-1'>
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
        </div>
      </div>
      <div>
        <h4 className="mb-2 font-semibold">Recommended Lessons</h4>
        <ul className="space-y-2">
          <li><Skeleton className="h-9 w-full" /></li>
          <li><Skeleton className="h-9 w-full" /></li>
        </ul>
      </div>
    </div>
  )
}

export function Recommendations() {
  return (
    <Card className="h-full flex flex-col">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Lightbulb className="w-5 h-5 text-accent-foreground" />
          <span>For You</span>
        </CardTitle>
        <CardDescription>Personalized lessons to help you reach your goals.</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <Suspense fallback={<RecommendationsSkeleton />}>
          <RecommendationContent />
        </Suspense>
      </CardContent>
    </Card>
  );
}
