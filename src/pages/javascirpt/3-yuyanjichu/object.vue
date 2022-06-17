<template>
    <div class="object">
        <h2><mark>Object</mark>类型：</h2>
        <ul>
            <li class="des">js中的对象就是一组数据和功能的集合</li>
            <li class="des">操作符new，一般来说new是用来创建对象和实例化对象</li>
            <li class="des">复杂数据类型(引用值)</li>
        </ul>
        <h2><mark>Object</mark>创建方式：</h2>
        <ul>
            <li class="des"><mark class="marksec">字面量创建</mark>：var object_ = {属性/方法}</li>
            <li class="des"><mark class="marksec">new操作符创建</mark>：var object_ = new object();
                <br>如果是用来实例化，没有给构造函数传递参数，括号可省略
            </li>
            <li class="des"><mark class="marksec">构造函数创建</mark>：function Constructor(构造函数)(arg) {this.属性/方法 = arg;}
                <br>这种方式创建的对象需要使用new操作符进行实例化
            </li>
        </ul>
        <h2><mark>Object</mark>实例属性：</h2>
        <ul>
            <li class="des">ECMAScript 中 Object 是所有对象的基类，所以任何对象都有这些属性和方法
                <br>浏览器环境中的 BOM 和 DOM 对象，都是由宿主环境定义和提供的宿主对象，它们可能会也可能不会继承 Object
            </li>
            <li class="des"><mark class="marksec">constructor</mark>：保存着用于创建当前对象实例的函数（构造函数）object_.constructor()</li>
            <li class="des"><mark class="marksec">hasOwnProperty()</mark>：用于检查给定的属性在当前对象实例(不是原型上) 上是否存在，object_.hasOwnProperty("name")</li>
            <li class="des"><mark class="marksec">isPrototypeOf()</mark>：用于检查当前对象是否是另一个对象的原型，object_.isPrototypeOf(object)</li>
            <li class="des"><mark class="marksec">propertyIsEnumerable()</mark>：用于检查给定的属性能否用for-in语句来枚举，object_.propertyIsEnumerable("name")</li>
            <li class="des"><mark class="marksec">toLocalsString()</mark>：返回对象的字符串表示，该字符串与执行环境的地区对应，object_.toLocalsString()</li>
            <li class="des"><mark class="marksec">toString()</mark>：返回对象的字符串表示，一般情况先与toLocaleString结果一致，object_.toString()</li>
            <li class="des"><mark class="marksec">valueOf()</mark>：返回原对象，object_.valueOf()</li>
        </ul>
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>