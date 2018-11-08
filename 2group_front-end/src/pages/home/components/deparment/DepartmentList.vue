<template>
    <div>
      <div class="bumen_list_head text-right">
      	<h6 class="staff_link text-left" >
	      <router-link to='/home/addDepartement'><b>添加部门</b></router-link>
	      <router-link to='/home/DepartmentList'><b>部门信息</b></router-link>
	      <label style="margin-left: 150px;" for="bumen_select">请输入关键字查询：</label>
        <input type="text" class="bumen_select" id="bumen_select" @blur="findDepartment" ref="SelectDepartment">
        <hr />
       </h6>

      </div>
      <table class="table bumen_list_table table-bordered table-hover text-center">
        <thead>
        <tr>
          <th>部门ID</th>
          <th>部门名称</th>
          <th>部门负责人</th>
          <th>负责人邮箱</th>
          <th>操作</th>
        </tr>
        </thead>
        <tbody class="table-striped">
          <tr v-for="(department,index) of (departments.slice(beginnum,overnum))">
            <td>{{ department.dId }}</td>
            <td>{{ department.dName }}</td>
            <td>{{ department.dLeaderName }}</td>
            <td>{{ department.dLeaderEmail }}</td>
            <td><router-link :to="{path:'/home/DepartmentList/ChangeDepartment',query:{id:department.dId,Dname:department.dName,Duser:department.dLeaderName,Dinfo:department.dIntroduce,Demail:department.dLeaderEmail}}">修改</router-link>
              |
              <a href="##" data-target="#myModal" data-toggle="modal" @click="del(department,index)">删除</a>
            </td>
          </tr>
        </tbody>
      </table>
      <boot-page :all = all :onepagenum =onepagenum @downloadbeginnum="downloadbeginnum"></boot-page>
      <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" ref="modal">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title" id="myModalLabel">确认删除</h4>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            </div>
            <div class="modal-body">
              <form action="/DepartmentList" method="post">
                <label><b>{{b_name}}</b> 将要被删除,请选择将该部门 <b>{{yuangongnum}}</b> 名员工转移到</label>
                <input type="hidden" v-model="b_id" name="dId" id="dId" ref="delname">
                <select name="dName" id="dName" ref="selectname">
                  <template v-for="department of departments">
                    <option :value="department.dId" v-if="department.dName != b_name">{{ department.dName }}</option>
                  </template>
                </select>
                <div class="modal-footer">
                  <input type="button" class="btn btn-default" data-dismiss="modal" value="取消">
                  <input type="button" class="btn btn-primary" id="createTask" value="确认" @click="queren">
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import $ from 'jquery'
// 引入分页组件
import BootPage from '@/pages/home/components/deparment/BootPage'

export default {
  name: 'DepartmentList',
  data () {
    return {
      departments: [], // 存放获取的部门信息
      all: '0', // 总页数
      // all: , // 总页数
      onepagenum: '5', // 每页条数
      beginnum: '0', // 开始下标
      overnum: '5', // 结束下标
      b_id: '', // 被删除的部门ID
      b_name: '', // 被删除的部门名
      selectdName: '', // 员工被转移到的部门名
      delindex: '',// 被删除的部门所在数组的下标
      yuangongnum:'' //被删除部门的员工数
    }
  },
  mounted: function () {
    // vue创建后开始获取部门信息
    this.findDepartment()
  },
  updated: function () {
    this.all = Math.ceil(this.departments.length / this.onepagenum)
  },
  methods: {
    // 获取部门信息
    findDepartment () {
      let DepartmentName = this.$refs.SelectDepartment.value
      const isthis = this
      this.$axios({
        method: 'post',
        url: 'http://localhost:8088/department/getAll',
        data: {
          dName: DepartmentName
        }
      })
      // .then为请求成功的回调函数
        .then(function (response) {
          if (response.status === 200) {
            let data = response.data.data
            isthis.departments = data
            // console.log(response)
          }
        })
        // .catch为请求失败的回调函数
        .catch(function (error) {
          console.log(error)
        })
    },
    downloadbeginnum (msg) {
      // 从分页子组件获取开始、结束的下标
      this.beginnum = msg[0].beginnum
      this.overnum = msg[1].overnum
    },
    del (department, index) {
      let bumenid = department.dId
      let bumenname = department.dName
      this.b_id = bumenid
      this.b_name = bumenname
      this.delindex = index
      //查询被删除部门的员工数
      const isthis = this
      this.$axios({
        method: 'post',
        url: 'http://localhost:8088/employee/getList',
        data:{
          department_dId:bumenid
        }
      })
      // .then为请求成功的回调函数
        .then(function (response) {
          if (response.status === 200) {
            isthis.yuangongnum = response.data.data.objects.length;
            console.log(isthis.yuangongnum)
          }
        })
        // .catch为请求失败的回调函数
        .catch(function (error) {
          console.log(error)
        })

    },
    queren () {
      let selectbumenid = this.$refs.selectname.value
      let delbumenid = this.$refs.delname.value
      let isthis = this
      this.$axios({
        method: 'post',
        url: 'http://localhost:8088/department/delete',
        data: {
          from_dId: delbumenid,
          to_dId: selectbumenid
        }
      })
      // .then为请求成功的回调函数
        .then(function (response) {
          if (response.status === 200) {
            $(function () {
              $('#myModal').modal('hide')
              alert('部门删除成功')
              // 删除departments数组内下标为isthis.delindex的数据
              isthis.departments.splice(isthis.delindex, 1)
            })
          }
        })
        // .catch为请求失败的回调函数
        .catch(function (error) {
          console.log(error)
          alert('部门删除失败')
        })
    }
  },
  components: {
    // 引入分页组件
    BootPage: BootPage
  }
}
</script>

<style scoped>
  .bumen_list_head{
    /*background-color: yellow;*/
    padding: 15px 60px 15px 0;
  }
  .bumen_list_table{
    width: 95%;
    margin: 0 auto;
  }
  .table-striped a{
    color: #007bff;
  }
</style>
