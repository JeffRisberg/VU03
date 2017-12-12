import Vue from 'vue'
import Vuex from 'vuex'
import fetch from 'isomorphic-fetch';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        events: [],
        items: []
    },
    mutations: {
        FETCH_EVENTS(state, events) {
            state.events = events;
        },
        FETCH_ITEMS(state, items) {
            state.items = items;
        },
    },

    actions: {
        fetchEvents({commit}) {
            // async call here
            fetch('/api/events', {})
                  .then(response => response.json())
                  .then((json) => {
                    commit('FETCH_EVENTS', json.data);
                  });
        },
        fetchItems({commit}) {
            // async call here
            fetch('/api/items', {})
                  .then(response => response.json())
                  .then((json) => {
                    commit('FETCH_ITEMS', json.data);
                  });
        }
    },

    getters: {
        events: state => state.events,
        items: state => state.items
    }
})
