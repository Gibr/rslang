export interface Ibanner {
  title: string;
  desc: Array<string>;
}

const banner: Ibanner = {
  title:
    'We are glad to present you our application for learning foreign languages - RSLang',
  desc: [
    'With this app you can learn a lot of new words and also repeat the words you already know.',
    'To ensure that the process of learning a foreign language is not boring, RSLang can be used both in dictionary mode and in game mode.',
  ],
};

export default banner;
