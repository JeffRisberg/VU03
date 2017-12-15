<template>
    <div id="event-form">
        <form>
        </form>
    </div>
</template>

<script>
    export default{
        mounted: function() {
            console.log("EventForm Mounted");
            this.$store.dispatch('fetchEvent');
        },
        computed: {
            events() {
                return this.$store.getters.events
            }
        }
    }
</script>