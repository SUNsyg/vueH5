<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <keep-alive>
      <HelloWorld msg="Welcome to Your Vue.js App" v-model:title="tit"
                  v-bind:list="lists"
      />
    </keep-alive>

    <input type="button" @click="debounceClick" value="防抖按钮"/>


    <input type="button" @click="throttleClick" value="节流函数"/>

    <div class="hrefBtn" @click="go">去count页面</div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { debounce, throttle } from '../utils/utils'

export default {
  name: 'Home',
  data() {
    return {
      tit: '32411123',
      lists: [
        {name: 'Amy', age: 18},
        {name: 'Jack', age: 18},
        {name: 'Judy', age: 18},
      ]
    }
  },
  created() {
  },
  methods: {
    debounceClick :debounce(function() {
      console.log(111)
    }, 500),
    throttleClick: throttle(function() {
      console.log(222)
    }, 1000),
    go() {
      this.$router.push('/count')
    }
  },
  components: {
    HelloWorld
  }
}
</script>

<style lang="less" scoped>
  .hrefBtn {
    width: 300px;
    height: 150px;
    line-height: 150px;
    font-size: 28px;
    background: indianred;
  }
</style>
