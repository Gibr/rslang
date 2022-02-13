import './WordCard.scss';
import React, { useEffect, useState } from 'react';

import { IWordData } from '../../app/data/words';
import { useAppSelector } from '../../app/hooks';
import { selectCurrentUnit } from '../TextbookNav/textbookNavSlice';
import { generateWordImageUrl } from '../../app/constants/api';
import loader from '../../assets/icons/loading.gif';

function WordCard(props: { wordData: IWordData }): JSX.Element {
  const { wordData } = props;

  const currentUnit = useAppSelector(selectCurrentUnit);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [imageSrc, setImageSrc] = useState(loader);

  useEffect(() => {
    const fetchImage = async () => {
      const img = new Image();
      img.src = generateWordImageUrl(wordData.image);

      img.onload = () => {
        setImageSrc(img.src);
        setIsImageLoaded(true);
      };
    };

    fetchImage();
  }, [wordData]);

  return (
    <li className="word-card">
      <div className="card__content">
        <div
          className="content__image"
          style={{
            backgroundImage: `url(${imageSrc}`,
            backgroundSize: `${isImageLoaded ? 'cover' : '30% auto'}`,
          }}
        />
        <div className="content__text">
          <div className="text__block word-block">
            <div className="block__item word__original">{wordData.word}</div>
            <button
              className="word__play-btn"
              type="button"
              aria-label="pronunciation button"
            />
            <div className="block__item word__transcription">
              {wordData.transcription}
            </div>

            <div className="block__item translation word__translation">{`-- ${wordData.wordTranslate}`}</div>
          </div>
          <div
            className={`text__block meaning-block color-unit-${currentUnit}`}
          >
            <div className="block__item original meaning__original">
              <span className="original__icon"> &#9755;</span>
              <div
                dangerouslySetInnerHTML={{
                  __html: `${wordData.textMeaning}`,
                }}
              />
            </div>
            <div className="block__item translation meaning__translation">
              {wordData.textMeaningTranslate}
            </div>
          </div>
          <div
            className={`text__block example-block color-unit-${currentUnit}`}
          >
            <div className="block__item original example__original">
              <span className="original__icon"> &#9755;</span>
              <div
                dangerouslySetInnerHTML={{
                  __html: `${wordData.textExample}`,
                }}
              />
            </div>
            <div className="block__item translation example__translation">
              {wordData.textExampleTranslate}
            </div>
          </div>
        </div>
      </div>
      <div className="card__controls">
        <div className="statistic">
          <span className="icon" />
          <span className="text">12/17</span>
        </div>
        <div className="btns-wrap">
          <button
            type="button"
            className="controls__btn learned-btn"
            aria-label="toggle to learned"
          />
          <button
            type="button"
            className="controls__btn difficult-btn"
            aria-label="toggle to difficult"
          />
        </div>
      </div>
    </li>
  );
}

export default WordCard;
