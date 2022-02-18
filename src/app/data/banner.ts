export interface IBanner {
  title: string;
  desc: Array<IBannerDescItem>;
}

export interface IBannerDescItem {
  id: string;
  paragraph: string;
}

const banner: IBanner = {
  title:
    'We are glad to present you our application for learning foreign languages - RSLang',
  desc: [
    {
      id: 'z1645207877878',
      paragraph:
        'With this app you can learn a lot of new words and also repeat the words you already know.',
    },
    {
      id: 'y1645207877878',
      paragraph:
        'To ensure that the process of learning a foreign language is not boring, RSLang can be used both in dictionary mode and in game mode.',
    },
  ],
};

export default banner;
