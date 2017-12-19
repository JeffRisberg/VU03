import fetch from 'isomorphic-fetch';
import {router} from "../../main.js"

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
  },
  PERSIST_ITEM_SUCCESS(state) {
    // clear the wait flag
  }
};

const getters = {
  items: state => state.items,
  item: state => state.item
}

const actions = {
  fetchItems({commit}) {
    fetch('/api/items', {})
      .then(response => response.json())
      .then((json) => {
        commit('FETCH_ITEMS', json.data);
      })
  },
  fetchItem({commit}, id) {
    fetch('/api/items/' + id, {})
      .then(response => response.json())
      .then((json) => {
        commit('SET_ITEM', json.data);
      })
  },
  newItem({commit}, id) {
    commit('SET_ITEM', {name: "", description: "", value: 0, dateUpdated: null, completed: false});
  },
  saveItem({commit}, item) {
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
        router.push({path: '/items'}) // jump to items route
      })
  },
  addItem({commit}, item) {
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
        router.push({path: '/items'}) // jump to items route
      })
  },
  deleteItem({commit}, item) {
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
