<script lang="ts">
import {defineComponent} from 'vue';
import RESTAURANTS_LIST from "@/static/db/partners.json";
import type {RestaurantCardInterface} from "@/ts/interfaces";
import RestaurantCard from "@/components/cards/Restaurant.vue";

export default defineComponent({
  name: "Home",

  components: {
    RestaurantCard
  },

  data: () => ({
    restaurantsList: RESTAURANTS_LIST as Array<RestaurantCardInterface>
  }),
})
</script>

<template>
  <main class="main">
    <div class="container">
      <section class="container-promo">
        <section class="promo pizza">
          <h1 class="promo-title">Онлайн-сервис <br />доставки еды на дом</h1>
          <p class="promo-text">
            Блюда из любимого ресторана привезет курьер в перчатках, маске и с антисептиком
          </p>
        </section>
      </section>
      <section class="restaurants">
        <div class="section-heading">
          <h2 class="section-title">Рестораны</h2>
          <label class="search">
            <input type="text" class="input input-search" placeholder="Поиск блюд и ресторанов" />
          </label>
        </div>
        <div class="cards cards-restaurants">
          <RestaurantCard
            v-for="(restaurant, index) in restaurantsList"
            :restaurant="restaurant"
            :key="index"
          />
        </div>
      </section>
    </div>
  </main>
</template>

<style scoped>
promo pizza* {
  box-sizing: border-box;
}

.input-search {
  width: 300px;
  background-image: url(@/assets/icon/search.svg);
}

.promo-slider {
  width: 600px;
  height: 300px;
}

.promo {
  box-shadow: 0 7px 12px rgba(158, 158, 163, 0.1);
  border-radius: 10px;
  padding: 68px 70px;
  margin-bottom: 56px;
}

.pizza {
  background: #fff1b8 url(@/assets/promo/pizza.png) no-repeat top -100px right -250px / 830px
}

.kebab {
  background: #D6E4FF url(@/assets/promo/kebab.png) no-repeat top 45px right 40px / 450px;
}

.vegetables {
  background: #FFF566 url(@/assets/promo/vegetables.png) no-repeat top 0 right 0 / 825px
}

.sushi {
  background: #FFF1F0 url(@/assets/promo/sushi.png) no-repeat top 10px right 15px / 500px
}

.promo-title {
  font-style: normal;
  font-weight: bold;
  font-size: 39px;
  line-height: 46px;
  color: #302c34;
}

.promo-text {
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
  color: #302c34;
  max-width: 538px;
}

.main {
  background: linear-gradient(180deg, rgba(245, 245, 245, 0) 1.04%, #f5f5f5 100%);
}

.section-heading {
  display: flex;
  align-items: center;
  margin-bottom: 44px;
}

.section-title {
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;
  margin: 0 30px 0 0;
  color: #000000;
}
</style>