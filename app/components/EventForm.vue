<template>
    <div id="event-form">
        <form id="event">
            <label>Text</label>
            <input id="text" name="text" v-model='text' />
            <br/>
            <label>Time</label>
            <input id="time" name="time" v-model='time' />
            <br/>
            <input type="submit" @click="submitEvent(text, time)" />
        </form>
    </div>
</template>

<script>
  export default {
    methods: {
      submitEvent(text, time) {
        console.log(event);
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
      },
      text() {
        return this.$store.getters.event.text
      },
      time() {
        return this.$store.getters.event.time
      }
    }
  }
</script>
