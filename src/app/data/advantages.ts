export interface IEdvantages {
  title: string;
  data: Array<IAEdvantagesItem>;
}

export interface IAEdvantagesItem {
  id: string;
  name: string;
  desc: string;
}

const edvantages: IEdvantages = {
  title: 'Why RSLang will be very useful and interesting for you?',
  data: [
    {
      id: 'a1645207387632',
      name: 'Always at hand',
      desc: 'Convenient online learning at any time convenient for you and anywhere in the world',
    },
    {
      id: 'b1645207418991',
      name: '4000 words to learn',
      desc: 'The application contains a large number of frequently occurring words, which are divided into groups according to complexity for ease of use',
    },
    {
      id: 'c1645207448002',
      name: 'Clear and visual explanation',
      desc: 'Detailed description and explanation of the meaning of the word with an example of use and visual illustration',
    },
    {
      id: 'd1645207474704',
      name: 'Transcription and audio recording of the word',
      desc: 'Each word contains a transcription and pronunciation example that you can listen to repeatedly for better memorization',
    },
    {
      id: 'e1645207487167',
      name: 'Play and learn at the same time',
      desc: 'The application has two exciting games that will help you learn new words with interest and outside the box',
    },
    {
      id: 'f1645207500445',
      name: 'Analyze your result',
      desc: 'Daily statistics of your learning progress: the number of new words learned per day, percentage of correct answers, longest series of correct answers',
    },
  ],
};

export default edvantages;
