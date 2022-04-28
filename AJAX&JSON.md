<!-- 04.27：2h -->
# AJAX & JSON
Asynchronous JavaScript And XML，通俗地说就是用 JS 发请求和收响应。

## 准备一个服务器
可以用 JS 写一个简单地服务器，然后 npm/yarn 安装 node-dev，用 node server.js 端口号 启动服务器。

## 四个经典步骤
1. 创建 XMLHttpRequest 对象
2. 调用该对象的 open 方法 .open(method, url)
3. 监听对象的 onload(成功) & onerror(失败) 事件
    * 专业的前端会改用 onreadystatechange 事件
    * 在该事件处理函数里操作文件(css/js/html/xml等)内容
4. 调用对象 send 方法发送请求

## JSON
JSON JavaScript Object Notation，是一门<strong><a href='http://json.org/json-zh.html'>标记语言</a></strong>（比如 HTML、XML、Markdown），用来展示数据。通过浏览上述链接里的铁轨图，可以很好地理解JSON语法，清楚JSON应该怎么写。JSON 六种数据类型：string、number、boolean、null、object、array。

JSON 两个常用方法：
1. JSON.parse(...)，将符合JSON语法地字符串转换成JS对应类型地数据。JSON字符串 → JS 数据，如果不符合JSON语法，则直接抛出error对象，一般用 try catch 捕获错误。
2. JSON.stringify(...)，JS 数据 → JSON字符串。注意JS数据类型较多，转换不一定成功，不成功则抛出error对象。
