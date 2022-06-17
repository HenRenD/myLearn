<template>
    <div class="banumber">
        <h2><mark>Number</mark>：</h2>
        <ul>
            <li class="des"><mark class="marksec">Number</mark> 是对应数值的引用类型</li>
            <li class="des">要创建一个 Number 对象，就使用 Number 构造函数并传入一个数值</li>
            <li class="des">语法：<mark class="marksec">let numberObject = new Number(number);</mark></li>
            <li class="des">知识点：
                <br><mark class="marksec">new Number(num)</mark>
                <br><mark class="marksec">valueOf()</mark>
                <br><mark class="marksec">toString(n)</mark>
                <br><mark class="marksec">toLocaleString()</mark>
                <br><mark class="marksec">toFixed(n)</mark>
                <br><mark class="marksec">toExponential(n)</mark>
                <br><mark class="marksec">toPrecision(n)</mark>
                <br><mark>Number.isInteger(num)ES6</mark>
            </li>
        </ul>
        <pre class="contentarea" v-highlight><code>    let numberObject = new Number(10)
        console.log(numberObject)       // numberObject对象</code></pre>
        <h2><mark>Number对象实例方法</mark>：</h2>
        <table>
            <thead>
                <tr>
                    <td width='24%'>方法</td>
                    <td width='30%'>描述</td>
                    <td>实例</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><mark class="marksec">valueOf()</mark></td>
                    <td>返回对象的原始数值</td>
                    <td>
                        <pre class="contentarea" v-highlight><code>    let num = new Number(10)
        console.log(num.valueOf())  // 10</code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">toString(n)</mark></td>
                    <td>返回对象的原始数值字符串
                        <br>参数n表示以那种进制表示
                    </td>
                    <td>
                        <pre class="contentarea" v-highlight><code>    let num = new Number(10)
        console.log(num.toString())  // '10'
        // 指定进制
        console.log(num.toString(2))  // '1010'</code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">toLocaleString()</mark></td>
                    <td>返回对象的原始数值字符串</td>
                    <td>
                        <pre class="contentarea" v-highlight><code>    let num = new Number(10)
        console.log(num.toLocaleString())  // '10'</code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">toFixed(n)</mark></td>
                    <td>返回包含指定小数点位数的数值字符串
                        <br>参数n表示小数的位数，如果本身就有小数位数，会进行四舍五入
                    </td>
                    <td>
                        <pre class="contentarea" v-highlight><code>    let num = new Number(10.12376)
        console.log(num.toFixed(2))         // 10.12
        console.log(num.toFixed())      // 10
        let num2 = new Number(10.542)
        console.log(num2.toFixed())         // 11</code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">toExponential(n)</mark></td>
                    <td>返回以科学计数法表示的数值字符串，参数n表示位数</td>
                    <td>
                        <pre class="contentarea" v-highlight><code>    let num = new Number(10000)
        console.log(num.toExponential(1))       // 1.0e+4
        console.log(num.toExponential(2))       // 1.00e+4
        console.log(num.toExponential(3))       // 1.000e+4
        console.log(num.toExponential(4))        // 1.0000e+4</code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">toPrecision(n)</mark></td>
                    <td>根据实际情况返回合理的结果，n表示数字的总位数
                        <br>该方法会根据实际的数值和精度，决定调用上面的两种方法中的一种
                    </td>
                    <td>
                        <pre class="contentarea" v-highlight><code>    let num = new Number(10000)
        console.log(num.toPrecision(1))         // 1.0e+4
        console.log(num.toPrecision(2))         // 1.00e+4
        console.log(num.toPrecision(3))         // 1.000e+4
        console.log(num.toPrecision(4))         // 1.0000e+4
        
        let num2 = new Number(12.12314)
        console.log(num2.toPrecision(1))        // 1e+1
        console.log(num2.toPrecision(2))        // 12
        console.log(num2.toPrecision(3))        // 12.1
        console.log(num2.toPrecision(4))        // 12.12</code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">Number.isInteger(num)</mark>(ES6)</td>
                    <td>用于判别一个数值是不是整数</td>
                    <td>
                        <pre class="contentarea" v-highlight><code>    let num = 10
        let num2 = 12.1
        console.log(Number.isInteger(num))      // true
        console.log(Number.isInteger(num2))         // false</code></pre>
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