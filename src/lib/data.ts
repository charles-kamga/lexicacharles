
import type { Lesson, VocabularyItem, ProgressChartData } from '@/lib/types';

export const lessonsData: Lesson[] = [
  {
    id: 'personal-pronouns-and-to-be',
    title: 'Personal Pronouns & "to be"',
    description: 'Learn about subject pronouns and the verb "to be".',
    imageUrl: '5',
    content: `
<h3>Personal Pronouns</h3>
<p>Personal pronouns replace nouns. The most common are subject pronouns:</p>
<ul>
  <li><b>I</b> - (First person singular)</li>
  <li><b>You</b> - (Second person singular/plural)</li>
  <li><b>He</b> - (Third person singular, masculine)</li>
  <li><b>She</b> - (Third person singular, feminine)</li>
  <li><b>It</b> - (Third person singular, neuter/object)</li>
  <li><b>We</b> - (First person plural)</li>
  <li><b>They</b> - (Third person plural)</li>
</ul>

<h3>The Verb "to be"</h3>
<p>The verb "to be" is one of the most important verbs. Its form changes with the pronoun.</p>
<p><b>Present Simple of "to be"</b></p>
<ul>
  <li>I <b>am</b></li>
  <li>You <b>are</b></li>
  <li>He/She/It <b>is</b></li>
  <li>We <b>are</b></li>
  <li>They <b>are</b></li>
</ul>
<p><b>Example:</b> She <b>is</b> a doctor. They <b>are</b> happy.</p>
    `,
    quiz: [
      {
        question: '___ are students.',
        options: ['We', 'He', 'She'],
        correctAnswer: 'We',
      },
      {
        question: 'Mark is an engineer. ___ is very smart.',
        options: ['She', 'It', 'He'],
        correctAnswer: 'He',
      },
       {
        question: 'The cat is sleeping. ___ is on the sofa.',
        options: ['He', 'She', 'It'],
        correctAnswer: 'It',
      },
    ],
  },
  {
    id: 'present-simple',
    title: 'Present Simple Tense',
    description: 'Learn how to use the present simple tense for habits, routines, and general truths.',
    imageUrl: '1',
    content: `
The **Present Simple** tense is one of the most fundamental tenses in English. We use it to talk about things that are generally true, habits, and routines.

<h3>Structure</h3>

- **Positive:** Subject + Verb (add -s for he/she/it) + ...
  - *Example:* I **play** tennis every Saturday.
  - *Example:* She **plays** tennis every Saturday.

- **Negative:** Subject + do/does + not + Verb + ...
  - *Example:* We **do not watch** TV in the morning.
  - *Example:* He **does not watch** TV in the morning.

- **Question:** Do/Does + Subject + Verb + ...?
  - *Example:* **Do** you **like** coffee?
  - *Example:* **Does** she **like** coffee?

<h3>When to Use It</h3>

1.  **Habits and Routines:**
    - I **get up** at 7 AM every day.
    - They often **go** to the cinema.

2.  **General Facts or Truths:**
    - The Earth **revolves** around the Sun.
    - Water **boils** at 100 degrees Celsius.

3.  **Scheduled Events (in the near future):**
    - The train **leaves** at 5 PM.
    - Our class **starts** next week.
    `,
    quiz: [
      {
        question: 'Which sentence is correct?',
        options: ['She play the piano.', 'She plays the piano.', 'She is plays the piano.', 'She playes the piano.'],
        correctAnswer: 'She plays the piano.',
      },
      {
        question: 'What is the negative form of "He works here"?',
        options: ['He not works here.', 'He dont work here.', 'He doesnt work here.', 'He does not work here.'],
        correctAnswer: 'He does not work here.',
      },
      {
        question: 'Choose the correct question form.',
        options: ['Do you likes ice cream?', 'Does you like ice cream?', 'Do you like ice cream?', 'Does you likes ice cream?'],
        correctAnswer: 'Do you like ice cream?',
      },
    ],
  },
  {
    id: 'present-continuous',
    title: 'Present Continuous',
    description: 'For actions happening right now.',
    imageUrl: '6',
    content: `
<h3>Present Continuous</h3>
<p>We use the Present Continuous for actions happening at the moment of speaking.</p>
<p><b>Structure:</b> Subject + am/is/are + Verb-ing</p>
<ul>
  <li><b>Positive:</b> I <b>am reading</b> a book.</li>
  <li><b>Negative:</b> She <b>is not (isn't) sleeping</b>.</li>
  <li><b>Question:</b> <b>Are</b> you <b>working</b>?</li>
</ul>
<p><b>Use cases:</b></p>
<ul>
    <li>Actions happening now: <i>Look! The baby <b>is smiling</b>.</i></li>
    <li>Temporary situations: <i>He <b>is staying</b> with his friend for a week.</i></li>
    <li>Future plans (informal): <i>We <b>are meeting</b> at 6 PM.</i></li>
</ul>
    `,
    quiz: [
      {
        question: 'What ___ you doing?',
        options: ['are', 'is', 'am'],
        correctAnswer: 'are',
      },
      {
        question: 'She ___ to music right now.',
        options: ['listens', 'is listening', 'listen'],
        correctAnswer: 'is listening',
      },
    ],
  },
  {
    id: 'past-simple',
    title: 'Past Simple',
    description: 'For finished actions in the past.',
    imageUrl: '7',
    content: `
<h3>Past Simple</h3>
<p>The Past Simple tense is used for actions that started and finished at a specific time in the past.</p>
<p><b>Structure (Regular Verbs):</b> Subject + Verb-ed</p>
<p><b>Structure (Irregular Verbs):</b> Subject + 2nd form of verb</p>
<ul>
  <li><b>Positive:</b> I <b>visited</b> Paris last year. / She <b>went</b> to the cinema.</li>
  <li><b>Negative:</b> They <b>did not (didn't) finish</b> the project.</li>
  <li><b>Question:</b> <b>Did</b> you <b>see</b> that movie?</li>
</ul>
    `,
    quiz: [
      {
        question: 'I ___ to the store yesterday.',
        options: ['go', 'goed', 'went'],
        correctAnswer: 'went',
      },
      {
        question: '___ you finish your homework?',
        options: ['Did', 'Do', 'Have'],
        correctAnswer: 'Did',
      },
    ],
  },
  {
    id: 'future-tenses',
    title: 'Future: Will vs. Going to',
    description: 'Learn the difference between "will" and "going to".',
    imageUrl: '8',
    content: `
<h3>Future Tenses</h3>
<p>Both "will" and "be going to" are used to talk about the future, but in different contexts.</p>
<p><b>Using "will"</b></p>
<ul>
  <li>For spontaneous decisions: <i>I think I <b>will have</b> the salad.</i></li>
  <li>For promises or offers: <i>I <b>will help</b> you with your bags.</i></li>
  <li>For predictions based on opinion: <i>I think it <b>will rain</b> tomorrow.</i></li>
</ul>
<p><b>Using "be going to"</b></p>
<ul>
  <li>For future plans and intentions: <i>I <b>am going to visit</b> my grandparents next week.</i></li>
  <li>For predictions based on present evidence: <i>Look at those clouds! It's <b>going to rain</b>.</i></li>
</ul>
    `,
    quiz: [
      {
        question: 'A: The phone is ringing! B: I ___ get it!',
        options: ['am going to', 'will'],
        correctAnswer: 'will',
      },
      {
        question: 'We have tickets for the concert. We ___ see Taylor Swift next month!',
        options: ['will', 'are going to'],
        correctAnswer: 'are going to',
      },
    ],
  },
  {
    id: 'articles',
    title: 'Articles: A, An, The',
    description: 'Master the use of definite and indefinite articles.',
    imageUrl: '2',
    content: `
<h3>Indefinite Articles: A and An</h3>
<p>We use <b>a</b> or <b>an</b> when we are talking about something in a general way, or when we mention something for the first time.</p>
<ul>
  <li>Use <b>a</b> before words that start with a consonant sound.
    <ul>
      <li><em>Example:</em> <b>a</b> book, <b>a</b> car, <b>a</b> university</li>
    </ul>
  </li>
  <li>Use <b>an</b> before words that start with a vowel sound.
    <ul>
      <li><em>Example:</em> <b>an</b> apple, <b>an</b> hour, <b>an</b> umbrella</li>
    </ul>
  </li>
</ul>

<h3>Definite Article: The</h3>
<p>We use <b>the</b> when we are talking about something specific, something that has already been mentioned, or something unique.</p>
<ol>
  <li><b>Specific Nouns:</b>
    <ul>
      <li>I saw a cat. <b>The</b> cat was black. (The specific cat I just mentioned)</li>
    </ul>
  </li>
  <li><b>Unique Things:</b>
    <ul>
      <li><b>The</b> sun, <b>the</b> moon, <b>the</b> internet</li>
    </ul>
  </li>
  <li><b>Superlatives:</b>
    <ul>
      <li><b>The</b> tallest building, <b>the</b> best student</li>
    </ul>
  </li>
</ol>

<h3>No Article</h3>
<p>We don't use an article when talking about general ideas, concepts, or plural nouns in a general sense.</p>
<ul>
  <li><em>Example:</em> I like <b>music</b>.</li>
  <li><em>Example:</em> <b>Cats</b> are independent animals.</li>
</ul>
    `,
    quiz: [
      {
        question: 'I need to buy ___ new phone.',
        options: ['a', 'an', 'the', 'no article'],
        correctAnswer: 'a',
      },
      {
        question: 'Can you pass me ___ salt, please?',
        options: ['a', 'an', 'the', 'no article'],
        correctAnswer: 'the',
      },
      {
        question: 'She is ___ honest person.',
        options: ['a', 'an', 'the', 'no article'],
        correctAnswer: 'an',
      },
    ],
  },
  {
    id: 'prepositions-of-time',
    title: 'Prepositions of Time',
    description: 'Learn when to use "in", "on", and "at" for time.',
    imageUrl: '3',
    content: `
<p>Prepositions of time like <strong>in</strong>, <strong>on</strong>, and <strong>at</strong> help us talk about when something happens.</p>
<h3>At</h3>
<p>Use <strong>at</strong> for precise times.</p>
<ul>
  <li><strong>at</strong> 3 o'clock</li>
  <li><strong>at</strong> 10:30 AM</li>
  <li><strong>at</strong> noon</li>
  <li><strong>at</strong> dinnertime</li>
  <li><strong>at</strong> bedtime</li>
  <li><strong>at</strong> sunrise</li>
  <li><strong>at</strong> the moment</li>
</ul>
<h3>On</h3>
<p>Use <strong>on</strong> for days and dates.</p>
<ul>
  <li><strong>on</strong> Sunday</li>
  <li><strong>on</strong> Tuesdays</li>
  <li><strong>on</strong> 6 March</li>
  <li><strong>on</strong> 25 Dec. 2010</li>
  <li><strong>on</strong> Christmas Day</li>
  <li><strong>on</strong> my birthday</li>
  <li><strong>on</strong> New Year's Eve</li>
</ul>
<h3>In</h3>
<p>Use <strong>in</strong> for months, years, centuries and long periods.</p>
<ul>
  <li><strong>in</strong> May</li>
  <li><strong>in</strong> summer</li>
  <li><strong>in</strong> the summer</li>
  <li><strong>in</strong> 1990</li>
  <li><strong>in</strong> the 1990s</li>
  <li><strong>in</strong> the next century</li>
  <li><strong>in</strong> the Ice Age</li>
  <li><strong>in</strong> the past/future</li>
</ul>
    `,
    quiz: [
      {
        question: 'My birthday is ___ October.',
        options: ['in', 'on', 'at'],
        correctAnswer: 'in',
      },
      {
        question: 'The meeting is ___ Friday.',
        options: ['in', 'on', 'at'],
        correctAnswer: 'on',
      },
      {
        question: 'I will see you ___ 10 AM.',
        options: ['in', 'on', 'at'],
        correctAnswer: 'at',
      },
    ],
  },
  {
    id: 'prepositions-of-place',
    title: 'Prepositions of Place',
    description: 'Learn "in", "on", and "at" for locations.',
    imageUrl: '9',
    content: `
<h3>Prepositions of Place</h3>
<p>"In", "on", and "at" are also used for locations.</p>
<p><b>In:</b> Used for enclosed spaces or larger areas.</p>
<ul>
  <li>in a box</li>
  <li>in a room</li>
  <li>in a country (e.g., in France)</li>
  <li>in a city (e.g., in London)</li>
</ul>
<p><b>On:</b> Used for surfaces.</p>
<ul>
  <li>on the table</li>
  <li>on the wall</li>
  <li>on the floor</li>
  <li>on a page</li>
</ul>
<p><b>At:</b> Used for specific points or locations.</p>
<ul>
  <li>at the bus stop</li>
  <li>at the door</li>
  <li>at the top of the page</li>
  <li>at the end of the street</li>
</ul>
    `,
    quiz: [
      {
        question: 'The book is ___ the table.',
        options: ['in', 'on', 'at'],
        correctAnswer: 'on',
      },
      {
        question: 'I live ___ Paris.',
        options: ['in', 'on', 'at'],
        correctAnswer: 'in',
      },
       {
        question: 'Wait for me ___ the bus stop.',
        options: ['in', 'on', 'at'],
        correctAnswer: 'at',
      },
    ],
  },
  {
    id: 'conditionals',
    title: 'Conditionals (If Clauses)',
    description: 'Understand and use conditional sentences.',
    imageUrl: '4',
    content: `
<p>Conditional sentences are used to express that the action in the main clause (without if) can only take place if a certain condition (in the clause with if) is fulfilled. There are four main types of conditionals.</p>
<h3>The Zero Conditional</h3>
<p>Used for general truths and scientific facts.</p>
<ul>
  <li><strong>Structure:</strong> If + Present Simple, ... Present Simple</li>
  <li><em>Example:</em> If you <strong>heat</strong> water, it <strong>boils</strong>.</li>
</ul>
<h3>The First Conditional</h3>
<p>Used for a possible situation in the future.</p>
<ul>
  <li><strong>Structure:</strong> If + Present Simple, ... will + Base Verb</li>
  <li><em>Example:</em> If it <strong>rains</strong> tomorrow, we <strong>will stay</strong> home.</li>
</ul>
<h3>The Second Conditional</h3>
<p>Used for hypothetical or unlikely situations in the present or future.</p>
<ul>
  <li><strong>Structure:</strong> If + Past Simple, ... would + Base Verb</li>
  <li><em>Example:</em> If I <strong>had</strong> a million dollars, I <strong>would travel</strong> the world.</li>
</ul>
<h3>The Third Conditional</h3>
<p>Used for a hypothetical situation in the past that did not happen.</p>
<ul>
  <li><strong>Structure:</strong> If + Past Perfect, ... would have + Past Participle</li>
  <li><em>Example:</em> If I <strong>had studied</strong> harder, I <strong>would have passed</strong> the exam.</li>
</ul>
`,
    quiz: [
      {
        question: 'If you heat ice, it ___',
        options: ['melts', 'melted', 'will melt', 'would melt'],
        correctAnswer: 'melts',
      },
      {
        question: 'If I ___ you, I would apologize.',
        options: ['am', 'was', 'were', 'be'],
        correctAnswer: 'were',
      },
      {
        question: 'She would have come if she ___ invited.',
        options: ['was', 'had been', 'has been', 'would be'],
        correctAnswer: 'had been',
      },
    ],
  },
  {
    id: 'modal-verbs',
    title: 'Modal Verbs',
    description: 'Learn to use can, could, must, should, etc.',
    imageUrl: '10',
    content: `
<h3>Modal Verbs</h3>
<p>Modal verbs are auxiliary verbs that express necessity, possibility, permission, or ability.</p>
<ul>
  <li><b>Can:</b> Ability / Permission (informal) - <i>I <b>can</b> swim. <b>Can</b> I go?</i></li>
  <li><b>Could:</b> Past ability / Polite request - <i>I <b>could</b> run fast. <b>Could</b> you help me?</i></li>
  <li><b>Must:</b> Obligation / Certainty - <i>You <b>must</b> stop. He <b>must</b> be tired.</i></li>
  <li><b>Should:</b> Advice / Recommendation - <i>You <b>should</b> see a doctor.</i></li>
  <li><b>May:</b> Permission (formal) / Possibility - <i><b>May</b> I enter? It <b>may</b> rain.</i></li>
  <li><b>Might:</b> Possibility (less certain than may) - <i>He <b>might</b> come later.</i></li>
</ul>
    `,
    quiz: [
      {
        question: 'You ___ finish your homework before you go out.',
        options: ['can', 'must', 'might'],
        correctAnswer: 'must',
      },
      {
        question: '___ I borrow your pen, please?',
        options: ['Must', 'Could', 'Should'],
        correctAnswer: 'Could',
      },
    ],
  },
];

