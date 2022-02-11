<template>
  <div class="about">
    <h1 @click="router">This is an about page</h1>
  </div>
  <router-view></router-view>
</template>

<script>
  export default {
    name: 'new',
    methods: {
      router() {
        this.$router.push('/new')
      }
    }
  }
</script>
