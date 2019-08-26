<template>
  <div id="count">
    Count.vue:{{ count }}
    Count.vue:{{ todos }}
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "count",
  components: {},
  computed: {
    ...mapState(["count", "todos"])
  }
};
</script>

<style>
</style>
