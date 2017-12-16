<template>
    <div id="event-list">
        <router-link to="/events/new">Add New Event</router-link>

        <table class="list-group">
            <tr class="list-group-event" v-for="event in events">
                <td>{{event.text}}</td>
                <td>{{event.time}}</td>
                <td>{{event.completed}}</td>
                <td><router-link :to="'/events/' + event.id">Edit</router-link></td>
            </tr>
        </table>
    </div>
</template>

<script>
  export default {
    mounted: function () {
      this.$store.dispatch('fetchEvents');
    },
    computed: {
      events() {
        return this.$store.getters.events
      }
    }
  }
</script>
