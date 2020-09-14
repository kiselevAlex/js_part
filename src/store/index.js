import Vue from 'vue'
import Vuex from 'vuex'
import omit from 'lodash/omit'

import Service from '../api/service';

import { round, random } from '../helpers/number'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rate: 0,
    goods: [],
    namesMap: {},
    basket: {}
  },
  mutations: {
    setRate(state, rate) {
      state.rate = rate
    },
    setGoods(state, goods) {
      state.goods = goods;
    },
    setNamesMap(state, namesMap) {
      state.namesMap = namesMap;
    },
    setBasket(state, { id, count = 1 }) {
      const { basket } = state;
      state.basket = count <= 0 ? omit(basket, [id]) : { ...basket, [id]: count }
    },
    fromBasket(state, namesMap) {
      state.namesMap = namesMap;
    }
  },
  actions: {
    init({ dispatch }) {
      return Promise.all([dispatch('loadGoods'), dispatch('loadNames')])
    },
    async loadGoods({ commit }) {
      const { Value: { Goods: goods } } = await Service.getGoods();
      commit('setGoods', goods);
    },
    async loadNames({ commit }) {
      commit('setNamesMap', await Service.getNames());
    },
    updateBasket({ commit, getters }, { id, count = 1 }) {
      const limit = getters['goodsMap'][id]?.limit;
      commit('setBasket', { id, count: count > limit ? limit : count  })
    },
    async loadRate({ commit }) {
      commit('setRate', round(random(20, 80)))
    }
  },
  getters: {
    categoriesMap: ({ goods, namesMap }) =>
      goods.reduce(
        (result, { G, T }) => ({
          ...result,
          [G]: {
            id: G,
            name: namesMap[G]?.G,
            goodIds: [ ...(result[G]?.goodIds || []), T]
          }
        }),
        {},
      ),
    goodsMap: ({ goods, namesMap, rate }) =>
      goods.reduce(
        (result, { T, P, C, G }) => ({
          ...result,
          [T]: {
            id: T,
            name: namesMap[G]?.B && namesMap[G]?.B[T]?.N,
            limit: P,
            price: round(C * rate) 
          }
        }),
        {},
      )
  }
})
