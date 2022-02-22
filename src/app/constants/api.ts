import { IQueryParams } from '../types';

export const baseUrl = 'https://rslang-2021q3.herokuapp.com';

export const generateWordsApiUrl = (unit: number, page: number) =>
  `${baseUrl}/words?page=${page - 1}&group=${unit - 1}`;

export const generateWordImageUrl = (imageName: string) =>
  `${baseUrl}/${imageName}`;

export const generateQueryString = (queryParams: IQueryParams[] = []) => {
  const querry = queryParams.length
    ? `?${queryParams.map((item) => `${item.key}=${item.value}`).join('&')}`
    : '';

  return querry;
};

export const generateWordAudioUrl = (audioName: string) =>
  `${baseUrl}/${audioName}`;
