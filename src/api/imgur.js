import qs from 'qs';
import axios from 'axios';

import keys from '../keys';

const ROOT_URL = 'https://api.imgur.com';

export default {
  login() {
    const queryString = {
      client_id: keys.IMGUR_CLIENT_ID,
      response_type: 'token',
    };

    window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(queryString)}`;
  },

  fetchImages(accessToken) {
    return axios.get(`${ROOT_URL}/3/account/me/images`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  },
};
