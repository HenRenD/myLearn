<template>
    <div class="selecttag">
        <h2><mark>select</mark>标签：</h2>
        <ul>
            <li class="des">定义下拉列表</li>
        </ul>
        <h2><mark>select</mark>实例：</h2>
        <pre class="contentarea" v-highlight><code>        //定义一个下拉框
            &lt;select>
                        &lt;option value="volvo">Volvo&lt;/option>
                        &lt;option value="saab">Saab&lt;/option>
                        &lt;option value="opel">Opel&lt;/option>
                        &lt;option value="audi">Audi&lt;/option>
            &lt;/select></code></pre>
        <h2><mark>select</mark>浏览器支持：</h2>
        <ul>
            <li class="des">所有主流浏览器支持 <mark class="marksec">select</mark> 标签</li>
        </ul>
        <h2><mark>select</mark>属性(H4)：</h2>
        <table>
            <thead>
                <tr>
                    <td class="tdfirst">属性</td>
                    <td>值</td>
                    <td>描述</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><mark>disabled</mark></td>
                    <td>disabled</td>
                    <td>禁用下拉列表</td>
                </tr>
                <tr>
                    <td><mark>multiple</mark></td>
                    <td>multiple</td>
                    <td>可选择多个选项</td>
                </tr>
                <tr>
                    <td><mark>name</mark></td>
                    <td>text,文本</td>
                    <td>定义下拉列表的名称</td>
                </tr>
                <tr>
                    <td><mark>size</mark></td>
                    <td>number,数字</td>
                    <td>规定下拉列表可见选项的数目</td>
                </tr>
                <tr>
                    <td colspan="3">支持全局属性</td>
                </tr>
            </tbody>
        </table>
        <h2><mark>select</mark>属性(H5新增)：</h2>
        <table>
            <thead>
                <tr>
                    <td class="tdfirst">属性</td>
                    <td>值</td>
                    <td>描述</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><mark>autofocus</mark></td>
                    <td>autofocus</td>
                    <td>规定页面加载时下拉列表自动获取焦点</td>
                </tr>
                <tr>
                    <td><mark>form</mark></td>
                    <td>form_id,表单id</td>
                    <td>定义select所属的一个或多个表单</td>
                </tr>
                <tr>
                    <td><mark>required</mark></td>
                    <td>required</td>
                    <td>规定用户在提交表单前必须选择一个下拉列表项</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>