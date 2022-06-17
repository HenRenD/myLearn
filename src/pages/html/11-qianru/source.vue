<template>
    <div class="sourcetag">
        <h2><mark>source</mark>标签：</h2>
        <ul>
            <li class="des"><mark class="marksec">source</mark> 为audio或者 video元素指定多个媒体资源</li>
        </ul>
        <h2><mark>source</mark>实例：</h2>
        <pre class="contentarea" v-highlight><code>         //使用方式一
            &lt;video src="文件地址" controls="controls">&lt;/video>
            //使用方式二
            &lt;video controls="controls" >
                    &lt;source src="happy.mp4" type="source/mp4" >
                    &lt;source src="happy.ogg" type="source/ogg" >
                    您的浏览器暂不支持video 标签。
            &lt;/video></code></pre>
        <h2><mark>source</mark>浏览器支持：</h2>
        <ul>
            <li class="des">IE 8 或更早版本的 IE 浏览器不支持 <mark class="marksec">source</mark> 标签</li>
        </ul>
        <h2><mark>source</mark>属性(H5)：</h2>
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
                    <td>规定媒体资源路径</td>
                </tr>
                <tr>
                    <td><mark>type</mark></td>
                    <td>mime_type
                    </td>
                    <td>规定媒体资源mime类型</td>
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