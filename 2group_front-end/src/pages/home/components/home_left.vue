<template>
    <div class="home_left col-md-2 col-sm-2 col-xs-2" :style="{'height':newheader+'px'}">
         <home-left-header></home-left-header>
         <home-left-content></home-left-content>
    </div>
</template>

<script>
	import homeLeftHeader from './home_left_header';
	import homeLeftContent from './home_left_content';
    export default {
        name: "home_left",
        components:{
        	homeLeftHeader,
        	homeLeftContent
        },
        data:function(){
    	return { header:0};
    },
        computed:{
	 		newheader(){
	 			this.header=window.screen.height;
	 			return this.header-110;
	 		}
	 	}
    }
</script>

<style scoped>
   .home_left{
	padding: 0;
	margin: 0;
   }
</style>
