import { render, screen } from '@testing-library/vue';
import { test, expect } from 'vitest';
import { Button } from './../src/button/index';
// basic button
test('it should work', () => {
  render(Button);
  screen.getByRole('button');
});
// slot default '按钮'
test('default slot should be 按钮', () => {
  render(Button);
  screen.getByText('按钮');
});
test('default slot should work', () => {
  render(Button, {
    slots: {
      default: 'confirm'
    }
  });
  screen.getByText('confirm');
});
// button type
test('button type should be secondary', () => {
  render(Button);
  const button = screen.getByRole('button');
  expect(button.classList.contains('s-btn--secondary')).toBe(true);
});
test('type primary should work', () => {
  render(Button, {
    props: {
      type: 'primary'
    }
  });
  const button = screen.getByRole('button');
  expect(button.classList.contains('s-btn--primary')).toBe(true);
});
