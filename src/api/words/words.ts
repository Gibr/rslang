import { generateWordsApiUrl } from '../../app/constants/api';

const getWords = async (unit: number, page: number) => {
  const res = await fetch(generateWordsApiUrl(unit, page));
  const words = await res.json();

  return words;
};

export default getWords;
