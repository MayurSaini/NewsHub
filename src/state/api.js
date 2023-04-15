import { Platform } from 'react-native';
import { request } from './request';

let vCode = 0;
let appClient = Platform.OS;

export const getHeaders = (accessToken) => {
  let headers = {
    'Content-type': 'application/json; charset=UTF-8',
    Accept: 'application/json',
    'app-client': appClient,
    'app-version': vCode,
  };
  return headers;
};

export const saveBookmark = async () => {
console.log("yessss")
const url = "https://newsapi.org/v2/everything?q=tesla&from=2023-03-15&sortBy=publishedAt&apiKey=e22171662694470cb2b4b39914a03afb";
  const headers = getHeaders();
  const result = await request(url, 'GET', null, headers);
  return result;
};
