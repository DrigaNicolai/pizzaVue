<script lang="ts">
import {defineComponent} from "vue";
import AppLayout from "@/layouts/index.vue";

export default defineComponent({
  name: "App",

  components: {
    AppLayout
  }
})
</script>

<template>
  <AppLayout />
</template>

<style scoped></style>
