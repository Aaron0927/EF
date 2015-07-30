// 先跳转到AvaliablePage获取可以选课时间，然后再跳转到schedule page

var time = "6"; // 设置选课日期
//toAvaliablePage();
toSchedulePage();



function toAvaliablePage()
{
    var num = 0;
    if (document.getElementsByTagName("a") != null) {
        num = document.getElementsByTagName("a").length;
    }
    for (var i = 0; i < num; i++) {
   		if (document.getElementsByTagName("a")[i].innerHTML == "Weekly availability") {
   				document.getElementsByTagName("a")[i].click();
   				break;	
   		}
    }  	
    openCalendar();
}


// 打开日历
function openCalendar()
{
    // 打开日历
    if (document.querySelector(".calendar") == null) {
        setTimeout("toThisWeek()", 500);
    } else {
        document.querySelector(".calendar").click();
        alert("1");
        // 跳转到制定日期 
        setTimeout("goToDate()", 8000);
    }
    alert("after");
}

// 进行跳转
function goToDate()
{
  // 跳转到制定日期 
  var num = 0;
  num = document.getElementsByTagName("a").length;
  for (var i = 0; i < num; i++) {
      if (document.getElementsByTagName("a")[i].innerHTML == time) {
            document.getElementsByTagName("a")[i].click();	
            //获取第一个包含“search”类的元素，再点击search
  	        document.querySelector(".search").click();	
            break;
        }
    }                                                                     
}























function toSchedulePage()
{
	var num = 0;
    if (document.getElementsByTagName("a") != null) {
        num = document.getElementsByTagName("a").length;
    }
	for (var i = 0; i < num; i++) {
		if (document.getElementsByTagName("a")[i].innerHTML == "Weekly schedule") {
				document.getElementsByTagName("a")[i].click();
				break;	
		}
	}
}
