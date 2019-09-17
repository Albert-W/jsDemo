### jQuery 与 JS 命令参照表

我整理了一张 《jQuery 与 JS 命令参照表》，包括 Select，Content，CSS，DOM，Event 五个常见分类。

jQuery VS JS comparison table

|         |              | jQuery                                                           | JS                                                                                       |
|---------|--------------|------------------------------------------------------------------|------------------------------------------------------------------------------------------|
| Select  | by di        | $('#id')                                                         | document.getElementById('id')                                                            |
|         | by tag       | $('tag')                                                         | document.getElementsByTagName('tag')                                                     |
|         | by class     | $('.class')                                                      | document.getElementsByClassName("class");                                                |
|         | by css       | $("css selector")                                                | document.querySelectorAll("css selector")                                                |
|         | by attr      | $('a[target=_blank]')                                            | document.querySelectorAll('a[target=_blank]');                                           |
|         | first el     | $("css selector:first")                                          | document.querySelector("css selector")                                                   |
|         | find         | el.find('li')                                                    | el.querySelectorAll('li')                                                                |
| Content | get text     | el.text();                                                       | el.textContent                                                                           |
|         | set text     | el.text(string);                                                 | el.textContent = string;                                                                 |
|         | get html     | el.html();                                                       | el.innerHTML;                                                                            |
|         | set html     | el.html(htmlString);                                             | el.innerHTML = htmlString;                                                               |
|         | input        | el.val();                                                        | el.value;                                                                                |
|         | now          | $.now()                                                          | Date.now()                                                                               |
| CSS     | hide         | el.hide();                                                       | el.style.display = "none";                                                               |
|         | show         | el.show();                                                       | el.style.display = "block";                                                              |
|         | style        | el.css("fontsize", "35px");                                      | el.style.fontSize = "35px";                                                              |
|         | get attr     | el.attr('foo');                                                  | el.getAttribute('foo');                                                                  |
|         | set attr     | el.attr('foo', 'bar');                                           | el.setAttribute('foo', 'bar');                                                           |
|         | has class    | el.hasClass('className');                                        | el.classList.contains('className')                                                       |
|         | add class    | el.addClass('className');                                        | el.classList.add('className');                                                           |
|         | remove class | el.removeClass('className');                                     | el.classList.remove('className');                                                        |
|         | toggle class | el.toggleClass('className');                                     | el.classList.toggle('className');                                                        |
| DOM     | remove       | el.remove();                                                     | el.parentNode.removeChild(el);                                                           |
|         | empty        | el.empty();                                                      | el.innerHTML = null;                                                                     |
|         | is           | el.is(selector);                                                 | el.matches(selector);                                                                    |
|         | contains     | $.contains(el,child);                                            | el.contains(child);                                                                      |
|         | clone        | el.clone();                                                      | el.cloneNode();                                                                          |
|         | get parent   | var myParent = el.parent();                                      | var myParent = el.parentNode;                                                            |
|         | insertBefore | newEl.insertBefore(el)                                           | el.parentNode.insertBefore(newEl,el)                                                     |
|         | insertAfter  | newEl.insertAfter(el)                                            | el.parentNode.insertBefore(newEl,el.nextSibling)                                         |
|         | DOM ready    | $(document).ready(eventHandler);                                 | document.addEventListener('DOMContentLoaded', eventHandler);                             |
|         | load         | $(window).load(function() {});$(window).on('load',function(){}); | window.onload = function(){};    window.addEventListener('load', function(){});          |
|         | Ajax         | el.load(url, callback)                                           | fetch(url).then(data => data.text() ).then(data=>{ el.innerHTML = data }).then(callback) |
|         | iframe       | $iframe.contents()                                               | iframe.contentDocument                                                                   |
|         | body         | $('body')                                                        | document.body                                                                            |
|         | this         | $(this)                                                          | this                                                                                     |
|         | scroll top   | el.scrollTop();                                                  | el.scrollTop;                                                                            |
| Event   | click        | el.on('click', eventHandler);                                    | el.addEventListener('click', eventHandler);                                              |
|         | remove click | el.off('click', eventHandler);                                   | el.removeEventListener('click', eventHandler);                                           |

欢迎指正或补充。

#### 参考资料
1. w3schools: https://www.w3schools.com/js/js_jquery_selectors.asp 
2. csdn blog: https://blog.csdn.net/DUDUfine/article/details/75944536 
3. stackoverflow: https://stackoverflow.com/questions/9899372/pure-javascript-equivalent-of-jquerys-ready-how-to-call-a-function-when-t
4. stackoverflow: https://stackoverflow.com/questions/5085567/what-is-the-hasclass-function-with-plain-javascript 
5. github: https://github.com/nefe/You-Dont-Need-jQuery#browser-support
