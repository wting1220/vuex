import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 属性
    count: 0,
    todos: [
      { id: 1, title: "todo item 1", completed: false },
      { id: 2, title: "todo item 2", completed: true },
      { id: 3, title: "todo item 3", completed: true },
    ]
  },
  getters: {
    count: state => ++state.count,
    completedTodos: state => state.todos.filter(todo => todo.completed),
    completedTodosCount: (state, getters) => getters.completedTodos.length,
    getTodosId: state => id => state.todos.find(todo => todo.id == id)
  },
  // 同步
  mutations: {
    incrementCount: state => state.count++,
    decrementCount: (state, payload) => state.count -= payload.amount,
    setTodos: (state, todos) => state.todos = todos
  },
  // 异步调用
  actions: {
    incrementCountAsync: ({ commit }) => {
      setTimeout(() => {
        // 解构
        // context == this.$store
        // context.commit("incrementCount")
        commit("incrementCount")
      }, 2000)
    },
    decrementCountAsync: (context, payload) => {
      setTimeout(() => {
        // context == this.$store
        context.commit("decrementCount", payload)
      }, 2000)
    },
    // ES9
    async fetchDataAsync(context) {
      // 解决异步出现混乱的情况
      const res = await Axios.get("http://jsonplaceholder.typicode.com/todos?_limit=10");
      console.log(res);
      context.commit("setTodos", res.data);
    }
  }
})
