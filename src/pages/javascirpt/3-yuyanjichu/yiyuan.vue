<template>
    <div class="yiyuan">
        <h2><mark>一元操作符</mark>：</h2>
        <ul>
            <li class="des">只能操作一个值得操作符叫做一元操作符</li>
            <li class="des">一元操作符存在隐式转换，效果同<mark class="marksec">Number()</mark>函数一致</li>
            <li class="des">知识点：
                <br><mark class="marksec">前置递增：++num</mark>
                <br><mark class="marksec">后置递增：num++</mark>
                <br><mark class="marksec">前置递减：--num</mark>
                <br><mark class="marksec">后置递减：num--</mark>
                <br><mark class="marksec">一元加：+</mark>
                <br><mark class="marksec">一元减：-</mark>
            </li>
        </ul>
        <h2><mark>++num/num++</mark>：</h2>
        <ul>
            <li class="des">两者都会执行加1的操作</li>
            <li class="des"><mark class="marksec">++num</mark>总是<mark class="marksec">先</mark>执行加的操作</li>
            <li class="des"><mark class="marksec">num++</mark>总是<mark class="marksec">后</mark>执行加的操作</li>
        </ul>
        <pre class="contentarea" v-highlight><code>    let num1 = 10
        let num2 = 10
        console.log(++num1, num1)      // 11，11
        console.log(num2++, num2)      // 10，11</code></pre>
        <h2><mark>--num/num11</mark>：</h2>
        <ul>
            <li class="des">两者都会执行减1的操作</li>
            <li class="des"><mark class="marksec">--num</mark>总是<mark class="marksec">先</mark>执行减的操作</li>
            <li class="des"><mark class="marksec">num--</mark>总是<mark class="marksec">后</mark>执行减的操作</li>
        </ul>
        <pre class="contentarea" v-highlight><code>    let num1 = 10
        let num2 = 10
        console.log(--num1, num1)      // 9，9
        console.log(num2--, num2)      // 10，9</code></pre>
        <h2><mark>一元加(+) / 一元减(-)</mark>：</h2>
        <ul>
            <li class="des">一元加操作符：“+”，就是加号，放在数值前面不会产生任何影响
            </li>
            <li class="des">一元减操作符：“-”，就是减号，放在数字前，会将数字变成负数</li>
        </ul>
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>