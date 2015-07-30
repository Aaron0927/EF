// JavaScript Document
//setTimeout("toIndexPage()",1000);
//alert("OK");

var username="zhangbobell";
var password="tb123456";

//alert("ok allinall");
allInAll(username, password);


function toShopPage()
{
/*	while(1)
	{
		console.log("1");
		if(!isLoginPage())
			break;
	}
	*/
	var numOfa=0;
	if(document.getElementsByTagName("a")!=null)
		numOfa = document.getElementsByTagName("a").length;
	for(var i = 0;i<numOfa;i++)
	{
		if(!isLoginPage())
		{
			if(document.getElementsByTagName("a")[i].innerHTML == "继续")
				{
					alert("this is the continue page.");
					document.getElementsByTagName("a")[i].click();
					break;	
				}
		}
	}
}

function isLoginPage()
{
	var numOfSpan=0;
	if(document.getElementsByTagName("span")!=null)
		numOfSpan = document.getElementsByTagName("span").length;
	for(var i = 0;i<numOfSpan;i++)
	{
		if(document.getElementsByTagName("span")[i].innerHTML == "会员登录")
				return true;
	}
	if(i == numOfSpan)
		return false;
	/*if(document.getElementsByTagName("title")[0].innerHTML == "手机淘宝网 - 会员登录 ")
	{
		alert("识别成功，手机淘宝网 - 会员登录 .")
		return true;
	}
	else
		return false;*/
	
}
function isMyPage()
{
/*	var numOfa=0;
	if(document.getElementsByTagName("a")!=null)
		numOfa = document.getElementsByTagName("a").length;
	for(var i = 0;i<numOfa;i++)
	{
		if(document.getElementsByTagName("a")[i].innerHTML == "我的淘宝")
				return true;
	}
	if(i == numOfSpan)
		return false;*/
		
	if(document.getElementById("J_myFav")!=null)
	{
		if(document.getElementById("J_myFav").innerHTML == "宝贝收藏")
			return true;
	}
	else
		return false;
}

function fromMyPageToShopPage()
{
	if(isMyPage())
	{
		alert("this is my taobao page.");
		window.location.assign("http://h5.m.taobao.com/we/index.htm?#account/2039051041/1");			
	}
}

/*function toIndexPage()
{
	var numOfa = document.getElementsByTagName("a").length;
	for(var i = 0;i<numOfa;i++)
	{
		var classValue = document.getElementsByTagName("a")[i].attributes.getNamedItem("class").value;
		if(classValue == "c-btn c-btn-aw")
			{
				window.location.assign("http://h5.m.taobao.com/we/index.htm#accountList/1");
				break;	
			}
	}
	
}*/

function toFocus()
{
	var numOfa=0;
	if(document.getElementsByTagName("button") != null)
		numOfa = document.getElementsByTagName("button").length;
	for(var i = 0;i<numOfa;i++)
	{
		if(document.getElementsByTagName("button")[i].attributes.getNamedItem("data-log")!=null)
		{
			if(document.getElementsByTagName("button")[i].attributes.getNamedItem("data-log").value == "attention")
				{
					alert("this is the shop page ,And prepare to click the focus button.");
					document.getElementsByTagName("button")[i].click();//点击"关注"
					//setTimeout('window.location=this.location.href+"#"+new Date().getTime();',2000);//强制刷新
					window.location=this.location.href+"#"+new Date().getTime();
					break;	
				}
			//if(i == (numOfa-1))
				//setTimeout('window.location=this.location.href+"#"+new Date().getTime();',5000);
				//setTimeout('location.reload();',2000);
		}
	}
}

function toPrepareExit()
{
	var numOfa=0;
	if(document.getElementsByTagName("button") != null)
		numOfa = document.getElementsByTagName("button").length;
	for(var i = 0;i<numOfa;i++)
	{
		if(document.getElementsByTagName("button")[i].attributes.getNamedItem("data-log")!=null)
		{
			if(document.getElementsByTagName("button")[i].attributes.getNamedItem("data-log").value == "cancelattention")//如果出现"取消关组"
				{
					//document.getElementsByTagName("div")[i].click();
					//continue;
					alert("Still shop page ,But then prepare to go to the login page.");
					window.location.assign("http://login.m.taobao.com/login.htm");//跳转到登陆页面，准备退出
					break;
				}
		}
		/*if(i == (numOfa-1))
		{
			//alert(location.href);
			setTimeout('location.reload();',2000);
			//window.location=this.location.href+"#"+new Date().getTime();
		}*/
		
		
	}
}

function toExit()
{
	var numOfa=0;
	if(document.getElementsByTagName("a")!=null)
		numOfa = document.getElementsByTagName("a").length;
	for(var i = 0;i<numOfa;i++)
	{
		if(isLoginPage())
		{
			if(document.getElementsByTagName("a")[i].innerHTML == username)
				{
					alert("this is the login page ,prepare to click the exit button to exit.");
					clickExitAnchor();
					break;	
				}
		}
	}
}

function clickExitAnchor()
{
	var numOfa=0;
	if(document.getElementsByTagName("a")!=null)
		numOfa = document.getElementsByTagName("a").length;
	for(var i = 0;i<numOfa;i++)
	{
		if(document.getElementsByTagName("a")[i].innerHTML == "退出")
			{
				document.getElementsByTagName("a")[i].click();
				break;	
			}
	}	
}


function allInAll(username, password)
{
	alert("0");
	console.log("0");
	login(username, password);
	console.log("1");
	alert("1");
	setTimeout("alert('123')",10000);
	toShopPage();
	alert("2");
	fromMyPageToShopPage()
	alert("3");
	toFocus();
	
	alert("4");
	toPrepareExit();
	alert("5");
	toExit(username);
	alert("6");
	return true;	
}
/*else if(location.href=="http://h5.m.taobao.com/we/index.htm#accountList/2/1"||location.href=="http://h5.m.taobao.com/we/index.htm#accountList/2/0")
	toUnFocus();
else
	toUnFoucus2();*/
