<template>
    <div class="atag">
        <h2><mark>&lt;a></mark>标签：</h2>
        <ul>
            <li class="des"><mark class="marksec">a</mark> 标签定义超链接，用于从一个页面链接到另一个页面。</li>
            <li class="des"><mark class="marksec">a</mark> 元素最重要的属性是 href 属性，它指定链接的目标。</li>
            <li class="des">网页中的各种元素都可以添加超链接</li>
        </ul>
        <h2><mark>&lt;a></mark>实例：</h2>
        <pre class="contentarea" v-highlight><code>&lt;a href="https://www.百度.com">访问百度!&lt;/a></code></pre>
        <h2><mark>&lt;a></mark>浏览器支持：</h2>
        <ul>
            <li class="des">所有主流浏览器都支持 <mark class="marlsec">&lt;a></mark> 标签</li>
        </ul>
        <h2><mark>&lt;a></mark>属性：</h2>
        <table>
            <thead>
                <tr>
                    <td class="tdfirst">属性</td>
                    <td>值</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="tdfirst">href</td>
                    <td>
                        指向链接跳转的目标地址，可以是一个相对路径
                        <br>外部链接：href是外部的链接，例如https://www.baidu.com
                        <br>内部链接：href是内部的链接，例如内部网页的跳转
                        <br>空链接：href中写入“#”
                        <br>下载链接：href里面是一个文件或者压缩包
                        <br>锚点链接：快速定位到页面的指定位置，href=“#目标位置id属性名”
                    </td>
                </tr>
                <tr>
                    <td class="tdfirst">target</td>
                    <td>
                        指定在哪个窗口中打开链接
                        <br>_self：默认值，默认在当前窗口打开链接
                        <br>_blank：在新窗口中打开链接
                    </td>
                </tr>
                <tr>
                    <td colspan="2">支持全局属性</td>
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