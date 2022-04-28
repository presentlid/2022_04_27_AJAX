/* 用 AJAX 加载 CSS */
getCSS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "/style.css");
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const style = document.createElement('style');
            style.innerHTML = request.response;
            document.body.appendChild(style);
        }
    };
    request.send();
}

/* 用 AJAX 加载 JS */
getJS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "/script.js");
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const script = document.createElement('script');
            script.innerHTML = request.response;
            document.body.appendChild(script);
        }
    };
    request.send();
};

/* 用 AJAX 加载 html */
let index = 1;
function fnGetHtml() {
    const request = new XMLHttpRequest();
    request.open("GET", "/index1.html");
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            $('div')[0].innerHTML = request.response;
            index = 1;
        }
    };
    request.send();
}
$('#getHTML').on('click', fnGetHtml);

/* 用 AJAX 加载 XML 内容 */
$('#getXML').on('click', () => {
    const request = new XMLHttpRequest();
    request.open("GET", "/xml.xml");
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            console.log($(request.responseXML).find('warning')[0].textContent.trim());
        }
    }
    request.send();
});

/* AJAX 加载 JSON，模拟分页操作 */
function showJSON() {
    const request = new XMLHttpRequest();
    request.open("GET", `/page${index}`);
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {
            const objs = JSON.parse(request.response);
            $('#xxx')[0].innerHTML = objs.map(item => `<li>${item.id}</li>`).join('');
        }
    };
    request.send();
}
$('#getJSON1').on('click', () => {
    if ($('#xxx').length === 0) {
        fnGetHtml();
    } else {
        if (index > 1) {
            index--;
            showJSON();
        }
    }
});
$('#getJSON2').on('click', () => {
    if ($('#xxx').length === 0) {
        fnGetHtml();
    } else {
        if (index < 3) {
            index++;
            showJSON();
        }
    }
});


