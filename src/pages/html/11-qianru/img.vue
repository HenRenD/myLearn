<template>
    <div class="imgtag">
        <h2><mark>img</mark>标签：</h2>
        <ul>
            <li class="des">使用图片标签可以向页面中引入一个外部图片</li>
            <li class="des"><mark class="marksec">img</mark> 标签定义 HTML 页面中的图像</li>
            <li class="des"><mark class="marksec">img</mark> 标签有两个必需的属性：src 和 alt</li>
            <li class="des">从技术上讲，图像并不会插入 HTML 页面中，而是链接到 HTML 页面上</li>
            <li class="des"><mark class="marksec">img</mark> 标签的作用是为被引用的图像创建占位符</li>
        </ul>
        <h2><mark>img</mark>实例：</h2>
        <pre class="contentarea" v-highlight><code>         &lt;img src="xxx.png" alt="图片" width="242" height="242"></code></pre>
        <h2><mark>img</mark>浏览器支持：</h2>
        <ul>
            <li class="des">所有主流浏览器都支持 <mark class="marksec">img</mark> 标签</li>
        </ul>
        <h2><mark>img</mark>属性：</h2>
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
                    <td><mark>src</mark></td>
                    <td>url地址</td>
                    <td>被链接图片的路径</td>
                </tr>
                <tr>
                    <td><mark>alt</mark></td>
                    <td>text,文本</td>
                    <td>图片的代替文字</td>
                </tr>
                <tr>
                    <td><mark>width</mark></td>
                    <td>px</td>
                    <td>图片的宽度</td>
                </tr>
                <tr>
                    <td><mark>height</mark></td>
                    <td>px</td>
                    <td>图片的高度</td>
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