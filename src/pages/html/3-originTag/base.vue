<template>
    <div class="basetag">
        <!-- base标签 -->
        <h2><mark>&lt;base></mark>标签：</h2>
        <ul>
            <li class="des">
                &lt;base>标签为页面上的所有的相对链接规定默认 URL 或默认目标。
            </li>
            <li class="des"> 在一个文档中，最多能使用一个
                &lt;base>元素。
            </li>
            <li class="des">
                &lt;base>标签必须位于
                &lt;head> 元素内部。
            </li>
            <li class="des">实例：<mark class="markdes">&lt;base href="https://www.axihe.com/images/" target="_blank"></mark></li>
        </ul>
        <h2><mark>&lt;base></mark>实例：</h2>
        <pre class="contentarea" v-highlight><code>        &lt;head>
                &lt;base href="https://www.xxx.com/images/" target="_blank">
            &lt;/head>
            &lt;body>
                &lt;img src="logo.png" width="24" height="39" alt="Stickman">
                &lt;a href="https://www.xxx.com">xxx.com&lt;/a>
            &lt;/body></code></pre>
        <h2><mark>&lt;base</mark>浏览器支持：</h2>
        <ul>
            <li class="des">所有主流浏览器都支持 <mark class="marksec">&lt;base></mark>标签。</li>
        </ul>
        <h2><mark>&lt;base</mark>属性：</h2>
        <table>
            <thead>
                <tr>
                    <td class="tdfirst">属性</td>
                    <td class="tdsecond">可选值</td>
                    <td>描述</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="tdfirst"><mark>href</mark></td>
                    <td class="tdsecond"><mark class="marksec">URL</mark>：链接地址</td>
                    <td>规定页面中所有相对链接的基准 URL。</td>
                </tr>
                <tr>
                    <td class="tdfirst"><mark>target</mark></td>
                    <td class="tdsecond"><mark class="marksec">_blank</mark>
                    <br><mark class="marksec">_self</mark></td>
                    <td>规定页面中所有的超链接和表单在何处打开。该属性会被每个链接中的 target 属性覆盖。</td>
                </tr>
                <tr>
                    <td colspan="3">支持全局属性</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>