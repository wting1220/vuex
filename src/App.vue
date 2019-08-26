<template>
  <div id="app">
    App.vue:{{ count }}
    <Count />
    <p>App.vue:{{ todos }}</p>
  </div>
</template>

<script>
import Count from "./components/Count.vue";
// {解构}
import { mapState } from "vuex";

export default {
  name: "app",
  components: {
    Count
  },
  // 写法3
  computed: {
    ...mapState(["count", "todos"])
  }

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
};
</script>

<style>
</style>
