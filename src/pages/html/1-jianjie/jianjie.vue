<template>
    <div class="jianjie">
        <h2>html简介</h2>
        <p>1，HTML 指的是超文本标记语言: <mark>Hyper Text Markup Language</mark></p>
        <p>2，负责页面中的结构</p>
        <p>3，由标签组成</p>
        <h2>html实例</h2>
        <pre class="contentarea" v-highlight><code>            <!DOCTYPE html>
                &lt;html lang="">
                &lt;head>
                        &lt;meta charset="utf-8">
                        &lt;title>网页标题&lt;/title>
                &lt;/head>
                &lt;body>
                        网页主体内容
                &lt;/body>
                &lt;/html></code></pre>
        <h3>说明：</h3>
        <p>
            <mark>
                <!DOCTYPE>
            </mark> 声明：位于文档中的最前面的位置，处于<mark>&lt;html></mark>标签之前，用来告知 Web 浏览器页面使用了哪种 HTML 版本
        </p>
        <p>
            <mark>&lt;html></mark>标签：告知浏览器这是一个 HTML 文档，是所有其他 HTML 元素（除了
            <!DOCTYPE>）的容器。
        </p>
        <p>
            <mark>&lt;head></mark>标签：包含页面的元数据
        </p>
        <p>
            <mark>&lt;body></mark>标签：是网页的主体内容
        </p>
    </div>
</template>

<script>
export default {
    name: "Jianjie",
};
</script>

<style scoped>
.jianjie img {
    margin-top: 20px;
    margin-left: 20px;
}
</style>