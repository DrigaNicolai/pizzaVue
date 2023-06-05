<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Cart",

  methods: {
    closeModal() {
      this.$emit("closeModal");
    },
  }
})
</script>

<template>
  <div class="modal modal-cart">
    <div class="modal-dialog">
      <div class="modal-header">
        <h3 class="modal-title">Корзина</h3>
        <button class="close" @click="closeModal">&times;</button>
      </div>
      <div class="modal-body">
        <div class="food-row">
          <span class="food-name">Ролл угорь стандарт</span>
          <strong class="food-price">250 ₽</strong>
          <div class="food-counter">
            <button class="counter-button">-</button>
            <span class="counter">1</span>
            <button class="counter-button">+</button>
          </div>
        </div>
        <div class="food-row">
          <span class="food-name">Ролл угорь стандарт</span>
          <strong class="food-price">250 ₽</strong>
          <div class="food-counter">
            <button class="counter-button">-</button>
            <span class="counter">1</span>
            <button class="counter-button">+</button>
          </div>
        </div>
        <div class="food-row">
          <span class="food-name">Ролл угорь стандарт</span>
          <strong class="food-price">250 ₽</strong>
          <div class="food-counter">
            <button class="counter-button">-</button>
            <span class="counter">1</span>
            <button class="counter-button">+</button>
          </div>
        </div>
        <div class="food-row">
          <span class="food-name">Ролл угорь стандарт</span>
          <strong class="food-price">250 ₽</strong>
          <div class="food-counter">
            <button class="counter-button">-</button>
            <span class="counter">1</span>
            <button class="counter-button">+</button>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <span class="modal-pricetag">1250 ₽</span>
        <div class="footer-buttons">
          <button class="button button-primary">Оформить заказ</button>
          <button class="button clear-cart">Отмена</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
