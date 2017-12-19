import Vue from 'vue'
import Vuex from 'vuex'

import events from './modules/events'
import items from './modules/items'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    events,
    items
  }
})
