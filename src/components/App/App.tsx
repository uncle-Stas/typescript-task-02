import React, { useState } from 'react';

import { FeedbackOptional, Section, Statistics } from 'components';

interface IState {
  good: number;
  bad: number;
  neutral: number;
}

const initialState: IState = {
  good: 0,
  neutral: 0,
  bad: 0,
};

export const App: React.FC = () => {
  const [state, setState] = useState<IState>(initialState);

  return (
    <main>
      <Section title='Please leave feedback'>
        <FeedbackOptional />
      </Section>
      <Section title='Statistics'>
        <Statistics />
      </Section>
    </main>
  );
};
