<script lang="ts">
import {defineComponent} from 'vue'
import type {LoginFormInterface} from "@/ts/interfaces";

export default defineComponent({
  name: "Auth",

  data: () => ({
    loginForm: {
      username: "" as string,
      password: "" as string
    } as LoginFormInterface
  }),

  methods: {
    closeModal() {
      this.$emit("closeModal");
    },
    login() {
      this.$emit("login", this.loginForm.username);
      this.closeModal();
    }
  }
})
</script>

<template>
  <div class="modal-auth">
    <div class="modal-dialog modal-dialog-auth">
      <button class="close-auth" @click="closeModal">&times;</button>
      <form id="logInForm" @submit.prevent="login()">
        <fieldset class="modal-body">
          <legend class="modal-title">Авторизация</legend>
          <label class="label-auth">
            <span>Логин</span>
            <input id="login" type="text" v-model="loginForm.username" />
          </label>
          <label class="label-auth">
            <span>Пароль</span>
            <input id="password" type="password" v-model="loginForm.password" />
          </label>
        </fieldset>
        <div class="modal-footer">
          <div class="footer-buttons">
            <button class="button button-primary button-login" type="submit">Войти</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.modal-auth {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 999;
}

.modal-dialog-auth {
  width: auto;
  position: relative;
}

.label-auth {
  display: block;
  margin: 30px;
}

.label-auth span {
  width: 80px;
  display: inline-block;
}

.close-auth {
  font-size: 36px;
  border: none;
  background-color: transparent;
  position: absolute;
  top: 10px;
  right: 20px;
}

.modal-auth {
  justify-content: flex-end;
}
</style>