<template>
  <div id="app">
    <!-- state -->
    <p>App.vue: {{ count }}</p>
    <Count />
    <!-- <p>App.vue:{{ todos }}</p> -->
    <br />

    <!-- getters -->
    <p>completedTodos: {{ completedTodos }}</p>
    <br />
    <p>completedTodosCount: {{ completedTodosCount }}</p>
    <br />
    <p>getTodosId: {{ getTodosId(1) }}</p>
    <br />

    <!-- mutations -->
    <button @click="decrementCount({amount:2})">-</button>
    <span>{{ count }}</span>
    <button @click="incrementCount">+</button>
  </div>
</template>

<script>
import Count from "./components/Count.vue";
// {解构}
import { mapState, mapGetters, mapMutations } from "vuex";

export default {
  name: "app",
  components: {
    Count
  },
  methods: {
    ...mapMutations(["incrementCount", "decrementCount"])
    // increment() {
    //   // 调用 mutations 里的 incrementCount
    //   this.$store.commit("incrementCount");
    // },
    // decrement(n) {
    //   this.$store.commit("decrementCount", n);
    // }
  },
  // state
  // 写法3
  // computed: {
  //   ...mapState(["count", "todos"])
  // }
  // 写法2
  // computed: mapState({
  //   count: state => state.count,
  //   todos: state => state.todos
  // })
  // 写法1
  // computed: {
  //   count() {
  //     return this.$store.state.count;
  //   },
  //   todos() {
  //     return this.$store.state.todos;
  //   }
  // }

  // getters
  // computed: {
  //   count() {
  //     return this.$store.getters.getCount;
  //   },
  //   completedTodos() {
  //     return this.$store.getters.completedTodos;
  //   },
  //   completedTodosCount() {
  //     return this.$store.getters.completedTodosCount;
  //   },
  //   getTodosId() {
  //     return this.$store.getters.getTodosId;
  //   }
  // },
  computed: {
    ...mapGetters([
      "count",
      "completedTodos",
      "completedTodosCount",
      "getTodosId"
    ])
  }
};
</script>

<style>
</style>