export const vocabularyData: VocabularyItem[] = [
  {
    word: 'Ubiquitous',
    definition: 'Present, appearing, or found everywhere.',
    definitionFR: 'Présent, apparaissant ou trouvé partout.',
    example: 'Mobile phones are ubiquitous these days.',
  },
  {
    word: 'Ephemeral',
    definition: 'Lasting for a very short time.',
    definitionFR: 'Ne durant que très peu de temps.',
    example: 'Fashion is ephemeral, but style is eternal.',
  },
  {
    word: 'Mellifluous',
    definition: '(of a voice or words) Sweet or musical; pleasant to hear.',
    definitionFR: "(d'une voix ou de mots) Doux ou musical ; agréable à entendre.",
    example: 'She had a mellifluous voice that soothed everyone.',
  },
  {
    word: 'Pulchritudinous',
    definition: 'Having great physical beauty.',
    definitionFR: 'Ayant une grande beauté physique.',
    example: 'The model was praised for her pulchritudinous features.',
  },
  {
    word: 'Serendipity',
    definition: 'The occurrence and development of events by chance in a happy or beneficial way.',
    definitionFR: "La survenue et le développement d'événements par hasard d'une manière heureuse ou bénéfique.",
    example: 'Discovering the old bookshop was a moment of pure serendipity.',
  },
  {
    word: 'Abate',
    definition: 'To become less intense or widespread.',
    definitionFR: 'Devenir moins intense ou répandu.',
    example: 'The storm suddenly abated.',
  },
  {
    word: 'Benevolent',
    definition: 'Well meaning and kindly.',
    definitionFR: 'Bienveillant et gentil.',
    example: 'A benevolent smile.',
  },
  {
    word: 'Candid',
    definition: 'Truthful and straightforward; frank.',
    definitionFR: 'Véridique et direct ; franc.',
    example: 'His candid reply impressed the interviewer.',
  },
  {
    word: 'Diligent',
    definition: 'Having or showing care and conscientiousness in one\'s work or duties.',
    definitionFR: 'Avoir ou montrer du soin et de la conscience dans son travail ou ses devoirs.',
    example: 'She is a very diligent student.',
  },
  {
    word: 'Eloquent',
    definition: 'Fluent or persuasive in speaking or writing.',
    definitionFR: 'Fluide ou persuasif en parlant ou en écrivant.',
    example: 'An eloquent speech.',
  },
  {
    word: 'Fastidious',
    definition: 'Very attentive to and concerned about accuracy and detail.',
    definitionFR: 'Très attentif et soucieux de la précision et des détails.',
    example: 'He is fastidious about his appearance.',
  },
  {
    word: 'Gregarious',
    definition: 'Fond of company; sociable.',
    definitionFR: 'Aimant la compagnie ; sociable.',
    example: 'He was a popular and gregarious man.',
  },
  {
    word: 'Hapless',
    definition: 'Unfortunate.',
    definitionFR: 'Malheureux.',
    example: 'The hapless tourists were caught in the storm.',
  },
  {
    word: 'Iconoclast',
    definition: 'A person who attacks cherished beliefs or institutions.',
    definitionFR: 'Une personne qui attaque les croyances ou les institutions chéries.',
    example: 'He was an iconoclast who questioned everything.',
  },
  {
    word: 'Juxtaposition',
    definition: 'The fact of two things being seen or placed close together with contrasting effect.',
    definitionFR: 'Le fait de voir ou de placer deux choses proches l\'une de l\'autre avec un effet de contraste.',
    example: 'The juxtaposition of old and new architecture is stunning.',
  },
  {
    word: 'Kinetic',
    definition: 'Relating to or resulting from motion.',
    definitionFR: 'Relatif au mouvement ou en résultant.',
    example: 'Kinetic energy is the energy of motion.',
  },
  {
    word: 'Languid',
    definition: 'Slow and relaxed.',
    definitionFR: 'Lent et détendu.',
    example: 'A languid wave of the hand.',
  },
  {
    word: 'Meticulous',
    definition: 'Showing great attention to detail; very careful and precise.',
    definitionFR: 'Montrant une grande attention aux détails ; très prudent et précis.',
    example: 'He is meticulous in his work.',
  },
  {
    word: 'Nefarious',
    definition: 'Wicked or criminal.',
    definitionFR: 'Méchant ou criminel.',
    example: 'The nefarious activities of the organized crime syndicate.',
  },
  {
    word: 'Obfuscate',
    definition: 'To make obscure, unclear, or unintelligible.',
    definitionFR: 'Rendre obscur, peu clair ou inintelligible.',
    example: 'The politician tried to obfuscate the issue.',
  },
  {
    word: 'Parsimonious',
    definition: 'Unwilling to spend money or use resources; stingy or frugal.',
    definitionFR: 'Peu disposé à dépenser de l\'argent ou à utiliser des ressources ; avare ou frugal.',
    example: 'The parsimonious man refused to buy a new car.',
  },
  {
    word: 'Querulous',
    definition: 'Complaining in a petulant or whining manner.',
    definitionFR: 'Se plaignant d\'une manière acariâtre ou geignarde.',
    example: 'She became querulous and demanding.',
  },
  {
    word: 'Reticent',
    definition: 'Not revealing one\'s thoughts or feelings readily.',
    definitionFR: 'Ne révélant pas facilement ses pensées ou ses sentiments.',
    example: 'He is very reticent about his personal life.',
  },
  {
    word: 'Salient',
    definition: 'Most noticeable or important.',
    definitionFR: 'Le plus remarquable ou important.',
    example: 'The salient points of his argument.',
  },
  {
    word: 'Taciturn',
    definition: 'Reserved or uncommunicative in speech; saying little.',
    definitionFR: 'Réservé ou peu communicatif en paroles ; disant peu de choses.',
    example: 'A taciturn man, he almost never initiates a conversation.',
  },
  {
    word: 'Unctuous',
    definition: 'Excessively flattering or ingratiating.',
    definitionFR: 'Excessivement flatteur ou insinuant.',
    example: 'He had an unctuous, oily manner.',
  },
  {
    word: 'Verbose',
    definition: 'Using or expressed in more words than are needed.',
    definitionFR: 'Utilisant ou exprimé en plus de mots que nécessaire.',
    example: 'His verbose explanation was difficult to follow.',
  },
  {
    word: 'Wistful',
    definition: 'Having or showing a feeling of vague or regretful longing.',
    definitionFR: 'Avoir ou montrer un sentiment de désir vague ou regrettable.',
    example: 'A wistful smile.',
  },
  {
    word: 'Zealot',
    definition: 'A person who is fanatical and uncompromising in pursuit of their religious, political, or other ideals.',
    definitionFR: 'Une personne qui est fanatique et intransigeante dans la poursuite de ses idéaux religieux, politiques ou autres.',
    example: 'A religious zealot.',
  },
  {
    word: 'Adept',
    definition: 'Very skilled or proficient at something.',
    definitionFR: 'Très compétent ou doué pour quelque chose.',
    example: 'She is adept at playing the piano.',
  },
  {
    word: 'Brevity',
    definition: 'Concise and exact use of words in writing or speech.',
    definitionFR: 'Utilisation concise et exacte des mots à l\'écrit ou à l\'oral.',
    example: 'The book is known for its brevity.',
  },
  {
    word: 'Coalesce',
    definition: 'Come together to form one mass or whole.',
    definitionFR: 'Se réunir pour former une seule masse ou un tout.',
    example: 'The small groups coalesced into a larger movement.',
  },
  {
    word: 'Debacle',
    definition: 'A sudden and ignominious failure; a fiasco.',
    definitionFR: 'Un échec soudain et ignominieux ; un fiasco.',
    example: 'The economic debacle of 2008.',
  },
  {
    word: 'Enigma',
    definition: 'A person or thing that is mysterious, puzzling, or difficult to understand.',
    definitionFR: 'Une personne ou une chose mystérieuse, déroutante ou difficile à comprendre.',
    example: 'The disappearance of the artist remains an enigma.',
  },
  {
    word: 'Furtive',
    definition: 'Attempting to avoid notice or attention, typically because of guilt or a belief that discovery would lead to trouble; secretive.',
    definitionFR: 'Tentant d\'éviter d\'être remarqué ou d\'attirer l\'attention, généralement par culpabilité ou par crainte que la découverte n\'entraîne des ennuis ; secret.',
    example: 'They exchanged furtive glances.',
  },
  {
    word: 'Garish',
    definition: 'Obtrusively bright and showy; lurid.',
    definitionFR: 'Visiblement brillant et voyant ; criard.',
    example: 'The garish colors of the decorations were overwhelming.',
  },
  {
    word: 'Hiatus',
    definition: 'A pause or gap in a sequence, series, or process.',
    definitionFR: 'Une pause ou une interruption dans une séquence, une série ou un processus.',
    example: 'The band is on a hiatus.',
  },
  {
    word: 'Immutable',
    definition: 'Unchanging over time or unable to be changed.',
    definitionFR: 'Inchangeable au fil du temps ou incapable d\'être changé.',
    example: 'The laws of physics are immutable.',
  },
  {
    word: 'Jovial',
    definition: 'Cheerful and friendly.',
    definitionFR: 'Joyeux et amical.',
    example: 'He was in a jovial mood.',
  },
  {
    word: 'Kudos',
    definition: 'Praise and honor received for an achievement.',
    definitionFR: 'Louanges et honneurs reçus pour une réalisation.',
    example: 'Kudos to the team for their hard work.',
  },
  {
    word: 'Loquacious',
    definition: 'Tending to talk a great deal; talkative.',
    definitionFR: 'Tendant à beaucoup parler ; bavard.',
    example: 'The loquacious host kept the party entertained.',
  },
  {
    word: 'Myriad',
    definition: 'A countless or extremely great number.',
    definitionFR: 'Un nombre incalculable ou extrêmement grand.',
    example: 'A myriad of stars.',
  },
  {
    word: 'Novice',
    definition: 'A person new to or inexperienced in a field or situation.',
    definitionFR: 'Une personne nouvelle ou inexpérimentée dans un domaine ou une situation.',
    example: 'He is a novice at programming.',
  },
  {
    word: 'Ostracize',
    definition: 'Exclude from a society or group.',
    definitionFR: 'Exclure d\'une société ou d\'un groupe.',
    example: 'She was ostracized by her colleagues.',
  },
  {
    word: 'Plethora',
    definition: 'A large or excessive amount of something.',
    definitionFR: 'Une grande ou excessive quantité de quelque chose.',
    example: 'A plethora of books.',
  },
  {
    word: 'Quintessential',
    definition: 'Representing the most perfect or typical example of a quality or class.',
    definitionFR: 'Représentant l\'exemple le plus parfait ou typique d\'une qualité ou d\'une classe.',
    example: 'The quintessential English gentleman.',
  },
  {
    word: 'Rambunctious',
    definition: 'Uncontrollably exuberant; boisterous.',
    definitionFR: 'Incontrôlablement exubérant ; bruyant.',
    example: 'A group of rambunctious children.',
  },
  {
    word: 'Sycophant',
    definition: 'A person who acts obsequiously toward someone important in order to gain advantage.',
    definitionFR: 'Une personne qui agit servilement envers quelqu\'un d\'important afin d\'en tirer un avantage.',
    example: 'The king was surrounded by sycophants.',
  },
  {
    word: 'Tenuous',
    definition: 'Very weak or slight.',
    definitionFR: 'Très faible ou léger.',
    example: 'A tenuous connection.',
  },
  {
    word: 'Usurp',
    definition: 'Take (a position of power or importance) illegally or by force.',
    definitionFR: 'Prendre (une position de pouvoir ou d\'importance) illégalement ou par la force.',
    example: 'He usurped the throne.',
  },
  {
    word: 'Voracious',
    definition: 'Wanting or devouring great quantities of food.',
    definitionFR: 'Voulant ou dévorant de grandes quantités de nourriture.',
    example: 'A voracious appetite.',
  },
  {
    word: 'Wane',
    definition: 'To decrease in vigor, power, or extent; become weaker.',
    definitionFR: 'Diminuer en vigueur, en puissance ou en étendue ; devenir plus faible.',
    example: 'His influence began to wane.',
  },
  {
    word: 'Xenophobia',
    definition: 'Dislike of or prejudice against people from other countries.',
    definitionFR: 'Aversion ou préjugé contre les personnes d\'autres pays.',
    example: 'Xenophobia is a major social issue.',
  },
  {
    word: 'Yearn',
    definition: 'Have an intense feeling of longing for something, typically something that one has lost or been separated from.',
    definitionFR: 'Avoir un sentiment intense de désir pour quelque chose, généralement quelque chose que l\'on a perdu ou dont on a été séparé.',
    example: 'She yearned for a relaxing vacation.',
  },
  {
    word: 'Zany',
    definition: 'Amusingly unconventional and idiosyncratic.',
    definitionFR: 'Amusant, non conventionnel et idiosyncratique.',
    example: 'His zany sense of humor.',
  },
  {
    word: 'Ambiguous',
    definition: 'Open to more than one interpretation; not having one obvious meaning.',
    definitionFR: 'Ouvert à plus d\'une interprétation ; n\'ayant pas un sens évident.',
    example: 'The ending of the film was ambiguous.',
  },
  {
    word: 'Belligerent',
    definition: 'Hostile and aggressive.',
    definitionFR: 'Hostile et agressif.',
    example: 'He was drunk and belligerent.',
  },
  {
    word: 'Conundrum',
    definition: 'A confusing and difficult problem or question.',
    definitionFR: 'Un problème ou une question déroutant et difficile.',
    example: 'The team faced a difficult conundrum.',
  },
  {
    word: 'Disparate',
    definition: 'Essentially different in kind; not allowing comparison.',
    definitionFR: 'Essentiellement différent par nature ; ne permettant pas la comparaison.',
    example: 'A group of disparate individuals.',
  },
  {
    word: 'Ebullient',
    definition: 'Cheerful and full of energy.',
    definitionFR: 'Joyeux et plein d\'énergie.',
    example: 'She was in an ebullient mood.',
  },
  {
    word: 'Facetious',
    definition: 'Treating serious issues with deliberately inappropriate humor; flippant.',
    definitionFR: 'Traiter des questions sérieuses avec un humour délibérément inapproprié ; désinvolte.',
    example: 'Stop being so facetious.',
  },
  {
    word: 'Garrulous',
    definition: 'Excessively talkative, especially on trivial matters.',
    definitionFR: 'Excessivement bavard, surtout sur des sujets futiles.',
    example: 'A garrulous old man.',
  },
  {
    word: 'Harangue',
    definition: 'A lengthy and aggressive speech.',
    definitionFR: 'Un discours long et agressif.',
    example: 'He delivered a long harangue about the evils of the system.',
  },
  {
    word: 'Idiosyncrasy',
    definition: 'A mode of behavior or way of thought peculiar to an individual.',
    definitionFR: 'Un mode de comportement ou une façon de penser propre à un individu.',
    example: 'One of his little idiosyncrasies was always wearing a red tie.',
  },
  {
    word: 'Juxtapose',
    definition: 'Place or deal with close together for contrasting effect.',
    definitionFR: 'Placer ou traiter de près pour un effet de contraste.',
    example: 'The artist juxtaposes light and shadow.',
  },
  {
    word: 'Lackadaisical',
    definition: 'Lacking enthusiasm and determination; carelessly lazy.',
    definitionFR: 'Manquant d\'enthousiasme et de détermination ; négligemment paresseux.',
    example: 'A lackadaisical attitude to work.',
  },
  {
    word: 'Magnanimous',
    definition: 'Generous or forgiving, especially toward a rival or less powerful person.',
    definitionFR: 'Généreux ou indulgent, surtout envers un rival ou une personne moins puissante.',
    example: 'He was magnanimous in victory.',
  },
  {
    word: 'Nadir',
    definition: 'The lowest point in the fortunes of a person or organization.',
    definitionFR: 'Le point le plus bas dans la fortune d\'une personne ou d\'une organisation.',
    example: 'The company reached its nadir in 2020.',
  },
  {
    word: 'Oblivious',
    definition: 'Not aware of or not concerned about what is happening around one.',
    definitionFR: 'Ne pas être conscient ou ne pas se soucier de ce qui se passe autour de soi.',
    example: 'She was oblivious to the danger.',
  },
  {
    word: 'Panacea',
    definition: 'A solution or remedy for all difficulties or diseases.',
    definitionFR: 'Une solution ou un remède à toutes les difficultés ou maladies.',
    example: 'There is no panacea for all our problems.',
  },
  {
    word: 'Quixotic',
    definition: 'Exceedingly idealistic; unrealistic and impractical.',
    definitionFR: 'Extrêmement idéaliste ; irréaliste et peu pratique.',
    example: 'A quixotic quest to save the world.',
  },
  {
    word: 'Recalcitrant',
    definition: 'Having an obstinately uncooperative attitude toward authority or discipline.',
    definitionFR: 'Avoir une attitude obstinément peu coopérative envers l\'autorité ou la discipline.',
    example: 'A class of recalcitrant teenagers.',
  },
  {
    word: 'Scrupulous',
    definition: 'Diligent, thorough, and extremely attentive to details.',
    definitionFR: 'Diligent, approfondi et extrêmement attentif aux détails.',
    example: 'The research was carried out with scrupulous attention to detail.',
  },
  {
    word: 'Truncate',
    definition: 'Shorten (something) by cutting off the top or the end.',
    definitionFR: 'Raccourcir (quelque chose) en coupant le haut ou la fin.',
    example: 'Please truncate the text to fit in the box.',
  },
  {
    word: 'Ubiquity',
    definition: 'The state of being everywhere at once (or seeming to be).',
    definitionFR: 'L\'état d\'être partout à la fois (ou de sembler l\'être).',
    example: 'The ubiquity of smartphones is a recent phenomenon.',
  },
  {
    word: 'Vacillate',
    definition: 'Alternate or waver between different opinions or actions; be indecisive.',
    definitionFR: 'Alterner ou hésiter entre différentes opinions ou actions ; être indécis.',
    example: 'He vacillated between accepting the job and staying in his current one.',
  },
  {
    word: 'Whimsical',
    definition: 'Playfully quaint or fanciful, especially in an appealing and amusing way.',
    definitionFR: 'Ludiquement pittoresque ou fantaisiste, surtout d\'une manière attrayante et amusante.',
    example: 'A whimsical story about a talking cat.',
  },
  {
    word: 'Zenith',
    definition: 'The time at which something is most powerful or successful.',
    definitionFR: 'Le moment où quelque chose est le plus puissant ou le plus réussi.',
    example: 'The Roman Empire reached its zenith around 117 AD.',
  },
  {
    word: 'Acumen',
    definition: 'The ability to make good judgments and quick decisions, typically in a particular domain.',
    definitionFR: 'La capacité à porter de bons jugements et à prendre des décisions rapides, généralement dans un domaine particulier.',
    example: 'She has a remarkable business acumen.',
  },
  {
    word: 'Boisterous',
    definition: 'Noisy, energetic, and cheerful; rowdy.',
    definitionFR: 'Bruyant, énergique et joyeux ; chahuteur.',
    example: 'A boisterous crowd of fans.',
  },
  {
    word: 'Capricious',
    definition: 'Given to sudden and unaccountable changes of mood or behavior.',
    definitionFR: 'Sujet à des changements d\'humeur ou de comportement soudains et inexplicables.',
    example: 'The capricious weather made it difficult to plan the picnic.',
  },
  {
    word: 'Deleterious',
    definition: 'Causing harm or damage.',
    definitionFR: 'Causant un préjudice ou un dommage.',
    example: 'The deleterious effects of smoking.',
  },
  {
    word: 'Euphemism',
    definition: 'A mild or indirect word or expression substituted for one considered to be too harsh or blunt when referring to something unpleasant or embarrassing.',
    definitionFR: 'Un mot ou une expression doux ou indirect substitué à un mot considéré comme trop dur ou trop direct pour désigner quelque chose de désagréable ou d\'embarrassant.',
    example: '‘Passed away’ is a euphemism for ‘died’.',
  },
  {
    word: 'Flummox',
    definition: 'Perplex (someone) greatly; bewilder.',
    definitionFR: 'Rendre (quelqu\'un) très perplexe ; déconcerter.',
    example: 'He was completely flummoxed by the question.',
  },
  {
    word: 'Gauche',
    definition: 'Lacking ease or grace; unsophisticated and socially awkward.',
    definitionFR: 'Manquant d\'aisance ou de grâce ; peu sophistiqué et socialement maladroit.',
    example: 'His gauche behavior at the party was embarrassing.',
  },
  {
    word: 'Histrionic',
    definition: 'Overly theatrical or melodramatic in character or style.',
    definitionFR: 'Excessivement théâtral ou mélodramatique dans son caractère ou son style.',
    example: 'A histrionic outburst.',
  },
  {
    word: 'Ineffable',
    definition: 'Too great or extreme to be expressed or described in words.',
    definitionFR: 'Trop grand ou extrême pour être exprimé ou décrit avec des mots.',
    example: 'The ineffable beauty of the sunset.',
  },
  {
    word: 'Laconic',
    definition: '(of a person, speech, or style of writing) using very few words.',
    definitionFR: '(d\'une personne, d\'un discours ou d\'un style d\'écriture) utilisant très peu de mots.',
    example: 'His laconic reply suggested a lack of interest in the topic.',
  },
  {
    word: 'Maudlin',
    definition: 'Self-pityingly or tearfully sentimental, often through drunkenness.',
    definitionFR: 'Apitoiement sur soi-même ou sentimentalement larmoyant, souvent à cause de l\'ivresse.',
    example: 'A maudlin ballad.',
  },
  {
    word: 'Nonplussed',
    definition: '(of a person) surprised and confused so much that they are unsure how to react.',
    definitionFR: '(d\'une personne) surprise et confuse au point de ne pas savoir comment réagir.',
    example: 'He was nonplussed by the unexpected question.',
  },
  {
    word: 'Perfunctory',
    definition: '(of an action or gesture) carried out with a minimum of effort or reflection.',
    definitionFR: '(d\'une action ou d\'un geste) effectué avec un minimum d\'effort ou de réflexion.',
    example: 'He gave a perfunctory nod.',
  },
  {
    word: 'Quagmire',
    definition: 'A soft boggy area of land that gives way underfoot.',
    definitionFR: 'Une zone de terre molle et marécageuse qui cède sous les pieds.',
    example: 'The car got stuck in a quagmire.',
  },
  {
    word: 'Resplendent',
    definition: 'Attractive and impressive through being richly colorful or sumptuous.',
    definitionFR: 'Attrayant et impressionnant par sa richesse de couleurs ou sa somptuosité.',
    example: 'She was resplendent in a red dress.',
  },
  {
    word: 'Stolid',
    definition: '(of a person) calm, dependable, and showing little emotion or animation.',
    definitionFR: '(d\'une personne) calme, fiable et montrant peu d\'émotion ou d\'animation.',
    example: 'A stolid and unemotional person.',
  },
  {
    word: 'Travesty',
    definition: 'A false, absurd, or distorted representation of something.',
    definitionFR: 'Une représentation fausse, absurde ou déformée de quelque chose.',
    example: 'The trial was a travesty of justice.',
  },
  {
    word: 'Vicarious',
    definition: 'Experienced in the imagination through the feelings or actions of another person.',
    definitionFR: 'Vécue dans l\'imagination à travers les sentiments ou les actions d\'une autre personne.',
    example: 'She took a vicarious pleasure in her friend\'s success.',
  },
  {
    word: 'Abject',
    definition: 'Experienced or present to the maximum degree.',
    definitionFR: 'Expérimenté ou présent au plus haut degré.',
    example: 'The project ended in abject failure.',
  },
];

export const progressChartData: ProgressChartData[] = [
  { name: 'Mon', 'Time Spent (min)': 30, 'Quizzes Taken': 2 },
  { name: 'Tue', 'Time Spent (min)': 45, 'Quizzes Taken': 3 },
  { name: 'Wed', 'Time Spent (min)': 20, 'Quizzes Taken': 1 },
  { name: 'Thu', 'Time Spent (min)': 60, 'Quizzes Taken': 4 },
  { name: 'Fri', 'Time Spent (min)': 35, 'Quizzes Taken': 2 },
  { name: 'Sat', 'Time Spent (min)': 75, 'Quizzes Taken': 5 },
  { name: 'Sun', 'Time Spent (min)': 15, 'Quizzes Taken': 1 },
];
