<template>
    <div class="funcproandmethod">
        <h2><mark>知识点：</mark></h2>
        <ul>
            <li class="des">属性：
                <br><mark class="marksec">arguments</mark> / <mark class="marksec">this</mark> / <mark class="marksec">caller</mark> / <mark class="marksec">new.target</mark> / <mark class="marksec">name</mark> / <mark class="marksec">length</mark> / <mark class="marksec">prototype</mark>
            </li>
            <li class="des">方法：
                <br><mark class="marksec">apply()</mark> / <mark class="marksec">call()</mark> / <mark class="marksec">bind()</mark>
            </li>
        </ul>
        <h2><mark>属性</mark>：</h2>
        <table>
            <thead>
                <tr>
                    <td width='15%'>属性</td>
                    <td width='30%'>描述</td>
                    <td>实例</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><mark class="marksec">arguments</mark></td>
                    <td>类数组对象，包含调用函数时传入的所有参数
                        <br>在以function关键字定义时产生
                        <br>arguments有一个属性：callee，该属性是一个指向arguments所在函数的指针，也就是函数名，可以避免函数名的耦合问题
                    </td>
                    <td>
                        <pre class="contentarea" v-highlight><code>    function hello(a, b) {
            console.log(arguments)      // Arguments { 0: 1, 1: 2, 2: 3}
            console.log(arguments.callee)   // function hello(a, b)
        }
        hello(1, 2, 3)
        // 箭头函数
        let world = (a, b) => {
            console.log(arguments)      
            // Uncaught ReferenceError: arguments is not defined
        }
        world(1, 2, 3)</code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">this</mark></td>
                    <td>在标准函数中，this是函数的调用者
                        <br>箭头函数中，this是定义函数的上下文
                    </td>
                    <td>
                        <pre class="contentarea" v-highlight><code>    function hello(a, b) {
            console.log(this)
            // window hello是在全局作用域下调用的，所以是window
        }
        hello(1, 2, 3)
        // 箭头函数
        let world = (a, b) => {
            console.log(this)
            // window  world实在全局作用域下定义的，所以是window
        }
        world(1, 2, 3)</code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">caller</mark></td>
                    <td>指向函数的调用者
                        <br>全局作用域中调用的则为 null
                    </td>
                    <td>
                        <pre class="contentarea" v-highlight><code>    function hello(a, b) {
            console.log(hello.caller)
            // null hello是在全局作用域下调用的，所以是null
        }
        hello(1, 2, 3)
        // 箭头函数
        let world = (a, b) => {
            console.log(world.caller)
            // Uncaught TypeError: 'caller', 'callee', and 'arguments' properties 
            // 箭头函数没有该属性
        }
        world(1, 2, 3)</code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">new.target</mark></td>
                    <td>判断一个函数是否是使用new操作符调用的
                        <br>如果是则返回构造函数，否则返回undefined
                    </td>
                    <td>
                        <pre class="contentarea" v-highlight><code>    function Person(name, age) {
            this.name = name
            this.age = age
            console.log(new.target)
        }
        let person = new Person('henren', 20)
        // function Person(name, age)
        // 返回了构造函数，证明是通过new操作符调用的
        let person2 = Person('yefan', 22)
        // undefined 证明不是通过new调用的</code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">name</mark></td>
                    <td>返回函数名</td>
                    <td>
                        <pre class="contentarea" v-highlight><code>    function hello(a, b) {
            console.log(hello.name)     // hello
        }
        hello(1, 2, 3)
        // 箭头函数
        let world = (a, b) => {
            console.log(world.name)     // world
        }
        world(1, 2, 3)</code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">length</mark></td>
                    <td>保存函数命名参数的个数</td>
                    <td>
                        <pre class="contentarea" v-highlight><code>    function hello(a, b) {
            console.log(hello.length)     // 2
        }
        hello(1, 2, 3)
        // 箭头函数
        let world = (a, b) => {
            console.log(world.length)     // 2
        }
        world(1, 2, 3)</code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">prototype</mark></td>
                    <td>指向构造函数原型，保存着实例共享的方法</td>
                    <td>
                        <pre class="contentarea" v-highlight><code>    function hello(a, b) {
            console.log(hello.prototype)     // object{} 一个对象
        }
        hello(1, 2, 3)
        // 箭头函数
        let world = (a, b) => {
            console.log(world.prototype)     // undefined 箭头函数没有原型独享
        }
        world(1, 2, 3)</code></pre>
                    </td>
                </tr>
            </tbody>
        </table>
        <h2><mark>方法</mark>：</h2>
        <table>
            <thead>
                <tr>
                    <td width='15%'>方法</td>
                    <td width='30%'>描述</td>
                    <td>实例</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><mark class="marksec">apply()</mark></td>
                    <td>接收两个参数：
                        <br>this值
                        <br>参数数组
                        <br>这个方法可以改变函数的this值
                    </td>
                    <td>
                        <pre class="contentarea" v-highlight><code>    let obj = {
            c: 1,
            d: 2
        }
        function hello(a, b) {
            console.log(a, b)   // 1 2
            console.log(this)       // Object { c: 1, d: 2 }
        }
        hello.apply(obj, [1, 2, 3])</code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">call()</mark></td>
                    <td>同apply一样
                        <br>只不过第二个参数不是以数组的形式传递的，是逐个传递的
                    </td>
                    <td>
                        <pre class="contentarea" v-highlight><code>let obj = {
            c: 1,
            d: 2
        }
        function hello(a, b) {
            console.log(a, b)   // 1 2
            console.log(this)       // Object { c: 1, d: 2 }
        }
        hello.call(obj, 1, 2, 3)</code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">bind()</mark></td>
                    <td>创建一个新的函数
                        <br>接收一个参数，是一个对象
                        <br>并且将新函数的this值变成这个对象
                    </td>
                    <td>
                        <pre class="contentarea" v-highlight><code>    let obj = {
            c: 1,
            d: 2
        }
        function hello(a, b) {
            console.log(a, b)   // 1 2
            console.log(this)       // Object { c: 1, d: 2 }
        }
        let newFunction = hello.bind(obj)
        newFunction(1, 2, 3)</code></pre>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>