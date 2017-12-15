<template>
    <div id="event-list">
        <table class="list-group">
            <tr class="list-group-event" v-for="event in events">
                <td>{{event.text}}</td>
                <td>{{event.time}}</td>
                <td>{{event.completed}}</td>
                <td><a :href="'/events/' + event.id">Edit</a></td>
            </tr>
        </table>
    </div>
</template>

<script>
  export default {
    mounted: function () {
      console.log("EventList Mounted");
      this.$store.dispatch('fetchEvents');
    },
    computed: {
      events() {
        return this.$store.getters.events
      }
    }
  }
</script>
