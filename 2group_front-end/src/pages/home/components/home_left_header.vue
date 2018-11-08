<template>
	<div class="home_left_header col-md-12">
		<img src="../../../assets/img/1.jpg" class="img-circle center-block"/> 
		<span class="btn btn-default ">{{aName||name}} </span>
		<div class=" btn-group sign_out"> <i class="glyphicon glyphicon-chevron-right"></i>
			<button class="btn dropdown-toggle btn_sign" data-toggle="dropdown" style="">
				{{aName||name}} <span class="caret"></span>
			</button>
			<ul class="dropdown-menu">
				<li><a href="#/" style="color: #0F0F0F;">安全退出</a></li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		name:'home_left_header',
		data(){
			return {
				aName:'',
				name:'admin'
			};
		},
		methods:{			
			Signout(){
				this.$axios({
		        	method:'post',
		        	url:'http://39.108.75.4/hpms/public/admin/login',
		        })
		        //请求成功数据
		        .then((response)=>{
		        	 if(response.status===200){
		        	 	
		        	 	console.log(response.data)	
		        	 }
		        })
		        //请求失败信息
		        .catch((erroe)=>{
		        	 console.log(erroe)
		        })
			},
		},
		created(){
			this.aName = this.$route.query.aName;
			console.log(this.aName);
		}
	}
</script>

<style > 
	.home_left_header img{
		width: 100px;
		height: 100px;
		border-radius: 50%;
		margin-top: 10px;
	}
	.home_left_header{
		height: 30%;
		border-bottom: 1px solid #000000;
		/*padding: 0;
		margin: 0;*/
		display: flex;
		flex-direction: column;
		padding: 10px 0 0 30px;
		background: #263948;
	}
	.home_left_header span{		
		width: 50%;
		height: 30px;
		color: white;
	}
	.home_left_header i{
		color: white;
	}
	.sign_out{				
	}
	.btn_sign{
		outline: none;
		background: none;border: none;color: white;
	}
</style>