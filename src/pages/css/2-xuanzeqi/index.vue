<template>
    <div class="selector">
        <h2><mark>选择器</mark>：</h2>
        <table>
            <thead>
                <tr>
                    <td>类型</td>
                    <td>选择器</td>
                    <td>描述</td>
                    <td class="tdfirst">权重</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td rowspan="5">基础选择器</td>
                </tr>
                <tr>
                    <td>id选择器</td>
                    <td>根据元素的id属性值选中一个唯一的元素，一般和js搭配使用
                        <br>语法：<mark class="marksec">#id {}</mark>
                    </td>
                    <td>100</td>
                </tr>
                <tr>
                    <td>类选择器</td>
                    <td>根据元素的class属性值，选中一组元素
                        <br>语法：<mark class="marksec">.class{}</mark>
                    </td>
                    <td>10</td>
                </tr>
                <tr>
                    <td>元素选择器</td>
                    <td>根据标签名，选中页面中的指定元素
                        <br>语法：<mark class="marksec">标签名{}</mark>
                    </td>
                    <td>1</td>
                </tr>
                <tr>
                    <td>通配选择器</td>
                    <td>选中页面中的所有元素，特殊情况使用
                        <br>语法：<mark class="marksec">*{}</mark>
                        <br>通配选择器的性能比较差，尽量避免使用
                    </td>
                    <td>0</td>
                </tr>
                <tr>
                    <td rowspan="6">复合选择器</td>
                </tr>
                <tr>
                    <td>并集选择器</td>
                    <td>可以同时选中符合多个选择器的元素
                        <br>语法：<mark class="marksec">选择器1,选择器2,选择器N{}</mark>
                    </td>
                    <td>相应基础选择器权重</td>
                </tr>
                <tr>
                    <td>交集选择器</td>
                    <td>可以选中满足多个条件的元素
                        <br>语法：<mark class="marksec">选择器1选择器2选择器N{}</mark>
                    </td>
                    <td>基础选择器权重相加</td>
                </tr>
                <tr>
                    <td>后代选择器</td>
                    <td>选中指定元素的指定后代元素
                        <br>语法：<mark class="marksec">祖先元素 后代元素{}</mark>
                    </td>
                    <td>基础选择器权重相加</td>
                </tr>
                <tr>
                    <td>子元素选择器</td>
                    <td>选中父元素指定的所有子元素
                        <br>语法：<mark class="marksec">父元素 > 子元素 {}</mark>
                    </td>
                    <td>基础选择器权重相加</td>
                </tr>
                <tr>
                    <td>兄弟选择器</td>
                    <td>语法：<mark class="marksec">当前元素+兄弟元素</mark>
                        <br>选择后面指定的最近一级的一个兄弟元素
                        <br>语法：<mark class="marksec">当前元素~兄弟元素</mark>
                        <br>选取后面指定的所有的兄弟元素
                    </td>
                    <td>基础选择器权重相加</td>
                </tr>
                <tr>
                    <td rowspan="6">属性选择器(css3)</td>
                </tr>
                <tr>
                    <td><mark class="marksec">tagName[属性名]</mark></td>
                    <td>选取含有指定属性的元素
                    </td>
                    <td>10</td>
                </tr>
                <tr>
                    <td><mark class="marksec">tagName[属性名="属性值"]</mark></td>
                    <td>选取属性值等于指定值的元素
                    </td>
                    <td>10</td>
                </tr>
                <tr>
                    <td><mark class="marksec">tagName[属性名^="属性值"]</mark></td>
                    <td>选取属性值以指定内容开头的元素
                    </td>
                    <td>10</td>
                </tr>
                <tr>
                    <td><mark class="marksec">tagName[属性名$="属性值"]</mark></td>
                    <td>选取属性值以指定内容结尾的元素
                    </td>
                    <td>10</td>
                </tr>
                <tr>
                    <td><mark class="marksec">tagName[属性名*="属性值"]</mark></td>
                    <td>选取属性值中包含指定内容的元素
                    </td>
                    <td>10</td>
                </tr>
            </tbody>
        </table>
        <ul>
            <li class="des"><mark class="markdes">!importat的权重最高，内联样式的权重为1000</mark></li>
            <li class="des"><mark class="markdes">浏览器在解析一组选择器时，是从后边往前一个一个的解析的
                    如果选择器编写过于长的话，浏览器解析起来性能会比较差，所以在编写选择器时，越短越好。
                </mark></li>
            <li class="des">
                <mark class="markdes">*通配选择器，性能也比较差，要避免使用通配选择器</mark>
            </li>
        </ul>
        <h2><mark>声明块</mark>：</h2>
        <ul>
            <li class="des">声明块中实际上就是一个一个CSS声明</li>
            <li class="des">每一个CSS声明都是一个样式，实际上就是一个名值对的结构</li>
            <li class="des">名和值之间使用“ : ”链接</li>
            <li class="des">“ : ”左边是样式的名字</li>
            <li class="des">“ : ”右边是样式的值</li>
            <li class="des">每一个声明以“ ; ”结尾</li>
        </ul>
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>