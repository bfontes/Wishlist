<template>
  <div>
    <ul 
      v-if="products.length"
      class="home__lista"
    >
      <li
        v-for="product in products"
        :key="product.id"
        class="home__lista--itens"
      >
        <home-produto :product.sync="product"/>
      </li>
    </ul>
 
    <section 
      v-else 
      class="home__lista__no-data"
    >
      <h1>Nenhum produto encontrado</h1>
    </section>
  </div>
</template>

<script src="./script.js" />

<style src="./styles.scss" lang="scss" scoped />

