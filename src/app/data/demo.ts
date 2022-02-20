export interface IDemo {
  title: string;
  youtube: Iyoutube;
}

export interface Iyoutube {
  id: string;
  width: number;
  height: number;
  title: string;
  allow: Array<string>;
}

const banner: IDemo = {
  title:
    'You can get acquainted with the functionality of our application on this video',
  youtube: {
    id: 'zp1BXPX8jcU',
    width: 560,
    height: 315,
    title: 'YouTube video player',
    allow: [
      'accelerometer',
      'autoplay',
      'clipboard-write',
      'encrypted-media',
      'gyroscope',
      'picture-in-picture',
    ],
  },
};

export default banner;
