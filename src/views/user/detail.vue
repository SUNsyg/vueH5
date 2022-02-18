<template>
  <div>用户ID: {{ userId }}</div>
  <div @click="go">查看children</div>
  <div>{{detail}}</div>
  <router-view></router-view>
</template>

<script>
  export default {
    name: "detail",
    data() {
      return {
        detail: '详情详情'
      }
    },
    beforeRouteEnter(to, from, next) {
      next(vm => vm.detail='获取参数')
    },
    computed: {
      userId() {
        return this.$route.params.id
      }
    },
    methods: {
      go() {
        this.$route.push('/profile')
      }
    }
  }
</script>

<style scoped>

</style>
