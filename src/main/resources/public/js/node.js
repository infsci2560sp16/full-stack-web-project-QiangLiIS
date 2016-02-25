    window.onload = function(){
          var tr=document.getElementsByTagName("tr");
          for(var i= 0;i<tr.length;i++)
          {
              bgcChange(tr[i]);
          }
     
      }  ;       
	 function bgcChange(obj)
     {
        obj.onmouseover=function(){
            obj.style.backgroundColor="#f2f2f2";
        };
        obj.onmouseout=function(){
            obj.style.backgroundColor="#fff";
        };
	 }
   
	
     var num=2;
     function add(){
        num++;
        var tr=document.createElement("tr");
        var xh=document.createElement("td");
        var xm=document.createElement("td");
        xh.innerHTML="BI00"+num;
        xm.innerHTML="BookName"+num;
        var del=document.createElement("td");
        del.innerHTML="<a href='javascript:;' onclick='del(this)' >Delete</a>";
        var tab=document.getElementById("table");
        tab.appendChild(tr);
        tr.appendChild(xh);
        tr.appendChild(xm);
        tr.appendChild(del);
        var tr1 = document.getElementsByTagName("tr");
          for(var i= 0;i<tr.length;i++)
          {
              bgcChange(tr1[i]);
          }
     }
     
			
   	 
     
     function del(obj)
     {
         var tr=obj.parentNode.parentNode;
         tr.parentNode.removeChild(tr);
     }