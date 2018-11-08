<template>
    <div class="home_right col-md-10 col-sm-10 col-xs-10" >	    
	      <home-right-header></home-right-header>
          <router-view></router-view>
          <home-right-footer></home-right-footer>
    </div>
</template>

<script>
	import homeRightHeader from './home_right_header';	
	import homeRightFooter from './home_right_footer';
	
    export default {
        name: "home_right",
        components:{
        	homeRightHeader,       	
        	homeRightFooter
        },
        data:function(){
    	return {header:0};
    },
    computed:{
	 		newheader(){
	 			this.header=window.screen.height;
	 			return this.header;
	 		}
	 	},
    }
</script>

<style scoped>
   .home_right{   
   	background: #F3F3F3;
   	border: 1px solid #000000;
   	margin: 0;
   	padding: 0;
   }
</style>
