<template>
  <div class="home">

<!--    <img alt="Vue logo" src="../assets/logo.png">-->

    <Combination :user="combinationUser"></Combination>

    <keep-alive>
      <HelloWorld msg="Welcome to Your Vue.js App" v-model:title="tit"
                  class="baz boo"
                  v-bind:list="lists"
      />
    </keep-alive>

    <input type="button" @click="changeShowFlag" value="显示我的组件"/>
    <div v-if="showMineFlag">
      <MyComponent class="baz">
        <template #user>名字是user的具名插槽</template>
      </MyComponent>
    </div>


    <input type="button" @click="debounceClick" value="防抖按钮"/>


    <input type="button" @click="throttleClick" value="节流函数"/>

    <input type="button" @click="change" value="改变列表数据"/>

    <div class="hrefBtn" @click="go">去count页面</div>
  </div>
  <div id="demo">
    点击点击
    <div :class="{ shake: noActivated }">
      <button @click="noActivated = true">Click me</button>
      <span v-if="noActivated">Oh no!</span>
    </div>

    <div @mousemove="xCoordinate" :style="{ backgroundColor: `hsl(${x}, 80%, 50%)` }" class="movearea">
      <h3>移动你的鼠标</h3>
      <p>x: {{x}}</p>
    </div>

    <div>
      <button @click="show = !show">Toggle</button>

      <transition name="fade">
        <p v-if="show">hello</p>
      </transition>
    </div>

  </div>

</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import MyComponent from "../components/MyComponent";
import Combination from "../components/Combination";
import { debounce, throttle } from '../utils/utils'

export default {
  name: 'Home',
  provide() {
    return {
      phone: 18888888888,
      list: this.lists,
      listLen: this.lists.length,
    }
  },
  data() {
    return {
      combinationUser: '组合式使用者',
      showMineFlag: false,
      noActivated: false,
      show: true,
      tit: '32411123',
      x: 0,
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
    change() {
      this.lists.push({
        name: '你猜猜吧', age: 20
      })
    },
    xCoordinate(e) {
      this.x = e.clientX
      console.log(e.clientX)
    },
    changeShowFlag() {
      this.showMineFlag = !this.showMineFlag
    },
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
    HelloWorld,
    MyComponent,
    Combination
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

  #demo {
    .shake {
      animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
      transform: translate3d(0, 0, 0);
      backface-visibility: hidden;
      perspective: 1000px;
    }
    .movearea {
      transition: 0.2s background-color ease;
    }
    .fade-enter-active,
    .fade-leave-active {
      transition: opacity 0.5s ease;
    }

    .fade-enter-from,
    .fade-leave-to {
      opacity: 0;
    }
  }

  @keyframes shake {
    10%,
    90% {
      transform: translate3d(-1px, 0, 0);
    }

    20%,
    80% {
      transform: translate3d(2px, 0, 0);
    }

    30%,
    50%,
    70% {
      transform: translate3d(-4px, 0, 0);
    }

    40%,
    60% {
      transform: translate3d(4px, 0, 0);
    }
  }
</style>
