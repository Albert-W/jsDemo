### jQuery 与 JS 命令参照表

我整理了一张 《jQuery 与 JS 命令参照表》，包括 Select，Content，CSS，DOM，Event 五个常见分类。

jQuery VS JS comparison table

|         |              | jQuery                                  | JS                                                                                                                             |
|---------|--------------|-----------------------------------------|--------------------------------------------------------------------------------------------------------------------------------|
| Select  | by di        | $('#id')                                | document.getElementById('id')                                                                                                  |
|         | by tag       | $('tag')                                | document.getElementsByTagName('tag')                                                                                           |
|         | by class     | $('.class')                             | document.getElementsByClassName("class");                                                                                      |
|         | by css       | $("css selector")                       | document.querySelectorAll("css selector")                                                                                      |
|         | first el     | $("css selector")[0]                    | document.querySelector("css selector")                                                                                         |
| Content | set text     | el.text(string);                        | el.textContent = string;                                                                                                       |
|         | get text     | var myText = el.text();                 | var myText = el.textContent                                                                                                    |
|         | set html     | el.html(htmlString);                    | el.innerHTML = htmlString;                                                                                                     |
|         | get html     | var content = el.html();                | var content = el.innerHTML;                                                                                                    |
|         | input        | el.val();                               | el.value;                                                                                                                      |
| CSS     | hide         | el.hide();                              | el.style.display = "none";                                                                                                     |
|         | show         | el.show();                              | el.style.display = "";                                                                                                         |
|         | style        | el.css("fontsize", "35px");             | el.style.fontSize = "35px";                                                                                                    |
|         | get attr     | el.attr('foo');                         | el.getAttribute('foo');                                                                                                        |
|         | set attr     | el.attr('foo', 'bar');                  | el.setAttribute('foo', 'bar');                                                                                                 |
|         | has class    | el.hasClass('className');               | el.classList.contains('className')                                                                                             |
|         | add class    | el.addClass('className');               | el.classList.add('className');                                                                                                 |
|         | remove class | el.removeClass('className');            | el.classList.remove('className');                                                                                              |
|         | toggle class | el.toggleClass('className');            | el.classList.toggle('className');                                                                                              |
| DOM     | Remove       | el.remove();                            | el.parentNode.removeChild(el);                                                                                                 |
|         | empty        | el.empty();                             | el.innerHTML = null;                                                                                                           |
|         | get parent   | var myParent = el.parent();             | var myParent = el.parentNode;                                                                                                  |
|         | scroll top   | $(window).scrollTop();                  | (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;                                   |
|         | DOM ready    | $('document').ready(eventHandler);      | document.addEventListener('DOMContentLoaded', eventHandler);                                                                   |
|         | Ajax         | $(selector).load(url, completeCallback) | fetch(url).then(data => data.text() ).then(data=>{ document.querySelector(selector).innerHTML = data }).then(completeCallback) |
|         | iframe       | $iframe.contents();                     | iframe.contentDocument;                                                                                                        |
|         | body         | $('body');                              | document.body;                                                                                                                 |
|         | this         | $(this)                                 | this                                                                                                                           |
| Event   | click        | el.on('click', eventHandler);           | el.addEventListener('click', eventHandler);                                                                                    |
|         | remove click | el.off('click', eventHandler);          | el.removeEventListener('click', eventHandler);                                                                                 |


欢迎指正或补充。

#### 参考资料
1. w3schools: https://www.w3schools.com/js/js_jquery_selectors.asp 
2. csdn blog: https://blog.csdn.net/DUDUfine/article/details/75944536 
3. stackoverflow: https://stackoverflow.com/questions/9899372/pure-javascript-equivalent-of-jquerys-ready-how-to-call-a-function-when-t
4. stackoverflow: https://stackoverflow.com/questions/5085567/what-is-the-hasclass-function-with-plain-javascript 
5. github: https://github.com/nefe/You-Dont-Need-jQuery#browser-support
