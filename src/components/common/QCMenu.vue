<template>
  <div class="sidebar">
    <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" theme="dark" unique-opened router>
      <el-submenu v-for="(nav, index) in userNav" :key="index" :index="index.toString()">
        <template slot="title"><i class="el-icon-menu"></i>{{nav.menuName}}</template>
        <el-menu-item v-for="subNav in nav.children" :key="subNav.url" :index="subNav.url">{{subNav.menuName}}</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
  import configUrl from '../../data/configUrl'
  import { mapGetters } from 'vuex'
  export default {
     data () {
      return {
      }
    },
    created() {
     	this.navInit()
    },
    methods: {
      navInit() {
      	let _this = this
        let opt = {
        	url: configUrl.userNav.dataUrl,
          type: 'post',
          data: {
        		node: 'root'
          },
          success: function (resp) {

          },
          fail: function (resp) {
            _this.$message({
              showClose: true,
              message: resp.msg,
              type: 'error'
            });
            console.log(resp)
          }
        }
        this.$store.dispatch('userNav', opt);
      }
    },
    computed:{
      ...mapGetters({
      	userNav: 'getUserNav'
      }),
      onRoutes(){
        return this.$route.path.replace('/','');
      }
    }
  }
</script>
<style scoped>
  .sidebar{
    display: block;
    position: absolute;
    width: 250px;
    left: 0;
    top: 70px;
    bottom:0;
    background: #2E363F;
  }
  .sidebar > ul {
    height:100%;
  }
</style>
