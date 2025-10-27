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
    <div className="w-full max-w-sm md:max-w-md mx-auto">
      <Carousel
        opts={{
          align: 'center',
        }}
        className="w-full relative"
      >
        <CarouselContent>
          {words.map((item, index) => (
            <CarouselItem key={index}>
              <Flashcard {...item} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-between w-full px-4 mt-4 md:px-0 md:absolute md:top-1/2 md:-translate-y-1/2 md:left-0 md:right-0 md:mt-0 md:justify-between md:pointer-events-none">
          <CarouselPrevious className="relative left-0 md:-left-12 md:pointer-events-auto" />
          <CarouselNext className="relative right-0 md:-right-12 md:pointer-events-auto" />
        </div>
      </Carousel>
    </div>
  );
}
