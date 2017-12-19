<template>
  <div id="item-form">
    <form id="item">
      <label>Name</label>
      <input name="name" v-model='item.name'/>
      <br/>
      <label>Description</label>
      <input name="description" v-model='item.description'/>
      <br/>
      <label>Value</label>
      <input name="value" v-model='item.value'/>
      <br/>
      <input type="submit" @click="submitItem(item)"/>
    </form>
  </div>
</template>

<script>
  export default {
    methods: {
      submitItem(item) {
        console.log(item);
        this.$store.dispatch('saveItem', item)
      }
    },
    mounted: function () {
      if (this.$route.params.id) {
        this.$store.dispatch('fetchItem', this.$route.params.id);
      }
      else {
        this.$store.dispatch('newItem');
      }
    },
    computed: {
      item() {
        return this.$store.getters.item
      }
    }
  }
</script>
