<template>
    <div class="lijiefunction">
        <h2><mark>知识点：</mark></h2>
        <ul>
            <li class="des"><mark class="marksec">函数参数</mark></li>
            <li class="des"><mark class="marksec">没有重载</mark></li>
            <li class="des"><mark class="marksec">高阶函数</mark></li>
            <li class="des"><mark class="marksec">闭包</mark></li>
            <li class="des"><mark class="marksec">递归函数</mark></li>
            <li class="des"><mark class="marksec">立即调用函数</mark></li>
        </ul>
        <h2><mark>函数参数</mark>：</h2>
        <h3><mark class="marksec">普通函数</mark>：</h3>
        <li class="des">函数内部有一个arguments对象
            <br>arguments对象是一个类数组，所有传递进来的参数，都会放到该数组中
            <br>不存在验证命名参数的机制，如果给了命名参数而没有传值，那么该参数的值为undefined
        </li>
        <h3><mark class="marksec">箭头函数</mark>ES6：</h3>
        <li class="des">箭头函数没有arguments对象
            <br>只能通过命名参数访问
            <br>但是可以包装一下，就是将箭头函数放入普通的函数的内部，那么箭头函数也可以访问这个普通函数的arguments对象
        </li>
        <pre class="contentarea" v-highlight><code>    function hello(a, b) {
            console.log(arguments)
        }
        hello(1, 2, 3)      // Arguments { 0: 1, 1: 2, 2: 3} 
        // 这里函数hello虽然只有两个命名参数，但是所有传递的参数都会被收集到arguments对象中
        let world = (a, b) => {
            console.log(a, b) // 1,2
            console.log(arguments) // Uncaught ReferenceError: arguments is not defined
        }
        world(1, 2, 3) // 说明箭头函数只能访问命名参数</code></pre>
        <h2><mark>没有重载</mark>：</h2>
        <ul>
            <li class="des">在其他的语言中，函数可以同名，只要接收的参数类型和数量不同即可，也就是有函数签名
                <br>js中没有函数签名，因为js的参数是存在arguments对象中，没有对参数的类型和数量做限制
                <br>自然也就不能重载，同名的函数会被覆盖
                <br>另外函数的名字是一个指针，自然可以说明没有重载
            </li>
        </ul>
        <pre class="contentarea" v-highlight><code>    function hello(a, b) {
            console.log(a, b, 'hello')
        }
        function hello(c, d) {
            console.log(c, d, 'world')
        }
        hello(1, 2)     // 1 2 world  第一个函数被覆盖掉了</code></pre>
        <h2><mark>高阶函数</mark>：</h2>
        <ul class="li des">js中的函数是一个变量，保存着函数的指针
            <br>所以函数可以作为参数或者返回值
        </ul>
        <pre class="contentarea" v-highlight><code>    // 将函数作为参数
        let hello = function () {
            console.log('hello')
        }
        function world(a) {
            a()
        }
        world(hello)        // hello
        // 将函数作为返回值
        function a_() {
            return function () {
                console.log(11111)
            }
        }
        let a = a_()
        a()     // 11111</code></pre>
        <h2><mark>闭包</mark>：</h2>
        <ul>
            <li class="des">闭包是指那些引用了另一个函数作用域中变量的函数，通常发生在嵌套函数中
                <br>有意思的是：内部函数对包含函数活动对象的引用不会随着包含函数的销毁而销毁，直到内部函数销毁，才会销毁
                <br>可以将外部函数设置为null，解除引用，所以闭包很占内存，容易造成内存泄漏
            </li>
            <li class="des">闭包匿名函数中的this是全局对象window，严格模式下为undefined
            </li>
        </ul>
        <pre class="contentarea" v-highlight><code>    function hello() {
            let a = 10
            let b = 10
            return function () {
                console.log(a, b)   // 10 10
                console.log(this)   // window
            }
        }
        let world = hello()
        world()
        // 在上面的返回值函数中，引用了函数hello里的变量
        // 本来hello是函数作用域，其内部的变量在函数执行完会被销毁
        // 但是因为被引用，在hello执行完成之后，并不会被销毁，依然被world函数引用
        // 此时，将a,b这两个变量称为闭包变量，函数hello称为闭包函数</code></pre>
        <h2><mark>递归函数</mark>：</h2>
        <ul>
            <li class="des">函数自己调用自己</li>
        </ul>
        <pre class="contentarea" v-highlight><code>    // 使用递归实现求阶乘
        function factorial(n) {
            if (n === 1) return 1
            return n * factorial(n - 1)
        }
        let res = factorial(3)
        console.log(res)    // 6</code></pre>
        <h2><mark>立即调用函数</mark>：</h2>
        <ul>
            <li class="des">函数自行调用，无需手动调用</li>
            <li class="des"><mark class="marksec">（function（）{//块级作用域}）（）；</mark></li>
        </ul>
        <pre class="contentarea" v-highlight><code>    (function (a, b, c) {
            console.log(a, b, c)  // 1 2 3
        })(1, 2, 3)</code></pre>
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>