<template>
    <div class="number">
        <h2><mark>Number</mark>类型：</h2>
        <ul>
            <li class="des">使用 IEEE 754 格式表示整数和浮点值</li>
            <li class="des">简单数据类型(原始值)</li>
            <li class="des">知识点：
                <br><mark class="marksec">Number.MAX_VALUE属性</mark>
                <br><mark class="marksec">Number.MIN_VALUE属性</mark>
                <br><mark class="marksec">Number.POSITIVE_INFINITY属性</mark>
                <br><mark class="marksec">Number.NEGATIVE_INFINITY属性</mark>
                <br><mark class="marksec">isFinite()函数</mark>
                <br><mark class="marksec">isNaN()函数</mark>
                <br><mark class="marksec">Number()函数</mark>
                <br><mark class="marksec">parseInt()函数</mark>
                <br><mark class="marksec">parseFloat()函数</mark>
            </li>
        </ul>
        <h2><mark>整数</mark>：</h2>
        <ul>
            <li class="des"><mark class="marksec">十进制整数</mark>：以 10 为基数，就是日常使用的进制</li>
            <li class="des"><mark class="marksec">八进制整数</mark>：以 8 为基数
                <br>第一个数字必须是零（0），相应的八进制数字（数值 0~7），无效的八进制会解析成十进制
                <br>严格模式下八进制错误：使用“0o”代替0开头，可以在严格模式下使用八进制，无效的八进制会报错
            </li>
            <li class="des"><mark class="marksec">十六进制整数</mark>：以 16 为基数
                <br>数值前缀 0x（区分大小写），十六进制数字（0~9 以 及 A~F），十六进制中的字母大小写均可
            </li>
        </ul>
        <pre class="contentarea" v-highlight><code>     // 十进制
        console.log(10)         // 10
        // 八进制
        console.log(010)        // 8
        // 十六进制
        console.log(0x10)       // 16
        
        // 开启严格模式
        'use strict'
        // 十进制
        console.log(10)         // 10
        // 八进制
        console.log(010)        // Uncaught SyntaxError: "0"-prefixed octal literals are deprecated; use the "0o" prefix instead
        console.log(0o10)       // 8
        // 十六进制
        console.log(0x10)       // 16</code></pre>
        <h2><mark>浮点数</mark>：</h2>
        <ul>
            <li class="des">必须包含小数点，小数点后面必须至少有一个数字</li>
            <li class="des">浮点值的内存空间是整数值的两倍，小数点后面没有数字或为0，会当成整数</li>
            <li class="des">科学记数法：m * e<sup>n</sup></li>
            <li class="des">浮点值的精确度最高可达 16 位小数</li>
        </ul>
        <pre class="contentarea" v-highlight><code>     // 定义一个浮点数
        let a = 1.1
        console.log(a)      // 1.1
        // 小数点后面没有数字或为0
        let b = 1.
        let c = 1.0
        console.log(b)      // 1
        console.log(c)      // 1
        // 科学计数法
        let d = 1e3
        console.log(d)      //1000
        // 浮点数精度
        let e = 1.123456789123456789
        console.log(e)      // 1.1234567891234568 只有16位，多余的会忽略</code></pre>
        <h2><mark>数值范围</mark>：</h2>
        <ul>
            <li class="des">最大值为：<mark class="marksec">Number.MAX_VALUE</mark></li>
            <li class="des">最小值为：<mark class="marksec">Number.MIN_VALUE</mark></li>
            <li class="des">超出最大值：<mark class="marksec">Infinity</mark> 正无穷 无法参与计算</li>
            <li class="des">超出最小值：<mark class="marksec">-Infinity</mark> 负无穷 无法参与计算</li>
            <li class="des"><mark class="marksec">Number.POSITIVE_INFINITY</mark>属性可以得到正无穷</li>
            <li class="des"><mark class="marksec">Number.NEGATIVE_INFINITY</mark>属性可以得到负无穷</li>
            <li class="des"><mark class="marksec">isFinite()函数</mark>：判断一个数值是否处于MAX_VALUE 和MIN_VALUE之间，返回值为ture和false</li>
        </ul>
        <pre class="contentarea" v-highlight><code>     // 最大值
        console.log(Number.MAX_VALUE)       // 1.7976931348623157e+308
        // 最小值
        console.log(Number.MIN_VALUE)       // 5e-324
        // 正无穷
        console.log(Number.POSITIVE_INFINITY)       // Infinity
        // 负无穷
        console.log(Number.NEGATIVE_INFINITY)       // -Infinity
        // isFinite()函数
        console.log(isFinite(10))       // true
        console.log(isFinite(Number.POSITIVE_INFINITY))         // false</code></pre>
        <h2><mark>NaN</mark>：</h2>
        <ul>
            <li class="des">Not a Number 即非数值，表示本来要返回数值的操作失败了</li>
            <li class="des">两个特点：<br>1.NaN参与任何运算都会返回NaN，<br>2.NaN 不等于包括 NaN 在内的任何值</li>
            <li class="des"><mark class="marksec">isNaN()函数</mark>：
                <br>函数接收一个任意类型的参数，会尝试把它转换为数值
                <br>转换规则采用的是<mark class="marksec">Number()</mark>转型函数的规则，任何不能转换成数值的都会返回true
                <br>isNaN()可以用于测试对象：首先调用对象的<mark class="marksec">valueOf()</mark>方法，测试返回值，如果不能，再调用<mark class="marksec">toString()</mark>方法，在测试返回值，这两步是js在后台自动调用的
            </li>
        </ul>
        <pre class="contentarea" v-highlight><code>     // NaN参与运算
        console.log(NaN + 10)       // NaN
        // 与NaN做比较
        console.log(NaN == NaN)         // false
        console.log(10 == NaN)          // false
        //isNaN()函数
        // 测试NaN
        console.log(isNaN(NaN))         // true
        // 测试数字
        console.log(isNaN(10))         // false
        // 测试字符串
        console.log(isNaN('hello'))         // true
        console.log(isNaN(''))              // false isNaN将空字符串转换为0
        console.log(isNaN('123'))         // false isNaN先将‘123’转化为123再做的判断
        // 测试布尔值
        console.log(isNaN(false))         // false isNaN将false转化为了0
        console.log(isNaN(true))         // false isNaN将true转化为了1
        // 测试对象
        console.log(isNaN(null))         // false isNaN将null转化为0
        console.log(isNaN({}))           // true
        // 测试undefined
        console.log(isNaN(undefined))        // true</code></pre>
        <h2><mark>Number()</mark>转型函数：</h2>
        <ul>
            <li class="des">转型函数，可用于将任意类型转换为数字</li>
        </ul>
        <pre class="contentarea" v-highlight><code>     // 测试数字：数值：会直接返回
        console.log(Number(10))         // 10
        // 测试布尔值：布尔值：0和1
        console.log(Number(true))       // 1
        console.log(Number(false))      // 0
        // 测试null：null：0
        console.log(Number(null))       // 0
        // 测试undefined：undefined：NaN
        console.log(Number(undefined))       // NaN
        // 测试字符串
        // 空字符串：空字符串：0
        console.log(Number(''))       // 1
        // 字符串全是数字：忽略前面的0，转为十进制数字，包含前面的正负号，正负号只能出现在最前面
        console.log(Number('123'))       // 123
        console.log(Number('0123'))       // 123  因为会忽略0，所以八进制会当成十进制处理
        console.log(Number('-123'))       // -123
        console.log(Number('123-'))       // NaN
        // 字符串全是数字并包含一个有效小数点：忽略前面的0，转为浮点数，包含前面的正负号，正负号只能出现在最前面
        console.log(Number('1.1'))      // 1.1
        console.log(Number('01.1'))      // 1.1
        console.log(Number('-1.1'))      // -1.1
        console.log(Number('1.1-'))      // NaN
        console.log(Number('1..1'))      // NaN
        console.log(Number('.1'))      // 0.1
        console.log(Number('1.'))      // 1
        //十六进制格式字符串：转换成十进制数值，不能带正负号，否则会返回NaN
        console.log(Number('0x10'))         //16
        console.log(Number('-0x10'))         //NaN
        //其余格式全部为NaN</code></pre>
        <h2><mark>parseInt(arg，[arg)</mark>函数：</h2>
        <ul>
            <li class="des">用于将字符串转换为整数</li>
            <li class="des">可以指定第二个参数，表示以那个进制解析</li>
            <li class="des">建议时刻指定第二个参数，将这个函数用于非字符串，会有奇怪的现象，不建议
            </li>
        </ul>
        <pre class="contentarea" v-highlight><code>     // 空字符串：NaN
        console.log(parseInt(''))       // NaN
        // 字符串以十进制数字开头：返回十进制整数，忽略前面的0和空格，保留前面的正负号，正负号后面第一个字符必须是数字，遇到第一个非数字字符结束
        console.log(parseInt('123hello'))          // 123
        console.log(parseInt('0123hello'))          // 123
        console.log(parseInt('    123hello'))          // 123
        console.log(parseInt('1   23hello'))          // 1
        console.log(parseInt('-123hello'))          // -123
        // 字符串以十六进制开头：转换成对应十进制数值，忽略前面的空格，保留前面的正负号，正负号后面第一个字符必须是0x，遇到第一个非数字字符结束
        console.log(parseInt('0x10hello'))       // 16
        console.log(parseInt('-0x10hello'))       // -16
        console.log(parseInt('  0x10hello'))       // 16
        console.log(parseInt('00x10hello'))       // 0
        console.log(parseInt('10hello', 16))       // 16 指定第二个参数以16进制解析
        // 八进制字符串：不指定第二个参数只会解析成十进制，指定第二个参数为8，可以解析成八进制
        console.log(parseInt('010hello'))        // 10，
        console.log(parseInt('010hello', 8))         //8</code></pre>
        <h2><mark>parseFloat()</mark>函数：</h2>
        <ul>
            <li class="des">用于将字符串转换为浮点数
                <br>parseFloat()函数会忽略所有前导0，十六进制会永远被解析成0
                <br>字符串中的第一个小数点是有效的
                <br>如果数值是整数，或者小数点后为0，会返回整数
                <br>parseFloat只解析十进制，没有第二个参数
                <br>其余规则同parseInt()函数一致
            </li>
        </ul>
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>