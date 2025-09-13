import 'app/styles/index.scss';
import type { Decorator } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';

export const StoreDecorator = (state: DeepPartial<StateSchema>): Decorator => (story) => (
  <StoreProvider initialState={state}>
    {story()}
  </StoreProvider>
);
