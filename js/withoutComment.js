function toShopPage()
{
	var numOfa=0;
	if(document.getElementsByTagName('a')!=null)
		numOfa = document.getElementsByTagName('a').length;
	for(var i = 0;i<numOfa;i++)
	{
		if(!isLoginPage())
		{
			if(document.getElementsByTagName('a')[i].innerHTML == '继续')
				{
					document.getElementsByTagName('a')[i].click();
					break;	
				}
		}
	}
}

function isLoginPage()
{
	var numOfSpan=0;
	if(document.getElementsByTagName('span')!=null)
		numOfSpan = document.getElementsByTagName('span').length;
	for(var i = 0;i<numOfSpan;i++)
	{
		if(document.getElementsByTagName('span')[i].innerHTML == '会员登录')
				return true;
	}
	if(i == numOfSpan)
		return false;
	
}
function isMyPage()
{
		
	if(document.getElementById('J_myFav')!=null)
	{
		if(document.getElementById('J_myFav').innerHTML == '宝贝收藏')
			return true;
	}
	else
		return false;
}

function fromMyPageToShopPage()
{
	if(isMyPage())
	{
		window.location.assign('http://h5.m.taobao.com/we/index.htm?#account/2039051041/1');			
	}
}

function toFocus()
{
	var numOfa=0;
	if(document.getElementsByTagName('button') != null)
		numOfa = document.getElementsByTagName('button').length;
	for(var i = 0;i<numOfa;i++)
	{
		if(document.getElementsByTagName('button')[i].attributes.getNamedItem('data-log')!=null)
		{
			if(document.getElementsByTagName('button')[i].attributes.getNamedItem('data-log').value == 'attention')
				{
					document.getElementsByTagName('button')[i].click();
					window.location=this.location.href+'#'+new Date().getTime();
					break;	
				}
		}
	}
}

function toPrepareExit()
{
	var numOfa=0;
	if(document.getElementsByTagName('button') != null)
		numOfa = document.getElementsByTagName('button').length;
	for(var i = 0;i<numOfa;i++)
	{
		if(document.getElementsByTagName('button')[i].attributes.getNamedItem('data-log')!=null)
		{
			if(document.getElementsByTagName('button')[i].attributes.getNamedItem('data-log').value == 'cancelattention')
				{
					window.location.assign('http://login.m.taobao.com/login.htm');
					break;
				}
		}	
		
	}
}

function toExit()
{
	var numOfa=0;
	if(document.getElementsByTagName('a')!=null)
		numOfa = document.getElementsByTagName('a').length;
	for(var i = 0;i<numOfa;i++)
	{
		if(isLoginPage())
		{
			if(document.getElementsByTagName('a')[i].innerHTML == 'zhangbobell')
				{
					clickExitAnchor();
					break;	
				}
		}
	}
}

function clickExitAnchor()
{
	var numOfa=0;
	if(document.getElementsByTagName('a')!=null)
		numOfa = document.getElementsByTagName('a').length;
	for(var i = 0;i<numOfa;i++)
	{
		if(document.getElementsByTagName('a')[i].innerHTML == '退出')
			{
				document.getElementsByTagName('a')[i].click();
				break;	
			}
	}	
}

function login(username, password)
{
	if(document.getElementById('J_UserNameTxt')!=null)
		document.getElementById('J_UserNameTxt').value = username;
	if(document.getElementById('J_PassWordTxt')!=null)
		document.getElementById('J_PassWordTxt').value = password;

	var numOfInput = document.getElementsByTagName('input').length;
	for(var i = 0;i<numOfInput;i++)
	{
		if(document.getElementsByTagName('input')[i].value == '登 录')
			{
				document.getElementsByTagName('input')[i].click();
				break;	
			}
	}	
}

function allInAll(username, password)
{
	login(username, password);
	alert('login executed');
	toShopPage();
	alert('toShopPage executed');
	fromMyPageToShopPage()
	alert('fromMyPageToShopPage executed');
	toFocus();
	alert('toFocus executed');
	toPrepareExit();
	alert('toPrepareExit executed');
	toExit();
	alert('toExit executed');
	
	return true;	
}
