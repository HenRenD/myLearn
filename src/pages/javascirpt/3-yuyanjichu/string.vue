<template>
    <div class="string">
        <h2><mark>String</mark>类型：</h2>
        <ul>
            <li class="des">表示零或多个 16 位 Unicode 字符序列
                <br>表示方法：双引号（"）单引号（'）反引号（`）符号不能混用
            </li>
            <li class="des">简单数据类型(原始值)</li>
            <li class="des">知识点：
                <br><mark class="marksec">length属性</mark>
                <br><mark class="marksec">toString()方法</mark>
                <br><mark class="marksec">String()方法</mark>
                <br><mark class="marksec">字符串拼接：+</mark>
                <br><mark class="marksec">模板字面量(ES6)：``</mark>
                <br><mark class="marksec">字符串插值(ES6)：`${}`</mark>
            </li>
        </ul>
        <h2><mark>字符串字面量</mark>：</h2>
        <ul>
            <li class="des">\n---------------------------->换行</li>
            <li class="des">\b---------------------------->空格</li>
            <li class="des">\t---------------------------->制表</li>
            <li class="des">\r---------------------------->回车</li>
            <li class="des">\f---------------------------->进纸</li>
            <li class="des">\\---------------------------->斜杠\</li>
            <li class="des">\'---------------------------->单引号</li>
            <li class="des">\"---------------------------->双引号</li>
            <li class="des">\`---------------------------->反引号</li>
            <li class="des">\xnn------------------------>以十六进制代码表示一个字符，n为0~F</li>
            <li class="des">\unnnn--------------------->以十六进制代码nnnn表示一个Unicode字符，n为0~F</li>
        </ul>
        <h2><mark>字符串的特点</mark>：</h2>
        <ul>
            <li class="des">js中的字符串是不可变的，字符串一旦创建它的值就不能改变</li>
            <li class="des">这也是浏览器拼接字符串速度很慢的原因</li>
        </ul>
        <pre class="contentarea" v-highlight><code>    let string_ = 'hello'
        string_ = 'hello world'
        // 上面的这个赋值操作是先创建一个值为‘hello world’的字符串
        // 然后销毁原先的‘hello’字符串
        // 再将新的字符串‘hello world’填充到变量string_中</code></pre>
        <h2><mark>length</mark>属性：</h2>
        <ul>
            <li class="des">返回字符串的长度</li>
            <li class="des">如果字符串中有双字节字符，可能会不精准</li>
        </ul>
        <pre class="contentarea" v-highlight><code>     let str = 'hello world'
        console.log(str.length)      // 11</code></pre>
        <h2><mark>字符串拼接‘+’</mark>：</h2>
        <ul>
            <li class="des">用于将不同的字符串拼接起来</li>
            <li class="des">如何和其他值拼接，会自动调用<mark class="marksec">toString()</mark>或者<mark class="marksec">String()</mark>将其转换为字符串，然后拼接</li>
        </ul>
        <pre class="contentarea" v-highlight><code>    let str1 = 'hello'
        let str2 = 'world'
        console.log(str1 + str2)        // 'helloworld'
        let a = 10
        console.log(str1 + a)       // 'hello10'</code></pre>
        <h2><mark>toString()</mark>方法：</h2>
        <ul>
            <li class="des">几乎每一个值都有toString()方法，用于将其转换为字符串</li>
            <li class="des">toString()方法有第二个参数，可以指定进制</li>
            <li class="des">null和undefined没有这个方法</li>
            <li class="des">字符串本身使用这个方法，会返回字符串的一个副本</li>
        </ul>
        <pre class="contentarea" v-highlight><code>     // 数值
        let a = 10
        console.log(a.toString())       // '10'
        // 转换为16进制，返回对应的16进制字符串，而不是以16进制解析
        console.log(a.toString(16))         // 'a'
        // 布尔值
        console.log(true.toString())        // 'true'
        console.log(false.toString())        // 'false'
        // 对象
        let object_ = {}
        console.log(object_.toString())         // '[object Object]'</code></pre>
        <h2><mark>String()</mark>函数：</h2>
        <ul>
            <li class="des">String()函数将任何类型的值转换为字符串</li>
            <li class="des">如果值没有toString()方法，则使用这个函数</li>
            <li class="des">null返回"null"</li>
            <li class="des">undefined返回"undefined"</li>
        </ul>
        <pre class="contentarea" v-highlight><code>     console.log(String(undefined))       // 'undefined'
        console.log(String(null))       // 'null'</code></pre>
        <h2><mark>模板字面量</mark>(ES6)：</h2>
        <ul>
            <li class="des">语法：<mark class="marksec">`字符串`</mark></li>
            <li class="des">保留换行字符，可以跨行定义字符串</li>
            <li class="des">模板字面量不是字符串，是一种特殊的 JavaScript 句法表达式，只不过求值后得到的是字符串</li>
        </ul>
        <pre class="contentarea" v-highlight><code>    let str = `hello world`
        console.log(str)        // 'hello world'</code></pre>
        <h2><mark>字符串插值</mark>(ES6)：</h2>
        <ul>
            <li class="des">语法：<mark class="marksec">`${ }`</mark>
                <br>模板字面量中连续的插入一个或多个值，插入的值会使用<mark class="marksec">toString()</mark>方法强制转型为字符串
                <br>任何的javascript表达式都可以用于插值，在插值表达式中，可以调用函数和方法
                <br>嵌套的模板字面量无需转义
                <br>事实上是<mark class="marksec">解决了浏览器字符串拼接效率低的问题</mark>，只不过功能更加强大
            </li>
        </ul>
        <pre class="contentarea" v-highlight><code>        let str = 'hello'
            console.log(`${str} world`)         // 'hello world'
            console.log(`${1 + 2} world`)         // '3 world'
            function sum(a, b) {
                return a + b
            }
            console.log(`${sum(10, 20)} world`)         // '30 world'</code></pre>
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>