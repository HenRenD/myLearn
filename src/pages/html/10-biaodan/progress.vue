<template>
    <div class="progresstag">
        <h2><mark>progress</mark>标签：</h2>
        <ul>
            <li class="des">定义运行中的任务进度（进程）</li>
            <li class="des">请将 <mark class="marksec">progress</mark> 标签与 JavaScript 一起使用来显示任务的进度</li>
            <li class="des"><mark class="marksec">progress</mark> 标签不适合用来表示度量衡（例如，磁盘空间使用情况或相关的查询结果）</li>
            <li class="des">表示度量衡，请使用 <mark class="marksec">meter</mark>标签代替</li>
        </ul>
        <h2><mark>progress</mark>实例：</h2>
        <pre class="contentarea" v-highlight><code>        &lt;progress value="22" max="100">&lt;/progress></code></pre>
        <h2><mark>progress</mark>浏览器支持：</h2>
        <ul>
            <li class="des">IE 9 或者更早版本的 IE 浏览器不支持 <mark class="marksec">progress</mark> 标签</li>
        </ul>
        <h2><mark>progress</mark>属性：</h2>
        <ul>
            <li class="des"><mark>max</mark>(H5)：number，规定总进度值</li>
            <li class="des"><mark>value</mark>(H5)：number，规定当前进度值</li>
            <li class="des">支持全局属性</li>
        </ul>
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>