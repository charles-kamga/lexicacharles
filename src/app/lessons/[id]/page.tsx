import { lessonsData } from '@/lib/data';
import { notFound } from 'next/navigation';
import { AppHeader } from '@/components/common/app-header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Quiz } from '@/components/lessons/quiz';
import { Separator } from '@/components/ui/separator';

export default function LessonPage({ params }: { params: { id: string } }) {
  const lesson = lessonsData.find((l) => l.id === params.id);

  if (!lesson) {
    notFound();
  }

  return (
    <div className="flex flex-col h-full">
      <AppHeader title={lesson.title} />
      <main className="flex-1 p-4 overflow-auto md:p-6">
        <div className="max-w-4xl mx-auto space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Lesson Content</CardTitle>
            </CardHeader>
            <CardContent>
              <div
                className="prose prose-sm md:prose-base dark:prose-invert max-w-none prose-h3:font-headline prose-h3:text-foreground prose-strong:text-foreground"
                dangerouslySetInnerHTML={{ __html: lesson.content }}
              />
            </CardContent>
          </Card>
          
          <Separator />
          
          <Card>
            <CardHeader>
              <CardTitle>Check Your Understanding</CardTitle>
            </CardHeader>
            <CardContent>
              <Quiz questions={lesson.quiz} />
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

export async function generateStaticParams() {
  return lessonsData.map((lesson) => ({
    id: lesson.id,
  }));
}
