<template>
    <div class="buer">
        <h2><mark>布尔操作符</mark>：</h2>
        <ul>
            <li class="des">测试两个值的关系</li>
            <li class="des">知识点：
                <br><mark class="marksec">逻辑非(not)</mark>
                <br><mark class="marksec">逻辑与(and)</mark>
                <br><mark class="marksec">逻辑或(or)</mark>
            </li>
        </ul>
        <h2><mark>逻辑非(not)</mark>：</h2>
        <ul>
            <li class="des">该操作符由一个叹号<mark class="marksec">"!"</mark>表示</li>
            <li class="des">可以应用js中任何值，不管是什么类型的数据，都会返回一个布尔值</li>
            <li class="des">该布尔值的结果是Boolean()转型函数的相反值</li>
            <li class="des">如果对操作数使用两个叹号"!!"，产生的效果和Boolean()转型函数一致</li>
        </ul>
        <pre class="contentarea" v-highlight><code>    let bool = true
        console.log(!bool)      // false</code></pre>
        <h2><mark>逻辑与(and)</mark>：</h2>
        <ul>
            <li class="des">该操作符由两个和号<mark class="marksec">"&&"</mark>表示，有两个操作数</li>
            <li class="des">第一个操作数为真，返回第二个操作数</li>
            <li class="des">第一个操作数为假，直接返回第一个操作数，也叫作短路</li>
            <li class="des">也就是说同时为真才为真，其余全是假</li>
        </ul>
        <pre class="contentarea" v-highlight><code>    let bool1 = true
        let bool2 = false
        console.log(bool1 && bool2)         // false</code></pre>
        <h2><mark>逻辑或(or)</mark>：</h2>
        <ul>
            <li class="des">该操作符由两个竖线<mark class="marksec">"||"</mark>表示，有两个操作数</li>
            <li class="des">如果第一个操作数的求值为false，则返回第二个操作数</li>
            <li class="des">如果第一个操作数为true，直接返回第一个操作数，也叫作短路</li>
            <li class="des">也就是说同时为假才为假，其余全是真</li>
        </ul>
        <pre class="contentarea" v-highlight><code>    let bool1 = true
        let bool2 = false
        console.log(bool1 || bool2)         // true</code></pre>
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>