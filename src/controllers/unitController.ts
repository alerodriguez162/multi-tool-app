import { Request, Response } from 'express';

export const renderConverter = (req: Request, res: Response) => {
  res.render('units', { result: null });
};

export const convertUnits = (req: Request, res: Response) => {
  const { value, from, to } = req.body;
  const input = parseFloat(value);
  let result = null;

  if (from === 'km' && to === 'mi') result = input * 0.621371;
  else if (from === 'mi' && to === 'km') result = input / 0.621371;
  else if (from === 'kg' && to === 'lb') result = input * 2.20462;
  else if (from === 'lb' && to === 'kg') result = input / 2.20462;

  res.render('units', { result });
};
