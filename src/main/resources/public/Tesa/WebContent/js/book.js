$(document).ready(function() {
	var tool={
		modify_css:function(object,attr,value){ //设置css的封装函数 （object：对象，attr：要改变的css属性，value：改变的值）
			object.css(attr,value);
		},
		modify_animate:function(object,attr,value,duration,fun){ //设置左右欢动效果的封装函数 （object：对象，attr：要改变的css属性，value：改变的值）
				object.animate({height : value},duration,function(){fun});
			},
		modify_event:function(object,event,fun){ //设置事件的封装函数 （object：对象，event：事件名称，fun：触发的函数）
				object.bind(event,fun);
			}
	}

	jQuery.ajax({
	  url: 'customer.xml',
	  type: 'GET',
	  dataType: 'xml',
	  complete: function(xhr, textStatus) {
	    //called when complete
	  },
	  success: function(xml) {
	   $(xml).find('person').each(function(index, el) {
	   		var lastname = $(this).children('Lastname').text();
	   		var firstname = $(this).children('Firstname').text();
	   		var ssn = $(this).children('SSN').text();
	   		var gender = $(this).children('Gender').text();
	   		var DOB= $(this).children('DOB').text();
	   		var age = $(this).children('Age').text();
	   		var phone = $(this).children('Phone').text();
	   		var city = $(this).children('City').text();
	   		var state = $(this).children('State').text();
	   		var zipcode = $(this).children('Zipcode').text();
	   		var ta = $('.result-body').find('table').find('tbody');
	   		var tr = $('<tr></tr>').appendTo(ta);
	   		$('<td></td>').text(lastname).appendTo(tr);
	   		$('<td></td>').text(firstname).appendTo(tr);
	   		$('<td></td>').text(ssn).appendTo(tr);
	   		$('<td></td>').text(gender).appendTo(tr);
	   		$('<td></td>').text(DOB).appendTo(tr);
	   		$('<td></td>').text(age).appendTo(tr);
	   		$('<td></td>').text(phone).appendTo(tr);
	   		$('<td></td>').text(city).appendTo(tr);
	   		$('<td></td>').text(state).appendTo(tr);
	   		$('<td></td>').text(zipcode).appendTo(tr);
	   })
	  },
	  error: function(xhr, textStatus, errorThrown) {
	    alert("error");
	  }
	});
	
});