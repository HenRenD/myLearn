<template>
    <div class="canvastag">
        <!-- canvas标签 -->
        <h2><mark>&lt;canvas></mark>标签：</h2>
        <ul>
            <li class="des">&lt;canvas> 标签通过脚本（通常是 JavaScript）来绘制图形（比如图表和其他图像）</li>
            <li class="des">&lt;canvas> 标签只是图形容器，您必须使用脚本来绘制图形。</li>
            <li class="des">&lt;canvas> 元素中的任何文本将会被显示在不支持 &lt;canvas> 的浏览器中</li>
        </ul>
        <h2><mark>&lt;canvas></mark>实例：</h2>
        <pre class="contentarea" v-highlight><code>         //绘制一个矩形
            &lt;canvas id="myCanvas">&lt;/canvas>
            &lt;script >
                var canvas=document.getElementById('myCanvas');
                var ctx=canvas.getContext('2d');
                ctx.fillStyle='#FF0000';
                ctx.fillRect(0,0,80,100);
            &lt;/script></code></pre>
        <h2><mark>&lt;canvas></mark>浏览器支持：</h2>
        <ul>
            <li class="des">IE 8 或更早版本的 IE 浏览器不支持 <mark class="marksec">&lt;canvas></mark> 标签。</li>
        </ul>
        <h2><mark>&lt;canvas></mark>属性：</h2>
        <table>
            <thead>
                <tr>
                    <td>属性</td>
                    <td>单位</td>
                    <td>描述</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>width</td>
                    <td>px</td>
                    <td>画布宽度</td>
                </tr>
                <tr>
                    <td>height</td>
                    <td>px</td>
                    <td>画布高度</td>
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