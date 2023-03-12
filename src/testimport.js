import { makeQueryString } from './http';

global.testimport = () => {
  const url = makeQueryString('https://google.com');
  Logger.log(`Query string is ${url}`);
};
