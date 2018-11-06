<template>
	<div class="home_right_content col-md-12">
		<a href="#/home/addDepartement" class="flex">
			<div class="font">
				<span class="iconfont icon-jiajianzujianjiahao">
					
				</span>
			</div>
			<p><b>部门设置</b></p>
		</a>
		<a href="#/home/DepartmentList" class="flex">
			<div class="font">
				<span class="iconfont icon-ai-eye">
					
				</span>
			</div>
			<p><b>部门信息</b></p>
		</a>
		<a href="#/home/infor_staff" class="flex">
			<div class="font">
				<span class="iconfont icon-duorenyonghu icon-parson">
					
				</span>
			</div>
			<p><b>员工信息</b></p>
		</a>
		<a href="#/home/add_staff" class="flex">
			<div class="font">
				<span class="iconfont icon-geren6">
					
				</span>
			</div>
			<p><b>员工录入</b></p>
		</a>
		
	</div>
	
</template>

<script>
</script>

<style >
	.home_right_content{
		background: #f3f3f3;
		height: 25%;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	.home_right_content .flex{
		width: 23%;
		height: 80%;
		/*border: 1px solid #000000;*/
		border-radius: 5px;
		display: flex;
		justify-content: center;
		align-items: center;
		color: black;
		
	}
	.font{
		height: 70px;
		width: 70px;
		background: white;
		border-radius:50% ;
		margin-right: 20px;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.icon-jiajianzujianjiahao{
		color: #ed5564;
		font-size: 40px;
	}
	.icon-ai-eye{
		color: #1ab394;
		font-size: 40px;
	}
	.icon-parson{
		color:#f8ad59 ;
		font-size: 40px;
	}
	.icon-geren6{
		color:#22c6c8 ;
		font-size: 40px;
	}
	.home_right_content .flex:nth-of-type(1){
		background: #ed5564;
	}
	.home_right_content .flex:nth-of-type(2){
		background: #1ab394;
	}
	.home_right_content .flex:nth-of-type(3){
		background: #f8ad59;
	}
	.home_right_content .flex:nth-of-type(4){
		background: #22c6c8;
	}
</style>