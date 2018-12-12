import qs from 'qs';

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
};
