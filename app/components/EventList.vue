<template>
    <div id="event-list">
        <router-link to="/events/new">Add New Event</router-link>

        <table class="table">
            <thead>
            <tr>
                <td>Text</td>
                <td>Time</td>
                <td>Completed</td>
                <td>Action</td>
            </tr>
            </thead>
            <tbody>
            <tr v-for="event in events">
                <td>{{event.text}}</td>
                <td>{{event.time}}</td>
                <td>{{event.completed}}</td>
                <td>
                    <router-link :to="'/events/' + event.id">Edit</router-link>
                </td>
            </tr>
            </tbody>
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
