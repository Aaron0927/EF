// JavaScript Document

document.onreadystatechange=function(){if(document.readyState == 'complete')
if(isExitPage())
{
	clickExitAnchor();
}
	
	};

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

function isExitPage()
{
	var numOfa=0;
	if(document.getElementsByTagName("a")!=null)
		numOfa = document.getElementsByTagName("a").length;
	for(var i = 0;i<numOfa;i++)
	{
		if(document.getElementsByTagName("a")[i].innerHTML == "退出")
			{
				return true;	
			}
	}
	return false;	
}