<script lang="ts">
import {defineComponent} from 'vue';
import ModalAuth from "@/components/modals/Auth.vue";

export default defineComponent({
  name: "Header",

  components: {
    ModalAuth
  },

  data: () => ({
    deliveryAddress: "" as string,
    username: "" as string,
    showModalAuth: false as boolean
  }),

  methods: {
    toggleModalAuth(): void {
      this.showModalAuth = !this.showModalAuth;
    },
    goToCart(): void {
      console.log("Go to cart");
    },
    login(username: string): void {
      this.username = username;
    },
    logout(): void {
      this.username = "";
      console.log("Logout");
    }
  }
})
</script>

<template>
  <div class="container">
    <header class="header">
      <RouterLink class="logo" to="">
        <img src="@/assets/icon/logo.svg" alt="Logo" />
      </RouterLink>
      <label class="address">
        <input type="text" class="input input-address" placeholder="Адрес доставки" v-model="deliveryAddress" />
      </label>
      <div class="buttons">
        <span class="user-name">{{ username }}</span>
        <button class="button button-cart" id="cart-button" @click="goToCart()">
          <span class="button-cart-svg"></span>
          <span class="button-text">Корзина</span>
        </button>
        <button
          v-if="!username"
          class="button button-primary button-auth"
          @click="toggleModalAuth()"
        >
          <span class="button-auth-svg"></span>
          <span class="button-text">Войти</span>
        </button>
        <button
          v-else
          class="button button-primary button-out"
          @click="logout()"
        >
          <span class="button-text">Выйти</span>
          <span class="button-out-svg"></span>
        </button>
      </div>
    </header>
    <ModalAuth
      v-if="showModalAuth"
      @closeModal="toggleModalAuth()"
      @login="(username) => login(username)"
    />
  </div>
</template>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
}

.address {
  flex: 0.8;
}

.input-address {
  width: 100%;
  background-image: url(@/assets/icon/home.svg);
}

.button-auth {
  background-position: 20px 13px;
}

.button .button-cart-svg {
  width: 24px;
  height: 24px;
  background-color: #595959;
  -webkit-mask: url("@/assets/icon/shopping-cart.svg") no-repeat 50% 50%;
  mask: url("@/assets/icon/shopping-cart.svg") no-repeat 50% 50%;
  background-repeat: no-repeat;
}

.button-primary .button-cart-svg {
  background-color: #fff;
}

.button:hover .button-cart-svg {
  background-color: #fff;
}

.button-primary:hover .button-cart-svg {
  background-color: #595959;
}

.button-cart {
  margin: 0 5px;
}

.button-out {
  margin: 0 5px;
}

.user-name {
  margin-right: 20px;
  font-weight: bold;
  font-size: 18px;
}
</style>