<template>
    <div id="event-list">
        <ul class="list-group">
            <li class="list-group-event" v-for="event in events">
                {{event.text}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default{
        mounted: function() {
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