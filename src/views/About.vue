<template>
  <div class="about">
    <h1 @click="router">This is an about page</h1>
  </div>
  <div class="detail" :key="i" v-for="i in 100">
    <h1 @click="routerDetail">{{i}}用户详情</h1>
  </div>

  <router-view></router-view>
</template>

<script>
  export default {
    name: 'new',
    methods: {
      router() {
        this.$router.push('/new')
      },
      routerDetail() {
        this.$router.push('/user/detail/12')
      }
    }
  }
</script>
