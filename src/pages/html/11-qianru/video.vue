<template>
    <div class="videotag">
        <h2><mark>video</mark>标签：</h2>
        <ul>
            <li class="des"><mark class="marksec">video</mark> 标签用来向网页中引入一个视频</li>
        </ul>
        <h2><mark>video</mark>实例：</h2>
        <pre class="contentarea" v-highlight><code>         //使用方式一
            &lt;video src="文件地址" controls="controls">&lt;/video>
            //使用方式二
            &lt;video controls="controls" >
                    &lt;source src="happy.mp4" type="video/mp4" >
                    &lt;source src="happy.ogg" type="video/ogg" >
                    您的浏览器暂不支持video 标签。
            &lt;/video></code></pre>
        <h2><mark>video</mark>浏览器支持：</h2>
        <ul>
            <li class="des">IE 8 或更早版本的 IE 浏览器不支持 <mark class="marksec">video</mark> 标签</li>
        </ul>
        <h2><mark>video</mark>属性(H5)：</h2>
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
                    <td>被链接视频的路径</td>
                </tr>
                <tr>
                    <td><mark>controls</mark></td>
                    <td>controls
                    </td>
                    <td>如果出现该属性，则向用户显示视频控件（比如播放/暂停按钮）</td>
                </tr>
                <tr>
                    <td><mark>autoplay</mark></td>
                    <td>autoplay</td>
                    <td>加载自动播放</td>
                </tr>
                <tr>
                    <td><mark>loop</mark></td>
                    <td>loop</td>
                    <td>播放结束重新播放</td>
                </tr>
                <tr>
                    <td><mark>muted</mark></td>
                    <td>muted</td>
                    <td>静音</td>
                </tr>
                <tr>
                    <td><mark>preload</mark></td>
                    <td>auto
                        <br>metadata
                        <br>none
                    </td>
                    <td>如果出现该属性，则视频在页面加载时进行加载，并预备播放。如果使用 "autoplay"，则忽略该属性</td>
                </tr>
                <tr>
                    <td><mark>width</mark></td>
                    <td>px</td>
                    <td>视频播放器宽度</td>
                </tr>
                <tr>
                    <td><mark>height</mark></td>
                    <td>px</td>
                    <td>视频播放器高度</td>
                </tr>
                <tr>
                    <td><mark>poster</mark></td>
                    <td>url
                    </td>
                    <td>规定视频正在下载时显示的图像，直到用户点击播放按钮。</td>
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