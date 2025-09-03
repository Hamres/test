import { createSelector } from '@reduxjs/toolkit';
import { OunterSchema } from 'entities/Counter';
import { getCounter } from '../getCounter/getCounter';

export const getCounterValue = createSelector(
  getCounter,
  (counter: OunterSchema) => counter.value,
);
