<template>
    <div class="cssjianjie">
        <h2><mark>CSS</mark>简介：</h2>
        <ul>
            <li class="des"><mark class="marksec">CSS</mark> 是层叠样式表<mark class="marksec">Cascading Style Sheets</mark>的简称</li>
            <li class="des">也是一种标记语言，由选择器和声明块组成</li>
            <li class="des">用来设置页面中元素的样式。背景颜色、字体颜色、字体大小等</li>
        </ul>
        <h2><mark>CSS</mark>实例：</h2>
        <pre class="contentarea" v-highlight><code>body {
            width: 200px;
            height: 200px;
            background-color: tomato;
            font-size: 20px;
            color: red;
        }</code></pre>
        <h2><mark>CSS</mark>编写位置：</h2>
        <table>
            <thead>
                <tr>
                    <td class="tdfirst"></td>
                    <td>描述</td>
                    <td width='45%'>实例</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>内联样式</td>
                    <td>将样式编写到标签的style属性中
                        <br>这种样式只会对当前标签起作用，不能对样式进行复用
                        <br>不方便后期维护，不推荐使用
                    </td>
                    <td>
                        <mark class="markdes">
                            &lt;p style="color:red;">&lt;/p>
                        </mark>
                    </td>
                </tr>
                <tr>
                    <td>内部样式</td>
                    <td>将样式表编写到head中的style标签中
                        <br>进一步将表现和结构分离，可以同时为多个元素设置样式
                        <br>一般学习时使用
                    </td>
                    <td>
                        <mark class="markdes">
                            &lt;style type="text/css">&lt;/style>
                        </mark>
                    </td>
                </tr>
                <tr>
                    <td><mark>外部样式</mark></td>
                    <td>样式表编写到外部的CSS文件中，通过link标签引入
                        <br>可以在不同的页面中使用同一个样式表
                        <br>完全将表现和结构分离，方便后期的维护，推荐使用的方式
                    </td>
                    <td>
                        <mark class="markdes">&lt;link rel="stylesheet" type="text/css" href="index.css"/></mark>
                    </td>
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