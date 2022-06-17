<template>
    <div class="zhishu">
        <h2><mark>指数操作符</mark>：</h2>
        <ul>
            <li class="des">由<mark class="marksec">“ ** ”</mark>两个星号表示
            </li>
            <li class="des">同时支持对应的指数赋值操作符</li>
        </ul>
        <pre class="contentarea" v-highlight><code>    let a = 10
        let b = a ** 2
        console.log(b)      // 100</code></pre>
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>