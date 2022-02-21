export const baseUrl = 'https://rslang-2021q3.herokuapp.com';

export const generateWordsApiUrl = (unit: number, page: number) =>
  `${baseUrl}/words?page=${page - 1}&group=${unit - 1}`;

export const generateWordImageUrl = (imageName: string) =>
  `${baseUrl}/${imageName}`;

export const generateWordAudioUrl = (audioName: string) =>
  `${baseUrl}/${audioName}`;

export enum locStorageKeys {
  USER_DATA = 'rsLang-user-data',
}
