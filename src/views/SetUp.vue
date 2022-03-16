<template>
  <div>
    <h1>组合式API</h1>

    <my-book :title="title"></my-book>

    <input type="text" value=""/>
    <input type="text" v-focus value=""/>
    <input type="text" v-focus:[direction]="200" value=""/>

    <hr/>


    <input type="range" min="0" max="500" v-model="pinPadding" />
    <p v-pin:[direction]="pinPadding">Stick me {{pinPadding}}px from the {{ direction || 'top'}} of the page</p>

  </div>
</template>

<script>
  import {h} from 'vue'
  import MyBook from "../components/MyBook";
  export default {
    name: "SetUp",
    render() {
      return h('h1', {}, '渲染函数')
    },
    data() {
      return {
        direction: 'right',
        title: 'setup深入了解',
        pinPadding: 300,
      }
    },
    directives: {
      focus: {
        mounted(el, binding) {
          // arg、value
          console.log('binding', binding)
          el.focus()
        }
      },
      pin: {
        mounted(el, binding) {
          el.style.position = "fixed"

          const s = binding.arg || 'top'
          el.style[s] = binding.value + 'px'
        },
        updated(el, binding) {
          const s = binding.arg || 'top'
          el.style[s] = binding.value + 'px'
        }
      }
    },
    components: {
      MyBook
    }
  }
</script>

<style scoped>

</style>
