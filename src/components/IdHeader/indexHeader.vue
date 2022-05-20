<template>
  <div>
    <header class="cabecalho">
        <!--<a href="/"><img src="../../images/logo3.png" style="width:140px; height:130px; margin-left: 45px;"/>-->
        <span class="cabecalho__nav--title">
            I dream
        </span>
            <div class="cabecalho__menu">
                <nav class="cabecalho__nav">
                  <a href="/" class="cabecalho__nav--itens">
                    <router-link 
                      :to="{name: 'Home'}" 
                      class="cabecalho__nav--itens"
                    > 
                    </router-link>
                    <img src="../../images/botao-home.png" style="width: 30px; height:30px; margin-right: 10px;"/>
                    <span> Home </span>
                  </a>
                    <a href="" class="cabecalho__nav--itens">
                        <img src="../../images/user.png" style="width: 30px; height:30px; margin-right: 12px;"/>
                        <span id="attendance"> Usuário </span>
                    </a>
                    <a href="/lista-de-desejos" class="cabecalho__nav--itens"> 
                      <router-link 
                        class="cabecalho__nav--itens" 
                        :to="{name: 'Wishlist'}"
                        >
                        </router-link>
                      <img src="../../images/coracao.png" style="width: 30px; height:30px; margin-right: 12px;"/>
                      <span> Lista de desejos </span> 
                    </a>
                </nav>

                <input type="search" autocomplete="off" class="cabecalho__menu-pesquisa"  placeholder="O que você está procurando?" style="box-shadow: inset 3px 2px 1px #ccc;
                border: none;"/>
            
            </div>
    </header> 

  </div>
</template>

<script src="./script.js" ></script>
<style src="./styles.scss" lang="scss" />