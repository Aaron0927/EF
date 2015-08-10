// JavaScript Document

var time = "10"; // 设置选课日期
var date = "10";
var avaTime = new Array(48 * 7); // 将整个时间表分成48 × 7 的半小时，没有赋值就是undefined
var baseTime = new Date("2015/08/10 00:00:00"); // 基准时间
var time_flag = 0; // 标记是一小时的前半小时，还是后半小时
// 跳转到这个礼拜

parseJSON();
setTimeout("openCalendar()", 400);

function openCalendar()
{
    // 打开日历
    if (document.querySelector(".calendar") != null) {
        document.querySelector(".calendar").click();
        //toNextMonth();
        toThisWeek();
    } else {
        setTimeout("toThisWeek()", 400);
    }
}

function toNextMonth()
{
    // TODO 日历要从这个月翻到下个月，并不是每次选课都需要
    document.getElementsByClassName("selectMonthRight")[0].click();
    toThisWeek();
}

function toThisWeek()
{
    //alert("222");
    // 跳转到制定日期 
	var num = 0;
    if (document.getElementsByTagName("a") != null) {
        num = document.getElementsByTagName("a").length;
    }
    //alert(num);
    for (var i = 0; i < num; i++) {
	    if (document.getElementsByTagName("a")[i].innerHTML == time) {
		    document.getElementsByTagName("a")[i].click();	
		    //获取第一个包含“search”类的元素，再点击search
    		document.querySelector(".search").click();
            break;
	    }
    }
    //alert("1111");
    
    // 开始选课
	selectCourse(); 
}

// 选课
// 选课系统处理过程如下：
// 1. 遍历所有可选的课程，黄色表示有课可选
// 2. 判断这节课是否在我设置的空闲时间内，在的话就选课，这时候页面会刷新
// 3. 用setTimeout再次运行selectCourse进行选课
// TODO : 对于GL课要另外去考虑，因为GL是1小时标记的
function selectCourse()
{
    var numOfCourse = 0;
    var classTime = new Array(); // 记录课程时间
    var classId = new Array();  // 记录最终选课标号
    var flag = 0; // 标记是否在classTime已经存在

    if (document.getElementsByClassName("course class-subout-status")[0] === undefined) { // 如果没课这里可能就是死循环 TODO
        setTimeout("selectCourse()", 300);
        //alert("2");
    } else if (document.getElementsByClassName("ds")[0].innerHTML.slice(0, 2) == date) {// 这里设置延时，是因为search点击后还没有完全加载
        
        //alert(document.getElementsByClassName("ds")[0].innerHTML.slice(0, 2));
        
        numOfCourse = document.getElementsByClassName("course class-subout-status").length;

        var is_null = true;  // 标记是否已经选完课或没课选了
        for (var i = 0; i < numOfCourse; i++) {
            var str1 = document.getElementsByClassName("course class-subout-status")[i].title.slice(12, 31);
            str1 = str1.replace(/-/g, "/");
            var str1_date = new Date(str1);
            var min = (str1_date - baseTime) / (1000 * 1800); // 得到左起点时间标号，比如00:30:00的标号是1, 01:30:00的标号是3
    
            var str2 = document.getElementsByClassName("course class-subout-status")[i].title.slice(41, 60);
            str2 = str2.replace(/-/g, "/");
            var str2_date = new Date(str2);
            var max = (str2_date - baseTime) / (1000 * 1800); 
            //alert(str1 + "  " + str2 +  "  "  + min  + "  " + max);
            if ((max - min) == 1) { // 是半小时的cp课 
                // 并且在我空闲的时间内
                if (avaTime[min] == 1) {
                    document.getElementsByClassName("course class-subout-status")[i].click();
                    
                    avaTime[min] = 0; // 修改flag
                    //alert("min%2=" + min);
                    if (min % 2 == 0) { // 表示都是00:00:00-00:30:00之间，给submitClick传0
                        time_flag = 0;
                    } else {
                        time_flag = 1;  // 在00:30:00-01:00:00之间，给submitClick传1
                    }
                    submitClick();
                    is_null = false;
                    break;
                }
            }
        }
        if (is_null == true) { // 跳出
            //alert(localStorage.finish);
            //localStorage.finish = true; // 表示这次选课已经完成
            //alert('OK');
            //return setTimeout("window.history.go(-1)",9000); 
            return;
        }
    } else {
        document.querySelector(".search").click();	    
        setTimeout("selectCourse()", 300);
        //alert("3");
    }
    // TODO : 放在这可能会重复执行
    setTimeout("window.history.go(-2)",18000);
}

function submitClick(arg) // 接受一个时间参数，0表示前半小时，1表示后半小时
{

	var radioNum = 0;
	var courseNum = 0;
    // 这里跳出来又是另外一个页面，这种方法是iframe
    // 首先要获取iframe内的元素对象，通用的方法如下
    //alert("submit");
    var win = document.getElementsByClassName("ltb-load-frame")[0].contentWindow;
    if (win.document.getElementsByName("takeSubGroup")[0] === undefined) {
        setTimeout("submitClick()", 500);
    } else { 
	    radioNum = win.document.getElementsByName("takeSubGroup").length;
        courseNum = win.document.getElementsByClassName("course-name").length
	
        for (var i = 0; i < courseNum; ++i)
	    {
            var temp = win.document.getElementById("teacherScheduleTable").getElementsByTagName("tr")[i].getElementsByTagName("td")[1].getElementsByTagName("div")[3].innerHTML.slice(23, 25);
            var flag = 0;
            if (temp == "30") {
                flag = 1;
            }
            //alert("flag:" + flag + " time_flag:" + time_flag);                                   
		    if ((radioNum == courseNum && win.document.getElementsByClassName("course-name")[i].innerHTML == "PL")
                && time_flag == flag)
		    {	
			    //alert("select");
                // 选择课程
			    win.document.getElementsByName("takeSubGroup")[i].click();
			    // 提交结果				
			    win.document.getElementById("takeSubSave").click();
			    break;
		    }
	    }
	    setTimeout("selectCourse()", 900); // 稍等会等待提交
        //alert("OK");
    }
}



// 因为从availability中读取到是连续的时间
// 下面把JSON数据解析为半小时一个点的数据存储到数组中
function parseJSON()
{
    var obj = JSON.parse(localStorage.obj);

    // 遍历所有空余时间
    
    for (var i = 0; obj['avaliableTime'][i] !== undefined; i++) {
        // 获得时间的左起点
        var str1 = obj['avaliableTime'][i].slice(11, 30); // 先获取字符串上指定时间的切片
        str1 = str1.replace(/-/g, "/");  // 将-转化成/
        var str1_date = new Date(str1);  // 转成date对象
        var min = (str1_date - baseTime) / (1000 * 1800); // 得到左起点时间标号，比如00:30:00的标号是1, 01:30:00的标号是3
        //alert(str1);
        // 获取时间的右起点
        var str2 = obj['avaliableTime'][i].slice(40, 59);
        str2 = str2.replace(/-/g, "/");
        var str2_date = new Date(str2);
        var max = (str2_date - baseTime) / (1000 * 1800); 
        //alert(str2);
        //alert(min + '  '  + max);

        // 标记avaTime中的可用时间，[min, max)，注意是左闭右开
        for (var j = min; j < max; j++) {
            avaTime[j] = 1;
        }
    }
    //alert(obj['avaliableTime']);
    //alert(avaTime);
}
