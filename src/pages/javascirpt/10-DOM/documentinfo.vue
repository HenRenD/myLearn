<template>
    <div class="documentinfo">
        <h2><mark>知识点</mark>：</h2>
        <ul>
            <li class="des"><mark class="marksec">document.documentElement</mark></li>
            <li class="des"><mark class="marksec">document.head</mark></li>
            <li class="des"><mark class="marksec">document.body</mark></li>
            <li class="des"><mark class="marksec">document.doctype</mark></li>
            <li class="des"><mark class="marksec">document.referrer</mark></li>
            <li class="des"><mark class="marksec">document.title</mark></li>
            <li class="des"><mark class="marksec">document.URL</mark></li>
            <li class="des"><mark class="marksec">document.domain</mark></li>
            <li class="des"><mark class="marksec">document.activeElement</mark></li>
            <li class="des"><mark class="marksec">document.hasFocus()</mark></li>
            <li class="des"><mark class="marksec">document.readState</mark></li>
            <li class="des"><mark class="marksec">document.compatMode</mark></li>
        </ul>
        <h2><mark>页面信息</mark>：</h2>
        <table>
            <thead>
                <tr>
                    <td width='15%'>选项</td>
                    <td width='30%'>描述</td>
                    <td>实例</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><mark class="marksec">document.documentElement</mark></td>
                    <td>获取html元素</td>
                    <td rowspan="12">
                        <pre class="contentarea" v-highlight><code>    console.log(document.documentElement)       // &lt;html lang="en">
        console.log(document.head)      // &lt;head>
        console.log(document.body)      // &lt;body>
        console.log(document.doctype)       // &lt;!DOCTYPE html>
        console.log(document.referrer)      // &lt;empty string>
        console.log(document.title)      // Document
        console.log(document.URL)       
        // file:///e:/DeskTop/mylearn_/test.html
        console.log(document.domain)        // &lt;empty string>
        console.log(document.activeElement)     // &lt;body>
        console.log(document.hasFocus())        // false
        console.log(document.readyState)        // loading
        console.log(document.compatMode)        // CSS1Compat</code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">document.head</mark></td>
                    <td>获取head元素</td>
                </tr>
                <tr>
                    <td><mark class="marksec">document.body</mark></td>
                    <td>获取body元素</td>
                </tr>
                <tr>
                    <td><mark class="marksec">document.doctype</mark></td>
                    <td>获取文档声明</td>
                </tr>
                <tr>
                    <td><mark class="marksec">document.title</mark></td>
                    <td>页面的标题</td>
                </tr>
                <tr>
                    <td><mark class="marksec">document.URL</mark></td>
                    <td>页面的URL
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">document.domain</mark></td>
                    <td>页面的域名</td>
                </tr>
                <tr>
                    <td><mark class="marksec">document.referrer</mark></td>
                    <td>页面的来源，如果没有返回空字符串</td>
                </tr>
                <tr>
                    <td><mark class="marksec">document.activeElement</mark></td>
                    <td>始终包含当前拥有焦点的元素
                        <br>值：在页面完全加载之前为null，加载之后为document.body
                        <br>可以用来查询文档，确定那个元素获得了焦点
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">document.hasFocus()</mark></td>
                    <td>返回布尔值，表示文档是否拥有焦点
                        <br>可以查询文档是否获得了焦点
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">document.readState</mark></td>
                    <td>两个值：
                        <br>loading：文档正在加载
                        <br>complete：文档加载完成
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">document.compatMode</mark></td>
                    <td>检测浏览器的渲染模式
                        <br>值为：
                        <br>CSS1Compat：标准模式
                        <br>BackCompat：混杂模式
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