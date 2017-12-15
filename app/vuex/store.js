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
      // set the wait flag
    },
    FETCH_EVENTS_SUCCESS(state) {
      // clear the wait flag
    },
    FETCH_ITEMS(state, items) {
      state.items = items;
      // set the wait flag
    },
    FETCH_ITEMS_SUCCESS(state) {
      // clear the wait flag
    },
  },

  actions: {
    fetchEvents({ commit }) {
      // async call here
      fetch('/api/events', {})
        .then(response => response.json())
        .then((json) => {
          commit('FETCH_EVENTS', json.data);
        })
    },
    saveEvent({ commit }, event) {
      fetch('/api/events', {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ event: event })
      })
        .then(response => response.json())
        .then((json) => {
          commit('PERSIST_EVENT_SUCCESS', json.data)
        })
    },
    addEvent({ commit }, event) {
      fetch('/api/events', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ event: event })
      })
        .then(response => response.json())
        .then((json) => {
          commit('PERSIST_EVENT_SUCCESS', json.data)
        })
    },
    deleteEvent({ commit }, event) {
      fetch('/api/events/' + event.id, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ event: event })
      })
    },
    fetchItems({ commit }) {
      // async call here
      fetch('/api/items', {})
        .then(response => response.json())
        .then((json) => {
          commit('FETCH_ITEMS', json.data);
        })
    },
    saveItem({ commit }, item) {
      // async call here
      fetch('/api/items', {
        method: 'PUT'
      })
        .then(response => response.json())
        .then((json) => {
          commit('FETCH_ITEMS', json.data);
        })
    },
    addItem({ commit }, item) {
      fetch('/api/items', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ item: item })
      })
        .then(response => response.json())
        .then((json) => {
          commit('PERSIST_ITEM_SUCCESS', json.data)
        })
    },
    deleteItem({ commit }, item) {
      fetch('/api/items/' + item.id, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ item: item })
      })
    }
  },

  getters: {
    events: state => state.events,
    items: state => state.items
  }
})
