<template>
  <form action="http://39.108.75.4/hpms/public/department/update" class="form-horizontal" method="post">
    <input type="hidden" class="form-control" name="dId" v-model="id">
    <div class="form-group">
      <label class="col-sm-2 control-label inline-block text-right">部门名称</label>
      <div class="col-sm-9 inline-block">
        <input type="text" class="form-control" name="dName" placeholder="控制在10个字、20个字节以内" v-model="Dname">
      </div>
    </div>
    <div class="form-group">
      <label class="col-sm-2 control-label inline-block text-right">部门简介</label>
      <div class="col-sm-9 inline-block">
        <textarea class="form-control" rows="3" name="dIntroduce" placeholder="控制在500个汉字以内" v-model="Dinfo"></textarea>
      </div>
    </div>
    <div class="form-group">
      <label class="col-sm-2 control-label inline-block text-right">部门负责人</label>
      <div class="col-sm-9 inline-block">
        <input type="text" class="form-control" name="dLeaderName" placeholder="控制在5个字、10个字节以内" v-model="Duser">
      </div>
    </div>
    <div class="form-group">
      <label class="col-sm-2 control-label inline-block text-right">负责人邮箱</label>
      <div class="col-sm-9 inline-block">
        <input type="text" class="form-control" name="dLeaderEmail" placeholder="控制在50个字符内" v-model="Demail">
      </div>
    </div>
    <div class="form-group">
      <div class="col-sm-6 inline-block text-center">
        <button type="button" class="btn btn-success" @click="btn">修改部门</button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: 'ChangeDepartment',
  mounted () {
    this.id = this.$route.query.id
    this.Dname = this.$route.query.Dname
    this.Duser = this.$route.query.Duser
    this.Dinfo = this.$route.query.Dinfo
    this.Demail = this.$route.query.Demail
  },
  data () {
    return {
      id: '', // 部门列表传过来的部门ID
      Dname: '', // 部门列表传过来的部门名字
      Duser: '', // 部门列表传过来的部门负责人
      Dinfo: '', // 部门列表传过来的部门简介
      Demail: ''// 部门列表传过来的部门邮箱
    }
  },
  methods: {
    btn () {
      let isthis = this
      this.$axios({
        method: 'post',
        url: 'http://localhost:8088/department/update',
        data: {
          dId: isthis.id,
          dName: isthis.Dname,
          dIntroduce: isthis.Dinfo,
          dLeaderName: isthis.Duser,
          dLeaderEmail: isthis.Demail
        }
      })
      // .then为请求成功的回调函数
        .then(function (response) {
          if (response.status === 200) {
            if (response.data.codeInfo === '修改成功') {
              alert('部门修改成功')
              window.location.href = 'http://localhost:8080/#/home/DepartmentList'
            } else {
              alert('部门已存在')
            }
          }
        })
        // .catch为请求失败的回调函数
        .catch(function (error) {
          console.log(error)
          // alert('失败')
        })
    }
  }
}
</script>

<style scoped>
  .inline-block{
    display: inline-block;
  }
</style>
