<template>
  <div>
    <header class="cabecalho">
        <img src="../../images/logo3.png" style="width:140px; height:130px; margin-left: 45px;"/>
            <div class="cabecalho__menu">
                <nav class="cabecalho__nav">
                    <!--<router-link 
                      :to="{name: 'Home'}" 
                      class="cabecalho__nav--title"
                    /> -->
                    <a href="" class="cabecalho__nav-itens">
                        <img src="../../images/pin-de-localizacao.png" style="width: 30px; height:30px; margin-right: 10px;"/>
                        <span id="location"> Cidade: Natal </span>
                    </a>
                    <a href="" class="cabecalho__nav-itens">
                        <img src="../../images/telefone.png" style="width: 30px; height:30px; margin-right: 12px;"/>
                        <span id="attendance"> Contato </span>
                    </a>
                    <a href="/lista-de-desejos" class="cabecalho__nav-itens"> 
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

<style src="./styles.scss" lang="scss" />
