function httpRequest(url, callback){
    var xhr = new XMLHttpRequest();  // 通过 XMLHttpRequest 对象向远程服务器发送和接收数据
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) { // 4表示完成
            callback(xhr.responseText);
        }
    }
    xhr.send();
}

function showWeather(result){
    result = JSON.parse(result);
    var list = result.list;
    var table = '<table><tr><th>日期</th><th>天气</th><th>最低温度</th><th>最高温度</th></tr>';
    for(var i in list){
        var d = new Date(list[i].dt*1000);
        table += '<tr>';
        table += '<td>'+d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate()+'</td>';
        table += '<td>'+list[i].weather[0].description+'</td>';
        table += '<td>'+Math.round(list[i].temp.min-273.15)+' °C</td>';
        table += '<td>'+Math.round(list[i].temp.max-273.15)+' °C</td>';
        table += '</tr>';
    }
    table += '</table>';
    document.getElementById('weather').innerHTML = table;
}

var city = localStorage.city;
city = city?city:'beijing'; // 当选项没有值时，应设定一个默认值，以避免程序出错
var url = 'http://api.openweathermap.org/data/2.5/forecast/daily?q='+city+',china&lang=zh_cn';
httpRequest(url, showWeather);
