<template>
    <div class="labelyuju">
        <h2><mark>label语句</mark>：</h2>
        <ul>
            <li class="des">使用label语句可以在代码中添加标签，以便将来使用</li>
            <li class="des">语法：<mrak class="marksec">label：statement;</mrak>
            </li>
            <li class="des">加标签的语句一般要配合for语句等循环语句使用</li>
            <li class="des">由break和continue引用，其应用场景是嵌套循环</li>
        </ul>
        <pre class="contentarea" v-highlight><code>    finish1:
        for (let i = 0; i &lt; 10; i++) {
            for (let j = 0; j &lt; 10; j++) {
                console.log(j)
                if (j === i) {
                    break finish1  // 这里用了break,会直接结束所有的循环
                }
            }
        }
        finish2:
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