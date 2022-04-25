<template>
  <div 
    class="remove-bookmark"
    @click="removeItemFromWishlist(productId)"
  >
    <close-circle-outline
      class="item__remove"
      :size="32"
    />
  </div>
</template>

<script src="./script.js" />

<style src="./styles.scss" lang="scss" scoped />