<template>
  <div style="width: 200px; background: #ddd; border: 1px solid black;">
    <div class="h1 text-muted text-right mb-4">
      <i class="icon-bell"></i>
    </div>
    <div class="h4 mb-0">{{value}}</div>
    <small class="text-muted text-uppercase font-weight-bold">{{title}}</small>
  </div>
</template>

<script>
  export default {
    props: ['value', 'title']
  }
</script>
