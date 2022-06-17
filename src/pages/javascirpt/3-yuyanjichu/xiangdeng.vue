<template>
    <div class="xiangdeng">
        <h2><mark>相等操作符</mark>：</h2>
        <ul>
            <li class="des">js中有两组相等操作符：相等和不相等，全等和不全等</li>
            <li class="des">知识点：
                <br><mark class="marksec">相等'=='</mark>
                <br><mark class="marksec">不相等'!='</mark>
                <br><mark class="marksec">全等'==='</mark>
                <br><mark class="marksec">不全等'!=='</mark>
            </li>
        </ul>
        <h2><mark>相等 / 不相等</mark>：</h2>
        <ul>
            <li class="des">相等操作符由两个等号<mark class="marksec">"=="</mark>表示</li>
            <li class="des">不相等操作符由一个叹号加一个等号<mark class="marksec">"!="</mark>表示</li>
            <li class="des">两个操作符存在隐式转换，规则大体同<mark class="marksec">Number()</mark>函数一致
                <br>有以下区别：
                <br>null和undefined是相等的，不能将null/undefined转换成其他值
                <br>如果两个操作数都是对象，则比较他们是不是指向同一个对象(是不是引用同一个对象)，如果是返回true，否则返回false
            </li>
        </ul>
        <pre class="contentarea" v-highlight><code>    console.log(10 == 10)           // true
        console.log('10' == 10)         // true
        console.log('10' != 10)         // false
        console.log(null == undefined)      // true
        const object_ = {}
        const obj1 = object_
        const obj2 = object_
        console.log(obj1 == obj2)       // true</code></pre>
        <h2>
            <mark>全等 / 不全等</mark>：
        </h2>
        <ul>
            <li class="des">全等操作符由三个等号<mark class="marksec">"==="</mark>表示</li>
            <li class="des">不全等等操作符由一个叹号加两个等号<mark class="marksec">"!=="</mark>表示</li>
            <li class="des">与相等和不相等唯一的区别是，全等和不全等在比较的时候，不会转换数据类型</li>
            <li class="des"><mark class="marksec">为了保证数据类型的完整性，推荐使用全等和不全等</mark></li>
        </ul>
        <pre class="contentarea" v-highlight><code>    console.log(10 === 10)           // true
        console.log('10' === 10)         // false
        console.log('10' !== 10)         // true
        console.log(null === undefined)      // false
        const object_ = {}
        const obj1 = object_
        const obj2 = object_
        console.log(obj1 === obj2)       // true</code></pre>
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>