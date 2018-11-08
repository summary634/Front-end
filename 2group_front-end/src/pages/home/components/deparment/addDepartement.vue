<template>
  <div class="AddDepartement">
    <h6 class="staff_link text-left" >
      <router-link to='/home/addDepartement'><b>添加部门</b></router-link>
      <router-link to='/home/DepartmentList'><b>部门信息</b></router-link>
    </h6>
    <hr />
    <!--添加部门-->
    <form class="form-horizontal">
      <div class="form-group">
        <label class="col-sm-2 control-label text-right AddDepartement_display">部门名称</label>
        <div class="col-sm-9 AddDepartement_display">
          <input type="text" class="form-control "  placeholder="控制在10个字、20个字节以内" v-model="Dname">
        </div>
      </div>
      <div class="form-group">
        <label class="col-sm-2 control-label text-right AddDepartement_display">部门负责人</label>
        <div class="col-sm-9 AddDepartement_display">
          <input type="text" class="form-control "  placeholder="控制在5个字、10个字节以内" v-model="Duser">
        </div>
      </div>
      <div class="form-group">
        <label class="col-sm-2 control-label text-right AddDepartement_display">负责人邮箱</label>
        <div class="col-sm-9 AddDepartement_display">
          <input type="email" class="form-control "  placeholder="控制在50字符以内" v-model="Demail">
        </div>
      </div>
      <div class="form-group">
        <label class="col-sm-2 control-label text-right AddDepartement_display">部门简介</label>
        <div class="col-sm-9 AddDepartement_display">
          <textarea class="form-control " rows="3"  placeholder="控制在500个汉字以内" v-model="Dinfo"></textarea>
        </div>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button type="button" class="btn btn-default AddDepartement_button" @click="btn">添加部门</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'AddDepartement',
    data () {
      return {
        Dname: '', // 部门列表传过来的部门名字
        Duser: '', // 部门列表传过来的部门负责人
        Dinfo: '', // 部门列表传过来的部门简介
        Demail: ''// 部门列表传过来的部门邮箱
      }
    },
    methods: {
      btn () {
        //正则表达式验证邮箱
        //需满足的验证条件：1、@之前必须有内容且只能是字母（大小写）、数字、下划线(_)、减号（-）、点（.）

        // 2、@和最后一个点（.）之间必须有内容且只能是字母（大小写）、数字、点（.）、减号（-），且两个点不能挨着

        //3、 最后一个点（.）之后必须有内容且内容只能是字母（大小写）、数字且长度为大于等于2个字节，小于等于6个字节



        let reg =new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$");
        if (this.Dname ===""  || this.Dname === null) {
          alert("部门不能为空！");
        }else if (this.Demail === "" || this.Demail === null) {
          alert("邮箱不能为空！");
        }else if (!reg.test(this.Demail)){
          // test:检索字符串中的指定值，返回True或False。
          alert("邮箱格式不正确，请重新输入！");
        }else{
          let isthis = this;
          this.$axios({
            method: 'post',
            url: 'http://localhost:8088/department/add',
            data: {
              dName: isthis.Dname,
              dIntroduce: isthis.Dinfo,
              dLeaderName: isthis.Duser,
              dLeaderEmail: isthis.Demail
            }
          })
          // .then为请求成功的回调函数
            .then(function (response) {
              if (response.status === 200) {
                if (response.data.codeInfo === '添加成功') {
                  alert('部门添加成功');
                  window.location.href = 'http://localhost:8080/#/home/DepartmentList'
                } else {
                  alert('部门已存在')
                }
              }

            })
            // .catch为请求失败的回调函数
            .catch(function (error) {
              console.log(error)
            })
        }
      }
    }
  }
</script>

<style  scoped>
  ul li{
    list-style: none;
    padding-left: 30px;
    font-size: 18px;
  }
  ul li:hover{
    cursor: pointer;
  }
  .AddDepartement_button{
    color: #fff;
    background-color: rgb(28,179,148);
  }
  .AddDepartement_display{
    display: inline-block;
  }
  .staff_link a{
    color: #0F0F0F;
  }
  .staff_link{
    padding: 20px 0 0 30px;
  }

</style>

