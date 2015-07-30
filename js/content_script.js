// JavaScript Document
/*if(document.getElementById("J_UserNameTxt")!=null)
	document.getElementById("J_UserNameTxt").value = "zhangbobell";
if(document.getElementById("J_PassWordTxt")!=null)
	document.getElementById("J_PassWordTxt").value = "tb123456";

var numOfInput = document.getElementsByTagName("input").length;
for(var i = 0;i<numOfInput;i++)
{
	if(document.getElementsByTagName("input")[i].value == "登 录")
		{
			document.getElementsByTagName("input")[i].click();
			break;	
		}
}*/

// JavaScript Document
//setTimeout("toIndexPage()",1000);
//alert("OK");

var username = new Array();
var password = new Array();
username[0]="tb24110227";
password[0]="6575eicr";

/*for(var i = 0; i<username.length; i++)
{
	allInAll(username[i],password[i]);	
}*/

login(username[0], password[0]);

function toShopPage()
{
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
	//alert("ok,It's prepare to delay.")
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

function toExit(username)
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

function login(username, password)
{
	if(document.getElementById("J_UserNameTxt")!=null)
		document.getElementById("J_UserNameTxt").value = username;
	if(document.getElementById("J_PassWordTxt")!=null)
		document.getElementById("J_PassWordTxt").value = password;

	var numOfInput = document.getElementsByTagName("input").length;
	for(var i = 0;i<numOfInput;i++)
	{
		if(document.getElementsByTagName("input")[i].value == "登 录")
			{
				document.getElementsByTagName("input")[i].click();
				break;	
			}
	}	
}

function allInAll(username, password)
{
	//var t=setTimeout("alert('1 seconds!')",1000)
	//alert("login is going to execute");
	login(username, password);
	//alert('login executed');
	//toShopPage();
	//setTimeout("toShopPage()",5000);
	//alert('toShopPage executed');	
	fromMyPageToShopPage()
	//alert('fromMyPageToShopPage executed');	
	toFocus();
	///alert('toFocus executed');
	toPrepareExit();
	//alert('toPrepareExit executed');
	toExit(username);
	//alert('toExit executed');
	
	return true;	
}



/*else if(location.href=="http://h5.m.taobao.com/we/index.htm#accountList/2/1"||location.href=="http://h5.m.taobao.com/we/index.htm#accountList/2/0")
	toUnFocus();
else
	toUnFoucus2();*/

