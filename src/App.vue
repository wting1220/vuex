<template>
  <div id="app">
    App.vue:{{ count }}
    <br />
    completedTodos:{{ completedTodos }}
    <br />
    completedTodosCount:{{ completedTodosCount }}
    <br />
    {{ getTodosId(1) }}
    <br />
    <Count />
    <!-- <p>App.vue:{{ todos }}</p> -->
  </div>
</template>

<script>
import Count from "./components/Count.vue";
// {解构}
import { mapState, mapGetters } from "vuex";

export default {
  name: "app",
  components: {
    Count
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
