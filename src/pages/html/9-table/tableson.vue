<template>
    <div class="tablesongtag">
        <h2>table的子标签：</h2>
        <table>
            <thead>
                <tr>
                    <td class="tdfirst">标签</td>
                    <td width="40%">说明</td>
                    <td>浏览器支持</td>
                    <td>属性</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><mark>caption</mark></td>
                    <td>定义表格的标题<br>标签应该直接放到table之后，thead之前<br>一个表格只能有一个caption</td>
                    <td>所有主流浏览器都支持</td>
                    <td>支持全局属性，H5不再支持其他属性</td>
                </tr>
                <tr>
                    <td><mark>thead</mark></td>
                    <td>定义表格的表头区域<br>需要与tbody，tfoot标签配合使用<br>出现在tbody和tfoot之前</td>
                    <td>所有主流浏览器都支持</td>
                    <td>支持全局属性，H5不再支持其他属性</td>
                </tr>
                <tr>
                    <td><mark>tbody</mark></td>
                    <td>定义表格的主体区域<br>需要与thead，tfoot标签配合使用</td>
                    <td>所有主流浏览器都支持</td>
                    <td>支持全局属性，H5不再支持其他属性</td>
                </tr>
                <tr>
                    <td><mark>tfoot</mark></td>
                    <td>定义表格的页脚区域<br>需要与tbody，tfoot标签配合使用<br>出现在tbody之前，thead之后</td>
                    <td>所有主流浏览器都支持</td>
                    <td>支持全局属性，H5不再支持其他属性</td>
                </tr>
                <tr>
                    <td><mark>tr</mark></td>
                    <td>定义表格的行<br>一个tr可以包含一个或多个th或td</td>
                    <td>所有主流浏览器都支持</td>
                    <td>支持全局属性，H5不再支持其他属性</td>
                </tr>
                <tr>
                    <td><mark>th</mark></td>
                    <td>定义表头区域中的单元格</td>
                    <td>所有主流浏览器都支持</td>
                    <td>支持全局属性<br><mark class="marksec">colspan</mark>：跨列合并单元格<br><mark class="marksec">rowspan</mark>：跨行合并单元格<br>其他属性H5已经不再支持</td>
                </tr>
                <tr>
                    <td><mark>td</mark></td>
                    <td>定义非表头区域中的单元格</td>
                    <td>所有主流浏览器都支持</td>
                    <td>支持全局属性<br><mark class="marksec">colspan</mark>：跨列合并单元格<br><mark class="marksec">rowspan</mark>：跨行合并单元格<br>其他属性H5已经不再支持</td>
                </tr>
                <tr>
                    <td><mark>col</mark></td>
                    <td>规定了colgroup元素内部的每一列的列属性。</td>
                    <td>所有主流浏览器都支持</td>
                    <td>支持全局属性<br><mark class="marksec">span</mark>：表示应该横跨的列数<br>H5不再支持其他属性</td>
                </tr>
                <tr>
                    <td><mark>colgroup</mark></td>
                    <td>用于对表格中的列进行组合，以便对其进行格式化。<br>可以向整个列应用样式，而不需要重复为每个单元格或每一行设置样式<br>只能在 table 元素之内，在caption 元素之后，在任何一个 thead、tbody、tfoot、tr 元素之前使用</td>
                    <td>所有主流浏览器都支持</td>
                    <td>支持全局属性<br><mark class="marksec">span</mark>：表示应该横跨的列数<br>H5不再支持其他属性</td>
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