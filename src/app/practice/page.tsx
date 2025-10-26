import { AppHeader } from '@/components/common/app-header';
import { PronunciationPractice } from '@/components/practice/pronunciation-practice';

export default function PracticePage() {
  return (
    <div className="flex flex-col h-full">
      <AppHeader title="Pronunciation Practice" />
      <main className="flex-1 p-4 overflow-auto md:p-6 flex items-center justify-center">
        <PronunciationPractice />
      </main>
    </div>
  );
}
