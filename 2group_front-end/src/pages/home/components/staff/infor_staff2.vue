<template>
	<div class="infor_staff">

		<div class="infor_header">
			<h6 class="staff_link text-left" >
				<router-link to='/home/add_staff'><b>添加员工</b></router-link>
				<router-link to='/home/infor_staff'><b>员工信息</b></router-link>
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
			 		<template v-for="(data,index) in (newdata.slice(beginnum,overnum))">
			 		<tr>
			 			<td>{{data.eId}}</td>
			 			<td>{{data.department_dName}}</td>
			 			<td><router-link :to="{path:'/home/infor_staff/archives',query:{eId:data.eId,name:data.eName}}" >{{data.eName}}</router-link></td>
			 			<td>{{data.eSex}}</td>
			 			<td>在职</td>
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
        delindex:'',//存放被删除员工在newdata中的下标
				eId:'',
				// departments: '', // 获取的部门信息
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
		 	//删除员工
			remove(data,index){
        this.delindex = index
				this.eId=data.eId
				console.log(this.eId)
//				var params = new URLSearchParams()
//				 params.append("eId",this.eId)
				 $.ajax({
					      url: 'http://39.108.75.4/hpms/public/employee/delete',
					      method: "post",
					      data: {
					      	"eId":this.eId,
					      },
//					      xhrFields: {
//					        withCredentials: true
//					      },
					      success: (res) => {
					        console.log(res);
					        if(res.success==true){
//					        	window.location.href = 'http://localhost:8086/#//home/infor_staff'
// 					        	this.$router.push("/home/infor_staff")
                    this.newdata.splice(this.delindex, 1)
					        }
					      },
					      error: (err) => {
					        console.log(err);
					      }
					    })
//				  this.$axios({
//				        method: 'post',
//				        url: 'http://39.108.75.4/hpms/public/employee/delete',
//				        data:params
//				  })
//				      // .then为请求成功的回调函数
//				    .then( (response)=> {
//				          if (response.status === 200) {
//				               if(response.data.success==true){
////				               	this.$router.push("/home/infor_staff")
//
//									this.$router.push("/home/infor_staff")
//				               }
//
//				          }
//				    })
//				        // .catch为请求失败的回调函数
//				    .catch(function (error) {
//				          console.log(error)
//				     })

			},
			//浏览员工
			findDepartment () {
		      const isthis = this
		      this.$axios({
		        method: 'post',
		        url: 'http://39.108.75.4/hpms/public/employee/getList',
		        // url: 'http://39.108.75.4/hpms/public/employee/getList',
		      })
		      // .then为请求成功的回调函数
		        .then(function (response) {
		          if (response.status === 200) {
//		            console.log(response.data.data.objects);
//		            console.log(response);
		            isthis.newdata=response.data.data.objects;
//		            console.log(isthis.newdata);
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
