<template>
  <div>{{title}}</div>

  <div>{{  }}</div>
</template>

<script>
  import { toRefs, onMounted } from 'vue'
  export default {
    name: "MyBook",
    props: {
      title: String
    },
    setup(props, { attrs }) {

      console.log(attrs)

      onMounted(() => {
        console.log('1 执行了moutned！')
      })


      const { title } = toRefs(props)
      console.log(title.value)

    },
    mounted() {
      console.log('2 开始执行mounted')
    }
  }
</script>

<style scoped>

</style>
