/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentPropsWithoutRef } from 'react';

export interface InputProps extends ComponentPropsWithoutRef<'input'> {
  name?: string;
  Icon?: React.FC;
  error?: string;
  register?: any;
  label: string;
}
