<template>
    <div id="item-list">
        <ul class="list-group">
            <li class="list-group-item" v-for="item in items">
                {{item.name}} {{item.description}} {{item.value}} {{item.lastUpdated}}
                <a :href="'/items/' + item.id">Edit</a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default{
        mounted: function() {
            console.log("ItemList Mounted");
            this.$store.dispatch('fetchItems');
        },
        computed: {
            items() {
                return this.$store.getters.items
            }
        }
    }
</script>
