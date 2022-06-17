<template>
    <div class="linktag">
        <!-- link标签 -->
        <h2><mark>&lt;link></mark>标签：</h2>
        <ul>
            <li class="des">规定了当前文档与外部资源的关系</li>
            <li class="des">常用功能：链接样式表，创建站点图标favicon，预加载</li>
        </ul>
        <h2><mark>&lt;link></mark>实例：</h2>
        <pre class="contentarea" v-highlight><code>        &lt;head>
                    &lt;link rel="stylesheet" type="text/css" href="theme.css">
            &lt;/head></code></pre>
        <h2><mark>&lt;link></mark>浏览器支持：</h2>
        <ul>
            <li class="des">所有主流浏览器都支持 <mark class="marksec">&lt;link></mark> 标签。</li>
        </ul>
        <h2><mark>&lt;link></mark>属性：</h2>
        <table>
            <thead>
                <tr>
                    <td class="tdfirst">属性</td>
                    <td class="tdsecond">可选值</td>
                    <td>实例</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="tdfirst" rowspan="3"><mark>ref</mark></td>
                    <td class="tdsecond"><mark class="marksec">stylesheet</mark>：链接样式表</td>
                    <td><mark class="markdes">&lt;link href="main.css" rel="stylesheet"></mark></td>
                </tr>
                <tr>
                    <td class="tdsecond"><mark class="marksec">icon</mark>：创建站点图标</td>
                    <td><mark class="markdes">&lt;link rel="icon" type="image/png" href="myicon.png"></mark></td>
                </tr>
                <tr>
                    <td class="tdsecond">预加载：用于前端界面性能优化，rel 的属性值可以为<mark class="marksec">preload、prefetch、dns-prefetch</mark>。
                        <br>1，preload：控制当前界面的资源下载优先级，浏览器必须下载资源。
                        <br>2，prefetch：用户在使用当前界面时，浏览器空闲时先把下个界面要使用的资源下载到本地缓存，浏览器下不下载不可知。
                        <br>3，dns-prefetch：先把要跳转的域名解析，减少时间。
                        <br>4，prefetch & preload 对比：
                        <br>关注的页面不同： prefetch 关注要使用的页面，preload 关注当前页面
                        <br>资源是否下载：prefetch 的资源下载情况未知（只在浏览器空闲时会下载），preload 肯定下载
                    </td>
                    <td>
                        <mark class="markdes">&lt;link rel="preload" href="https://example.com/fonts/font.woff" as="font"></mark>
                        <br><mark class="markdes">&lt;link rel="prefetch" href="/uploads/images/pic.png"></mark>
                        <br><mark class="markdes">&lt;link rel="dns-prefetch" href="//fonts.googleapis.com"></mark>
                    </td>
                </tr>
                <tr>
                    <td class="tdfirst"><mark>href</mark></td>
                    <td colspan="2">外部资源路径</td>
                </tr>
                <tr>
                    <td class="tdfitst"><mark>media</mark></td>
                    <td class="tdsecond">媒体查询，规定被链接文档将显示在什么设备上</td>
                    <td>
                        <mark class="markdes">&lt;link rel="stylesheet" type="text/css" href="theme.css" /></mark>
                        <br><mark class="markdes">&lt;link rel="stylesheet" type="text/css" href="print.css" media="print"/></mark>
                        <br>当界面加载时，两个样式表都会下载到客户端，只是会根据场景不同使用不同的样式
                    </td>
                </tr>
                <tr>
                    <td class="tdfirst"><mark>type</mark></td>
                    <td colspan="2">规定被链接文档的 MIME 类型</td>
                </tr>
                <tr>
                    <td class="tdfirst"><mark>hreflang</mark></td>
                    <td colspan="2">定义被链接文档中文本的语言</td>
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