<template>
	<div class="infor_staff">
		
		<div class="infor_header">
			<h6 class="staff_link text-left" >
				<router-link to='/home/add_staff'><b>添加员工</b></router-link>
				<router-link to='/home/infor_staff'><b>员工信息</b></router-link>
				<label style="margin-left: 150px;"><b>请输入：</b><input @keyup="query()" v-model="ckey" type="text" /></label>
			</h6>
			<hr />
			<!--查看员工信息-->
			 <div class="infor_table">
			 	<!--<hr />-->
			 	<table  class="table table-striped">
			 		<tr>
			 			<th>序号</th>
			 			<th>部门</th>
			 			<th>姓名</th>
			 			<th>性别</th>
						<th>状态</th>
			 			<th>操作</th>
			 		</tr>
			 		<template v-for="(data,index) in (query().slice(beginnum,overnum))">
			 		<tr>
			 			<td>{{data.eId}}</td>
			 			<td>{{data.department_dName}}</td>
			 			<td><router-link :to="{path:'/home/infor_staff/archives',query:{eId:data.eId,name:data.eName}}" >{{data.eName}}</router-link></td>
			 			<td >{{data.eSex}}</td>
			 			<td>{{data.eCondition}}</td>
			 			<td>
			 				<a href="#" @click="remove(data,index)">删除</a>
			 				<router-link :to="{path:'/home/infor_staff/infor_modify',query:{eId:data.eId,name:data.eName}}">修改</router-link>
			 			</td>
			 		</tr>
			 		</template>
			 	</table>
			 	<boot-page :all = all :onepagenum =onepagenum @downloadbeginnum="downloadbeginnum"></boot-page>

			 </div>
			<!--查看员工信息-->
		</div>
	</div>
</template>

<script>
	//分页
	import BootPage from '@/pages/home/components/deparment/BootPage'
	export default{
		name:"infor_staff",
		data:function(){
			return {
				newdata:[],
				eId:'',
				ckey:'',
		        all: '0', // 总页数
		        onepagenum: '5', // 每页条数
		        beginnum: '0', // 开始下标
		        overnum: '5', // 结束下标 
			};
		},
		updated: function () {
	      this.all = Math.ceil(this.newdata.length / this.onepagenum)
	   },
		methods:{
			//查询
			query(){
				var newdata=[]
				if(this.ckey.trim()==''){
					newdata=this.newdata;
				}else{
					newdata=this.newdata.filter((item)=>{
						
					    var value=((item.eName.includes(this.ckey.trim()))||
					      (item.department_dName.includes(this.ckey.trim()))
					    )
					    if(value){
//					    	console.log(item)
					    	return item
					    }
					   
					})
				}
//				console.log(newdata)
				 return newdata;
				 
			},
		 	//删除员工
			remove(data,index){
				this.eId=data.eId
				console.log(this.eId)
				var eindex=this.newdata.findIndex((item,index)=>{
					if(this.eId==item.eId){
						return true;
					}
				})
				console.log(eindex)
//				this.newdata.splice(data.eId,1)
//				var params = new URLSearchParams()
//				 params.append("eId",this.eId) 
				 $.ajax({
					      url: 'http://localhost:8086/employee/delete',
					      method: "post",
					      data: {
					      	"eId":this.eId,
					      },
					      success: (res) => {
//					        console.log(res);
					        if(res.success==true){
					        	this.newdata.splice(eindex,1)
//					        	window.location.href = 'http://localhost:8086/#//home/infor_staff'
					        	this.$router.push("/home/infor_staff")	
					        }
					      },
					      error: (err) => {
					        console.log(err);
					      }
					   })
			},
			//浏览员工
			findDepartment () {
		      const isthis = this
		      this.$axios({
		        method: 'post',
		        url: 'http://localhost:8086/employee/getList',
		      })
		      // .then为请求成功的回调函数
		        .then(function (response) {
		            if (response.status === 200) {	
		          	    isthis.newdata=response.data.data.objects;
		          	    
		          	     isthis.newdata.forEach((value,item,arr)=>{
//		          	     	console.log(value)
		          	    	if(value.eSex==1&&value.eCondition==1){
		          	    		value.eSex="男"
		          	    		value.eCondition="在职"
		          	    	}else{
		          	    		value.eSex="女"
		          	    		value.eCondition="离职"
		          	    	}
		          	    	
		          	    	
		          	    })
//		          	    console.log(newdata)
//		          	     console.log(isthis.newdata)
		       
		          }
		        })
		        // .catch为请求失败的回调函数
		        .catch(function (error) {
		          console.log(error)
		        })
		   },
		    //查看员工
		    seeStaff(data){
		    	alert(1);
		    },
		    downloadbeginnum (msg) {
		      // 从分页子组件获取开始、结束的下标
		      this.beginnum = msg[0].beginnum
		      this.overnum = msg[1].overnum
		    }
		},
		created(){
			this.findDepartment()
		},
		components: {
		    // 引入分页组件
		    BootPage: BootPage
		}
  }
</script>

<style>
	.infor_staff{
		height: 70%;
	}
	.infor_header{
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
	.infor_table{
		width: 90%;
		margin: 0 auto;
	}
	.table a{
		color:#057fca ;
	}
</style>