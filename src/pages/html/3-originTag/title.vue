<template>
    <div class="titeltag">
        <!-- title标签 -->
        <h2><mark>&lt;title></mark>标签：</h2>
        <ul>
            <li class="des">定义文档的标题，页面被收藏时的标题，搜索引擎结果的标题</li>
            <li class="des">页面中必须存在<mark>&lt;title>标签</mark>，且只能存在一个</li>
            <li class="des">它只应包含文本，若是包含有标签，则它包含的任何标签都将被忽略</li>
            <li class="des">页面标题的内容对搜索引擎优化（SEO）具有重要意义</li>
        </ul>
        <h2><mark>&lt;title></mark>实例：</h2>
        <pre class="contentarea" v-highlight><code>         &lt;html>
                &lt;head>
                    &lt;meta charset="utf-8">
                    &lt;title>我是文档标题...&lt;/title>
                &lt;/head>
            &lt;body>
                文档内容......
            &lt;/body>
            &lt;/html></code></pre>
        <h2><mark>&lt;title></mark>使用要点：</h2>
        <table>
            <thead>
                <tr>
                    <td>注意项</td>
                    <td>说明</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>内容分类</td>
                    <td>元数据内容</td>
                </tr>
                <tr>
                    <td>允许内容</td>
                    <td>非空字符串</td>
                </tr>
                <tr>
                    <td>标签单双</td>
                    <td>双标签</td>
                </tr>
                <tr>
                    <td>父标签</td>
                    <td>&lt;head></td>
                </tr>
                <tr>
                    <td>DOM接口</td>
                    <td>HTMLTitleElement</td>
                </tr>
            </tbody>
        </table>
        <h2><mark>&lt;title></mark>浏览器支持：</h2>
        <ul>
            <li class="des">所有主流浏览器都支持<mark class="marksec">&lt;title></mark>标签</li>
        </ul>
        <h2><mark>&lt;title></mark>属性：</h2>
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