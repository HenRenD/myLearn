<template>
    <div class="bodytag">
        <h2><mark>&lt;body></mark>标签：</h2>
        <ul>
            <li class="des">是页面内容的主体标签</li>
            <li class="des">包含页面的所有内容，例如文本，图片，视频等</li>
        </ul>
        <h2><mark>&lt;body></mark>实例：</h2>
        <pre class="contentarea" v-highlight><code>        <!DOCTYPE html>
            &lt;html>
                &lt;head>
                    &lt;meta charset="utf-8">
                    &lt;title>文档标题&lt;/title>
                &lt;/head>
                &lt;body>
                    文档内容......
                &lt;/body>
            &lt;/html></code></pre>
        <h2><mark>&lt;body></mark>使用注意：</h2>
        <table>
            <thead>
                <tr>
                    <td>项</td>
                    <td>说明</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>父元素</td>
                    <td>body必须是html元素的直接子元素</td>
                </tr>
                <tr>
                    <td>DOM接口</td>
                    <td><mark class="marksec">HTMLBodyElement</mark>或者通过<mark class="marksec">document.body</mark>属性访问</td>
                </tr>
            </tbody>
        </table>
        <h2><mark>&lt;body></mark>浏览器支持：</h2>
        <ul>
            <li class="des">所有主流浏览器都支持 <mark class="marksec">&lt;body></mark> 标签。</li>
        </ul>
        <h2><mark>&lt;body></mark>属性：</h2>
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