<template>
    <div class="formtag">
        <h2><mark>form</mark>标签：</h2>
        <ul>
            <li class="des">
                包含表单元素的区域
            </li>
            <li class="des">
                实现用户信息的收集和传递
            </li>
            <li class="des">
                会把表单范围内的表单元素信息提交给服务器
            </li>
        </ul>
        <h2><mark>form</mark>实例：</h2>
        <pre class="contentarea" v-highlight><code>        &lt;form action="?" method="post">
                        First name: &lt;input type="text" name="fname">&lt;br>
                        Last name: &lt;input type="text" name="lname">&lt;br>
                        &lt;input type="submit" value="提交">
            &lt;/form></code></pre>
        <h2><mark>form</mark>浏览器支持：</h2>
        <ul>
            <li class="des">所有主流浏览器都支持 <mark class="marksec">form</mark> 标签。</li>
        </ul>
        <h2><mark>form</mark>属性：</h2>
        <table>
            <thead>
                <tr>
                    <td>属性</td>
                    <td class="tdsecond">值</td>
                    <td>描述</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><mark>accept-charset</mark></td>
                    <td>例如：uft-8</td>
                    <td>规定服务器可处理的表单数据字符集</td>
                </tr>
                <tr>
                    <td><mark>action</mark></td>
                    <td>url地址</td>
                    <td>规定当提交表单时向何处发送表单数据</td>
                </tr>
                <tr>
                    <td><mark>enctype</mark></td>
                    <td>application/x-www-form-urlencoded<br>multipart/form-data</td>
                    <td>规定在向服务器发送表单数据之前如何对其进行编码</td>
                </tr>
                <tr>
                    <td><mark>method</mark></td>
                    <td>get <br>post</td>
                    <td>规定用于发送表单数据的 HTTP 方法</td>
                </tr>
                <tr>
                    <td><mark>name</mark></td>
                    <td>text</td>
                    <td>规定表单的名称</td>
                </tr>
                <tr>
                    <td><mark>target</mark></td>
                    <td> _blank
                        <br>_self
                        <br>_parent
                        <br>_top
                    </td>
                    <td>规定在何处打开 action URL。</td>
                </tr>
                <tr>
                    <td><mark>autocomplete</mark>(H5)</td>
                    <td>on
                        <br>off
                    </td>
                    <td>规定是否启用表单的自动完成功能</td>
                </tr>
                <tr>
                    <td><mark>novalidate</mark>(H5)</td>
                    <td>novalidate</td>
                    <td>如果使用该属性，则提交表单时不进行验证。</td>
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