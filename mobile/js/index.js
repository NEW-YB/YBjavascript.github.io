var times=document.getElementsByClassName("times")[0];
function add0(n){
	if(n<10){
		return "0" + n;
	}else{
		return "" + n;
	}
};
var str="";
var t=new Date();
var h=add0( t.getHours() );
var m = add0( t.getMinutes() );
str=h+":"+m
console.log(str);
times.innerHTML=str;
setInterval(function(){
	t=new Date();
	h=add0( t.getHours() );
    m = add0( t.getMinutes() );
    str=h+":"+m;
    times.innerHTML=str;
},1000)