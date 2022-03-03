<template>
  <h1>******子组件******</h1>
  <p :class="$attrs.class">Hi!</p>
  <span>This is a child component</span>
  <div :style="styleObj">这是一个div</div>

  <slot name="user"></slot>

  <grand-son></grand-son>
</template>

<script>
  import GrandSon from "./GrandSon";
  export default {
    name: "MyComponent",
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
