import { render, screen } from '@testing-library/vue';
import { test } from 'vitest';
import { Button } from './../src/button/index';
// basic button
test('it should work', () => {
  render(Button);
  screen.getByText('按钮');
});
