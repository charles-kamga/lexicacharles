import { AppHeader } from '@/components/common/app-header';
import { LessonList } from '@/components/lessons/lesson-list';

export default function LessonsPage() {
  return (
    <div className="flex flex-col h-full">
      <AppHeader title="Grammar Lessons" />
      <main className="flex-1 p-4 overflow-auto md:p-6">
        <LessonList />
      </main>
    </div>
  );
}
