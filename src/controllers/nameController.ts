import { Request, Response } from 'express';

const firstNames = ['Alice', 'Bob', 'Charlie', 'Diana', 'Eva', 'Frank', 'Grace', 'Hugo'];
const lastNames = ['Smith', 'Johnson', 'Lee', 'Brown', 'Wilson', 'Taylor', 'Anderson', 'Clark'];

export const renderNameForm = (req: Request, res: Response) => {
  res.render('names', { fullName: null });
};

export const generateName = (req: Request, res: Response) => {
  const first = firstNames[Math.floor(Math.random() * firstNames.length)];
  const last = lastNames[Math.floor(Math.random() * lastNames.length)];
  res.render('names', { fullName: `${first} ${last}` });
};
