<template>
  <section class="product">
    <article class="product__description">
      <span 
        v-if="item.isFreeShipping"
        class="product__details--freeshipping"
      >
        <truck-icon fill="#7cdb67" /> &nbsp; Frete Grátis
      </span>
      <h1 class="product__title">
        {{ `${item.title} - ${item.description}` }} 
      </h1>
      <p>Ref.: {{item.sku}}</p>
      <h1 class="product__details--price">{{price}}</h1>
      <ul class="product__sizes">
        <li
          v-if="item.availableSizes.S > 0" 
          class="product__sizes--item"
        > 
          S
        </li>
        <li
          v-if="item.availableSizes.M > 0" 
          class="product__sizes--item"
        >
          M
        </li>
        <li
          v-if="item.availableSizes.G > 0" 
          class="product__sizes--item"
        >
          G
        </li>
        <li
          v-if="item.availableSizes.GG > 0" 
          class="product__sizes--item"
        >
          GG
        </li>
        <li
          v-if="item.availableSizes.GGG > 0" 
          class="product__sizes--item"
        >
          GGG
        </li>
      </ul>
    </article>

    <div class="product__image">
      <home-favorito 
        v-model="item.id"
      />
      <img :src="item.image" :alt="item.title">
    </div>

  </section>
</template>

<script src="./script.js" />
<styles src="./styles.scss" lang="scss" scoped />