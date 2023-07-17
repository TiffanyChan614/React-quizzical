/* eslint-disable react-refresh/only-export-components */
export const START_PAGE = 0,
  QUIZ_PAGE = 1,
  ANS_PAGE = 2,
  SCOREBOARD_PAGE = 3

export const INITIAL_FORM_DATA = {
  'num-questions': 0,
  category: '',
  difficulty: '',
  type: '',
}

export const INITIAL_SCORE = {
  'num-questions': 0,
  category: '',
  difficulty: '',
  type: '',
  score: 0,
  weightedScore: 0,
}

export const CATEGORIES = [
  {
    value: '',
    name: 'Any Category',
  },
  {
    value: '9',
    name: 'General Knowledge',
  },
  {
    value: '10',
    name: 'Entertainment: Books',
  },
  {
    value: '11',
    name: 'Entertainment: Film',
  },
  {
    value: '12',
    name: 'Entertainment: Music',
  },
  {
    value: '13',
    name: 'Entertainment: Musicals &amp; Theatres',
  },
  {
    value: '14',
    name: 'Entertainment: Television',
  },
  {
    value: '15',
    name: 'Entertainment: Video Games',
  },
  {
    value: '16',
    name: 'Entertainment: Board Games',
  },
  {
    value: '17',
    name: 'Science &amp; Nature',
  },
  {
    value: '18',
    name: 'Science: Computers',
  },
  {
    value: '19',
    name: 'Science: Mathematics',
  },
  {
    value: '20',
    name: 'Mythology',
  },
  {
    value: '21',
    name: 'Sports',
  },
  {
    value: '22',
    name: 'Geography',
  },
  {
    value: '23',
    name: 'History',
  },
  {
    value: '24',
    name: 'Politics',
  },
  {
    value: '25',
    name: 'Art',
  },
  {
    value: '26',
    name: 'Celebrities',
  },
  {
    value: '27',
    name: 'Animals',
  },
  {
    value: '28',
    name: 'Vehicles',
  },
  {
    value: '29',
    name: 'Entertainment: Comics',
  },
  {
    value: '30',
    name: 'Science: Gadgets',
  },
  {
    value: '31',
    name: 'Entertainment: Japanese Anime &amp; Manga',
  },
  {
    value: '32',
    name: 'Entertainment: Cartoon &amp; Animations',
  },
]

export const DIFFICULTIES = [
  {
    value: '',
    name: 'Any difficulty',
  },
  {
    value: 'easy',
    name: 'Easy',
  },
  {
    value: 'medium',
    name: 'Medium',
  },
  {
    value: 'hard',
    name: 'Hard',
  },
]

export const TYPES = [
  {
    value: '',
    name: 'Any type',
  },
  {
    value: 'multiple',
    name: 'Multiple choice',
  },
  {
    value: 'boolean',
    name: 'True / False',
  },
]
