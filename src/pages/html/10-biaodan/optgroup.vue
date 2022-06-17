<template>
    <div class="optgrouptag">
        <h2><mark>optgroup</mark>标签：</h2>
        <ul>
            <li class="des">定义分组的下拉列表</li>
        </ul>
        <h2><mark>optgroup</mark>实例：</h2>
        <pre class="contentarea" v-highlight><code>        //定义一个分组的下拉框
            &lt;select>
                    &lt;optgroup label="Swedish Cars">
                            &lt;option value="volvo">Volvo&lt;/option>
                            &lt;option value="saab">Saab&lt;/option>
                    &lt;/optgroup>
                    &lt;optgroup label="German Cars">
                            &lt;option value="mercedes">Mercedes&lt;/option>
                            &lt;option value="audi">Audi&lt;/option>
                    &lt;/optgroup>
            &lt;/select></code></pre>
        <h2><mark>optgroup</mark>浏览器支持：</h2>
        <ul>
            <li class="des">大多数主流浏览器支持 <mark class="marksec">optgroup</mark> 标签</li>
        </ul>
        <h2><mark>optgroup</mark>属性：</h2>
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
                    <td>禁用该选项组</td>
                </tr>
                <tr>
                    <td><mark>label</mark></td>
                    <td>text,文本</td>
                    <td>为选项组规定描述</td>
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