<script>
import axios from "axios";
import { store } from "../store";
export default {
  name: "AppSearch",
  data() {
    return {
      store,
    };
  },
  methods: {
    getList() {
      axios.get(store.endpoint_archetype).then((response) => {
        this.store.archetype = response.data;
      });
    },
  },
  created() {
    this.getList();
  },
};
</script>
<template lang="">
  <div>
    <select v-model='store.search' @change="$emit('searched')">
      <option value="">Tutti</option>
      <option
        :value="archetype.archetype_name"
        v-for="(archetype, index) in store.archetype"
        :key="index"
      >
        {{ archetype.archetype_name }}
      </option>
    </select>

  </div>
</template>
<style lang="scss" scoped>
div {
  margin: 0 auto;
  max-width: 1200px;
  height: 100px;
  position: relative;
  display: flex;

  select {
    position: absolute;
    top: -100px;
    padding: 0 10px;
    height: 40px;
  }

  input {
    padding: 10px;
    height: 10px;
    position: absolute;
    bottom: 20px;
    left: 215px;
    height: 40px;
  }
}
</style>
