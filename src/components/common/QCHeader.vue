<template>
  <div class="header clearfix">
    <div class="fl logo">
      进销存系统
    </div>
    <div class="fr user">
      <el-dropdown trigger="click" @command="handleCommand">
                <span class="el-dropdown-link">
                    <img class="user-logo" src="../../assets/logo.png">
                    {{username}}
                </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="loginout">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
    	return {
    		username: 12
      }
    },
    methods: {
      handleCommand(command) {
        if(command == 'loginout'){
          localStorage.removeItem('ms_username')
          this.$router.push('/login');
        }
      }
    }
  }
</script>
<style scoped>
  .header {
    display: block;
    position: relative;
    width: 100%;
    height: 70px;
    font-size: 22px;
    line-height: 70px;
    background-color: #242f42;
    color: #fff;
  }
  .header .logo{
    float: left;
    width:250px;
    text-align: center;
  }
  .user {
    float: right;
    padding-right: 50px;
    font-size: 16px;
    color: #fff;
  }
  .user .el-dropdown-link{
    position: relative;
    display: inline-block;
    padding-left: 50px;
    color: #fff;
    cursor: pointer;
    vertical-align: middle;
  }
  .user .user-logo{
    position: absolute;
    left:0;
    top:15px;
    width:40px;
    height:40px;
    border-radius: 50%;
  }
  .el-dropdown-menu__item{
    text-align: center;
  }
</style>
