<template>
    <div class="audiotag">
        <h2><mark>audio</mark>标签：</h2>
        <ul>
            <li class="des"><mark class="marksec">audio</mark> 标签用来向页面中引入一个外部的音频文件的</li>
        </ul>
        <h2><mark>audio</mark>实例：</h2>
        <pre class="contentarea" v-highlight><code>         //使用方式一
            &lt;audio src="文件地址" controls="controls">&lt;/audio>
            //使用方式二
            &lt;audio controls="controls" >
                    &lt;source src="happy.mp3" type="audio/mpeg" >
                    &lt;source src="happy.ogg" type="audio/ogg" >
                    您的浏览器暂不支持audio 标签。
            &lt;/audio></code></pre>
        <h2><mark>audio</mark>浏览器支持：</h2>
        <ul>
            <li class="des">IE 8 或更早版本的 IE 浏览器不支持 <mark class="marksec">audio</mark> 标签</li>
        </ul>
        <h2><mark>audio</mark>属性(H5)：</h2>
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
                    <td>被链接音频的路径</td>
                </tr>
                <tr>
                    <td><mark>controls</mark></td>
                    <td>controls
                    </td>
                    <td>如果出现该属性，则向用户显示音频控件（比如播放/暂停按钮）</td>
                </tr>
                <tr>
                    <td><mark>autoplay</mark></td>
                    <td>autoplay</td>
                    <td>音频加载自动播放</td>
                </tr>
                <tr>
                    <td><mark>loop</mark></td>
                    <td>loop</td>
                    <td>音频播放结束重新播放</td>
                </tr>
                <tr>
                    <td><mark>muted</mark></td>
                    <td>muted</td>
                    <td>音频静音</td>
                </tr>
                <tr>
                    <td><mark>preload</mark></td>
                    <td>auto
                        <br>metadata
                        <br>none
                    </td>
                    <td>规定当网页加载时，音频是否默认被加载以及如何被加载</td>
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