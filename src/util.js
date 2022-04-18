export const sleep = (n) => new Promise(r => setTimeout(r, n));

export const img = (path) => `https://ionic-react-demos.s3.amazonaws.com/${path}`;
