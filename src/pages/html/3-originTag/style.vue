<template>
    <div class="styletag">
        <!-- style标签 -->
        <h2><mark>&lt;style></mark>标签：</h2>
        <ul>
            <li class="des">&lt;style>标签定义 HTML 文档的样式信息。</li>
            <li class="des">在&lt;style>元素中，您可以规定在浏览器中如何呈现 HTML 文档。</li>
            <li class="des">每个 HTML 文档能包含多个&lt;style>标签。</li>
        </ul>
        <h2><mark>&lt;style></mark>实例：</h2>
        <pre class="contentarea" v-highlight><code>        &lt;style type="text/css">
                .demo h1 {color:red;}
                .demo p {color:blue;}
            &lt;/style>
            &lt;div class='demo'>
                &lt;h1>这是一个标题&lt;/h1>
                &lt;p>这是一个段落。&lt;/p>
            &lt;/div></code></pre>
        <h2><mark>&lt;style></mark>浏览器支持：</h2>
        <ul>
            <li class="des">所有主流浏览器都支持 &lt;style> 标签。</li>
        </ul>
        <h2><mark>&lt;style></mark>属性：</h2>
        <table>
            <thead>
                <tr>
                    <td>属性</td>
                    <td>描述</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><mark>type</mark></td>
                    <td>以MIME类型（不应该指定字符集）定义样式语言 默认为text/css</td>
                </tr>
                <tr>
                    <td><mark>media</mark></td>
                    <td>媒体查询，为样式表规定不同的媒体类型</td>
                </tr>
                <tr>
                    <td><mark>title</mark></td>
                    <td>指定可选的样式表</td>
                </tr>
                <tr>
                    <td><mark>scoped</mark></td>
                    <td>h5新增属性，如果使用该属性，则样式仅仅应用到 style 元素的父元素及其子元素。<br>值：scoped， 使用该属性，style可以放到body中</td>
                </tr>
                <tr>
                    <td colspan="2">支持全局属性</td>
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