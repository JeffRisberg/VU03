<template>
  <div id="event-form" v-if="event">
    <form id="event" v-on:submit.prevent>
      <label>Text</label>
      <input id="text" name="text" v-model='event.text'/>
      <br/>
      <label>Time</label>
      <input id="time" name="time" v-model='event.time'/>
      <br/>
      <input type="submit" @click="submitEvent(event)"/>
    </form>
  </div>
  <div id="event-wait" v-else="event">
    Waiting...
  </div>
</template>

<script>
  export default {
    methods: {
      submitEvent(event) {
        this.$store.dispatch('saveEvent', event)
      }
    },
    mounted: function () {
      if (this.$route.params.id) {
        this.$store.dispatch('fetchEvent', this.$route.params.id);
      }
      else {
        this.$store.dispatch('newEvent');
      }
    },
    computed: {
      event() {
        return this.$store.getters.event
      }
    }
  }
</script>
