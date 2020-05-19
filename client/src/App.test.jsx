import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

const mockStore = configureStore([]);
let store;

beforeEach(() => {
  store = mockStore({
    user: {
      pageLoading: true
    },
  });
});

test('renders learn react link', () => {
  const {getByTestId  } = render(
      <Provider store={store}>
        <App />
      </Provider>
  );
  expect(getByTestId('spinner')).toBeDefined();
});
