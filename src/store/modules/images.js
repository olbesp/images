import api from '../../api/imgur';

const initialState = {
  images: [],
};

const getters = {
  allImages: state => state.images,
};

const actions = {
  async fetchImages({ rootState, commit }) {
    const { token } = rootState.auth;
    const response = await api.fetchImages(token);
    console.log(response);
  },
};

const mutations = {
  setImages: (state, images) => {
    state.images = images;
  },
};

export default {
  state: initialState,
  getters,
  actions,
  mutations,
};
