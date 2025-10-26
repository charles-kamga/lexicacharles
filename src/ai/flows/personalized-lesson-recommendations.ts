'use server';

/**
 * @fileOverview A personalized lesson recommendation AI agent.
 *
 * - getPersonalizedLessonRecommendations - A function that generates personalized lesson recommendations based on user progress.
 * - PersonalizedLessonRecommendationsInput - The input type for the getPersonalizedLessonRecommendations function.
 * - PersonalizedLessonRecommendationsOutput - The return type for the getPersonalizedLessonRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedLessonRecommendationsInputSchema = z.object({
  progressSummary: z
    .string()
    .describe(
      'A summary of the user\'s learning progress, including topics covered, quiz scores, and time spent learning.'
    ),
  userGoals: z
    .string()
    .describe('The user\'s goals for learning English, e.g., improve grammar, expand vocabulary, etc.'),
});
export type PersonalizedLessonRecommendationsInput = z.infer<
  typeof PersonalizedLessonRecommendationsInputSchema
>;

const PersonalizedLessonRecommendationsOutputSchema = z.object({
  recommendedLessons: z
    .array(z.string())
    .describe('A list of lesson topics recommended for the user.'),
  reasoning: z
    .string()
    .describe('The reasoning behind the lesson recommendations.'),
});
export type PersonalizedLessonRecommendationsOutput = z.infer<
  typeof PersonalizedLessonRecommendationsOutputSchema
>;

export async function getPersonalizedLessonRecommendations(
  input: PersonalizedLessonRecommendationsInput
): Promise<PersonalizedLessonRecommendationsOutput> {
  return personalizedLessonRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedLessonRecommendationsPrompt',
  input: {schema: PersonalizedLessonRecommendationsInputSchema},
  output: {schema: PersonalizedLessonRecommendationsOutputSchema},
  prompt: `You are an AI assistant that provides personalized lesson recommendations for English language learners.

  Based on the user's progress summary and goals, recommend a list of lessons that will help them improve their English skills.
  Explain the reasoning behind your recommendations.

  Progress Summary: {{{progressSummary}}}
  User Goals: {{{userGoals}}}

  Recommended Lessons:`,
});

const personalizedLessonRecommendationsFlow = ai.defineFlow(
  {
    name: 'personalizedLessonRecommendationsFlow',
    inputSchema: PersonalizedLessonRecommendationsInputSchema,
    outputSchema: PersonalizedLessonRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
