<script lang="ts">
import {defineComponent} from 'vue';
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default defineComponent({
  name: "AppLayout",

  components: {
    Header,
    Footer
  }
})
</script>

<template>
  <div>
    <Header />
    <Footer />
  </div>
</template>

<style scoped></style>
