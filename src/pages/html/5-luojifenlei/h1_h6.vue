<template>
    <div class="htag">
        <h2><mark>&lt;h1~h6></mark>标签：</h2>
        <ul>
            <li class="des">标题标签</li>
            <li class="des"> html中一共有6级标题，代表了重要性</li>
            <li class="des"><mark class="marksec">h1标题的重要性仅次于title标签，会影响网页的SEO</mark>，一般来说一个页面只能写一个h1标题</li>
            <li class="des"> 不要为了减小标题的字体而使用低级别的标题， 而是使用 CSS font-size 属性。
            </li>
            <li class="des"> <mark class="marksec">避免跳过某级标题</mark>：始终要从 &lt;h1> 开始，接下来依次使用 &lt;h2> 等等。
            </li>
            <li class="des"> 使用 &lt;section> 元素时，为了方便起见，你应该避免在同一个页面上重复使用 &lt;h1>
            </li>
            <li class="des"> &lt;h1> 应被用于表示页面的标题，其他的标题当从 &lt;h2> 开始。
            </li>
        </ul>
        <h2><mark>&lt;h1~h6></mark>实例：</h2>
        <pre class="contentarea" v-highlight><code>        &lt;h1>h1&lt;/h1>
            &lt;h2>这是标题 2&lt;/h2>
            &lt;h3>这是标题 3&lt;/h3>
            &lt;h4>这是标题 4&lt;/h4>
            &lt;h5>这是标题 5&lt;/h5>
            &lt;h6>这是标题 6&lt;/h6></code></pre>
        <h2><mark>&lt;h1~h6></mark>浏览器支持：</h2>
        <ul>
            <li class="des">所有主流浏览器都支持 <mark class="marksec">&lt;h1> - &lt;h6></mark> 标签。</li>
        </ul>
        <h2><mark>&lt;h1~h6></mark>属性：</h2>
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