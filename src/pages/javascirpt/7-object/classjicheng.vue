<template>
    <div class="classjicheng">
        <h2><mark>类的继承</mark>：</h2>
        <ul>
            <li class="des"><mark class="marksec">extends</mark>关键字
            </li>
            <li class="des">语法：
                <br><mark class='marksec'>class Son extends Father{}</mark>
                <br><mark class='marksec'>let Son = class extends Father{}</mark>
            </li>
            <li class="des">也可以继承函数，可以继承任何拥有[[Constructor]]和原型的对象</li>
            <li class="des">类的继承原理实际上是<mark class="marksec">寄生式组合继承</mark>的语法糖</li>
        </ul>
        <h2><mark>super关键字</mark>：</h2>
        <ul>
            <li class="des">派生类的方法可以通过<mark class="marksec">super()</mark>引用他们的原型
                <br>谁可以用：只能在派生类中使用
                <br>可以在哪里用：构造函数内部 、 实例方法内部 、 静态方法内部
                <br>在构造含函数内部：使用super可以调用父类构造函数，不要在super之前使用this
                <br>实例方法内部：可以调用父类的实例方法
                <br>静态方法内部：使用super继承类上的静态方法
            </li>
            <li class="des">super实际上是<mark class="marksec">call / apply</mark>方法的语法糖</li>
        </ul>
        <h2><mark>类的原型链和继承原理图</mark>：</h2>
        <img src="../../svg/ES6yuanxinglian.svg" alt="">
        <h2><mark>实例</mark>：</h2>
        <pre class="contentarea" v-highlight><code>    class Father {
            constructor(name, age) {
                this.name = name
                this.age = age
                this.sayHello = function () { }
            }
            doSomething() {
                console.log(111)
            }
            static hello() {
                console.log('hello')
            }
        }
        class Son extends Father {
            constructor(name, age) {
                super(name, age)    // 这里相当于 Father.call(this,name,age)
            }
            getFathermethod() {
                super.doSomething()     // 在原型方法中，通过super调用父类原型上的方法
            }
            static world() {
                super.hello()       // 在静态方法中，通过super调用父类的静态方法
            }
        }
        let son = new Son('henren', 20)
        console.log(son)    // Object { name: "henren", age: 20, sayHello: sayHello() }
        // 原型的继承使用的是寄生式组合继承
        son.getFathermethod()     // 111 
        Son.world()     // hello</code></pre>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
img {
    display: block;
    margin: 10px auto;
    width: 80%;
}
</style>