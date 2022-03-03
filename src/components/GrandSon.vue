<template>
  <div>

    <h3>*****孙子组件测试多层嵌套传值******</h3>

    <h4>{{ phone }}</h4>
    <ul>
      <li v-for="(item,index) in lists" :key="index">
        {{item.name}}
      </li>
    </ul>

    <div>{{listLen}}</div>

  </div>
</template>

<script>
  export default {
    name: "GrandSon",
    inject: ['phone', 'list', 'listLen'],
    data() {
      return {
        lists: [],
      }
    },
    created() {
      this.lists = this.list
    }
  }
</script>

<style scoped>

</style>
