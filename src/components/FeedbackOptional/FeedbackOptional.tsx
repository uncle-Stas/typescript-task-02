import React from 'react';

import { IState } from 'types/statisticsState';
import { Btn } from './FeedbackOptional.styled';

interface IProp {
  onClickAction: (id: keyof IState) => void;
}

export const FeedbackOptional: React.FC<IProp> = ({ onClickAction }) => {
  return (
    <>
      <Btn type='button' onClick={() => onClickAction('good')}>
        Good
      </Btn>
      <Btn type='button' onClick={() => onClickAction('neutral')}>
        Neutral
      </Btn>
      <Btn type='button' onClick={() => onClickAction('bad')}>
        Bad
      </Btn>
    </>
  );
};
