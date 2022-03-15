<template>
  <div>{{ count }}</div>
  <div @click="increment">加一个</div>
  <div @click="disPatch">触发actions</div>
  <div>{{fullName}}</div>

  <div id="demo" class="demo">
    <input v-model="val" type="radio" value="a" id="a"><label for="a">A</label>
    <input v-model="val" type="radio" value="b" id="b"><label for="b">B</label>
    <transition name="component-fade" mode="out-in">
      <component :is="val"></component>
    </transition>
  </div>

  <div id="list-demo">
    <button @click="add">Add</button>
    <button @click="remove">Remove</button>
    <transition-group name="list" tag="p">
      <span v-for="item in items" :key="item" class="list-item">
        {{ item }}
      </span>
    </transition-group>
  </div>
</template>

<script>
  import { mapState, mapGetters, mapMutations, mapActions   } from 'vuex'
  export default {
    name: "count",
    data() {
      return {
        items: [1, 2,3,4,5,6,7,8,9],
        nextNum: 10,
        count: 0,
        arr: [],
        str: 'Hi, How are you? hi',
        val: 'a'
      }
    },
    components: {
      'a': {
        template: '<div>Component A</div>'
      },
      'b': {
        template: '<div>Component B</div>'
      }
    },
    created() {
      console.log('moduleA', this.$store.state.a)
      this.fullName = 'John Doe';
      // console.log('值', this.$store.actions.a.dispatch('doubleCount'))
    },
    computed: {
      ...mapState({
        count: 'count'
      }),
      ...mapGetters([
          'getTodoById'
      ]),
      fullName: {
        get() {
          return this.firstName + ' ' + this.lastName
        },
        set(newValue) {
          console.log(newValue)
          const names = newValue.split(' ')
          this.firstName = names[0]
          this.lastName = names[names.length - 1]
        }
      }
      // count() {
      //   return this.$store.state.count
      // }
    },
    methods: {
      randomIndex() {
        return Math.floor(Math.random() * this.items.length)
      },
      add() {
        this.items.splice(this.randomIndex(),0, this.nextNum++)
      },
      remove() {
        this.items.splice(this.randomIndex(), 1)
      },
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

<style lang="less" scoped>
  .demo {
    .component-fade-enter-active,
    .component-fade-leave-active
    {
      transition: opacity 0.3s ease;
    }

    .component-fade-enter-from,
    .component-fade-leave-to {
      opacity: 0;
    }
  }

  .list-item {
    transition: all 0.8s ease;
    display: inline-block;
    margin-right: 10px;
  }
  .list-leave-active {
    position: absolute;
  }
  .list-enter-from,
  .list-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }
</style>
