<template>
  <div>
    <h1>组合式API</h1>

    <my-book :title="title"></my-book>
  </div>
</template>

<script>
  import MyBook from "../components/MyBook";
  export default {
    name: "SetUp",
    data() {
      return {
        title: 'setup深入了解'
      }
    },
    components: {
      MyBook
    }
  }
</script>

<style scoped>

</style>
