import { EventEmitter } from 'events';

export const logger = new EventEmitter();

logger.on('log', (message) => {
  console.log(message);
});