<template>
    <div class="es6function">
        <h2><mark>ES6扩展</mark>：</h2>
        <ul>
            <li class="des"><mark class="marksec">箭头函数</mark></li>
            <li class="des"><mark class="marksec">默认参数</mark></li>
            <li class="des"><mark class="marksec">参数扩展与收集</mark></li>
            <li class="des"><mark class="marksec">尾调用优化</mark></li>
        </ul>
        <h2><mark>箭头函数</mark>：</h2>
        <ul>
            <li class="des"><mark class="marksec">（）=> {}</mark>
                <br>如果只有一个参数，可以省略小括号
                <br>如果只有一条语句可以省略大括号
                <br>不适用的场合：不能使用arguments / 没有caller / 不能使用super / 不能使用new.target / 不能用做构造函数 / 没有prototype属性
                <br>没有自己的this，this为定义箭头函数的上下文
            </li>
        </ul>
        <pre class="contentarea" v-highlight><code>    let hello = (a, b) => {
            console.log(arguments) // Uncaught ReferenceError: arguments is not defined
            // 因为不能使用arguments，所以箭头函数只能使用命名参数
            console.log(this)       // window
            console.log(hello.prototype)        // undefined
            console.log(hello.caller) // Uncaught TypeError: 'caller', 'callee', and 'arguments' properties
            console.log(new.target)     // Uncaught SyntaxError: new.target only allowed within functions
        }
        hello(1, 2, 3)</code></pre>
        <h2><mark>默认参数</mark>：</h2>
        <ul>
            <li class="des">ES5：es5中默认参数是在内部进行判断，该参数的值是否为undefined，如果是，则给定一个值
            </li>
            <li class="des">ES6：可以直接给命名参数赋值
                <br>arguments对象不反映默认值
                <br>给命名参数赋值实际上是let声明，会出现暂时性死区
            </li>
        </ul>
        <pre class="contentarea" v-highlight><code>    // ES5默认参数实现
        function helloes5(a, b) {
            a = a || 10
            b = b || 20
            console.log(a, b)
        }
        helloes5()  // 10 20
        helloes5(1, 2)  // 1 2
        // ES6默认参数
        function helloes6(a = 10, b = 20) {
            console.log(a, b)
        }
        helloes6()  // 10 20
        helloes6(1, 2)  // 1 2</code></pre>
        <h2><mark>参数扩展与收集</mark>：</h2>
        <h3><mark class="marksec">扩展参数</mark></h3>
        <ul>
            <li class="des">利用扩展操作符
                <br>扩展操作符可以将可迭代对象拆分成单独的值
                <br>将数组作为参数传递给函数时，使用扩展操作符是很方便的
            </li>
        </ul>
        <h3><mark class="marksec">收集参数</mark></h3>
        <ul>
            <li class="des">使用扩展操作符，将所有参数收集到一个数组中
                <br>箭头函数也支持参数收集
            </li>
        </ul>
        <pre class="contentarea" v-highlight><code>    function hello(arr) {
            console.log(arguments)
            console.log([...arguments])
        }
        let arr = [1, 2, 3]
        hello(arr)    // Argument {0: Array(3) [ 1, 2, 3 ]}
        // 使用扩展操作符传递参数
        hello(...arr)   // Arguments { 0: 1, 1: 2, 2: 3}
        // 使用扩展操作符收集参数  // Array(3) [ 1, 2, 3 ]</code></pre>
        <h2><mark>尾调用优化</mark></h2>
        <ul>
            <li class="des">外部函数的返回值是内部函数的返回值(将一个函数调用作为另一个函数的返回值)
                <br>尾调用优化原理：在尾调用时，将外部函数销毁，直接返回内部函数的返回值
            </li>
            <li class="des">尾调用优化的条件：
                <br>代码在严格模式下执行
                <br>外部函数的返回值是对尾调用函数的调用
                <br>尾调用函数返回后，不需要执行额外的逻辑
                <br>尾调用函数不是引用外部函数作用域中自由变量的闭包
            </li>
        </ul>
        <pre class="contentarea" v-highlight><code>    "use strict";
        // 无优化：尾调用没有返回 
        function outerFunction() {
            innerFunction();
        }
        // 无优化：尾调用没有直接返回
        function outerFunction() {
            let innerFunctionResult = innerFunction();
            return innerFunctionResult;
        }
        // 无优化：尾调用返回后必须转型为字符串
        function outerFunction() {
            return innerFunction().toString();
        }
        // 无优化：尾调用是一个闭包
        function outerFunction() {
            let foo = 'bar';
            function innerFunction() { return foo; }
            return innerFunction();
        }
        // 下面是几个符合尾调用优化条件的例子：
        "use strict";
        // 有优化：栈帧销毁前执行参数计算
        function outerFunction(a, b) {
            return innerFunction(a + b);
        }
        // 有优化：初始返回值不涉及栈帧
        function outerFunction(a, b) {
            if (a &lt; b) {
                return a;
            }
            return innerFunction(a + b);
        }
        // 有优化：两个内部函数都在尾部
        function outerFunction(condition) {
            return condition ? innerFunctionA() : innerFunctionB();</code></pre>
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>