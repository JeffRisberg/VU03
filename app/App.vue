<template>
  <div id="app" class="container">
    <router-link :to="{ name: 'Hello' }">Home</router-link>
    <router-link to="/events">Events</router-link>
    <router-link to="/items">Items</router-link>

    <table>
      <tr>
        <td>
          <indicator title="Number of Events" value="123"/>
        </td>
        <td>
          <indicator title="Number of Items" value="456"/>
        </td>
      </tr>
    </table>

    <router-view></router-view>
  </div>
</template>

<script>
  import EventList from './components/Events/EventList.vue'
  import ItemList from './components/Items/ItemList.vue'
  import Indicator from './components/Indicator.vue'

  export default {
    components: {
      EventList,
      ItemList,
      Indicator
    }
  }
</script>

<style>
  body {
    font-family: Helvetica, sans-serif;
  }
</style>
