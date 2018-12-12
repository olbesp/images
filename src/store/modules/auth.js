import api from '../../api/imgur';

const initialState = {
  token: '',
};

const getters = {
  isLoggedIn: state => !!state.token,
};

const actions = {
  login: () => {
    api.login();
  },

  logout: ({ commit }) => {
    commit('setToken', '');
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
