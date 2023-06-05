<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: "GoodCard",

  props: {
    good: {
      required: true,
      type: Object,
    }
  },
})
</script>

<template>
  <div class="card">
    <img :src="good.image" alt="image" class="card-image" />
    <div class="card-text">
      <div class="card-heading">
        <h3 class="card-title card-title-reg">{{ good.name }}</h3>
      </div>
      <div class="card-info">
        <div class="ingredients">
          {{ good.description }}
        </div>
      </div>
      <div class="card-buttons">
        <button class="button button-primary button-add-cart">
          <span class="button-card-text">В корзину</span>
          <span class="button-cart-svg"></span>
        </button>
        <strong class="card-price-bold">{{ good.price }} ₽</strong>
      </div>
    </div>
  </div>
</template>

<style scoped>
.ingredients {
  color: #8c8c8c;
  font-size: 18px;
  line-height: 21px;
}
</style>