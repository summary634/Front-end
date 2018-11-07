<template>
  <div class="loginCroe">
    <div class="top">
      <div class="toogle">
        <div class="fl toogle-left">
          <span></span>
          <div>
            <span class="fight-text">Hewlett Packard</span>
            <span>Enterprise</span>
          </div>
        </div>
        <div class="line fl"></div>
        <div class="fl toogle-right">HPE University</div>
       
      </div>
    </div>
    <div class="input-count">
      <div class="passanduser">
        <input type="text" placeholder="请输入账号" name="username" ref="username">
      </div>
      <div class="passanduser">
        <input type="text" placeholder="请输入密码" name="uerpwd" ref="uerpwd">
      </div>
      <div class="valid_wrap">
        <div>
          <input type="text" v-model="validData">
        </div>
        <div class="pic_img_wrap" @click="createCode">
          {{vaildCode}}
        </div>
      </div>
    </div>
    
        <!--<router-link to="/home">-->
        <button class="submit" @click="validate" style="cursor: pointer;">
        	登录
         </button>
        <!--</router-link>-->
   
  </div>
</template>

<script>
  export default {
    name: "logincount",
    data() {
      return {
        ischange: false,
        vaildCode: '',
        validData: '',
        state:false   
      }
    },
    created() {
      this.createCode()
      
    },
    methods: {
      createCode() {
        //验证码长度4
        let code = ''
        let codeLength = 4;
        //设置随机字符
        let random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
        //循环codeLength 我设置的4就是循环4次
        for (var i = 0; i < codeLength; i++) {
          //设置随机数范围,这设置为0 ~ 36
          var index = Math.floor(Math.random() * 36);
          //字符串拼接 将每次随机的字符 进行拼接
          code += random[index];
        }
        //将拼接好的字符串赋值给展示的Value
//      console.log(code)
        this.vaildCode = code;
      },
      validate () {
      	var aName= this.$refs.username.value
        var aPwd= this.$refs.uerpwd.value
        var params = new URLSearchParams()
				params.append("aName",aName) 
				params.append("aPwd",aPwd) 
				var data=(aName==""||aName==null)&&(aPwd==""||aPwd==null)   
      	//验证码
        if ((!this.validData)&&(data)){    
          alert('用户密码或验证码不能为空！')
        }
        else{
		        	if(this.validData != this.vaildCode){
		          alert('用户密码或验证码不正确！请重新输入！');
		          this.validData = ''
		          this.$refs.username.value=''
		          this.$refs.uerpwd.value=''
		          this.$router.push("/")
		  				this.createCode()
		        } else 
			        { 	
			        	   this.state=true;
//			             this.$router.push("/home")
			        }
        }
        //登录逻辑
      	
//    		let xhr = new XMLHttpRequest();
//    		xhr.withCredentials = true;
//    		xhr.open("post", "http://39.108.75.4/hpms/public/admin/login");
//    		xhr.setRequestHeader("Content-type", "Application/x-www-formUrlencoded");
//    		xhr.send("aName=admin&aPwd=admin");
//    		xhr.onreadystatechange = () => {
//    			if (xhr.status === 200 && xhr.readyState === 4) {
//    			let res = JSON.parse(xhr.responseText);
//    			console.log(res)
//    			}
//    		}
//    		
//    		return;
      	 //发送请求后端用户密码验证
      	 $.ajax({
			      url: "http://39.108.75.4/hpms/public/admin/login",
			      method: "post",
//			      xhrFields: {
//			        withCredentials: true
//			      },
			      data:{
			      	'aName':aName,
			      	'aPwd':aPwd
			      },
			      success: (res) => {
			      	if(res.success==true&&this.state==true){
			      		
			      		this.$router.push("/home")
			      	};
			        
			      },
			      error: (err) => {
			        console.log(err);
			      }
			    })
//    	 
//    	 return;
//      this.$axios({
//      	method:'post',
//      	url:'http://39.108.75.4/hpms/public/admin/login',
//      	data:params, 
//      })
//      //请求成功数据
//      .then((response)=>{
//      	 if(response.status===200){
//      	 	console.log(response.data)	 
//      	 }
//      })
//      //请求失败信息
//      .catch((erroe)=>{
//      	 console.log(erroe)
//      })
//      console.log(this.state)


      },
      
    }
  }
  
</script>

<style scoped>
  .loginCroe {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 300px;
    height: 360px;
    padding: 30px 20px 0 20px;
    margin-top: -180px;
    margin-left: -200px;
    border-radius: 5px;
    background: #fff;
  }

  .top {
    margin-top: 20px;
    height: 70px;
    text-align: center;
  }

  .line {
    height: 70px;
    width: 2px;
    background: #000;
    margin: 0px 8px;
  }

  .toogle-left {
    width: 120px;
  }

  .toogle-left > span {
    display: block;
    width: 35px;
    height: 10px;
    border: 2px solid #38B7E6;
    margin-bottom: 15px;
  }

  .toogle-left > div > span {
    font-size: 14px;
    text-align: left;
    display: block;
  }

  .toogle-right {
    width: 120px;
    height: 70px;
    font-weight: 600;
    line-height: 70px;
    font-size: 14px;
  }

  .fl {
    height: 70px;
    float: left;
  }
  .fr{
  	float: right;
  }
  .fight-text {
    font-weight: 600;
  }

  .input-count {
    margin-top: 60px;
    width: 100%;
  }

  .passanduser {
    border: 1px solid #ccc;
    border-radius: 5px;
    height: 30px;
    line-height: 30px;
    padding-left: 10px;
    text-align: left;
    margin: 10px 0;
    background: #f2f2f2;
  }

  .input-count > div > input {
    width: 220px;
    outline: none;
    border: none;
    background: #f2f2f2;
  }

  .valid_wrap {
    height: 40px;
    line-height: 40px;
  }

  .valid_wrap > div {
    width: 100px;
    height: 30px;
    float: left;
  }

  .valid_wrap div:first-child {
    border: 1px solid #ccc;
    border-radius: 5px;
    line-height: 30px;
    padding-left: 10px;
    text-align: left;
    background: #f2f2f2;
  }

  .valid_wrap > div > input {
    width: 85px;
    outline: none;
    border: none;
    background: #f2f2f2;
  }

  .submit {
    height: 40px;
    line-height: 40px;
    border-radius: 5px;
    color: #FFF;
    margin-top: 20px;
    background: #38B7E6;
    width:80%;
    outline: none;
  }

  .pic_img_wrap {
    line-height: 30px;
    color: #fff;
    margin-left: 48px;
    background: #F55757;
  }
</style>
