<template>
    <div class="dowhileyuju">
        <h2><mark>do-while语句</mark>：</h2>
        <ul>
            <li class="des">循环语句</li>
            <li class="des">语法：<mark class="marksec">do{ statement } while(conditon);</mark></li>
            <li class="des">do-while语句是一种后测试循环语句</li>
            <li class="des">先执行代码块里面的内容，然后判断，故statement至少会被执行一次</li>
            <li class="des">如果condition为true，会一直执行，一定要避免出现这种‘死循环’情况</li>
        </ul>
        <pre class="contentarea" v-highlight><code>    let a = 1
        do {
            console.log('hello world')  //这里虽然条件不满足，依然会执行一次
        } while (a > 10);</code></pre>
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>