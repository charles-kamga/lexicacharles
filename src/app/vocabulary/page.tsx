import { AppHeader } from '@/components/common/app-header';
import { FlashcardDeck } from '@/components/vocabulary/flashcard-deck';
import { vocabularyData } from '@/lib/data';

export default function VocabularyPage() {
  return (
    <div className="flex flex-col h-full">
      <AppHeader title="Vocabulary Builder" />
      <main className="flex-1 p-4 overflow-auto md:p-6 flex flex-col items-center justify-center">
        <FlashcardDeck initialWords={vocabularyData} />
      </main>
    </div>
  );
}
