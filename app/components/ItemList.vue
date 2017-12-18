<template>
    <div id="item-list">
        <router-link to="/items/new">Add New Item</router-link>

        <table class="table">
            <thead>
            <tr>
                <td>Name</td>
                <td>Descriptipn</td>
                <td>Value</td>
                <td>Last Updated</td>
                <td>Action</td>
            </tr>
            </thead>
            <tbody>
            <tr v-for="item in items">
                <td>{{item.name}}</td>
                <td>{{item.description}}</td>
                <td>{{item.value}}</td>
                <td>{{item.lastUpdated}}</td>
                <td>
                    <router-link :to="'/items/' + item.id">Edit</router-link>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        mounted: function () {
            this.$store.dispatch('fetchItems');
        },
        computed: {
            items() {
                return this.$store.getters.items
            }
        }
    }
</script>
