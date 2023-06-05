<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: "Footer"
})
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-block">
        <img src="@/assets/icon/logo.svg" alt="logo" class="logo footer-logo" />
        <nav class="footer-nav">
          <RouterLink to="" class="footer-link">
            Ресторанам
          </RouterLink>
          <RouterLink to="" class="footer-link">
            Курьерам
          </RouterLink>
          <RouterLink to="" class="footer-link">
            Пресс-центр
          </RouterLink>
          <RouterLink to="" class="footer-link">
            Контакты
          </RouterLink>
        </nav>
        <div class="social-links">
          <RouterLink to="" class="social-link">
            <img src="@/assets/social/instagram.svg" alt="instagram" />
          </RouterLink>
          <RouterLink to="" class="social-link">
            <img src="@/assets/social/fb.svg" alt="facebook" />
          </RouterLink>
          <RouterLink to="" class="social-link">
            <img src="@/assets/social/vk.svg" alt="vk" />
          </RouterLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  padding: 60px 0;
}

.footer-block {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.footer-nav {
  margin-left: 35px;
  margin-right: auto;
}

.footer-link {
  display: inline-block;
  color: #595959;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  text-decoration: none;
}

.footer-link:not(:last-child) {
  margin-right: 15px;
}

.social-links {
  display: flex;
  align-items: center;
}

.social-link:not(:last-child) {
  margin-right: 21px;
}
</style>
