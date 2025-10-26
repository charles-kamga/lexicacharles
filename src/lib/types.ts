export type QuizQuestion = {
  question: string;
  options: string[];
  correctAnswer: string;
};

export type Lesson = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  content: string;
  quiz: QuizQuestion[];
};

export type VocabularyItem = {
  word: string;
  definition: string;
  definitionFR: string;
  example: string;
};

export type ProgressChartData = {
  name: string;
  'Time Spent (min)': number;
  'Quizzes Taken': number;
};
