<template>
    <div id="item-form">
        <form>
        </form>
    </div>
</template>

<script>
    export default{
        mounted: function() {
            console.log("ItemForm Mounted");
            this.$store.dispatch('fetchItem');
        },
        computed: {
            events() {
                return this.$store.getters.items
            }
        }
    }
</script>