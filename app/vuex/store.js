import Vue from 'vue'
import Vuex from 'vuex'
import fetch from 'isomorphic-fetch';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    events: [],
    event: null,
    items: [],
    item: null
  },
  mutations: {
    FETCH_EVENTS(state, events) {
      state.events = events;
      // set the wait flag
    },
    SET_EVENT(state, event) {
      state.event = event;
      // clear the wait flag
    },
    FETCH_EVENTS_SUCCESS(state) {
      // clear the wait flag
    },
    FETCH_ITEMS(state, items) {
      state.items = items;
      // set the wait flag
    },
    SET_ITEM(state, item) {
      state.item = item;
    },
    FETCH_ITEMS_SUCCESS(state) {
      // clear the wait flag
    },
  },

  actions: {
    fetchEvents({ commit }) {
      fetch('/api/events', {})
        .then(response => response.json())
        .then((json) => {
          commit('FETCH_EVENTS', json.data);
        })
    },
    fetchEvent({ commit }, id) {
      fetch('/api/events/' + id, {})
        .then(response => response.json())
        .then((json) => {
          commit('SET_EVENT', json.data);
        })
    },
    newEvent({ commit }, id) {
      commit('SET_EVENT', { text: "", text: 0, dateUpdated: null, completed: false});
    },
    saveEvent({ commit }, event) {
      fetch('/api/events/' + id, {
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
      fetch('/api/items', {})
        .then(response => response.json())
        .then((json) => {
          commit('FETCH_ITEMS', json.data);
        })
    },
    fetchItem({ commit }, id) {
      fetch('/api/items/' + id, {})
        .then(response => response.json())
        .then((json) => {
          commit('SET_ITEM', json.data);
        })
    },
    newItem({ commit }, id) {
      commit('SET_ITEM', { name: "", value: 0, dateUpdated: null, completed: false});
    },
    saveItem({ commit }, item) {
      // async call here
      fetch('/api/items/' + item.id, {
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
    event: state => state.event,
    items: state => state.items,
    item: state => state.item
  }
})
