var levelList=document.getElementsByClassName("levelList")[0];
var imgLiStr="";
var imgArr=["pintu_img/mimi1.jpg","pintu_img/mimi2.jpg","pintu_img/mimi3.jpg","pintu_img/mimi4.jpg","pintu_img/mimi5.jpg","pintu_img/mimi6.jpg"];
for (var i = 0; i < imgArr.length; i++) {
	imgLiStr+='<li class="fl"><img src='+imgArr[i]+'/></li>';
}
levelList.innerHTML=imgLiStr;
var levels=document.querySelectorAll(".levelList li");
var levelLs=$(".levelList");

var fileId=document.getElementById("fileId");
var reader = new FileReader();
$(document).ready(function(){
	$("#fileId").change(function(){
		reader.readAsDataURL(fileId.files[0]);					
	})
})				
reader.onload=function(){
	document.getElementsByClassName("levelList")[0].innerHTML +='<li class="fl"><img src="'+reader.result+'"/></li>';
	imgArr.push(reader.result)
}

levelLs.on("touchstart","li",function(){
	dialog.style.transition="0.5s";
		dialog.style.bottom=100*clientW/640+"px";
		picOrder=$(this).index();
//		console.log($(this).find("img").attr("src"))
})
var levelsImg=document.querySelectorAll(".levelList img");
var content=document.getElementsByClassName("content")[0];
var dialog=document.getElementsByClassName("dialog")[0];
var diffBack=document.getElementsByClassName("diffBack")[0];
var diffLevelLis=document.querySelectorAll(".diffLevel li");

var tab=document.getElementById("tab");
var pintuBack=document.getElementsByClassName("pintuBack")[0];
var clientW=document.documentElement.clientWidth;
var refresh=document.getElementsByClassName("refresh")[0];
var onoff=document.getElementsByClassName("onoff")[0];
var gameDialog=document.getElementsByClassName("gameDialog")[0];
var continueKey=document.getElementsByClassName("continue")[0];
var yesGive=document.getElementsByClassName("yesGive")[0];
//右边开关切换图片完整大图
var onof=false;
var start=false;
var tan=false;
var num=3;
var target=0;
var divs=null;
var sects=null;
var picOrder=0;

//for (var i = 0; i < levels.length; i++) {
//	levels[i].index=i;
//	levels[i].addEventListener("touchstart",function(){
//		dialog.style.transition="0.5s";
//		dialog.style.bottom=100*clientW/640+"px";
//		picOrder=this.index;
//	})
//}
diffBack.addEventListener("touchstart",function(){
	dialog.style.bottom=-600*clientW/640+"px";
})
//简单关卡
diffLevelLis[0].addEventListener("touchstart",function(){
	dialog.style.transition="none";
	dialog.style.bottom=-600*clientW/640+"px";
	content.style.transform="translateX(-50%)";
	num=3;
	html(3);
})
//普通关卡
diffLevelLis[1].addEventListener("touchstart",function(){
	dialog.style.transition="none";
	dialog.style.bottom=-600*clientW/640+"px";
	content.style.transform="translateX(-50%)";
	num=4;
	html(4);
})
//困难关卡
diffLevelLis[2].addEventListener("touchstart",function(){
	dialog.style.transition="none";
	dialog.style.bottom=-600*clientW/640+"px";
	content.style.transform="translateX(-50%)";
	num=5;
	html(5);
})
//返回拼图
pintuBack.addEventListener("touchstart",function(){
	if( isSuccess() ){
		content.style.transform="translateX(0)";
	}else{
		gameDialog.style.bottom=300*clientW/640+"px";
		tan=true;
	}
})
continueKey.addEventListener("touchstart",function(){
	gameDialog.style.bottom=-300*clientW/640+"px";
	tan=false;
})
yesGive.addEventListener("touchstart",function(){
	gameDialog.style.bottom=-300*clientW/640+"px";
	content.style.transform="translateX(0)";
	tan=false;
	start=false;
	onof=false;
	onoff.style.backgroundPosition="0 -"+(47*clientW/640)+"px";
})
//开关切换
onoff.addEventListener("touchstart",function(){
	if(tan){
		return;
	}
	if(start==false){
		init();
		start=true;		
	}
	if(onof==false){
		this.style.backgroundPosition="0 0";
		for (var i = 0; i < divs.length; i++) {
			divs[i].style.visibility="visible";
		}
		divs[target].style.visibility="hidden";
		tab.style.background="#4f3325";
	}else{
		this.style.backgroundPosition="0 -"+(47*clientW/640)+"px";
		for (var i = 0; i < divs.length; i++) {
			divs[i].style.visibility="hidden";
		}
		var images = new Image();
		images.onload = function(){
			tab.style.background="url("+images.src+") no-repeat";
			tab.style.backgroundSize="100% 100%";
		}
		images.src = imgArr[picOrder];
	}
	onof=!onof;
})
//游戏开始
var tab=document.getElementById("tab");
document.addEventListener("touchstart",function(e){
	e.preventDefault();
})
fileId.addEventListener("touchstart",function(e){
	e.stopPropagation()
})
//..........................生成内容(几乘几的方格)....................
function html(n){
	var str="";
	for (var i = 0; i < n; i++) {
		str+="<section>";
		for (var j = 0; j < n; j++) {
			str+="<div style='background-position:-"+((clientW-40)/num*j)+"px -"+((clientW-40)/num*i)+"px'>"+(i*n+j+1)+"</div>"
		}
		str+="</section>";
	}
	tab.innerHTML=str;
	divs=tab.getElementsByTagName("div");
	for (var i = 0; i < divs.length; i++) {
		(function(i){
			var images = new Image();
			images.onload = function(){
				divs[i].style.backgroundImage="url("+images.src+") ";
			}
			images.src = imgArr[picOrder];
		})(i)
		
	}
	target=divs.length-1;
	sects=tab.getElementsByTagName("section");
	for (var i = 0; i < divs.length; i++) {
		divs[i].style.width=(clientW-40)/num+"px";
		divs[i].style.height=(clientW-40)/num+"px";
	}
}			

