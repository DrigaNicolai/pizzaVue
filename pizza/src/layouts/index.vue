<script lang="ts">
import {defineComponent} from 'vue';
import Header from "@/components/Header.vue";

export default defineComponent({
  name: "AppLayout",

  components: {
    Header
  }
})
</script>

<template>
  <div>
    <Header />
  </div>
</template>

<style scoped></style>
