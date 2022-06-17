<template>
    <div class="douhao">
        <h2><mark>逗号操作符</mark>：</h2>
        <ul>
            <li class="des">利用逗号操作符一次性声明多个变量</li>
            <li class="des">利用逗号操作符赋值总会返回表达式的最后一项</li>
        </ul>
        <pre class="contentarea" v-highlight><code>    var num_1 = 0，num_2 = 0，num_3 = 0;
        var num = (1,2,3,4,5,6,7,8,9) //num的值为9</code></pre>
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>