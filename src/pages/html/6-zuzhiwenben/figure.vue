<template>
    <div class="figuretag">
        <h2><mark>&lt;figure~figcaption></mark>标签：</h2>
        <ul>
            <li class="des"><mark class="marksec">figure</mark> 标签规定独立的流内容（图像、图表、照片、代码等等）。
            </li>
            <li class="des"><mark class="marksec">figure</mark> 元素的内容应该与主内容相关，同时元素的位置相对于主内容是独立的。如果被删除，则不应对文档流产生影响。
            </li>
            <li class="des"><mark class="marksec">figcaption</mark> 标签为 <mark class="marksec">figure </mark>元素定义标题。</li>
            <li class="des"><mark class="marksec">figcaption</mark> 元素应该被置于 <mark class="marksec">figure</mark> 元素的第一个或最后一个子元素的位置。</li>
        </ul>
        <h2><mark>&lt;figure~figcaption></mark>实例：</h2>
        <pre class="contentarea" v-highlight><code>        &lt;figure >
                    &lt;img src="https://xxxx.png">
                    &lt;figcaption>figure的标题&lt;/figcaption>
            &lt;/figure></code></pre>
        <h2><mark>&lt;figure~figcaption></mark>浏览器支持：</h2>
        <ul>
            <li class="des">IE 8 或更早版本的 IE 浏览器不支持<mark class="marksec">&lt;figure~figcaption></mark> 标签。</li>
        </ul>
        <h2><mark>&lt;figure~figcaption></mark>属性：</h2>
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