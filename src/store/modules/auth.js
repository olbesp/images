import qs from 'qs';

import { router } from '../../main';
import api from '../../api/imgur';

const initialState = {
  token: window.localStorage.getItem('imgur_token'),
};

const getters = {
  isLoggedIn: state => !!state.token,
};

const actions = {
  login: () => {
    api.login();
  },

  finalizeLogin({ commit }, hash) {
    const query = qs.parse(hash.replace('#', ''));
    commit('setToken', query.access_token);
    window.localStorage.setItem('imgur_token', query.access_token);
    router.push('/');
  },

  logout: ({ commit }) => {
    commit('setToken', '');
    window.localStorage.removeItem('imgur_token');
  },
};

const mutations = {
  setToken: (state, token) => {
    /* eslint-disable */
    state.token = token;
    /* eslint-enable */
  },
};

export default {
  state: initialState,
  actions,
  getters,
  mutations,
};

// http://localhost:8080/oauth2/callback#
// access_token=27e8a6d0f6a574247d11ffe570727ffe42b298cf
// &expires_in=315360000
// &token_type=bearer
// &refresh_token=cd671955b3dd1d5e0ebabe06eae36485e239664d
// &account_username=olbesp
// &account_id=98827625
