login("jhu6269", "1");
//login("jhuang13388", "1");
//login("jyang14933", "1");
function login(username, password)
{
    // 判断是否加载完成，只要输入框和提交按钮加载完成即可
    while (true) {
	    if (document.getElementById("UserName") != null)
        {
            document.getElementById("UserName").value = username;
            break;
        }       
    }

    while (true) {
        if (document.getElementById("Password") != null) {
            document.getElementById("Password").value = password;
            break;
        }
    }
    
    while (true) {
        if (document.getElementsByClassName("et-btn-submit")[0] != null) {
            document.getElementsByClassName("et-btn-submit")[0].click();
            break;
        }
    }
	//document.getElementById("loginForm2").submit();
}


