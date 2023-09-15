<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div>
      <nav class="nav">
        <RouterLink class="nav__a" to="/">Home</RouterLink>
        <RouterLink class="nav__a" to="/tasklist">LTC Quest</RouterLink>
        <RouterLink class="nav__a" to="/tasklist">Cyborg Bingo</RouterLink>
        <RouterLink class="nav__a" to="/tasklist">Booklet</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style lang="scss" scoped>
.nav {
  display: flex;
  justify-content: space-around;
  row-gap: 2.4rem;
  flex-wrap: wrap;
  font-size: 2rem;
  padding-bottom: 1.2rem;
  border-bottom: 0.1rem solid #1f1f1f;
  &__a {
    text-decoration: none;
    color: #1f1f1f;
  }
}
</style>
