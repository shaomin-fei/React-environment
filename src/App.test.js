// @flow
/*
 * @Description:
 * @Author: Shaomin Fei
 * @Date: 2021-03-25 22:43:55
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test(
  ('renders learn react link': string),
  (() => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect((linkElement: HTMLElement)).toBeInTheDocument();
  }: () => void),
);
