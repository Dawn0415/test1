function load() {
    var url = "./json/my.json"; // 获取 JSON 数据的链接
    var request;
    if (window.XMLHttpRequest) {
        request = new XMLHttpRequest(); //发送 Ajax 请求，适用于 Chrome, mozilla 等浏览器 
    } else if (window.ActiveXObject) {
        request = new ActiveXObject("Microsoft.XMLHTTP"); // 发送 Ajax 请求，适用于 IE 浏览器 
    }
    request.onreadystatechange = function() {
        if (request.readyState == 4) {
            var jsonObj = JSON.parse(request.responseText); // 解析 JSON 数据
            console.log(jsonObj.title[2])
            for (let i = 0; i < jsonObj.length; i++) {
                document.write(`
                <div class="rq">
                <!-- 标题 -->
                    <h3>森林砍伐热搜</h3>
                <!-- 新闻列表 -->
                    <ul>
                        <li><a href=${jsonObj.url[i]} target="_blank"><span class="col1">${i + 1}</span>${jsonObj.title[i]}</a></li>
                    </ul>
                </div>

                `)
            };
            // jsonObj.title.forEach(element => {
            //     console.log(element)
            //     document.getElementById("title").innerHTML =element
            // });
            // jsonObj.url.forEach(em =>{
            //     console.log(em)
            //     document.getElementById("url").innerHTML =em
            // });
        }
        
        
    }
    request.open("GET", url, true);
    request.send();
}
