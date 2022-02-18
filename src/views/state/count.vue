<template>
  <div>{{ count }}</div>
  <div @click="increment">加一个</div>
  <div @click="disPatch">触发actions</div>
</template>

<script>
  import { mapState, mapGetters, mapMutations, mapActions   } from 'vuex'
  export default {
    name: "count",
    data() {
      return {
        // count: 0,
        arr: [],
        str: 'Hi, How are you? hi'
      }
    },
    created() {
      console.log('moduleA', this.$store.state.a)
      // console.log('值', this.$store.actions.a.dispatch('doubleCount'))
    },
    computed: {
      ...mapState({
        count: 'count'
      }),
      ...mapGetters([
          'getTodoById'
      ])
      // count() {
      //   return this.$store.state.count
      // }
    },
    methods: {
      ...mapMutations([
          'incrementBy'
      ]),
      increment() {
        this.arr = this.getTodoById(2);
        console.log(this.arr)
        // this.$store.commit('increment')
        this.$store.commit({
          type: 'incrementBy',
          amount: 10
        })
      },
      ...mapActions([
          'actionA'
      ]),
      disPatch() {
        this.actionA().then(() => {
          console.log(222)
        })
      }
    }
  }
</script>

<style scoped>

</style>
