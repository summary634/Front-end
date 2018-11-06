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
			 						<!--<select>-->
			 						<!--<input type="checkbox" id="inlineCheckbox1"checked="checked" ref="eSex" name="eSex" value="男"> 男
			 						<input type="checkbox" id="inlineCheckbox2" value="女" ref="eSex" name="eSex"> 女-->
			 						 <input type="radio" name="inlineRadioOptions" id="inlineRadio1"    ref="eSex"  checked="checked" value="女"> 女
			 						 <input type="radio" name="inlineRadioOptions" id="inlineRadio1"  ref="eSex" value="男"> 男
			 						 	<!--<option>公</option>
		                                <option>农</option>
			 						</select>-->
			 					</div>
			 					<!---->
			 					<!---->
			 					<div class="col-md-3">
			 						<label class="text-right">生日：</label>
			 					</div>
			 					<div class="col-md-7 ">
			 						<select>
		                                <option>公</option>
		                                <option>农</option>
		                            </select>&nbsp;&nbsp;&nbsp;
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
			 						<select  class="form-control" id="input5" ref="department_dId" name="department_dId">
			 						<!--<input type="text" class="form-control" ref="department_dId" name="department_dId" placeholder="2" />-->
			 						
			 						 	<!--<option>请选择</option>-->
	                                    <option :value="data.dId" v-for="data in newdata">{{data.dName}}</option>
			 						</select>
			 					</div>
			 					<!---->
			 					
			 					<!---->
			 					<!--<div class="col-md-4">
			 						<label class="text-right">电话：</label>
			 					</div>
			 					<div class="col-md-7 ">
			 						<input type="text"class="form-control" placeholder="12306" />
			 					</div>-->
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
			 					<!---->
			 					<!--<div class="col-md-4">
			 						<label class="text-right">婚姻状况：</label>
			 					</div>
			 					<div class="col-md-7 ">
			 						<select class="form-control" id="input6" >
		                                   <option>请选择婚姻状况</option>
		                                   <option>未婚</option>
		                                   <option>已婚</option>
		                                   <option>未知</option>
                              		 </select>
			 					</div>-->
			 					<!---->
			 					<!--<div class="col-md-4">
			 						<label class="text-right">籍贯：</label>
			 					</div>
			 					<div class="col-md-7 ">
			 						<input type="text" class="form-control" placeholder="例：贵州贵阳">
			 					</div>-->
			 					<!---->
			 					<!--<div class="col-md-4">
			 						<label class="text-right">所在地：</label>
			 					</div>
			 					<div class="col-md-7 ">
			 						<input type="text" class="form-control" placeholder="例：贵州遵义">
			 					</div>-->
			 					<!---->
			 					<!--<div class="col-md-4">
			 						<label class="text-right">体重（kg）：</label>
			 					</div>
			 					<div class="col-md-7 ">
			 						<input type="text" class="form-control" placeholder="例：145kg">
			 					</div>-->
			 					<!---->
			 					<!--<div class="col-md-4">
			 						<label class="text-right">员工QQ：</label>
			 					</div>-->
			 					<!--<div class="col-md-7 ">
			 						<input type="text" class="form-control" placeholder="例：00000">
			 					</div>-->
			 					<!---->
			 					<!--<div class="col-md-4">
			 						<label class="text-right">工作经验：</label>
			 					</div>
			 					<div class="col-md-7 ">
			 						<textarea class="form-control" id="input10" >
                                	</textarea>
			 					</div>-->
			 					<!---->
			 					<!--<div class="col-md-3">
			 						<label class="text-right">请上传头像：</label>
			 					</div>
			 					<div class="col-md-7 ">
			 						<input type="file" placeholder="5" />
			 					</div>-->
			 					<!---->
			 					<!--<div class="col-md-3">
			 						<label class="text-right">请上传简历：</label>
			 					</div>
			 					<div class="col-md-7 ">
			 						<input type="file" placeholder="5" />
			 					</div>-->
			 					<!---->
			 					
			 				</div>
			 			</div>
			 			<!---->
			 			<!--<div class="col-md-5">
			 				<div class="row row_col">-->
			 					
			 					
			 					<!---->
			 					<!--<div class="col-md-4">
			 						<label class="text-right">学历：</label>
			 					</div>
			 					<div class="col-md-7 ">
			 						 <select class="form-control" id="inputl3">
		                                <option>请选择学历</option>
		                                <option>大专</option>
		                                <option>本科</option>
		                                <option>硕士</option>
		                                <option>博士</option>
		                            </select>
			 					</div>-->
			 					<!---->
			 					<!--<div class="col-md-4">
			 						<label class="text-right">所在部门：</label>
			 					</div>
			 					<div class="col-md-7 ">
			 						 <select class="form-control" id="input14" >
		                                <option>请选择部门</option>
		                                <option>研发部</option>
		                                <option>开发部</option>
		                            </select>
			 					</div>-->
			 					<!---->
			 					<!--<div class="col-md-4">
			 						<label class="text-right">职务：</label>
			 					</div>
			 					<div class="col-md-7 ">
			 						<select class="form-control" id="input15">
		                                <option>请选择职务</option>
		                                <option>前端开发</option>
		                                <option>java开发</option>
		                                <option>大数据开发</option>
		                            </select>
			 					</div>-->
			 					<!---->
			 					<!--<div class="col-md-4">
			 						<label class="text-right">民族：</label>
			 					</div>
			 					<div class="col-md-7 ">
			 						<select class="form-control" id="input16">
		                                <option >请选择民族</option>
		                                <option >汉</option>
		                                <option >侗族</option>
		                                <option >壮族</option>
		                                <option >朝鲜族</option>
		                            </select>
			 					</div>-->
			 					<!---->
			 					<!--<div class="col-md-4">
			 						<label class="text-right">身份证号：</label>
			 					</div>
			 					<div class="col-md-7 ">
			 						<input type="text" class="form-control" placeholder="例：贵州贵阳">
			 					</div>-->
			 					<!---->
			 					
			 					<!--<div class="col-md-4">
			 						<label class="text-right">身高（cm）：</label>
			 					</div>
			 					<div class="col-md-7 ">
			 						<input type="text" class="form-control" placeholder="例：178cm">
			 					</div>-->
			 					<!---->
			 					<!--<div class="col-md-4">
			 						<label class="text-right">政治面貌：</label>
			 					</div>
			 					<div class="col-md-7 ">
			 						<select class="form-control" id="input16">
		                                <option >请选择政治面貌</option>
		                                <option >党员</option>
		                                <option >团员</option>
		                                <option >群众</option>
		                               
		                            </select>
			 					</div>-->
			 					<!---->
			 					
			 					<!---->
			 					
			 					<!--<div class="col-md-4">
			 						<label class="text-right">掌握技能：</label>
			 					</div>
			 					<div class="col-md-7 ">
			 						<textarea class="form-control" id="input10" >
                                	</textarea>
			 					</div>-->
			 					<!---->
			 					
			 				<!--</div>
			 			</div>-->
			 		<!---->
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
	 			var eSex= this.$refs.eSex.value
	 			var eBirthdate= this.$refs.eBirthdate.value
	 			var eEmail= this.$refs.eEmail.value
	 			var department_dId= this.$refs.department_dId.value
	 			var eCondition= this.$refs.eCondition.value
	 			var eStartTime= this.$refs.eStartTime.value
	 			console.log(eName, eSex, eBirthdate, eEmail, department_dId, eCondition, eStartTime)
