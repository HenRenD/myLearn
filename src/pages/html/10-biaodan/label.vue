<template>
    <div class="labeltag">
        <h2><mark>label</mark>标签：</h2>
        <ul>
            <li class="des">为 input 元素定义标注（标记）
            </li>
            <li class="des"> label 元素不会向用户呈现任何特殊效果，知识优化了用户体验
            </li>
            <li class="des">当用户选择该标签时，浏览器就会自动将焦点转到和标签相关的表单控件上</li>
        </ul>
        <h2><mark>label</mark>实例：</h2>
        <pre class="contentarea" v-highlight><code>        //label的for属性应该与相关控件的id属性绑定
            &lt;form action="?">
                    &lt;label for="male">Male&lt;/label>
                    &lt;input type="radio" name="sex" id="male" value="male">
                    &lt;label for="female">Female&lt;/label>
                    &lt;input type="radio" name="sex" id="female" value="female">
                    &lt;input type="submit" value="提交">
            &lt;/form></code></pre>
        <h2><mark>label</mark>浏览器支持：</h2>
        <ul>
            <li class="des">大多数浏览器都支持<mark class="marksec">label</mark>标签</li>
        </ul>
        <h2><mark>label</mark>属性：</h2>
        <ul>
            <li class="des"><mark>for</mark>(H5)：相关控件的id值，规定label与哪一个表单元素绑定</li>
            <li class="des"><mark>form</mark>(H5)：表单id，规定label属于哪一个表单</li>
            <li class="des">支持全局属性</li>
        </ul>
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>