//html(num);			
//var divs=tab.getElementsByTagName("div");
//var sects=tab.getElementsByTagName("section");//通过列数来确定可移动的div
//var target=divs.length-1;//目标移动块
var step=0;//步数
var beginTime=null;//开始时间
var ar=[];//用来存取目标值附近的值。在suiji函数中使用。
//...............初始化.........................
function init(){
	var arr=[];
	for (var i = 1; i < divs.length; i++) {
		arr.push(i)
	}
	for (var i = 0; i < arr.length; i++) {
		divs[i].style.display="block";
		divs[i].innerHTML=arr[i];
	}
	for (var i = 0,lenth=arr.length; i < lenth*10; i++) {
		suiji();
	}
	beginTime=new Date();
	step=0;
	if(isSuccess()){
		//init()
	}
	var t=target;
	for (var a = 0; a < (sects.length-1)-t%sects.length; a++) {
		moveDiv(target+1)
	}
	t=target;
	for (var a = 0; a < (arr.length-t)/sects.length; a++) {
		moveDiv(target+sects.length)
	}
	touchEv();
}
//............判断是否拼图成功......................
function isSuccess(){
	for (var i = 0; i < divs.length-1; i++) {
		if(divs[i].innerHTML!=i+1){
			return false;
		}
	}
	return true;
}		

//[
//{
//	left:0,
//	top:0
//},
//{
//	left:100,
//	top:0
//}
//]

//.............移动div.......
function moveDiv(now){
	if(now%num==(num-1)&&target-now==1){
		return
	}
	if(now%num==0&&now-target==1){
		return
	}
	if(Math.abs(now-target)==1||Math.abs(now-target)==sects.length){
		step++;
		
		//每一次都去把两个div交换位置
		//打乱顺序
		// 数组 初始的时候这些div的位置
		//打乱数组 数组打乱之后 把数组最后一次渲染在页面
		
		
		divs[now].style.visibility="hidden";
		divs[target].style.visibility="visible";
		divs[target].innerHTML=divs[now].innerHTML;
		divs[target].style.backgroundPositionX=getComputedStyle(divs[now]).backgroundPositionX;
		divs[target].style.backgroundPositionY=getComputedStyle(divs[now]).backgroundPositionY
		target=now;
	}
}
//....随机打乱，使其有解........			
function suiji(){	
	ar=[];
	for (var i = 0; i < divs.length; i++) {
		if(Math.abs(i-target)==1||Math.abs(i-target)==sects.length){
			ar.push(i)
			
		}
	}
	ar.sort(function(){
		console.log(123);
		return Math.random()-0.5
	})
	moveDiv(ar[0]);
}
//点击		
function touchEv(){
	for (var i = 0; i < divs.length; i++) {
		divs[i].index=i;
		divs[i].addEventListener("touchstart",function(){
			if(tan){
				return;
			}
			moveDiv(this.index)
			if(isSuccess()){
				var endTime=new Date();					
				time= (endTime.getTime()-beginTime.getTime())/1000;
				alert("成功,你共花费了"+time+"秒，用了"+step+"步")
			}
		})
	}
}			
//重新开始
refresh.addEventListener("touchstart",function(){
	if(tan){
		return;
	}
	if(onof==false){
		return
	}else{
		init();
	}
});