//	 			var params = new URLSearchParams()
//				params.append({
//					"eName":aName,"eSex":eSex,"eBirthdate":eBirthdate,"eEmail":eEmail,
//					"department_dId":department_dId,"eCondition":eCondition,
//				})
                console.log(eName,eSex,eBirthdate,eEmail,department_dId,eCondition,eStartTime)
	 			$.ajax({
					      url: 'http://39.108.75.4/hpms/public/employee/add',
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
//					      xhrFields: {
//					        withCredentials: true
//					      },
					      success: (res) => {
					        console.log(res);
					        if(res.success==true){
//					        	window.location.href = 'http://localhost:8086/#//home/infor_staff'
					        	this.$router.push("/home/infor_staff")
					        }
					      },
					      error: (err) => {
					        console.log(err);
					      }
					    })
	 		}
	 	},
	 	created(){
	 		$.ajax({
	 			url: 'http://39.108.75.4/hpms/public/department/getAll',
				method: "post",
				
				success: (res) => {
					         this.newdata=res.data;
					       console.log(res.data);
//					       newdata.forEach((index,value)=>{
//					       	    console.log(index);
//					       	    if(this.data.indexOf(index.department_dId)==-1){
//					       	    	this.data.push(index.dName);
//					       	    }
					       	    
//					       })
//					       console.log(newdata);
                           console.log(this.newdata)
					        
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