import fetch from 'isomorphic-fetch';

const state = {
  items: [],
  item: null
};

const mutations = {
  FETCH_ITEMS(status, items) {
    state.items = items;
    // set the wait flag
  },
  SET_ITEM(state, item) {
    state.item = item;
    // clear the wait flag
  },
  FETCH_ITEMS_SUCCESS(state) {
    // clear the wait flag
  }
};

const getters = {
  items: state => state.items,
  item: state => state.item
}

const actions = {
  fetchEvents({commit}) {
    fetch('/api/items', {})
      .then(response => response.json())
      .then((json) => {
        commit('FETCH_ITEMS', json.data);
      })
  },
  fetchEvent({commit}, id) {
    fetch('/api/items/' + id, {})
      .then(response => response.json())
      .then((json) => {
        commit('SET_ITEM', json.data);
      })
  },
  newEvent({commit}, id) {
    commit('SET_ITEM', {name: "", description: "", value: 0, dateUpdated: null, completed: false});
  },
  saveEvent({commit}, item) {
    fetch('/api/items/' + item.id, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({item: item})
    })
      .then(response => response.json())
      .then((json) => {
        commit('PERSIST_ITEM_SUCCESS', json.data)
      })
  },
  addEvent({commit}, item) {
    fetch('/api/items', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({item: item})
    })
      .then(response => response.json())
      .then((json) => {
        commit('PERSIST_ITEM_SUCCESS', json.data)
      })
  },
  deleteEvent({commit}, item) {
    fetch('/api/items/' + item.id, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({item: item})
    })
  },
}

export default {
  state,
  mutations,
  getters,
  actions
}
