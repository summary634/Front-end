<template>
	<div class="add_staff">
		
		<div class="staff_header">
			<h6 class="staff_link text-left" >
				<router-link to='/home/add_staff'><b>添加员工</b></router-link>
				<router-link to='/home/infor_staff'><b>员工信息</b></router-link>
			</h6>
			<hr />
			<!--查看员工信息-->
			 <div class="infor_row">
			 	<!--<hr />-->
			 	<!--<form action="http://39.108.75.4/hpms/public/employee/add" method="post">-->
			 		<div class="row">
			 			<div class="col-md-10">
			 				<div class="row row_col">
			 					<!---->
			 					<div class="col-md-3">
			 						<label class="text-right">姓名：</label>
			 					</div>
			 					<div class="col-md-7 ">
			 						<input type="text" class="form-control" name="eName" ref="eName" placeholder="例：lisi">
			 					</div>
			 					<!---->
			 					<div class="col-md-3">
			 						<label class="text-right">性别：</label>
			 					</div>
			 					<div class="col-md-7 ">
			 						
			 						 <input type="radio" name="inlineRadioOptions" id="inlineRadio1"    ref="eSex" v-model="eSex" checked="checked" value="男">男 
			 						 <input type="radio" name="inlineRadioOptions" id="inlineRadio1"  ref="eSex" v-model="eSex" value="女">女 
			 						
			 					</div>
			 					<!---->
			 					<!---->
			 					<div class="col-md-3">
			 						<label class="text-right">生日：</label>
			 					</div>
			 					<div class="col-md-7 ">
			 						<!--<select>
		                                <option>公</option>
		                                <option>农</option>
		                            </select>&nbsp;&nbsp;&nbsp;-->
		                            <input type="date"   id="input12" ref="eBirthdate" name="eBirthdate">
			 					</div>
			 					<!---->
			 					<div class="col-md-3">
			 						<label class="text-right">邮箱：</label>
			 					</div>
			 					<div class="col-md-7 ">
			 						<input type="email" class="form-control" ref="eEmail" name="eEmail" placeholder="例：5201314@qq.com">
			 					</div>
			 					<!---->
			 					<div class="col-md-3">
			 						<label class="text-right">编号：</label>
			 					</div>
			 					<div class="col-md-7 ">
			 						<select  class="form-control"  ref="department_dId" name="department_dId">
			 						     <option> 请选择部门</option>
	                                    <option :value="data.dId" v-for="data in newdata">{{data.dName}}</option>
			 						</select>
			 					</div>
			 					<!---->
			 					
			 		
			 					<!---->
			 					<div class="col-md-3">
			 						<label class="text-right">入职日期：</label>
			 					</div>
			 					<div class="col-md-7 ">
			 						<input type="date" class="form-control" ref="eStartTime" name="eStartTime" placeholder="例：2018-06-13">
			 					</div>
			 					<!---->
			 					<div class="col-md-3">
			 						<label class="text-right">职称：</label>
			 					</div>
			 					<div class="col-md-7 ">
			 						<select class="form-control" id="input5" ref="eCondition" name="eCondition">
	                                    <option>请选择</option>
	                                    <option>在职</option>
	                                    <option>离职</option>
	                                   
                               		 </select>
			 					</div>
			 		
			 				</div>
			 			</div>
			 		
			 		</div>
			 		<button @click="addstaff()" class="btn btn-info" style="margin: 10px;">添加员工</button>
			 		<!--<input type="submit" name="" id="" value="添加员工" class="btn btn-info" />-->
			 	<!--</form>-->
			 </div>
			<!--查看员工信息-->
		</div>
	</div>
</template>

<script>
	 export default{
	 	name:'add_staff',
	 	data:function(){
	 		return {
	 			eSex:'',
	 			header:0,
	 			newdata:[]
	 		}
	 	},
	 	computed:{
	 		newheader(){
	 			this.header=window.screen.height;
	 			return this.header-100
	 		},
	 		
	 	},
	 	methods:{
	 		addstaff(){
	 			
	 			var eName= this.$refs.eName.value
	 			var eSex= this.eSex
	 			var eBirthdate= this.$refs.eBirthdate.value
	 			var eEmail= this.$refs.eEmail.value
	 			var department_dId= this.$refs.department_dId.value
	 			
	 			var eCondition=this.$refs.eCondition.value
	 			if(this.$refs.eCondition.value=='在职'){
                	  var	eCondition=1;
                	}else{
                	var	eCondition=0;
                	}
	 			var eStartTime= this.$refs.eStartTime.value
	 			console.log(eName, eSex, eBirthdate, eEmail, department_dId, eCondition, eStartTime)
	 			
                 var Sentence=((eName==''||eName==null)||
                   (eSex==''||eSex==null)||
                   (eBirthdate==''||eBirthdate==null)||
                   (eEmail==''||eEmail==null)||
                   
                   (eStartTime==''||eStartTime==null)
                
                )
                if(Sentence){
                	alert("字段不能为空！")
                }else{
                	$.ajax({
					      url: 'http://localhost:8088/employee/add',
					      method: "post",
					      data: {
					        eName: eName,
					        eBirthdate: eBirthdate,
					        eEmail: eEmail,
					        eSex: eSex,
					        eCondition: eCondition,
					        eStartTime:eStartTime,
					        department_dId: department_dId,
					        
					      },
					      success: (res) => {
					        if(res.success==true){
					        	this.$router.push("/home/infor_staff")
					        }
					      },
					      error: (err) => {
					        console.log(err);
					      }
					    })
                }
	 	
	 		}
	 	},
	 	created(){
	 		$.ajax({
	 			url: 'http://localhost:8088/department/getAll',
				method: "post",
				
				success: (res) => {
					         this.newdata=res.data;
//					       console.log(res.data);					        
					      },
					      error: (err) => {
					        console.log(err);
					      }
	 		})
	 	}
	 }
</script>

<style>
	.add_staff{
		/*height: 82.5%;*/
		
	}
	.staff_header{
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
	.row_col div{
		margin-top: 5px;
	}
</style>