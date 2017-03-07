<template>
  <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
    <div>

        <q-c-header></q-c-header>

        <q-c-menu></q-c-menu>

        <div class="content">
          <router-view></router-view>
        </div>
    </div>
  </transition>
</template>
<script>
  import { QCHeader, QCMenu } from '../components'
  export default {
    components: {
      QCHeader,
      QCMenu,
    }
  }
</script>
<style scoped>
  .content{
    background: none repeat scroll 0 0 #fff;
    position: absolute;
    left: 250px;
    right: 0;
    top: 70px;
    bottom:0;
    width: auto;
    padding:40px;
    box-sizing: border-box;
    overflow-y: scroll;
  }
</style>
