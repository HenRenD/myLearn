<template>
    <div class="createobject">
        <h2><mark>创建对象</mark>：</h2>
        <ul>
            <li class="des">js中的对象就是一组数据和功能的集合
            </li>
        </ul>
        <h3><mark class="marksec">字面量方式</mark>：</h3>
        <pre class="contentarea" v-highlight><code>    let preson = {
            name: 'henren',
            age: 20,
            address: 'beidou'
        }</code></pre>
        <h3><mark class="marksec">new操作符</mark>：</h3>
        <pre class="contentarea" v-highlight><code>    let person = new Object()
        person.name = 'henren'
        person.age = 20
        person.address = 'beidou'</code></pre>
        <h3><mark class="marksec">构造函数</mark>：</h3>
        <ul>
            <li class="des">构造函数名要大写，为了却别普通函数</li>
            <li class="des"> 创建实例要是用new操作符，过程：
                <br>1，在内存中创建一个新对象
                <br>2，这个新对象内部的[[Prototype]]特性被赋值为构造函数的prototype属性
                <br>3，this指向新的对象（实例对象）
                <br>4，执行构造函数内部代码，给实力对象添加属性方法
            </li>

            <li class="des">constructor属性：实例对象的constructor属性都指向构造函数</li>
        </ul>
        <pre class="contentarea" v-highlight><code>    function Person(name, age, address) {
            this.name = name
            this.age = age
            this.address = address
        }
        let person = new Person('henren', 20, 'beidou')</code></pre>
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>