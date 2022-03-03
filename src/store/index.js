// <!--
//  * @Author: sunyinge
//  * @Date: 2022-02-21 16:49:34
//  * @LastEditors: sunyinge
//  * @LastEditTime: 2022-02-21 16:49:34
//  * @Description:
// -->
import { createStore } from 'vuex'
import { types } from "./mutation-types";

const moduleA = {
  state: () => ({
    name: '111',
    count: 1
  }),
  mutations: {
    increment (state) {
      state.count++
    }
  },
  actions: {
    incrementIfOddOnRootSum ({ state, commit, rootState }) {
      if ((state.count + rootState.count) % 2 === 1) {
        commit('increment')
      }
    }
  },
  getters: {
    doubleCount (state) {
      return state.count * 2
    },
    sumWithRootCount (state, getters, rootState) {
      return state.count + rootState.count
    }
  }
}

const moduleB = {
  state: () => ({
    name: '2222'
  }),
  mutations: {},
  actions: {}
}


export default createStore({
  state: {
    count: 0,
    todos: [
      { id: 1, text: 'laugh', done: true },
      { id: 2, text: 'cry', done: false }
    ]
  },
  getters: {
    doneTodosCount: (state, getters) => {
      return getters.doneTodos.length
    },
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    getTodoById: (state) => (id) => {
      return state.todos.find(todo => todo.id === id)
    }
  },
  mutations: {
    increment(state) {
      state.count++
    },
    incrementBy(state, payload) {
      state.count += payload.amount
    },
    // [SOME_MUTATION] (state) {
    //
    // }
  },
  actions: {
    increment({ commit }) {
      setTimeout(() => {
        commit('increment')
      }, 1000)
    },
    actionA ({ commit }) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit(types.SOME_MUTATION)
          resolve()
          reject()
        }, 1000)
      })
    },
    actionB ({ dispatch, commit }) {
      return dispatch('actionA').then(() => {
        commit(types.SOME_MUTATION)
      })
    }
  },
  modules: {
    a: moduleA,
    b: moduleB
  }
})
