var pie=function(obj){
		var highchart={
			chart: {
	            plotBackgroundColor: null,
	            plotBorderWidth: null,
	            plotShadow: false
	        },
	        title: {
	            text: obj.title
	        },
	        tooltip: {
	            pointFormat: obj.pointFormat
	        },
	        plotOptions: {
	            pie: {
	                allowPointSelect: true,
	                cursor: 'pointer',
	                dataLabels: {
	                    enabled: true,
	                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
	                    style: {
                       		 color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    		}
	                    },
	                events:{
	                		click:function(event){
	                			//console.log(event.point);
	                			var name=event.point.name;
	                			console.log($.isFunction(obj.click));
	                			if ($.isFunction(obj.click)) {
									obj.click(name);
	                			}
	                		}
	                	}
	                }
	            },
	        series: [{
	        	type:'pie',
	            name: 'Brands',
	            colorByPoint: true,
	            data: obj.data
	        }]
		};
		$(obj.id).highcharts(highchart);
	}