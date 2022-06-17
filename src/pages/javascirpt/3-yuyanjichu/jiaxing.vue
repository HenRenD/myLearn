<template>
    <div class="jiaxing">
        <h2><mark>加性操作符</mark>：</h2>
        <ul>
            <li class="des">加法<mark class="marksec">+</mark>和减法<mark class="marksec">-</mark></li>
            <li class="des">存在隐式转换，规则同<mark class="marksec">Number()</mark>函数一致</li>
        </ul>
        <h2><mark>加法</mark>：</h2>
        <ul>
            <li class="des">加法操作符用加号<mark class="marksec">"+"</mark>表示</li>
            <li class="des">加法操作符遵循以下规则：
                <br>操作数都是数值：只要操作数有NaN，返回NaN
                <br>Infinity 加 Infinity，返回Infinity
                <br>-Infinity 加 -Infinity，返回-Infinity
                <br>Infinity 加 -Infinity，返回NaN
                <br>+0 加 +0，返回+0
                <br>-0 加 -0，返回-0
                <br>+0 加 -0，返回+0
                <br>操作数中有字符串：执行字符串的拼接
                <br>操作数为对象或布尔值：则调用toString()方法取得数值
                <br>null和undefined：调用String()函数取得"null"/"undefined"字符串
            </li>
        </ul>
        <pre class="contentarea" v-highlight><code>    console.log(10 + 10)         // 10
        console.log(10 + NaN)        // NaN
        console.log(Infinity + Infinity)        // infinity
        console.log(-Infinity + -Infinity)        // -infinity
        console.log(Infinity + -Infinity)        // NaN
        console.log(+0 + +0)        // +0
        console.log(-0 + -0)        // -0
        console.log(+0 + -0)        // +0
        console.log('hello' + NaN)        // helloNaN
        console.log('hello' + 10)        // hello10
        console.log('hello' + 'world')        // helloworld
        console.log('hello' + Infinity)        // helloInfinity
        console.log('hello' + -Infinity)        // hello-Infinity
        console.log('hello' + +0)        // hello0
        console.log('hello' + -0)        // hello0
        console.log('hello' + null)        // hellonull
        console.log('hello' + undefined)        // helloundefined
        console.log(null + undefined)       // NaN
        // 总之呢，+ 号会执行Number()转换，例如：null + 1 = 1，因为Number()会将null转换为0</code></pre>
        <h2><mark>减法</mark>：</h2>
        <ul>
            <li class="des">减法操作符是由减号<mark class="marksec">"-"</mark>表示的</li>
            <li class="des">法操作符遵循以下规则：
                <br>操作数都是数值：任何东西与NaN操作都会返回
                <br>Infinity减Infinity，返回NaN
                <br>-Infinity减-Infinity，返回NaN
                <br>Infinity减-Infinity，返回Infinity
                <br>-Infinity减Infinity，返回-Infinity
                <br>+0减+0，返回+0
                <br>+0减-0，返回-0
                <br>-0减-0，返回+0
                <br>操作数有字符串，布尔值，null，undefined，则会先调用Number()函数转换，在计算
                <br>对象的话需要调用valueOf()/toString()
            </li>
        </ul>
        <pre class="contentarea" v-highlight><code>    console.log(10 - 5)      // 5
        console.log(10 - NaN)        // NaN
        console.log(Infinity - Infinity)        // NaN
        console.log(-Infinity - -Infinity)        // NaN
        console.log(Infinity - -Infinity)        // Infinity
        console.log(-Infinity - Infinity)        // -Infinity
        console.log(+0 - +0)        // +0
        console.log(+0 - -0)        // +0
        console.log(-0 - -0)        // +0
        console.log(-0 - +0)        // -0
        // 总之呢 - 号同样具有隐式转换，使用Number()函数，能转换为数字就计算，不能就返回NaN</code></pre>
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>