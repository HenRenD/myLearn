<template>
    <div class="optiontag">
        <h2><mark>option</mark>标签：</h2>
        <ul>
            <li class="des">定义下拉列表中的一个选项（一个条目）</li>
            <li class="des"><mark class="marksec">option</mark>
                标签中的内容作为 <mark class="marksec">select</mark>
                或者 <mark class="marksec">datalist</mark> 一个元素使用</li>
        </ul>
        <h2><mark>option</mark>实例：</h2>
        <pre class="contentarea" v-highlight><code>        //定义一个下拉框
            &lt;select>
                        &lt;option value="volvo">Volvo&lt;/option>
                        &lt;option value="saab">Saab&lt;/option>
                        &lt;option value="opel">Opel&lt;/option>
                        &lt;option value="audi">Audi&lt;/option>
            &lt;/select></code></pre>
        <h2><mark>option</mark>浏览器支持：</h2>
        <ul>
            <li class="des">大多数主流浏览器支持 <mark class="marksec">option</mark> 标签</li>
        </ul>
        <h2><mark>option</mark>属性：</h2>
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
                    <td>规定此选项应在首次加载时被禁用</td>
                </tr>
                <tr>
                    <td><mark>selected</mark></td>
                    <td>selected</td>
                    <td>规定选项（在首次显示在列表中时）表现为选中状态</td>
                </tr>
                <tr>
                    <td><mark>value</mark></td>
                    <td>text,文本</td>
                    <td>定义送往服务器的选项值</td>
                </tr>
                <tr>
                    <td colspan="3">支持全局属性</td>
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