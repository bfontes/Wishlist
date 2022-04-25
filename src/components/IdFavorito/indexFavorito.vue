<template>
    <span 
      class="home-favorito"
      @click="toogleWishlist"
    >
      <heart :fill-color.sync="isChecked" />
    </span>
</template>

<script src="./script.js"></script>

<style src="./styles.scss" lang="scss" />