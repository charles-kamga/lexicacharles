'use server';

/**
 * @fileOverview Provides pronunciation feedback to the user based on their speech.
 *
 * - getPronunciationFeedback - A function that processes speech and returns feedback.
 * - PronunciationFeedbackInput - The input type for the getPronunciationFeedback function.
 * - PronunciationFeedbackOutput - The return type for the getPronunciationFeedback function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PronunciationFeedbackInputSchema = z.object({
  audioDataUri: z
    .string()
    .describe(
      'Audio data URI of the user speech, must include a MIME type and use Base64 encoding. Expected format: \'data:<mimetype>;base64,<encoded_data>\'.'
    ),
  textToPronounce: z.string().describe('The text that the user is trying to pronounce.'),
});
export type PronunciationFeedbackInput = z.infer<typeof PronunciationFeedbackInputSchema>;

const PronunciationFeedbackOutputSchema = z.object({
  feedback: z.string().describe('Feedback on the user\'s pronunciation.'),
});
export type PronunciationFeedbackOutput = z.infer<typeof PronunciationFeedbackOutputSchema>;

export async function getPronunciationFeedback(input: PronunciationFeedbackInput): Promise<PronunciationFeedbackOutput> {
  return pronunciationFeedbackFlow(input);
}

const pronunciationFeedbackPrompt = ai.definePrompt({
  name: 'pronunciationFeedbackPrompt',
  input: {schema: PronunciationFeedbackInputSchema},
  output: {schema: PronunciationFeedbackOutputSchema},
  prompt: `You are an expert English pronunciation coach. A user is practicing pronouncing the following text:

  {{textToPronounce}}

  Here is a recording of their attempt:
  {{media url=audioDataUri}}

  Provide feedback to the user on their pronunciation, focusing on specific areas for improvement. Be encouraging and supportive.
  Format your answer in markdown.
  `,
});

const pronunciationFeedbackFlow = ai.defineFlow(
  {
    name: 'pronunciationFeedbackFlow',
    inputSchema: PronunciationFeedbackInputSchema,
    outputSchema: PronunciationFeedbackOutputSchema,
  },
  async input => {
    const {output} = await pronunciationFeedbackPrompt(input);
    return output!;
  }
);
