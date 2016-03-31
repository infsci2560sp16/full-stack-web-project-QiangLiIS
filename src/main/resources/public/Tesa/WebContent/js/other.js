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
	  url: 'customer.json',
	  type: 'GET',
	  dataType: 'json',
	  complete: function(xhr, textStatus) {
	    //called when complete
	  },
	  success: function(data, textStatus, xhr) {
		  var persons = data.person;
		  $.each(persons,function(index, el) {
		  		var ta = $('.result-body').find('table').find('tbody');
		   		var tr = $('<tr></tr>').appendTo(ta);
		  		$('<td></td>').text(el.LastName).appendTo(tr);
		  		$('<td></td>').text(el.FirstName).appendTo(tr);
		  		$('<td></td>').text(el.SSN).appendTo(tr);
		  		$('<td></td>').text(el.Gender).appendTo(tr);
		  		$('<td></td>').text(el.DOB).appendTo(tr);
		  		$('<td></td>').text(el.Age).appendTo(tr);
		  		$('<td></td>').text(el.Phone).appendTo(tr);
		  		$('<td></td>').text(el.City).appendTo(tr);
		  		$('<td></td>').text(el.State).appendTo(tr);
		  		$('<td></td>').text(el.Zipcode).appendTo(tr);
		  	});
		 
		  
	  },
	  error: function(xhr, textStatus, errorThrown) {
	    alert("error");
	  }
	});
	
});