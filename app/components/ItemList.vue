<template>
    <div id="item-list">
        <router-link to="/items/new">Add New Item</router-link>

        <table class="list-group">
            <tr class="list-group-item" v-for="item in items">
                <td>{{item.name}}</td>
                <td>{{item.description}}</td>
                <td>{{item.value}}</td>
                <td>{{item.lastUpdated}}</td>
                <td><router-link :to="'/items/' + item.id">Edit</router-link></td>
            </tr>
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
