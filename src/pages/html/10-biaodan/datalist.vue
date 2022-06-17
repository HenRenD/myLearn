<template>
    <div class="datalisttag">
        <h2><mark>datalist</mark>标签：</h2>
        <ul>
            <li class="des"><mark class="marksec">datalist</mark> 标签规定了 <mark class="marksec">input</mark> 元素可能的选项列表</li>
            <li class="des"><mark class="marksec">datalist</mark> 标签被用来在为 <mark class="marksec">input</mark> 元素提供"自动完成"的特性</li>
            <li class="des">用户能看到一个下拉列表，里边的选项是预先定义好的，将作为用户的输入数据</li>
            <li class="des">请使用 <mark class="marksec">input</mark> 元素的 <mark class="marksec">list</mark> 属性来绑定 <mark class="marksec">datalist</mark> 元素</li>
        </ul>
        <h2><mark>datalist</mark>实例：</h2>
        <pre class="contentarea" v-highlight><code>        &lt;input list="browsers">
            &lt;datalist id="browsers">
                    &lt;option value="Internet Explorer">
                    &lt;option value="Firefox">
                    &lt;option value="Chrome">
                    &lt;option value="Opera">
                    &lt;option value="Safari">
            &lt;/datalist></code></pre>
        <h2><mark>datalist</mark>浏览器支持：</h2>
        <ul>
            <li class="des">IE 9 和更早版本的 IE 浏览器 以及 Safari 不支持 <mark class="marksec">datalist</mark> 标签</li>
        </ul>
        <h2><mark>datalist</mark>属性：</h2>
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