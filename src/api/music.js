import axios from 'axios';

//config
import env from '../config/environment';
const url = env.API_BASE_URL + '/song';

export const getMusic = (photo) => {
  return new Promise((resolve, reject) => {
    axios
      .post(url + '/propose', photo)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
