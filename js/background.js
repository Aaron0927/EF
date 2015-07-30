
localStorage.finish = false;  // 自动选课程序是否已经运行一次完成


//chrome.browserAction.onClicked.addListener(updateIcon);
//updateIcon();
// 设置badge，注意它最多只能显示4个字节，目前还不支持修改文字的颜色
chrome.browserAction.setBadgeBackgroundColor({color:'#0000FF'});
chrome.browserAction.setBadgeText({text:'2'});

// 创建一个桌面提醒
function notify(){
    var opt = {
        type: "basic",
        title: "新通知",
        message: "正在选课，请勿关闭浏览器！",
        iconUrl: "img/icon48.png"
    }
    chrome.notifications.create('',opt,function(id){  
    })
    setTimeout("notify()", 10000);
}
notify();
//auto();
function auto()
{
    if (localStorage.finish == false) {
        localStorage.finish = false;
        notify();
        location.href = "http://www.englishtown.com/Axis/schedule/teacherweeklyview"; // 主动跳转
    }
    setTimeout(auto(), 300000);
}


