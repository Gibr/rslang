import {
  baseUrl,
  generateQueryString,
  generateWordsApiUrl,
} from '../../app/constants/api';
import { IUserWordRequestBody } from '../../app/types';

type ICreateUserWordParam = {
  token: string;
  userId: string;
  wordId: string;
  wordOptions: IUserWordRequestBody;
};

type IGetUserWordParam = {
  token: string;
  userId: string;
  wordId: string;
};

type IGetUserWordsParam = {
  token: string;
  userId: string;
  page: number;
  wordsPerPage: number;
  unit?: number;
};

type IGetDifficultWordsParam = {
  token: string;
  userId: string;
  page?: number;
  wordsPerPage?: number;
};

export const getWords = async (unit: number, page: number) => {
  const res = await fetch(generateWordsApiUrl(unit, page));
  const words = await res.json();

  return words;
};

export const createUserWord = async (data: ICreateUserWordParam) => {
  const { token, userId, wordId, wordOptions } = data;

  const rawResponse = await fetch(
    `${baseUrl}/users/${userId}/words/${wordId}`,
    {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(wordOptions),
    }
  );

  const content = await rawResponse.json();
  return content;
};

export const updateUserWord = async (data: ICreateUserWordParam) => {
  const { token, userId, wordId, wordOptions } = data;

  const rawResponse = await fetch(
    `${baseUrl}/users/${userId}/words/${wordId}`,
    {
      method: 'PUT',
      credentials: 'same-origin',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(wordOptions),
    }
  );

  const content = await rawResponse.json();
  return content;
};

export const getUserWord = async (data: IGetUserWordParam) => {
  const { token, userId, wordId } = data;

  const rawResponse = await fetch(
    `${baseUrl}/users/${userId}/words/${wordId}`,
    {
      method: 'GET',
      credentials: 'same-origin',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },
    }
  );

  if (!rawResponse.ok) {
    return undefined;
  }

  const content = await rawResponse.json();
  return content;
};

export const getUserWords = async (data: IGetUserWordsParam) => {
  const { token, userId, unit, page = 0, wordsPerPage = 3600 } = data;

  const rawResponse = await fetch(
    `${baseUrl}/users/${userId}/aggregatedWords/?group=${unit}&page=${page}&wordsPerPage=${wordsPerPage}}`,
    {
      method: 'GET',
      credentials: 'same-origin',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },
    }
  );

  const content = await rawResponse.json();
  return content;
};

export const getUserDifficultWords = async (data: IGetDifficultWordsParam) => {
  const { token, userId, page = 0, wordsPerPage = 3600 } = data;

  const filter = `{"$and":[{"userWord.difficulty":"hard", "page":${page}}]}`;

  const rawResponse = await fetch(
    `${baseUrl}/users/${userId}/aggregatedWords/${generateQueryString([
      { key: 'wordsPerPage', value: wordsPerPage },
      { key: 'filter', value: filter },
    ])}`,
    {
      method: 'GET',
      credentials: 'same-origin',
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json',
      },
    }
  );

  const content = await rawResponse.json();
  return content;
};

export const getAllUserWords = async (token: string, userId: string) => {
  const rawResponse = await fetch(`${baseUrl}/users/${userId}/words`, {
    method: 'GET',
    credentials: 'same-origin',
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: 'application/json',
    },
  });

  const content = await rawResponse.json();
  return content;
};
