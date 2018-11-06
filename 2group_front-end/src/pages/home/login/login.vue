<!--<script src="../../.postcssrc.js"></script>-->
<template>
    <div class="login">
      <!--<img src="../assets/loginImg.jpg" alt="">-->
      <l-login></l-login>
  </div>
</template>

<script>
  import loginCount from '@/pages/home/login/logincount'
    export default {
        components: {
          'l-login': loginCount,
        },
        name: "login",
        data () {
          return {

          }
        },
    }
</script>

<style scoped>
  .login {
    background: url('../../../assets/img/07.jpg') no-repeat center center;
    -webkit-background-size:100% 100% ;
    background-size: 100% 100%;
    height: 650px;
  }
</style>
