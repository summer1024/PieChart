$(function () {
	var para=function(id,title,data,clickfun){
		var obj={
			id:id,
    		title:title,
    		pointFormat:'<b>{series.name}</b>: {point.percentage:.1f} %',
    		data:data,
    		name:'数量'
		};
		if($.isFunction(clickfun)){
			obj.click=clickfun;
		}
		return obj;
	};
    var creatBP=function(){
    	var sv=$('#browser-sv').val();
    	var st=$('#browser-st').val();
    	var parames=para('#container1',"浏览器类型占比",piedata);
    	pie(parames);
    }
    var creatSP=function(){
    	var sv=$('#system-sv').val();
    		var clickfun=function(pointName){
	    			var title=pointName+"系统版本占比";
			    	var parame=para('#container2',title,IEdata);
			    	pie(parame);
		    	};
    		var parames=para('#container1',"网站系统占比",piedata,clickfun);
    	pie(parames);
    };
    
    pie(para('#container1','浏览器类型占比',piedata));

    $('#tablists').on('click', 'a', function(){
    	var current=$(this).parent().data("class");
    	if(current === 'browser'){
    		$('#container2').empty();
    		creatBP();
    	}else if(current === 'system'){
    		creatSP(); 	
    	}
    });
    $('#browser-sv').on('change',function(){
    	creatBP();
    });
    $('#browser-st').on('change',function(){
    	creatBP();
    });
    $('#system-sv').on('change',function(){
    	$('#container2').empty();
    	creatSP(); 	
    });

});
