<script lang="ts">
import {defineComponent} from 'vue';
import GoodCard from "@/components/cards/Good.vue";
import type {GoodCardInterface} from "@/ts/interfaces";
import RestaurantCard from "@/components/cards/Restaurant.vue";
import RESTAURANTS_LIST from "@/static/db/partners.json";
import type {RestaurantCardInterface} from "@/ts/interfaces";

export default defineComponent({
  name: "restaurant",

  components: {
    RestaurantCard,
    GoodCard
  },

  data: () => ({
    goodsList: [] as Array<GoodCardInterface>,
    restaurantsList: RESTAURANTS_LIST as Array<RestaurantCardInterface>,
    restaurant: {} as RestaurantCardInterface
  }),

  computed: {
    moduleName(): string | any {
      return this.$route.query.products;
    },
    restaurantName(): string | any {
      return this.$route.query.name;
    }
  },

  async mounted() {
    await this.loadGoods();
    this.loadRestaurantInfo();
  },

  methods: {
    async loadGoods(): Promise<void | never> {
      try {
        const response = await import(`@/static/db/${this.moduleName}.json`);

        this.goodsList = response.default;
      } catch (e) {
        console.error(e);
      }
    },
    loadRestaurantInfo(): void {
      this.restaurant = this.restaurantsList.find((rest) => rest.name === this.restaurantName);
    }
  }
})
</script>

<template>
  <main class="main">
    <div class="container">
      <section class="menu">
        <div class="section-heading">
          <h2 class="section-title restaurant-title"> {{ restaurant.name }} </h2>
          <div class="card-info">
            <div class="rating">
              {{ restaurant.stars }}
            </div>
            <div class="price">От {{ restaurant.price }} ₽</div>
            <div class="category">{{ restaurant.kitchen }}</div>
          </div>
        </div>
        <div class="cards cards-menu">
          <GoodCard
            v-for="(good, index) in goodsList"
            :good="good"
            :key="index"
          />
        </div>
      </section>
    </div>
  </main>
</template>

<style scoped>

</style>