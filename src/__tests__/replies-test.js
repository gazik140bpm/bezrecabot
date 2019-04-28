import Az from 'az';
import getReplies from '../replies';

beforeAll(() =>
  new Promise((resolve) =>
    Az.Morph.init(() => resolve())));