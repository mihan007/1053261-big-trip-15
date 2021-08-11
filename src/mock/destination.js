import { Destinations } from '../constants/destinations';
import { MockSentences } from '../constants/mock-sentences';
import { getRandomArrayElement, getRandomInteger } from '../utils/common';

const generateTitle = () => getRandomArrayElement(Destinations);

const generateSentence = () => getRandomArrayElement(MockSentences);

const generateDescription = () => {
  const sentencesCount = getRandomInteger(1, 5);
  const randomSentences = new Array(sentencesCount).fill().map(() => generateSentence());

  return randomSentences.join(' ');
};

const generatePictureUrl = () => 'http://picsum.photos/248/152?r=' + getRandomInteger(0, 1e9);

const generatePictures = () => {
  const picturesCount = getRandomInteger(1, 5);

  return new Array(picturesCount).fill().map(() => generatePictureUrl());
};

export const generateDestination = () => ({
  title: generateTitle(),
  description: generateDescription(),
  pictures: generatePictures(),
});
