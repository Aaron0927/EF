// JavaScript Document

//toFocus();
document.onreadystatechange=function(){if(document.readyState == 'complete')toFocus();toPrepareExit();};
//toPrepareExit();

function toFocus()
{
	//alert("toFocus");
	var numOfa=0;
	if(document.getElementsByTagName("button") != null)
		numOfa = document.getElementsByTagName("button").length;
	//alert(numOfa);
	for(var i = 0;i<numOfa;i++)
	{
		/*if(document.getElementsByTagName("button")[i].attributes.getNamedItem("data-log")!=null)
		{
			if(document.getElementsByTagName("button")[i].attributes.getNamedItem("data-log").value == "attention")
				{
					alert("this is the shop page ,And prepare to click the focus button.");
					document.getElementsByTagName("button")[i].click();//点击"关注"
					window.location=this.location.href+"#"+new Date().getTime();
					break;	
				}
		}*/
		//alert(document.getElementsByTagName("button")[i].innerHTML);
		if(document.getElementsByTagName("button")[i].innerHTML!=null)
		{
			if(document.getElementsByTagName("button")[i].innerHTML == "关注")
				{
					//alert("this is the shop page ,And prepare to click the focus button.");
					document.getElementsByTagName("button")[i].click();//点击"关注"
					//window.location=this.location.href+"#"+new Date().getTime();
					break;	
				}
			else
			 self.setInterval(" window.location.reload(true)",1000)
		}
	}
}

function toPrepareExit()
{
	//alert("toPrepareExit");
	var numOfa=0;
	if(document.getElementsByTagName("button") != null)
		numOfa = document.getElementsByTagName("button").length;
	for(var i = 0;i<numOfa;i++)
	{
		//alert(document.getElementsByTagName("button")[i].innerHTML);
		if(document.getElementsByTagName("button")[i].attributes.getNamedItem("data-log")!=null)
		{
			if(document.getElementsByTagName("button")[i].attributes.getNamedItem("data-log").value == "cancelattention")//如果出现"取消关组"
				{
					//alert("Still shop page ,But then prepare to go to the login page.");
					window.location.assign("http://login.m.taobao.com/login.htm");//跳转到登陆页面，准备退出
					break;
				}
			else
			 self.setInterval(" window.location.reload(true)",1000)
		}		
	}
}