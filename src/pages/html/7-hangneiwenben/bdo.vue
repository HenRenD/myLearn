<template>
    <div class="bdotag">
        <h2><mark>&lt;bdo></mark>标签：</h2>
        <ul>
            <li class="des">
                HTML <mark class="marksec">bdo</mark> 指的是 bidi 覆盖（Bi-Directional Override）
            </li>
            <li class="des">
                <mark class="marksec">bdo</mark> 标签用来覆盖默认的文本方向
            </li>
        </ul>
        <h2><mark>&lt;bdo></mark>实例：</h2>
        <pre class="contentarea" v-highlight><code>        &lt;p>该段落文字从左到右显示。&lt;/p>
            &lt;p>&lt;bdo dir="rtl">该段落文字从右到左显示。&lt;/bdo>&lt;/p></code></pre>
        <h2><mark>&lt;bdo></mark>浏览器支持：</h2>
        <ul>
            <li class="des">所有主流浏览器都支持 <mark class="marksec">&lt;bdo></mark> 标签</li>
        </ul>
        <h2><mark>&lt;bdo></mark>标签：</h2>
        <ul>
            <li class="des"><mark>dir</mark>：规定文本方向，ltr表示left to right，rtl表示right to left</li>
            <li class="des">支持全局属性</li>
        </ul>
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>