document.addEventListener("touchstart",function (ev){
	ev.preventDefault();	
},{passive:false});

//			var myscroll;
//			function loaded(){
//				myscroll=new iScroll("wrapper");
//			}
//			window.addEventListener("DOMContentLoaded",loaded,false);

new IScroll(".content",{
	scrollbars: true,
//	scrollbars: "custom",
//	interactiveScrollbars:true,
	fadeScrollbars:true
});