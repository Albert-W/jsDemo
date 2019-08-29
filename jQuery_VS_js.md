### jQuery 与 JS 命令对比

我整理了一张 《jQuery 与 JS 命令参照表》，包括 Select，Content，CSS，DOM，Event 五个常见分类。

jQuery VS JS comparison table

|         	|              	| jQuery                                  	| JS                                                                   	|
|---------	|--------------	|-----------------------------------------	|----------------------------------------------------------------------	|
| Select  	| by ID        	| $('#idName')                            	| document.getElementById('idName')                                    	|
|         	| by Tag       	| $("div")                                	| document.getElementsByTagName("div")                                 	|
|         	| by class     	| $('.className')                         	| document.getElementsByClassName(".className");                       	|
|         	| by css       	| $("p.intro")                            	| document.querySelectorAll("p.intro")                                 	|
| Content 	| set text     	| myElement.text("Hello");                	| myElement.textContent = "Hello";                                     	|
|         	| get text     	| var myText = myElement.text();          	| var myText = myElement.textContent || myElement.innerText;           	|
|         	| set html     	| myElement.html("```<p>Hello</p>```");         	| myElement.innerHTML = "```<p>Hello</p>```";                                	|
|         	| get html     	| var content = myElement.html();         	| var content = myElement.innerHTML;                                   	|
| CSS     	| hide         	| myElement.hide();                       	| myElement.style.display = "none";                                    	|
|         	| show         	| myElement.show();                       	| myElement.style.display = "";                                        	|
|         	| style        	| myElement.css("fontsize", "35px");      	| myElement.style.fontSize = "35px";                                   	|
|         	| add class    	| $('body').addClass('thisClass');        	| document.body.classList.add('thisClass');                            	|
|         	| remove class 	| $('body').removeClass('thatClass');     	| document.body.classList.remove('thatClass');                         	|
|         	| toggle class 	| $('body').toggleClass('anotherClass');  	| document.body.classList.toggle('anotherClass');                      	|
|         	| has class    	| $('body').hasClass('thatClass');        	| document.body.classList.contains('thatClass')                        	|
| DOM     	| Remove       	| $("#id").remove();                      	| element.parentNode.removeChild(element);                             	|
|         	| get parent   	| var myParent = myElement.parent();      	| var myParent = myElement.parentNode;                                 	|
|         	| DOM ready    	| $('document').ready(function(){});      	| document.addEventListener('DOMContentLoaded', function(){ }, false); 	|
| Event  	| click        	| someElement.on('click', function(){});  	| someElement.addEventListener('click', function() {});                	|
|         	| remove click 	| someElement.off('click', function(){}); 	| someElement.removeEventListener('click', function() {});             	|


欢迎指正或补充。

#### 参考资料
1. w3schools: https://www.w3schools.com/js/js_jquery_selectors.asp 
2. csdn blog: https://blog.csdn.net/DUDUfine/article/details/75944536 
3. stackoverflow: https://blog.csdn.net/DUDUfine/article/details/75944536 
4. stackoverflow: https://stackoverflow.com/questions/5085567/what-is-the-hasclass-function-with-plain-javascript 
