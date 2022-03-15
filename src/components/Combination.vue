<template>
  <div class="home">
    <div>组合式API</div>

  </div>
</template>

<script>
  import { ref } from 'vue'
  export default {
    name: "Combination",
    props: {
      user: {
        type: String,
        required: true
      }
    },
    setup(props) {

      let repositories = ref([])
      repositories = [1,2,3,4,5,6,7,8,9,0]
      const getData = () => {
        console.log('return一个')
      }
      console.log(props)

      return {
        repositories,
        getData
      }

    }
  }
</script>

<style scoped>

</style>
