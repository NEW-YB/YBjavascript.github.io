var levels=document.querySelectorAll(".levelList li");
var content=document.getElementsByClassName("content")[0];
var dialog=document.getElementsByClassName("dialog")[0];
var diffBack=document.getElementsByClassName("diffBack")[0];
var diffLevelLis=document.querySelectorAll(".diffLevel li");

var pintuBack=document.getElementsByClassName("pintuBack")[0];
var clientW=document.documentElement.clientWidth;
var refresh=document.getElementsByClassName("refresh")[0];
var onoff=document.getElementsByClassName("onoff")[0];
//右边开关切换图片完整大图
var onof=false;
var num=3;
var target=0;
var divs=null;
var sects=null;
console.log(diffLevelLis)
levels[0].addEventListener("touchstart",function(){	
	dialog.style.transition="0.5s";
	dialog.style.bottom=100*clientW/640+"px";
})
diffBack.addEventListener("touchstart",function(){
	dialog.style.bottom=-700*clientW/640+"px";
})
//简单关卡
diffLevelLis[0].addEventListener("touchstart",function(){
	dialog.style.transition="none";
	dialog.style.bottom=-700*clientW/640+"px";
	content.style.transform="translateX(-50%)";
	num=3;
	html(3);
})
//普通关卡
diffLevelLis[1].addEventListener("touchstart",function(){
	dialog.style.transition="none";
	dialog.style.bottom=-700*clientW/640+"px";
	content.style.transform="translateX(-50%)";
	num=4;
	html(4);
})
//困难关卡
diffLevelLis[2].addEventListener("touchstart",function(){
	dialog.style.transition="none";
	dialog.style.bottom=-700*clientW/640+"px";
	content.style.transform="translateX(-50%)";
	num=5;
	html(5);
})
//返回拼图
pintuBack.addEventListener("touchstart",function(){
	content.style.transform="translateX(0)";
})

onoff.addEventListener("touchstart",function(){
	if(onof==false){
		this.style.backgroundPosition="0 0";
	}else{
		this.style.backgroundPosition="0 -"+(102*clientW/640)+"px";
	}
	onof=!onof;
})
//游戏开始
var tab=document.getElementById("tab");
document.addEventListener("touchstart",function(e){
	e.preventDefault();
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
	for (var i = 0; i < (arr.length)*30; i++) {
		suiji();
	}
	beginTime=new Date();
	step=0;
	if(isSuccess()){
		init()
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
//.............移动div.......
function moveDiv(now){
	if(now%num==(num-1)&&target-now==1){
		return
	}
	if(now%num==0&&now-target==1){
		return
	}
	if(Math.abs(now-target)==1||Math.abs(now-target)==sects.length){
//					console.log(1)
		step++;
		divs[now].style.visibility="hidden";
		divs[target].style.visibility="visible";
		divs[target].innerHTML=divs[now].innerHTML;
		divs[target].style.backgroundPositionX=getComputedStyle(divs[now]).backgroundPositionX;
		divs[target].style.backgroundPositionY=getComputedStyle(divs[now]).backgroundPositionY;
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
		return Math.random()-0.5
	})
	moveDiv(ar[0]);
}
//点击		
function touchEv(){
	for (var i = 0; i < divs.length; i++) {
		divs[i].index=i;
		divs[i].addEventListener("touchstart",function(){
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
refresh.addEventListener("touchstart",init);			