import { lessonsData } from '@/lib/data';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function LessonList() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {lessonsData.map((lesson) => {
        const placeholderImage = PlaceHolderImages.find(
          (img) => img.id === lesson.imageUrl
        );
        return (
          <Card key={lesson.id} className="flex flex-col overflow-hidden">
            <div className="relative w-full h-40">
              {placeholderImage && (
                <Image
                  src={placeholderImage.imageUrl}
                  alt={placeholderImage.description}
                  data-ai-hint={placeholderImage.imageHint}
                  fill
                  className="object-cover"
                />
              )}
            </div>
            <CardHeader>
              <CardTitle>{lesson.title}</CardTitle>
              <CardDescription>{lesson.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1" />
            <CardFooter>
              <Button asChild className="w-full">
                <Link href={`/lessons/${lesson.id}`}>
                  Start Lesson <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
}
