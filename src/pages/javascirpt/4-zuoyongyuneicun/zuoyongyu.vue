<template>
    <div class="zuoyongyu">
        <h2><mark>执行上下文与作用域链</mark>：</h2>
        <ul>
            <li class="des"><mark class="marksec">执行上下文</mark>：
                <br>执行上下文是js中的一个重要概念，执行上下文定义了变量或函数有权访问的其他数据，决定其各自的行为
            </li>
            <li class="des"><mark class="marksec">全局执行上下文</mark>：
                <br>全局执行上下文是最外围的一个执行上下文
                <br>在web浏览器中，全局执行上下文被认为是window对象
                <br>所有的全局变量和函数都是作为window的属性和方法创造的
                <br>let和const定义的变量不会定义到全局上下文中（window对象）
            </li>
            <li class="des"><mark class="marksec">变量对象</mark>：
                <br>每个执行上下文都有一个与之关联的变量对象，上下文中定义的变量和函数都保存在这个对象中
            </li>
            <li class="des"><mark class="marksec">js执行流</mark>：
                <br>对于某个执行上下文，当其中的代码执行完毕，该上下文被销毁，保存的变量和函数也被销毁
                <br>对于全局执行上下文，应用程序退出才会被销毁
                <br>每个函数都有自己的执行上下文，当执行流进入是，该执行上下文被推入上下文栈，执行完成之后，上下文栈将其弹出，将控制权交给之前的上下文
            </li>
            <li class="des"><mark class="marksec">作用域链</mark>：
                <br>当代码在执行上下文中执行时，会创建一个变量对象的作用域链，保证对该执行上下文有权访问的变量和函数有序的访问
                <br>作用域链的前端始终都是当前所在上下文的变量对象
                <br>如果当前上下文是函数，则将其活动变量(arguments对象)作为变量对象
                <br>作用域链中的下一个对象是来自包含(外部)上下文，一直延续到全局执行上下文
                <br>作用域链中的最后一个对象始终都是全局执行上下文的变量对象(window)
            </li>
            <pre class="contentarea" v-highlight><code>    let a = 10
        function test() {
            let a = 100
            console.log(a)  // 100
        }
        test()
        // 这里有两个执行上下文：函数test的上下文，全局执行上下文
        // 有两个变量对象：1，函数test中定义的变量+arguments对象      2，全局window对象+let/const定义的变量
        // 作用域链：test的变量对象  ===>  全局变量对象
        // 这里之所以输出了100，是因为在test的变量对象中找到了a，就不会在全局变量对象中寻找a</code></pre>
        </ul>
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>