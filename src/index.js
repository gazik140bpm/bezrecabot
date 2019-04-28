// @flow
import Az from 'az';
import BezReceptaBot from './bot';

const bot = new BezReceptaBot();

Az.Morph.init(() => bot.run());
