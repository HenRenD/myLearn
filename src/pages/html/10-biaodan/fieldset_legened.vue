<template>
    <div class="fieldset_legenedtag">
        <h2><mark>fieldset / legend</mark>标签：</h2>
        <ul>
            <li class="des"><mark class="marksec">fieldset</mark> 标签可以将表单内的相关元素分组</li>
            <li class="des"><mark class="marksec">fieldset</mark> 标签会在相关表单元素周围绘制边框</li>
            <li class="des"><mark class="marksec">legend</mark>标签为分组定义标题</li>
        </ul>
        <h2><mark>fieldset / legend</mark>实例：</h2>
        <pre class="contentarea" v-highlight><code>         &lt;form>
                    &lt;fieldset>
                        &lt;legend>标题&lt;/legend>
                        Name: &lt;input type="text">&lt;br>
                        Email: &lt;input type="text">&lt;br>
                        Date of birth: &lt;input type="text">
                    &lt;/fieldset>
            &lt;/form></code></pre>
        <h2><mark>fieldset / legend</mark>浏览器支持：</h2>
        <ul>
            <li class="des">大多数主流浏览器都支持<mark class="marksec">fieldset / legend</mark></li>
        </ul>
        <h2><mark>fieldset</mark>属性：</h2>
        <ul>
            <li class="des"><mark>disabled</mark>(H5)： disabled ，规定该组中的相关表单元素应该被禁用</li>
            <li class="des"><mark>form</mark>(H5)： form_id ，规定 fieldset 所属的一个或多个表单</li>
            <li class="des"><mark>name</mark>(H5)： text ，规定 fieldset 的名称</li>
            <li class="des">支持全局属性</li>
        </ul>
        <h2><mark>legend</mark>属性：</h2>
        <ul>
            <li class="des">支持全局属性，其余属性H5已经不再支持</li>
        </ul>
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>