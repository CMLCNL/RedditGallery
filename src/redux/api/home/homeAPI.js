const URL = `https://www.reddit.com/r/KEYWORD/top.json`;

export const createUrl = keyword => {
  return URL.replace('KEYWORD', encodeURIComponent(keyword));
};
