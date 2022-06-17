<template>
    <div class="hgrouptag">
        <h2><mark>&lt;address></mark>标签：</h2>
        <ul>
            <li class="des">
                &lt;address> 标签定义文档作者 / 所有者的联系信息。
            </li>
            <li class="des">
                如果 &lt;address> 元素位于&lt;body> 元素内部，则它表示该文档作者 / 所有者的联系信息。
            </li>
            <li class="des">
                如果 &lt;address> 元素位于 &lt;article> 元素内部，则它表示该文章作者 / 所有者的联系信息。
            </li>
            <li class="des">
                &lt;address> 元素的文本通常呈现为斜体。大多数浏览器会在该元素的前后添加换行。
            </li>
            <li class="des">
                不应该使用 &lt;address> 标签来描述邮政地址，除非这些信息是联系信息的组成部分。
            </li>
            <li class="des">
                &lt;address> 元素通常被包含在 &lt;footer> 元素的其他信息中。
            </li>
        </ul>
        <h2><mark>&lt;address></mark>实例：</h2>
        <pre class="contentarea" v-highlight><code>        &lt;address>
                Written by &lt;a href="xxxxx">henren&lt;/a>&lt;br>
            &lt;/address></code></pre>
        <h2><mark>&lt;address></mark>浏览器支持：</h2>
        <ul>
            <li class="des">所有主流浏览器都支持 <mark class="marksec">&lt;address></mark> 标签。</li>
        </ul>
        <h2><mark>&lt;address></mark>属性：</h2>
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