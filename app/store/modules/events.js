import fetch from 'isomorphic-fetch';
import {router} from "../../main.js"

const state = {
  events: [],
  event: null
};

const mutations = {
  FETCH_EVENTS(status, events) {
    state.events = events;
    // set the wait flag
  },
  SET_EVENT(state, event) {
    console.log(event);
    state.event = event;
    // clear the wait flag
  },
  FETCH_EVENTS_SUCCESS(state) {
    // clear the wait flag
  }
};

const getters = {
  events: state => state.events,
  event: state => state.event
}

const actions = {
  fetchEvents({commit}) {
    fetch('/api/events', {})
      .then(response => response.json())
      .then((json) => {
        commit('FETCH_EVENTS', json.data);
      })
  },
  fetchEvent({commit}, id) {
    fetch('/api/events/' + id, {})
      .then(response => response.json())
      .then((json) => {
        commit('SET_EVENT', json.data);
      })
  },
  newEvent({commit}, id) {
    commit('SET_EVENT', {text: "", time: 0, dateUpdated: null, completed: false});
  },
  saveEvent({commit}, event) {
    fetch('/api/events/' + event.id, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({event: event})
    })
      .then(response => response.json())
      .then((json) => {
        commit('PERSIST_EVENT_SUCCESS', json.data)
        router.push({path: '/events'}) // jump to events route
      })
  },
  addEvent({commit}, event) {
    fetch('/api/events', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({event: event})
    })
      .then(response => response.json())
      .then((json) => {
        commit('PERSIST_EVENT_SUCCESS', json.data)
        router.push({path: '/events'}) // jump to events route
      })
  },
  deleteEvent({commit}, event) {
    fetch('/api/events/' + event.id, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({event: event})
    })
  },
}

export default {
  state,
  mutations,
  getters,
  actions
}
