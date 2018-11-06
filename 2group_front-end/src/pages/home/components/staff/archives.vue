<template>
	<div class="archives">
		
		<div class="archives_head">
			
			<h6 class="staff_link text-left" >
				<router-link to=''><b>{{ename}}的个人档案</b></router-link>
				
				<router-link to='/home/infor_staff'><b>返回列表</b></router-link>
			</h6>
			<hr />
			<!--<p>{{newdata}}</p>-->
           <div class="row flex1">
           	   <div class="col-md-11 margin1" style="border-bottom: 1px solid #ccc;">
           	   	<div class="row">
           	   		<div class="col-md-2">
           	   			<p><b>基本信息</b></p>
           	   		</div>
           	   		<div class="col-md-7 ">
           	   			<h6 class="text-left">{{newdata.eSex}}&nbsp;农历&nbsp;{{newdata.eBirthdate}}出生&nbsp;今年28岁&nbsp;{{newdata.department_dId}}</h6>
						<h6 class="text-left">联系电话：12306&nbsp;来自：贵州&nbsp;现住地：遵义</h6>
           	   		</div>
           	   	</div>
           	   </div>
           	   <!---->
           	  <div class="col-md-11 margin1" style="border-bottom: 1px solid #ccc;">
           	   	<div class="row">
           	   		<div class="col-md-2">
           	   			<p><b>相关信息</b></p>
           	   		</div>
           	   		<div class="col-md-7 ">
           	   			<h6 class="text-left">所在部门：{{newdata.department_dName}}&nbsp;职称：员工&nbsp;职务：营销</h6>
					<h6 class="text-left">入职时间：n{{newdata.eStartTime}}&nbsp;工龄：8年&nbsp;工作状态：{{newdata.eCondition}}</h6>
           	   		</div>
           	   	</div>
           	   </div>
           	   <!---->
           	   <div class="col-md-11 margin1">
           	   <div class="row">
           	   		<div class="col-md-2">
           	   			<p><b>相关信息</b></p>
           	   		</div>
           	   		<div class="col-md-7 ">
           	   			<h6 class="text-left">编号：1&nbsp;学历：大专&nbsp;民族：汉族</h6>
						<h6 class="text-left">政治面貌：团员&nbsp;身高：180cm&nbsp;体重：145kg</h6>
						<h6 class="text-left">身份证号：123456789101213&nbsp;QQ：000000&nbsp;邮箱：{{newdata.eEmail}}</h6>
						<h6 class="text-left">工作经验：无</h6>
						<h6 class="text-left">掌握技能：Java/bootstrap/php</h6>
           	   		</div>
           	   	</div>
           	   </div>
           </div>
		</div>
		
	</div>
</template>

<script>
	export default{
		name:"archives",
		data(){
			return {
				
				    newdata:0,
					eId:'',
					ename:'',
					name:"lisi"
				
			}
		},
		methods:{
			seeArchives(){
				const isthis = this	
				this.ename=this.$route.query.name;
				this.eId=this.$route.query.eId;
				
				var params = new URLSearchParams()
				params.append("eId",this.eId)
				
		//		      console.log(isthis);
				  this.$axios({
				        method: 'post',
				        url: 'http://result.eolinker.com/Q9eHf3244b14d9dcb28d9d39f49281942f0ee9e887339de?uri=http://39.108.75.4/hpms/public/employee/getDetailed',			        
				        data:params	        
				  })
				      // .then为请求成功的回调函数
				    .then((response)=>{
				          if (response.status === 200) {
				            
				            isthis.newdata=response.data.data;
//				            isthis.ename=isthis.newdata.eName;
				            console.log(isthis.newdata);
				            
				          }
				    })
				        // .catch为请求失败的回调函数
				    .catch(function (error) {
				          console.log(error)
				    })  
				    console.log(this)
				   console.log(this.ename)
			}
			
		},
		mounted(){
			this.seeArchives();
		},
	}
</script>

<style>
	.archives{
		height: 82.5%;
	}
	.archives_head{
		background: white;
		height: 95%;
		width: 90%;
		margin: 10px auto;
	}
	.staff_link a{
		color: #0F0F0F;
	}
	.staff_link{
		padding: 20px 0 0 30px;
	}
	.flex1{
		display: flex;
		justify-content: center;
		padding-top: 10px;
	}
	.margin1{
		padding: 10px;
		margin: 5px 0 0 25px;
	}
</style>