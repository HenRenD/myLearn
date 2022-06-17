<template>
    <div class="tabletag">
        <h2><mark>table</mark>标签：</h2>
        <ul>
            <li class="des">用于定义表格，类似于excel表格功能</li>
        </ul>
        <h2><mark>table</mark>实例：</h2>
        <pre class="contentarea" v-highlight><code>     &lt;table border="1">
                    &lt;caption>表格标题&lt;/caption>
                    &lt;colgroup>
                        &lt;col span="2" style="background-color:red">
                        &lt;col style="background-color:yellow">
                    &lt;/colgroup>
                    &lt;thead>
                            &lt;tr>
                                &lt;th>1&lt;/th>
                                &lt;th>1&lt;/th>
                            &lt;/tr>
                    &lt;/thead>
                    &lt;tbody>
                            &lt;tr>
                                &lt;td>1&lt;/td>
                                &lt;td>1&lt;/td>
                            &lt;/tr>
                    &lt;/tbody>
                    &lt;tfoot>
                            &lt;tr>
                                &lt;td>1&lt;/td>
                                &lt;td>1&lt;/td>
                            &lt;/tr>
                    &lt;/tfoot>
        &lt;/table></code></pre>
        <h2><mark>table</mark>浏览器支持：</h2>
        <ul>
            <li class="des">所有主流浏览器都支持<mark class="marksec">table</mark>标签</li>
        </ul>
        <h2><mark>table</mark>属性：</h2>
        <ul>
            <li class="des"><mark>border</mark>：设置表格的表框，其余的一些属性H5已经不再支持，一般通过css设置</li>
            <li class="des">支持全局属性</li>
        </ul>
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>