<template>
<!--  <h1>******子组件******</h1>-->
<!--  <p :class="$attrs.class">Hi!</p>-->
<!--  <span>This is a child component</span>-->
<!--  <div :style="styleObj">这是一个div</div>-->

<!--  <slot name="user"></slot>-->

  <div>
<!--    <h1 v-if="this.level==='1'">-->
<!--      <slot></slot>-->
<!--    </h1>-->
<!--    <h2 v-if="this.level==='2'">-->
<!--      <slot></slot>-->
<!--    </h2>-->
<!--    <h3 v-if="this.level==='3'">-->
<!--      <slot></slot>-->
<!--    </h3>-->
  </div>



  <grand-son></grand-son>
</template>

<script>
  import { h } from 'vue'
  import GrandSon from "./GrandSon";
  export default {
    name: "MyComponent",
    render() {
      return h(
          'h' + this.level,
          {},
           this.level
      )
    },
    props: {
      level: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        styleObj: {
          color: 'red',
          fontSize: '13px'
        }
      }
    },
    components: {
      GrandSon
    }
  }
</script>

<style scoped>

</style>
