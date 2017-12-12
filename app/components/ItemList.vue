<template>
    <div id="item-list">
        <ul class="list-group">
            <li class="list-group-item" v-for="item in items">
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
            items() {
                return this.$store.getters.items
            }
        }
    }
</script>