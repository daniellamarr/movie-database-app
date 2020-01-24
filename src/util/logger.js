import debug from 'debug';

export const debugLogger = (log, env = `movie-app/${process.env.NODE_ENV}`) =>
  debug(env)(log);

export const prettyStringify = data => JSON.stringify(data, null, '\t');