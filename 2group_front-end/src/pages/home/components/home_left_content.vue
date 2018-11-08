<template>
	<div class="home_left_content col-md-12">
		<div class="department"> 
			<div class="title">
				<div class="font-circle" >
					<span class="iconfont icon-geren7 color-blue"></span>
				</div>
				&nbsp; 部门管理  &nbsp; &nbsp; &nbsp;
				<span class="iconfont icon-jiantouarrowhead7"></span>
			</div>
			<ul style="display: none;">
				<router-link to="/home/addDepartement">添加部门</router-link><br />
				<router-link to="/home/DepartmentList">部门信息</router-link>
			</ul>
		</div>
		<!--员工管理-->
		<div class="staff" style="margin-top: 30px;">
			 <div class="title">
			 	<div class="font-circle1">
			 		<span class="iconfont icon-duorenyonghu color-blue" style="color: ;"></span>
			 	</div>
			 	
			 	&nbsp;员工管理 &nbsp; &nbsp; &nbsp;<span class="iconfont icon-jiantouarrowhead7">
			 		
			 	</span>
			 </div>
			 <ul style="display: none;">
				<router-link to="/home/add_staff">添加员工</router-link><br />
				<router-link to="/home/infor_staff">员工信息</router-link>
			</ul>
		</div>
		<!--图表-->
		<div class="chart" style="margin-top: 30px;">
			 <div class="title">
			 	<div class="font-circle1">
			 		<span class="iconfont icon-duorenyonghu color-blue" style="color: ;"></span>
			 	</div>
			 	
			 	&nbsp;数据图表 &nbsp; &nbsp; &nbsp;<span class="iconfont icon-jiantouarrowhead7">
			 		
			 	</span>
			 </div>
			 <ul style="display: none;">
				<router-link to="/home/chart_deparment">部门图表</router-link><br />
				<router-link to="/home/chart_staff">员工图表</router-link>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{
		name:"home_left_content",
		data:function(){
			return {};
		},
		mounted:function(){
			$(function(){
				$(".department .title").on("click",function(){
					$(".department ul").slideToggle(500);
					$(this).parent("div").toggleClass("black");
					$(".department span").toggleClass("icon-jiantouarrowhead7").addClass("icon-jiantouarrow483");
					$(".font-circle span").toggleClass("color-blue");
				});
				$(".staff .title").on("click",function(){
					$(".staff ul").slideToggle(500);
					$(this).parent("div").toggleClass("black");
					$(".staff span").toggleClass("icon-jiantouarrowhead7").addClass("icon-jiantouarrow483");
					$(".font-circle1 span").toggleClass("color-blue");
				});
				$(".chart .title").on("click",function(){
					$(".chart ul").slideToggle(500);
					$(this).parent("div").toggleClass("black");
					$(".chart span").toggleClass("icon-jiantouarrowhead7").addClass("icon-jiantouarrow483");
					$(".font-circle1 span").toggleClass("color-blue");
				});
			})
		}
		
	}
	
</script>

<style scoped>
	.home_left_content{
		background: #057fca;
		height: 70%;
		padding-top: 38px;
	}
	.department .title,.staff .title,.chart .title{
		cursor: pointer;
		overflow: hidden;
		display: flex;
		justify-content: center;
		align-items: center;		
	}
	.font-circle,.font-circle1{
		height: 30px;
		width: 30px;
		border-radius:50% ;
		background: white;
		display: flex;
		justify-content: center;
		align-items: center;
		color: black;
	}
	.color-blue{
		color:#057fca ;
	}
	.color-black{
		color: black;
	}
	.department,.staff,.chart{
		color: white;
	}
	.staff{		
	}	
	.black{
		background: #263948;
		margin: 0;
		padding: 0;
	}
</style>