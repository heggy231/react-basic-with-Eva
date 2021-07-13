import React from 'react'

export const login = async ({ username, password }) => {
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      if (username === 'heggy' && password === 'here') {
        resolve();
      } else {
        reject();
      }
    }, 1000);
  });
}
