<template>
    <div class="outputtag">
        <h2><mark>output</mark>标签：</h2>
        <ul>
            <li class="des">作为计算结果输出显示（比如执行脚本的输出）</li>
        </ul>
        <h2><mark>output</mark>实例：</h2>
        <pre class="contentarea" v-highlight><code>        &lt;form oninput="x.value=parseInt(a.value)+parseInt(b.value)">
                    &lt;input type="number" id="a" value="50">
                    +&lt;input type="number" id="b" value="50">
                    =&lt;output name="x" for="a b">&lt;/output>
            &lt;/form></code></pre>
        <h2><mark>output</mark>浏览器支持：</h2>
        <ul>
            <li class="des">Internet Explorer 浏览器不支持 <mark class="marksec">output</mark> 标签</li>
        </ul>
        <h2><mark>output</mark>属性：</h2>
        <ul>
            <li class="des"><mark>for</mark>(H5)：元素id，描述计算中所使用的元素与计算结果之间的关系</li>
            <li class="des"><mark>form</mark>(H5)：表单id，定义输入字段所属的一个或多个表单</li>
            <li class="des"><mark>name</mark>(H5)：字符串，定义对象的唯一名称</li>
            <li class="des">支持全局属性</li>
        </ul>
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>