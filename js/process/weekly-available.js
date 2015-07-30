// 先跳转到AvaliablePage获取可以选课时间，然后再跳转到schedule page

toAvailabilityPage();
function toAvailabilityPage()
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
}
