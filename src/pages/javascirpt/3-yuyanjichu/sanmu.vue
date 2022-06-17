<template>
    <div class="sanmu">
        <h2><mark>三目表达式</mark>：</h2>
        <ul>
            <li class="des">语法：<mark class="marksec">条件 ? true_value : false_value</mark></li>
            <li class="des">如果条件为真，返回第一个值，否则返回第二个值</li>
        </ul>
        <pre class="contentarea" v-highlight><code>     console.log((10 > 5) ? 10 : 5)      // 10</code></pre>
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>