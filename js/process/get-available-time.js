// JavaScript Document

var time = "03"; // 设置选课日期

// 跳转到这个礼拜
toThisWeek();

function toThisWeek()
{
    // 打开日历
    while (true) {
        if (document.querySelector(".calendar") != null) {
            document.querySelector(".calendar").click();
            break;
        }
    }

    // TODO 日历要从这个月翻到下个月，并不是每次选课都需要
    document.getElementsByClassName("selectMonthRight")[0].click();


    // 跳转到制定日期 
	var num = 0;
    var flag = 0;
    while (true) {
        if (document.getElementsByTagName("a") != null) {
            num = document.getElementsByTagName("a").length;
        }
        for (var i = 0; i < num; i++) {
	        if (document.getElementsByTagName("a")[i].innerHTML == time) {
		        document.getElementsByTagName("a")[i].click();	
		        //获取第一个包含“search”类的元素，再点击search
    		    document.querySelector(".search").click();	
                flag = 1;
		        break;
	        }
        }
        if (flag == 1) {
            break;
        }
    }
    // 保存数据
    setTimeout("saveAvaliableTime()", 400);  // 防止search.click还没生效
}

function saveAvaliableTime()
{
       
    //alert(document.getElementsByClassName("write")[0]);
    if (document.getElementsByClassName("write")[0] === undefined) { // TODO 没设置时间可能出现死循环
        setTimeout("saveAvaliableTime()", 200);
    } else if (document.getElementsByClassName("ds")[0].innerHTML.slice(0, 2) == time){  // 可能search可能还没有加载完成
        // localStorage可以存储json对象
        // 所以我们将设置的所有可用时间设置为json格式
        var Obj = {avaliableTime : []} // 申明一个json对象
        
        var doc = document.getElementsByClassName("write");
        var numOftime = doc.length;
        for (var i = 0; i < numOftime; i++) {
            // 插入到Obj中
            Obj.avaliableTime.push(doc[i].title);
        }
        // 存入到localStorage中
        var str = JSON.stringify(Obj);
        // 清空obj内容
        //alert(str);
        localStorage.obj = str;
        //toSchedulePage();
    } else {
        document.querySelector(".search").click();
        setTimeout("saveAvaliableTime()", 300);
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
