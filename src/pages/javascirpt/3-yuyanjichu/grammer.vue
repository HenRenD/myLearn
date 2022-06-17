<template>
    <div class="grammer">
        <h2><mark>语法</mark>：</h2>
        <table>
            <thead>
                <tr>
                    <td width='20%'>选项</td>
                    <td>描述</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><mark class="marksec">区分大小写</mark></td>
                    <td>ECMAScript 中一切都区分大小写</td>
                </tr>
                <tr>
                    <td><mark class="marksec">标识符</mark></td>
                    <td>标识符：是变量，函数，属性，函数参数的名称
                        <br>字母，数字，下划线和美元符号$
                        <br>不能以数字开头
                        <br>不能是关键字，保留字
                        <br>建议采用驼峰式命名
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">注释</mark></td>
                    <td>单行注释：//
                        <br>多行注释：/*..............*/
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">严格模式</mark></td>
                    <td>ES5引入的严格模式：目的是不破坏 ECMAScript 3 语法
                        <br>严格模式：一种不同的js解析和执行模型，不规范写法在这种模式下会被处理，不安全的活动将抛出错误
                        <br>开启方式：<mark class="marksec">"use strict";</mark>是一个预处理指令
                        <br>开启位置：
                        <br>整个脚本启用严格模式，在脚本开头加上该指令
                        <br>指定函数在严格模式下执行，把指令放到函数体开头
                        <br>所有现代浏览器都支持严格模式。
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">语句</mark></td>
                    <td>ECMAScript 中的语句以分号结尾
                        <br>不强制分号，但是最好加，有助于防止省略造成的问题
                        <br>便于通过删除空行来压缩代码，有助于在某些情况下提升性能
                        <br>始终在控制语句中使用代码块，即使只有一条语句<br>
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