<template>
  <div class="page-bar center-block">
    <ul class="text-center ">
      <li><a v-on:click="cur=1,pageClick()">首页</a></li>
      <li v-if="cur>1"><a v-on:click="cur--,pageClick()">上一页</a></li>
      <li v-if="cur==1"><a class="banclick">上一页</a></li>
      <li v-for="index in indexs" v-bind:class="{ 'active': cur == index}">
        <a v-on:click="btnClick(index)">{{ index }}</a>
      </li>
      <li v-if="cur!=all"><a v-on:click="cur++,pageClick()">下一页</a></li>
      <li v-if="cur == all"><a class="banclick">下一页</a></li>
      <li><a v-on:click="cur=all,pageClick()">尾页</a></li>
      <li><a>共<i>{{all}}</i>页</a></li>
      <li><a>每页显示<i>{{onepagenum}}</i>条</a></li>

    </ul>
  </div>
</template>
<script>
export default {
  props: [
    'onepagenum', // 每页条数
    'all' // 总页数
  ],
  data () {
    return {
      beginnum: 0,
      overnum: '' | this.onepagenum,
      cur: 1// 当前页码
    }
  },
  computed: {
    indexs: function () {
      var left = 1
      var right = this.all
      var ar = []
      if (this.all >= 5) {
        if (this.cur > 3 && this.cur < this.all - 2) {
          left = this.cur - 2
          right = this.cur + 2
        } else {
          if (this.cur <= 3) {
            left = 1
            right = 5
          } else {
            right = this.all
            left = this.all - 4
          }
        }
      }
      while (left <= right) {
        ar.push(left)
        left++
      }
      return ar
    }
  },
  methods: {
    btnClick: function (data) { // 页码点击事件
      if (data !== this.cur) {
        this.cur = data
        this.update()
      }
    },
    pageClick: function () {
      // console.log('现在在' + this.cur + '页')
      this.update()
    },
    update: function () {
      // this.beginnum = this.onepagenum * (this.cur - 1)
      // this.overnum = this.onepagenum * this.cur - 1
      this.beginnum = (this.cur - 1) * this.onepagenum
      this.overnum = this.cur * this.onepagenum
    },
    uploadbeginnum: function () {
      this.$emit('downloadbeginnum', [{'beginnum': this.beginnum}, {'overnum': this.overnum}])
    }
  },
  updated: function () {
    // alert('数据更新')
    this.uploadbeginnum()
  }
}
</script>

<style scoped>
  .page-bar{
    margin-top: 30px;
  }
  .page-bar ul{
    display: flex;
    justify-content: center;
  }
  ul,li{
    margin: 0px;
    padding: 0px;
  }
  li{
    list-style: none
  }
  .page-bar li:first-child>a {
    margin-left: 0px
  }
  .page-bar a{
    border: 1px solid #ddd;
    text-decoration: none;
    position: relative;
    float: left;
    padding: 6px 12px;
    margin-left: -1px;
    line-height: 1.42857143;
    color: #337ab7;
    cursor: pointer
  }
  .page-bar a:hover{
    background-color: #eee;
  }
  .page-bar a.banclick{
    cursor:not-allowed;
  }
  .page-bar .active a{
    color: #fff;
    cursor: default;
    background-color: #337ab7;
    border-color: #337ab7;
  }
  .page-bar i{
    font-style:normal;
    color: #d44950;
    margin: 0px 4px;
    font-size: 12px;
  }

</style>
