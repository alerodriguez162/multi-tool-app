import { Request, Response } from 'express';
import generatePassword from '../services/passwordService';

export const renderForm = (req: Request, res: Response) => {
  res.render('index', { password: null, error: null });
};

export const handleGenerate = (req: Request, res: Response) => {
  const { length, lowercase, uppercase, numbers, symbols } = req.body;
  const options = {
    length: parseInt(length, 10) || 12,
    lowercase: !!lowercase,
    uppercase: !!uppercase,
    numbers: !!numbers,
    symbols: !!symbols
  };

  if (!options.lowercase && !options.uppercase && !options.numbers && !options.symbols) {
    return res.render('index', { password: null, error: 'Select at least one character type.' });
  }

  const password = generatePassword(options);
  res.render('index', { password, error: null });
};
