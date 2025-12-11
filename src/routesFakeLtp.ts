import { Request, Response } from 'express';
import { state } from './state';

export const handleFakeLtp = (req: Request, res: Response) => {
  const { symbol, ltp } = req.body;
  const s = state[symbol];
  if (!s || typeof ltp !== 'number') {
    return res.status(400).json({ error: 'bad' });
  }
  s.ltp = ltp;
  if (s.buyThreshold != null) {
    s.buyThresholdCondn =
      s.ltp > s.buyThreshold ? true : s.ltp < s.buyThreshold ? false : null;
  }
  return res.json({ ok: true, state: s });
};
