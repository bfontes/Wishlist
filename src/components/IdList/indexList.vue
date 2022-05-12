<template>
  <div>
    <ul 
      v-if="products.length"
      class="home-lista"
    >
      <li
        v-for="product in products"
        :key="product.id"
        class="home-lista--itens"
      >
      <home-produtos :product="product"></home-produtos>
      </li>
    </ul>
 
    <section 
      v-else 
      class="home-lista__no-data"
    >
      <h1>Nenhum produto encontrado</h1>
    </section>
  </div>
</template>

<script src="./script.js" />

<style src="./styles.scss" lang="scss" scoped />

