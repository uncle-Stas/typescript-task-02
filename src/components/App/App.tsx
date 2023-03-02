import React, { useState } from 'react';

import { FeedbackOptional, Notification, Section, Statistics } from 'components';

import { IState } from 'types/statisticsState';

const initialState: IState = {
  good: 0,
  neutral: 0,
  bad: 0,
};

export const App: React.FC = () => {
  const [state, setState] = useState<IState>(initialState);
  const { good, neutral, bad } = state;

  const onClickAction = (id: keyof IState): void => {
    setState((prevState: IState) => {
      return { ...prevState, [id]: prevState[id] + 1 };
    });
  };

  const calcTotalFeedback = (): number => {
    return good + neutral + bad;
  };

  const calcPercentagePositiveFeedback = (total: number): number => {
    return Math.round((good / total) * 100);
  };

  const total = calcTotalFeedback();
  const percentage = calcPercentagePositiveFeedback(total);

  return (
    <main>
      <Section title='Please leave feedback'>
        <FeedbackOptional onClickAction={onClickAction} />
      </Section>
      <Section title='Statistics'>
        {!total ? (
          <Notification />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            percentage={percentage}
          />
        )}
      </Section>
    </main>
  );
};
