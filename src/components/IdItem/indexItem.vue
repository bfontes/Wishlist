<template>
  <!--class="mn-item"-->
  <article class="home-produtos">

    <home-favorito 
      v-if="$route.name === 'Home'"
      class="home-produtos__favorito"
      :item-id.sync="product.id"
    />

    <remove-bookmark
      v-if="$route.name === 'Wishlist'"
      :product-id="product.id"
    />

    <div class="home-lista-item__container">
      <img
        class="home-lista-item__container__image"
        src="https://via.placeholder.com/200x200" 
        :alt="product.title"
      />
      <p class="home__lista-item__titulo">{{ product.title }}</p>
      <p class="home__lista-item__preco">{{`${price}`}}</p>
      <router-link
        class="home__lista-item__botao"
        :to="{name: 'Product',  params: { sku: product.sku }}">
        <eye-icon />&nbsp; Ver detalhes
      </router-link>
    </div>
  </article>
</template>

<script src="./script.js"></script>

<style src="./styles.scss" lang="scss" />



