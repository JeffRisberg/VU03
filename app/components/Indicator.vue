<template>
  <b-card>
    <div class="h1 text-muted text-right mb-4">
      <i :class="iconClass"></i>
    </div>
    <div class="h4 mb-0">{{value}}</div>
    <small class="text-muted text-uppercase font-weight-bold">{{title}}</small>
  </b-card>
</template>

<script>
  export default {
    name: 'Indicator',
    props: ['title', 'iconClass', 'value']
  }
</script>
