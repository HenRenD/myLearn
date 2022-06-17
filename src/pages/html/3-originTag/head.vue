<template>
    <div class="headtag">
        <h2><mark>&lt;head></mark>标签：</h2>
        <ul>
            <li class="des">
                <mark>&lt;head></mark> 元素是所有头部元素的容器。
            </li>
            <li class="des">
                <mark>&lt;head></mark>标签规定文档相关的配置信息（元数据），包括文档的标题，引用的文档样式和脚本等
            </li>
            <li class="des">
                <mark>&lt;head></mark> 元素必须包含文档的标题（title），可以包含脚本、样式、meta 信息 以及其他更多的信息
            </li>
        </ul>
        <h2><mark>&lt;head></mark>子标签：</h2>
        <ul>
            <li class="des"><mark>title</mark>：titel标签是必须的</li>
            <li class="des"><mark>style</mark></li>
            <li class="des"><mark>base</mark></li>
            <li class="des"><mark>link</mark></li>
            <li class="des"><mark>meta</mark></li>
            <li class="des"><mark>script</mark></li>
            <li class="des"><mark>noscript</mark></li>
        </ul>
        <h2><mark>&lt;head></mark>实例：</h2>
        <pre v-highlight class="contentarea"><code>        <!DOCTYPE html>
            &lt;html>
                    &lt;head>
                        &lt;meta charset="utf-8">
                        &lt;title>文档标题&lt;/title>
                    &lt;/head>
            &lt;body>
                    文档内容......
            &lt;/body>
            &lt;/html></code></pre>
        <h2><mark>&lt;head></mark>浏览器支持：</h2>
        <ul>
            <li class="des">所有主流浏览器都支持<mark class="marksec">&lt;head></mark>标签</li>
        </ul>
        <h2><mark>&lt;head></mark>属性：</h2>
        <ul>
            <li class="des">支持全局属性</li>
        </ul>
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>;
