import React from 'react';

import { render, fireEvent } from '@testing-library/react-native';
import { Text } from 'react-native';
import ButtonDefault from '~/components/ButtonDefault';

describe('ButtonDefault', () => {
  it('should be able to', () => {
    const { getByText, getByTestId } = render(
      <ButtonDefault loading onPress rest>
        <Text>TesteChildren</Text>
      </ButtonDefault>,
    );

    // fireEvent.changeText(getByTestId('tech-input'), 'NodeJs');
    // fireEvent.press(getByText('TesteChildren'));

    // expect(getByText('NodeJs')).toBeTruthy();
    // expect(getByTestId('tech-input')).toHaveProp('value', '');
  });
});
