<template>
    <div class="chengxing">
        <h2><mark>乘性操作符</mark>：</h2>
        <ul>
            <li class="des">js中定义了三个乘性操作符：乘法，除法，取余
            </li>
            <li class="des">乘性操作符存在隐式转换，规则与<mark class="marksec">Number()</mark>函数一致</li>
            <li class="des">知识点：
                <br><mark class="marksec">乘法 *</mark>
                <br><mark class="marksec">除法 /</mark>
                <br><mark class="marksec">取余 %</mark>
            </li>
        </ul>
        <h2><mark>乘法</mark>：</h2>
        <ul>
            <li class="des">乘法操作符由一个星号<mark class="marksec">" * "</mark>表示，用于计算两个数值的乘积</li>
            <li class="des">乘法操作遵循以下规则：
                <br>操作数都是数值时，执行常规计算，正正得正，正负得负，负负得正，如果乘积超过js数值范围，返回Infinity或-Infinity
                <br>如果有一个操作数是NaN，则结果是NaN
                <br>Infinity与0相乘，结果是NaN，与非0数值相乘，是Infinity或-Infinity，取决于该数值的符号
                <br>Infinity与Infinity相乘结果是Infinity
            </li>
        </ul>
        <pre class="contentarea" v-highlight><code>    let a = 10 * 30
        console.log(a)      // 300</code></pre>
        <h2><mark>除法</mark>：</h2>
        <ul>
            <li class="des">除法操作符由一个斜线符号"/"表示</li>
            <li class="des">除法操作遵循以下规则：
                <br>操作数都是数值时，执行常规计算，正正得正，正负得负，负负得正，如果结果超过js数值范围，返回Infinity或-Infinity
                <br>如果有一个操作数是NaN，则结果是NaN
                <br>Infinity被Infinity除，结果是NaN
                <br>0被0除，结果是NaN
                <br>非0的有限数，被0除，结果是Infinity或-Infinity，取决于该数值的符号
                <br>Infinity被任何非0数值除，结果是Infinity或-Infinity，取决于该数值的符号
            </li>
        </ul>
        <pre class="contentarea" v-highlight><code>    let a = 30 / 10
        console.log(a)       // 3</code></pre>
        <h2><mark>取余</mark>：</h2>
        <ul>
            <li class="des">求模(取余)操作符由一个百分号<mark class="marksec">"%"</mark>表示</li>
            <li class="des">求模(取余)操作符遵循以下规则：
                <br>如果操作数都是数值，则按常规计算，返回除得的余数
                <br>如果被除数是无穷大的值，除数是有限值，则返回NaN
                <br>任何有限大的数值对0取余，结果是NaN
                <br>Infinity对Infinity取余，结果是NaN
                <br>任何有限大的数值对无穷大取余，结果是该数值
                <br>0对任何数取余，结果是0
            </li>
        </ul>
        <pre class="contentarea" v-highlight><code>    let a = 10
        let b = 3
        console.log(a % b)      // 1</code></pre>
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>