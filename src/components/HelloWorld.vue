<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ title }}</h2>

    <div class="numberBox" v-for="item in 10"
         :key="item">
      {{item}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    title: String,
    list: {
      type: Array,
      required: true,
      default: () => {
        return []
      }
    }
  },
  data() {

  },
  created() {
    console.log(this.title)
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
  .numberBox {
    width: 100%;
    height: 100px;
    line-height: 100px;
  }
</style>
