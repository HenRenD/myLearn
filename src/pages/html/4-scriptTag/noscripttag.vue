<template>
    <div class="noscripttag">
        <!-- noscript标签 -->
        <h2><mark>&lt;noscript></mark>标签：</h2>
        <ul>
            <li class="des">如果页面上的脚本类型不受支持或者当前在浏览器中关闭了脚本时显示的内容</li>
            <li class="des">在 HTML4 中，&lt;noscript> 标签只允许插入到
                &lt;body> 元素中。</li>
            <li class="des">在 HTML5 中，&lt;noscript> 标签可以插入到
                &lt;head> 和
                &lt;body> 区域中。</li>
        </ul>
        <h2><mark>&lt;noscript></mark>实例：</h2>
        <pre class="contentarea" v-highlight><code>        &lt;script>
                document.write("Hello World!")
            &lt;/script>
            &lt;noscript>抱歉，你的浏览器不支持 JavaScript!&lt;/noscript></code></pre>
        <h2><mark>&lt;noscript></mark>浏览器支持：</h2>
        <ul>
            <li class="des">目前大多数浏览器支持 <mark class="marksec">&lt;noscript></mark> 标签</li>
        </ul>
        <h2><mark>&lt;noscript></mark>属性：</h2>
        <ul>
            <li class="des">支持全局属性</li>
        </ul>
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>