<template>
    <div class="wei">
        <h2><mark>位操作符</mark>：</h2>
        <ul>
            <li class="des">位操作符作用在最基本的层次上，即按内存中表示数值的位来操作数值</li>
            <li class="des">js中的数值都以IEEE-754 64位格式存储，位操作符先将64转换成32位，然后执行操作，最后在转换成64位</li>
            <li class="des">有符号整数：32中前31位用来表示数值，第32位用来表示符号，0表示正数，1表示负数(位数是从0开始数，也就意味着不能访问位31)</li>
            <li class="des">对特殊的值NaN和Infinity时，会将他们当着0来处理</li>
            <li class="des">对非数值使用位操作符，会先使用<mark class="marksec">Number()</mark>转换函数，将其转换成数值</li>
            <li class="des">负数的二进制码：先求出这个数值绝对值的二进制码，然后求二进制反码，0换成1,1换成0，然后加1</li>
            <li class="des">如果我们输出一个负数的二进制码，不会得到反码，得到的是该数值绝对值的二进制码加上一个负号</li>
            <li class="des">知识点：
                <br><mark class="marksec">按位非(not)</mark>
                <br><mark class="marksec">按位与(and)</mark>
                <br><mark class="marksec">按位或(or)</mark>
                <br><mark class="marksec">按位异或(xor)</mark>
                <br><mark class="marksec">左移</mark>
                <br><mark class="marksec">有符号右移</mark>
                <br><mark class="marksec">无符号右移</mark>
            </li>
        </ul>
        <h2><mark>按位非(not)</mark>：</h2>
        <ul>
            <li class="des">该操作符由一个波浪线<mark class="marksec">"~"</mark>表示，返回数值的二进制反码，并将其转换为数值</li>
        </ul>
        <pre class="contentarea" v-highlight><code>    let num = 25
        let num2 = ~num
        console.log(num2)       // -26
        // 计算的关键是求num的二进制反码
        // -num = num的二进制反码 + 1   ===>   num的二进制反码 = -num - 1 = -25 - 1 = -26
        // 最终的效果是：对数值取反并减1</code></pre>
        <h2><mark>按位与(and)</mark>：</h2>
        <ul>
            <li class="des">该操作符由一个和号字符<mark class="marksec">"&"</mark>表示，它有两个操作数</li>
            <li class="des">将两个操作数转换成二进制码，相同位置都为1的才为1，其余的全部是0，得到一个二进制码，将其转换为数值就是结果</li>
        </ul>
        <pre class="contentarea" v-highlight><code>    let num = 25 & 3
        console.log(num)        // 1
        // 25的二进制码：0 0 0 1 1 0 0 1
        // 3的二进制码：  0 0 0 0 0 0 1 1
        // 求按位与：       0 0 0 0 0 0 0 1   ===>   1</code></pre>
        <h2><mark>按位或(or)</mark>：</h2>
        <ul>
            <li class="des">该操作符由一个竖线符号<mark class="marksec">"|"</mark>表示，它有两个操作数</li>
            <li class="des">将两个操作数转换成二进制码，然后相同位置都为0的才为0，其余的全部是1，得到一个二进制码，将其转换为数值就是结果</li>
        </ul>
        <pre class="contentarea" v-highlight><code>    let num = 25 | 3
        console.log(num)        // 27
        // 25的二进制码：0 0 0 1 1 0 0 1
        // 3的二进制码：  0 0 0 0 0 0 1 1
        // 求按位或：       0 0 0 1 1 0 1 1   ===>   1 + 2 + 8 + 16 = 27</code></pre>
        <h2><mark>按位异或(xor)</mark>：</h2>
        <ul>
            <li class="des">该操作符由一个插入符号<mark class="marksec">"^"</mark>表示，它有两个操作数</li>
            <li class="des">将两个操作数转换成二进制码，然后相同位置数值相同的位是0，其余的全部是1，得到一个二进制码，将其转换为数值就是结果</li>
        </ul>
        <pre class="contentarea" v-highlight><code>    let num = 25 ^ 3
        console.log(num)        // 26
        // 25的二进制码：0 0 0 1 1 0 0 1
        // 3的二进制码：  0 0 0 0 0 0 1 1
        // 求按位或：       0 0 0 1 1 0 1 0   ===>   2 + 8 + 16 = 26</code></pre>
        <h2><mark>左移</mark>：</h2>
        <ul>
            <li class="des">该操作符由两个小于号<mark class="marksec">'&lt;&lt;'</mark>表示，这个操作符会将数值的二进制码向左边移动指定的位数</li>
            <li class="des">移动后，二进制码的右边会空出5位，会以0来填充</li>
            <li class="des">左移会保留它所操作数值的符号</li>
        </ul>
        <pre class="contentarea" v-highlight><code>    let num = 2 &lt;&lt; 5
        console.log(num)        // 64
        // 2的32位二进制码：0(符号位)0000000000000000000000000000010
        // 向左移动五个：0(符号位)0000000000000000000000001000000(后面填充5个零)</code></pre>
        <h2><mark>有符号的右移</mark>：</h2>
        <ul>
            <li class="des">该操作符由两个大于号<mark class="marksec">">>"</mark>表示，将数值的所有 32 位都向右移，同时保留符号（正或负）</li>
            <li class="des">有符号右移实际上是左移的逆运算，右移后空位会出现在左侧，ECMAScript 会用符号位的值来填充空位</li>
        </ul>
        <pre class="contentarea" v-highlight><code>    let num = 64 >> 5
        console.log(num)        // 2
        // 64的32位二进制码：0(符号位)0000000000000000000000001000000
        // 向右移动五个：0(符号位)00000(左边填充5个0)00000000000000000000000010</code></pre>
        <h2><mark>无符号的右移</mark>：</h2>
        <ul>
            <li class="des">该操作符由三个小于号<mark class="marksec">">>>"</mark>表示，这个操作符会将数值的32位二进制码全部向右移动指定的位数，以0填充空位</li>
            <li class="des">对于正数，无符号右移与有符号右移相同</li>
            <li class="des">对于负数，会把负数的二进制码，当成正数的二进制码来右移，得到的结果会非常大</li>
        </ul>
        <pre class="contentarea" v-highlight><code>    let num = -64 >>> 5
        console.log(num)        // 134217726
        // 64的32位二进制码：00000000000000000000000001000000
        // 64的反码：11111111111111111111111110111111
        // -64的二进制码 = 64的反码 + 1 = 11111111111111111111111111000000
        // 向右移动5位：00000111111111111111111111111110 = 134217726</code></pre>
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>