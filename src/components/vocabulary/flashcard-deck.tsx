'use client';

import { useState, useEffect } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import type { VocabularyItem } from '@/lib/types';
import './flashcard.css';

function Flashcard({ word, definition, definitionFR, example }: VocabularyItem) {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    // Reset flip state when the card changes
    setIsFlipped(false);
  }, [word]);

  return (
    <div className="flashcard-container" onClick={() => setIsFlipped(!isFlipped)}>
      <div className={cn('flashcard', { 'is-flipped': isFlipped })}>
        <Card className="flashcard-face flashcard-front">
          <CardContent className="flex flex-col items-center justify-center h-full text-center p-6">
            <p className="text-3xl md:text-4xl font-bold font-headline">{word}</p>
          </CardContent>
        </Card>
        <Card className="flashcard-face flashcard-back">
          <CardContent className="flex flex-col items-center justify-center h-full text-center p-6 space-y-4">
            <div>
              <p className="text-sm font-semibold text-muted-foreground">DEFINITION (EN)</p>
              <p className="text-lg md:text-xl font-medium">{definition}</p>
            </div>
             <div>
              <p className="text-sm font-semibold text-muted-foreground">DÉFINITION (FR)</p>
              <p className="text-lg md:text-xl font-medium">{definitionFR}</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-muted-foreground">EXAMPLE</p>
              <p className="text-lg md:text-xl italic">"{example}"</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// Function to shuffle an array
function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}


export function FlashcardDeck({ initialWords }: { initialWords: VocabularyItem[] }) {
  const [words, setWords] = useState<VocabularyItem[]>([]);

  useEffect(() => {
    setWords(shuffleArray(initialWords));
  }, [initialWords]);

  if (words.length === 0) {
    return null; // or a loading skeleton
  }
  
  return (
    <Carousel
      opts={{
        align: 'center',
      }}
      className="w-full max-w-sm md:max-w-md"
    >
      <CarouselContent>
        {words.map((item, index) => (
          <CarouselItem key={index}>
            <Flashcard {...item} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
