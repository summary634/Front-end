import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/pages/home/home'
//员工管理
import add_staff from '@/pages/home/components/staff/add_staff'
import infor_staff from '@/pages/home/components/staff/infor_staff'
import archives from '@/pages/home/components/staff/archives'
import infor_modify from '@/pages/home/components/staff/infor_modify'
//主页
import home_right_content from '@/pages/home/components/home_right_content'
import home_right_footer from '@/pages/home/components/home_right_footer'
import loginCount from '@/pages/home/login/logincount'
import login from '@/pages/home/login/login'
//部门管理
import addDepartement from '@/pages/home/components/deparment/addDepartement'
import DepartmentList from '@/pages/home/components/deparment/DepartmentList'
import BootPage from '@/pages/home/components/deparment/BootPage'
import ChangeDepartment from '@/pages/home/components/deparment/ChangeDepartment'
//数据图表
import chart_staff from '@/pages/home/components/charts/chart_staff'
import chart_deparment from '@/pages/home/components/charts/chart_deparment'


Vue.use(Router)


export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
      {
        path:'/home',
        name:"home",
        component:home,
        children:[
                 {
					      	path:'/',
					      	name:'right_content',
					      	component:home_right_content,
					      	
					      	},
					      				      
         ]
      },
///  查看个人档案路由
      {
      	path:'/home',
      	name:'archives',
      	component:home,
      	children:[
      	      {
      	      	path:"/home/infor_staff/archives",
      	      	name:'archives',
      	      	component:archives
      	      }
      	      
      	]
      	
      },
      //修改信息路由
      //1员工
      {
      	path:'/home',
      	name:'home',
      	component:home,
      	children:[
      	      {
      	      	path:"/home/infor_staff/infor_modify",
      	      	name:'modify',
      	      	component:infor_modify
      	      }
      	      
      	]
      	
      },
      //2部门
       {
      	path:'/home',
      	name:'home',
      	component:home,
      	children:[
      	      {
      	      	path:"/home/DepartmentList/ChangeDepartment",
      	      	name:'ChangeDepartment',
      	      	component:ChangeDepartment
      	      }
      	      
      	]
      	
      },
      //主页路由
      {
        path:'/home',
        name:"home",
        component:home,
        children:[
              //员工添加
			               {
				      	path:'/home/add_staff',
				      	name:'add_staff',
				      	component:add_staff,
				      	children:[
				      	        
				      	]
				      },
				      //员工列表
				       {
				      	path:'/home/infor_staff',
				      	name:'infor_staff',
				      	component:infor_staff,
				      	children:[
				      	   			
				      	    
				      	]
				      },
				      //部门添加
				     {
				      	path:'/home/addDepartement',
				      	name:'addDepartement',
				      	component:addDepartement,
				      	children:[
				      	   			
				      	    
				      	]
				      },
				      //部门列表
				      {
				      	path:'/home/DepartmentList',
				      	name:'DepartmentList',
				      	component:DepartmentList,
				      	children:[
				      	   			
				      	    
				      	]
				      },
				      
				       {
				      	path:'/home/chart_deparment',
				      	name:'chart_deparment',
				      	component:chart_deparment,
				      	children:[   	]
				      },
				       {
				      	path:'/home/chart_staff',
				      	name:'chart_staff',
				      	component:chart_staff,
				      	children:[   	]
				      },
        ]
      },
      //登录路由
      {
      	path:'/',
      	name:'login',
      	component:login
      	
      },
      
      
  ]
})
