<template>
    <div class="class_">
        <h2><mark>类Class</mark>：</h2>
        <ul>
            <li class="des">类声明：<mark class="marksec">class className{}</mark></li>
            <li class="des">类表达式：<mark class="marksec">const Person = class{}</mark>

                <br>与函数表达式类似，类表达式在被求值前不能被引用
            </li>
            <li class="des">类没有声明提升，函数受函数作用域限制，类受块作用域限制</li>
            <li class="des">类可以包含：
                <br>构造函数方法 、 实例方法 、 获取函数 、 设置函数 、 静态类方法
                <br>但都不是必需的
                <br>类的类名首字母建议大写
                <br>类内部的方法不需要函数声明
            </li>
        </ul>
        <pre class="contentarea" v-highlight><code>    // 声明一个person类
        class Person { }</code></pre>
        <h2><mark>类构造函数</mark>：</h2>
        <ul>
            <li class="des">constructor用于在类的内部创建构造函数
                <br>该方法告诉解释器，在创建类的新实例时，应该调用该函数
                <br>该方法不是必须的，如果没有则默认为空函数
            </li>
            <li class="des">使用new操作符实例化类，相当于使用new操作符调用类的构造函数
            </li>
            <li class="des">会执行下列操作：
                <br>在内存中创建一个新的对象
                <br>这个新对象的[[Protorype]]指针，被赋值为构造函数的protortype
                <br>this指向新对象
                <br>执行构造函数内的代码，如果构造函数返回非空对象，则返回该对象，否则返回新对象
                <br>类实例化的时候传入的参数，会作为类构造函数的参数
            </li>
        </ul>
        <pre class="contentarea" v-highlight><code>    class Person {
            constructor(name, age) {
                this.name = name
                this.age = age
            }
        }
        let person = new Person('henren', 20)
        console.log(person)         // Object { name: "henren", age: 20 }</code></pre>
        <h2><mark>原型方法和静态方法</mark>：</h2>
        <ul>
            <li class="des">在类块中定义的方法都是定义在原型上的，实例方法和属性时定义在构造函数中的</li>
            <li class="des">在类上定义静态方法，使用<mark class="marksec">static</mark>关键字作为前缀
                方法会直接定义在类上，而不是类的原型上，静态方法只能由构造函数调用</li>
        </ul>
        <pre class="contentarea" v-highlight><code>    class Person {
            constructor(name, age) {
                // 实例属性
                this.name = name
                this.age = age
                // 实例方法
                this.sayHello = function () { }
            }
            // 原型上的方法
            doSomeThing() { }
            // 静态方法，定义在类上
            static classMethod() { }
        }</code></pre>
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>