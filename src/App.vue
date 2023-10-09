<template>
  <div class="Header">
    <div class="Menu">
    <div>
      <img src="./assets/logo.png" alt="logo">
    </div>
    <div class="nav">
    <router-link to="/">Главная</router-link>
    <router-link to="/cart">Корзина</router-link>
    </div>
    </div>
    <main class="container">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
.Menu {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
}
.nav {
  display: flex;
  gap: 24px;
}

.nav>a {
  text-decoration: none;
  color: black;
  transition: color 0.3s ease;
}

.nav>a:hover {
  color: #BA967D;
}

.container {
  line-height: 0;
  justify-content: center;
  align-items: center;
  display: flex;
}
</style>