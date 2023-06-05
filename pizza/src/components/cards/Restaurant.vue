<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: "RestaurantCard",

  props: {
    restaurant: {
      required: true,
      type: Object,
    }
  },
})
</script>

<template>
  <RouterLink to="" class="card card-restaurant">
    <img :src="restaurant.image" alt="image" class="card-image" />
    <div class="card-text">
      <div class="card-heading">
        <h3 class="card-title"> {{ restaurant.name }} </h3>
        <span class="card-tag tag">
          {{ restaurant.time_of_delivery }} мин
        </span>
      </div>
      <div class="card-info">
        <div class="rating">
          {{ restaurant.stars }}
        </div>
        <div class="price">
          От {{ restaurant.price }} ₽
        </div>
        <div class="category">
          {{ restaurant.kitchen }}
        </div>
      </div>
    </div>
  </RouterLink>
</template>

<style scoped>
.card-restaurant {
  cursor: pointer
}
</style>