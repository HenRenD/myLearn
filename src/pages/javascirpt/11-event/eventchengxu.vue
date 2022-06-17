<template>
    <div class="eventchengxu">
        <h2><mark>事件处理程序</mark>：</h2>
        <ul>
            <li class="des">为响应事件而调用的函数，称为事件处理程序或者事件监听器
                <br>事件处理程序的名字以"on"开头
                <br>大多数情况下，事件处理程序会被添加到事件流的冒泡阶段，主要原因是跨浏览器兼容性好
                <br>把事件处理程序注册到捕获阶段通常用于在事件到达其指定目标之前拦截事件
            </li>
        </ul>
        <h2><mark>HTML事件处理程序</mark>：</h2>
        <ul>
            <li class="des">将事件的名字当做html元素的属性，属性值为事件处理程序
                <br>不能在未经转义的情况下使用 HTML语法字符
                <br>HTML 中定义的事件处理程序可以包含精确的动作指令，也可以调用在页面其他地方定义的脚本
            </li>
        </ul>
        <pre class="contentarea" v-highlight><code>    &lt;div onclick="console.log('hello world')">&lt;/div>
        &lt;div onclick="sayHello()">&lt;/div>
        function sayHello() {
            console.log('hello world')
        }</code></pre>
        <h2><mark>DOM0事件处理程序</mark>：</h2>
        <ul>
            <li class="des">使用匿名函数赋值的方法添加事件
                <br>这种方式添加事件处理程序是注册在事件流的冒泡阶段的
                <br>可以赋值null将事件清除
            </li>
        </ul>
        <pre class="contentarea" v-highlight><code>    &lt;div class="hello">&lt;/div>
        let div = document.querySelector('.hello')
        div.onclick = function () {
            console.log('hello world')
        }
        setTimeout(() => {
            div.onclick = null
        }, 5000);</code></pre>
        <h2><mark>DOM2事件处理程序</mark>：</h2>
        <ul>
            <li class="des"><mark class="marksec">addEventListener()
                    <br>removeEventListener()</mark></li>
            <li class="des">新增了两个方法
                <br>接收三个参数：事件名，不用on开头、事件处理函数、布尔值
                <br>true：捕获阶段调用函数
                <br>fasle：冒泡阶段调用函数
                <br>使用 DOM2方式的主要优势是可以为同一个事件添加多个事件处理程序，多个事件处理程序以添加顺序来触发
                <br>addEventListener()添加的事件处理程序只能使用removeEventListener()并传入与添加时同样的参数来移除
                <br>removeEventListener()方法接收的函数不能是匿名函数
            </li>
        </ul>
        <pre class="contentarea" v-highlight><code>    &lt;div class="hello">&lt;/div>
        let div = document.querySelector('.hello')
        function sayHello() {
            console.log('hello world')
        }
        function sayxxxx() {
            console.log('xxxx')
        }
        div.addEventListener('click', sayHello)
        div.addEventListener('click', sayxxxx)
        setTimeout(() => {
            div.removeEventListener('click', sayHello)
            div.removeEventListener('click', sayxxxx)
        }, 5000);</code></pre>
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>