<template>
    <div class="buttontag">
        <h2><mark>button</mark>标签：</h2>
        <ul>
            <li class="des">定义一个按钮，标签的内部可以填入文本内容或者图片</li>
        </ul>
        <h2><mark>button</mark>实例：</h2>
        <pre class="contentarea" v-highlight><code>     &lt;button type="button">点我!&lt;/button></code></pre>
        <h2><mark>button</mark>浏览器支持：</h2>
        <ul>
            <li class="des">所有主流浏览器都支持 <mark class="marksec">button</mark> 标签。</li>
        </ul>
        <h2><mark>button</mark>属性(H4)：</h2>
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
                    <td><mark>type</mark></td>
                    <td>button
                        <br>reset
                        <br>submit
                    </td>
                    <td>规定按钮的类型</td>
                </tr>
                <tr>
                    <td><mark>disabled</mark></td>
                    <td>disabled</td>
                    <td>禁用按钮</td>
                </tr>
                <tr>
                    <td><mark>name</mark></td>
                    <td>text字符串</td>
                    <td>为按钮指定名称</td>
                </tr>
                <tr>
                    <td><mark>value</mark></td>
                    <td>value值</td>
                    <td>规定按钮的初始值</td>
                </tr>
            </tbody>
        </table>
        <h2><mark>button</mark>属性(H5新增)：</h2>
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
                    <td><mark>form</mark></td>
                    <td>表单的id</td>
                    <td>规定当前按钮属于哪一个表单</td>
                </tr>
                <tr>
                    <td><mark>autofocus</mark></td>
                    <td>autofocus</td>
                    <td>表示页面加载时按钮应该自动获取焦点</td>
                </tr>
                <tr>
                    <td><mark>formaction</mark></td>
                    <td>url地址</td>
                    <td>规定当提交表单时向何处发送表单数据，覆盖 form 元素的 action 属性<br><mark class="marksec">当type=submit时可用</mark></td>
                </tr>
                <tr>
                    <td><mark>formenctype</mark></td>
                    <td>application/x-www-form-urlencoded
                        <br>multipart/form-data
                        <br>text/plain
                    </td>
                    <td>规定在向服务器发送表单数据之前如何对其进行编码，覆盖 form 元素的 enctype 属性<br><mark class="marksec">当type=submit时可用</mark></td>
                </tr>
                <tr>
                    <td><mark>formmethod</mark></td>
                    <td>get
                        <br>post
                    </td>
                    <td>规定用于发送表单数据的 HTTP 方法，覆盖 form 元素的 method 属性<br><mark class="marksec">当type=submit时可用</mark></td>
                </tr>
                <tr>
                    <td><mark>formnovalidate</mark></td>
                    <td>formnovalidate</td>
                    <td>如果使用该属性，则提交表单时不进行验证，覆盖 form 元素的 novalidate 属性<br><mark class="marksec">当type=submit时可用</mark></td>
                </tr>
                <tr>
                    <td><mark>formtarget</mark></td>
                    <td>_blank
                        <br>_self
                        <br>_parent
                        <br>_top
                    </td>
                    <td>规定在何处打开 action URL，覆盖 form 元素的 target 属性<br><mark class="marksec">当type=submit时可用</mark></td>
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