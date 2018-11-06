<template>
    <div class="home row" >
       <home-left></home-left>
       <home-right></home-right>
    </div>
</template>

<script>
import homeLeft from './components/home_left';
import homeRight from './components/home_right';

  export default {
    name: 'home',
    components:{
      homeLeft,
      homeRight
    },
    data:function(){
    	return {header:0};
    },
    computed:{
	 		newheader(){
	 			this.header=window.screen.height;
	 			return this.header-110;
	 		}
	 	},
	 mounted:function(){
	 	
	 }
  }
</script>

<style>
     .home{
       
       margin: 0 auto;   
     }

</style>
