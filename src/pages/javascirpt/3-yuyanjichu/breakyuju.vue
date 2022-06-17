<template>
    <div class="breakyuju">
        <h2><mark>break语句</mark>：</h2>
        <ul>
            <li class="des">break立即终止当前循环语句，执行循环体下面的语句</li>
            <li class="des">可以搭配label语句</li>
        </ul>
        <pre class="contentarea" v-highlight><code>    finish1:
        for (let i = 0; i &lt; 10; i++) {
            for (let j = 0; j &lt; 10; j++) {
                console.log(j)
                if (j === i) {
                    break finish1  // 这里用了break,会直接结束所有的循环
                }
            }
        }</code></pre>
        <h2><mark>continue语句</mark>：</h2>
        <ul>
            <li class="des">continue跳出本次循环，执行下一次循环</li>
            <li class="des">可以搭配label语句</li>
        </ul>
        <pre class="contentarea" v-highlight><code>    finish2:
        for (let i = 0; i &lt; 10; i++) {
            for (let j = 0; j &lt; 10; j++) {
                console.log(j)
                if (j === i) {
                    continue finish2 // 这里用了continue,会跑完所有循环
                }
            }
        }</code></pre>
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>