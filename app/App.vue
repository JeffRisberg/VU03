<template>
  <div id="app" class="container">
    <router-link :to="{ name: 'Hello' }">Home</router-link>
    <router-link to="/events">Events</router-link>
    <router-link to="/items">Items</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import EventList from './components/EventList.vue'
import ItemList from './components/ItemList.vue'

export default {
  components: {
    EventList,
    ItemList
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
