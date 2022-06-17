<template>
    <div class="screen_">
        <h2><mark>screen</mark>：</h2>
        <ul>
            <li class="des">该对象中保存的纯粹是客户端能力信息
                <br>也就是浏览器窗口外面的客户端显示器信息
            </li>
        </ul>
        <h2><mark>属性</mark>：</h2>
        <table>
            <thead>
                <tr>
                    <td width='15%'>属性</td>
                    <td width='30%'>描述</td>
                    <td>实例</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><mark class="marksec">width</mark></td>
                    <td>设备屏幕的宽度</td>
                    <td rowspan="7">
                        <pre class="contentarea" v-highlight><code>    console.log(screen.height)      // 900
        console.log(screen.width)       // 1440
        console.log(screen.availHeight)         // 860
        console.log(screen.availWidth)      // 1440
        console.log(screen.pixelDepth)      // 24
        console.log(screen.colorDepth)      // 24
        console.log(screen.orientation)         
        // ScreenOrientation { type: "landscape-primary", angle: 0, onchange: null }</code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">height</mark></td>
                    <td>设备屏幕的高度</td>
                </tr>
                <tr>
                    <td><mark class="marksec">availHeight</mark></td>
                    <td>浏览器所在屏幕的可用高度</td>
                </tr>
                <tr>
                    <td><mark class="marksec">availWidth</mark></td>
                    <td>浏览器窗口所在屏幕的可用宽度(比如说要去除windows系统的任务栏)</td>
                </tr>
                <tr>
                    <td><mark class="marksec">pixelDepth</mark></td>
                    <td>整数，表示屏幕的色彩位数</td>
                </tr>
                <tr>
                    <td><mark class="marksec">colorDepth</mark></td>
                    <td>pixelDepth属性的别名</td>
                </tr>
                <tr>
                    <td><mark class="marksec">orientation</mark></td>
                    <td>返回一个对象，表示屏幕的方向</td>
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