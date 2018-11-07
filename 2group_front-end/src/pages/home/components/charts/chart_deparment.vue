<template>
	<div class="ehart_deparment" id="ehart_deparment">
		
	</div>
</template>

<script>
	export default{
		name:'ehart_deparment',
		data(){
			return {
				data:'',
			}
		},
		mounted(){
			
		},
		created(){
			$.ajax({
						url:'http://localhost:8086/employee/getList',
						method: "post",
						success:(res)=>{	
							let newdata=[]	 //接受部门名称(去重)
							let dNameLength=[]  //接收部门名称（没去重）
							let arr=[]     //接受每个部门的人数
							
							//获取数据
							res.data.objects.forEach((value,item)=>{
								
								let dName=value.department_dName
								if(newdata.indexOf(dName )== -1){
									 newdata.push(dName)						 
								}
								dNameLength.push(dName)
							})
							let length=dNameLength.length
							//统计每个部门元素
							var count = dNameLength.reduce(function(allElements, ele){
							    if (ele in allElements) {
							        allElements[ele]++;
							    } else {
							        allElements[ele] = 1;
							    }
							    return allElements;
							}, {});
							for(var keys in count){
								arr.push(count[keys])
							}
							
							console.log(arr)		            
							//员工数据图表
							if(true){
								let myChart=this.$echarts.init(
									document.getElementById("ehart_deparment"))
								myChart.setOption({
						            title: { text: '员工图表' },
						            tooltip: {},
						            xAxis: {
						                data:newdata
						            },
						            yAxis: {},
						            series: [{
						                name: '人数',
						                type: 'bar',
						                data: arr
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

<style>
	.ehart_deparment{
		margin: 0 auto;
		width: 90%;
		height: 70%;
		/*background: #FFD700;*/
	}
</style>