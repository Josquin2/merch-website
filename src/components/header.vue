<script setup>
import router from '@/main'
function onProfileClick() {
  router.push({ name: 'Profile' })
}

function onHeartClick() {
  router.push({ name: 'favorites' })
}

function onCartClick() {
  router.push({ name: 'cart' })
}

function onLogoClick() {
  router.push({ name: 'main' })
}
</script>

<template>
  <header class="main-header">
    <div class="logo" @click="onLogoClick">
      <img src="/logo.png" alt="" />
    </div>
    <div class="header-buttons">
      <img src="/profile.png" alt="" @click="onProfileClick" />
      <img src="/heart.png" alt="" @click="onHeartClick" />
      <img src="/cart.png" alt="" @click="onCartClick" />
    </div>
  </header>
</template>

<style lang="scss">
.main-header {
  height: 75px;
  padding: 0 10vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #b7b7b7;

  .logo {
    cursor: pointer;
  }
  .header-buttons {
    display: flex;
    align-items: center;
    gap: 40px;

    img {
      cursor: pointer;
      opacity: 0.6;
      transition: 0.1s ease-in-out;
    }
    img:hover {
      opacity: 1;
    }
  }
}
</style>
