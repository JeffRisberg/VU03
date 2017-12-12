<template>
    <div id="event-list">
        <ul class="list-group">
            <li class="list-group-event" v-for="event in events">
                {{todo.body}}
                <button type="button" @click="remove(todo)" class="btn btn-default btn-sm">
                <span class="glyphicon glyphicon-remove-circle"></span> Remove
                </button>
            </li>
        </ul>
    </div>
</template>

<script>
    export default{
        mounted: function() {
            console.log("ItemList Mounted");
            this.$store.dispatch('fetchItemss');
        },
        computed: {
            events() {
                return this.$store.getters.events
            }
        }
    }
</script>