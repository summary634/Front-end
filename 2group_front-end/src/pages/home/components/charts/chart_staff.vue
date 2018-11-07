<template>
	<div class="ehart_staff" id="ehart_staff" >
		
	</div>
</template>

<script>
	export default{
		name:'ehart_staff',
		data(){
			return {
				data:'',
			}
		},
		mounted(){
			
		},
		created(){
			$.ajax({
						url:'http://39.108.75.4/hpms/public/employee/getList',
						method: "post",
						success:(res)=>{
							
							let newdata=[]	
							let dNameLength=[]
							let arr=[]
							let count=0
							res.data.objects.forEach((value,item)=>{
								
								let dName=value.department_dName
								if(newdata.indexOf(dName )== -1){
									 newdata.push(dName)						 
								}
								dNameLength.push(dName)
//								console.log(dName.length)
							})
							console.log(dNameLength)
							//
//							let length=dNameLength.length
//							for(var i=0;i<length;i++){
//								
//								for(var j=i;j<length;j++){
//							         if(dNameLength[i]===dNameLength[j]){
//							         	count++
//							         }
//								}
//								arr.push(count)
//								
//							}
//							console.log(arr)
							//员工数据图表
							if(true){
								let myChart=this.$echarts.init(
									document.getElementById("ehart_staff"))
								myChart.setOption({
						            title: { text: '在Vue中使用echarts' },
						            tooltip: {},
						            xAxis: {
						                data:newdata
						            },
						            yAxis: {},
						            series: [{
						                name: '人数',
						                type: 'bar',
						                data: [5, 20, 36, 10, 10]
						            }]
						        });
							}
						},
						error:(error)=>{
							console.log(error)
						}
				})	
		},
		methods:{
			drawLine(){
				
				console.log(this.data)
				
			}
		}
		
	}
</script>

<style scoped>
	.ehart_staff{
		margin: 0 auto;
		width: 90%;
		height: 70%;
		/*background: #FFD700;*/
	}
</style>