export interface Idvantages {
  title: string;
  data: Array<IAdvantagesItem>;
}

export interface IAdvantagesItem {
  name: string;
  desc: string;
}

const Idvantages: Idvantages = {
  title: 'Why RSLang will be very useful and interesting for you?',
  data: [
    {
      name: 'Always at hand',
      desc: 'Convenient online learning at any time convenient for you and anywhere in the world',
    },
    {
      name: '4000 words to learn',
      desc: 'The application contains a large number of frequently occurring words, which are divided into groups according to complexity for ease of use',
    },
    {
      name: 'Clear and visual explanation',
      desc: 'Detailed description and explanation of the meaning of the word with an example of use and visual illustration',
    },
    {
      name: 'Transcription and audio recording of the word',
      desc: 'Each word contains a transcription and pronunciation example that you can listen to repeatedly for better memorization',
    },
    {
      name: 'Play and learn at the same time',
      desc: 'The application has two exciting games that will help you learn new words with interest and outside the box',
    },
    {
      name: 'Analyze your result',
      desc: 'Daily statistics of your learning progress: the number of new words learned per day, percentage of correct answers, longest series of correct answers',
    },
  ],
};

export default Idvantages;
