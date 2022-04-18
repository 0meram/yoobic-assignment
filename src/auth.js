import { sleep } from './util';

export const login = async (email, password) => {
  // Just to simulate network request
  await sleep(2000);
  // Return a fake user
  return {
    name: 'Ionitron',
    email: email,
    id: '0'
  }
}

export const signup = async (email, password) => {
  // Just to simulate network request
  await sleep(2000);
  // Return a fake user
  return {
    name: 'Ionitron',
    email: email,
    id: '0'
  }
}
