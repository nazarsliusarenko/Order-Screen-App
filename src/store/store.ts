import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';
import { order } from './order';

Vue.use(Vuex);
const store: StoreOptions<any> = {
  modules: {
    order,
  },
};

export default new Vuex.Store(store);
