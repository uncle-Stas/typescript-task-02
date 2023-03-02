import React from 'react';
import { Stats } from './Statistics.styled';

interface IProp {
  good: number;
  neutral: number;
  bad: number;
  total: number;
  percentage: number;
}

export const Statistics: React.FC<IProp> = ({ good, neutral, bad, total, percentage }) => {
  return (
    <>
      <Stats>Good: {good}</Stats>
      <Stats>Neutral: {neutral}</Stats>
      <Stats>Bad: {bad}</Stats>
      <Stats>Total: {total}</Stats>
      <Stats>Posityve feedback: {percentage}%</Stats>
    </>
  );
};
