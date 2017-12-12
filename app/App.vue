<template>
  <div id="app" class="container">
    <EventList></EventList>
    <ItemList></ItemList>
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