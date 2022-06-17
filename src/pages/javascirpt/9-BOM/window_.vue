<template>
    <div class="window_">
        <h2><mark>知识点：</mark></h2>
        <ul>
            <li class="des">窗口关系：
                <br><mark class="marksec">top</mark> / <mark class="marksec">parent</mark> / <mark class="marksec">self</mark>
            </li>
            <li class="des">窗口位置与像素比：
                <br><mark class="marksec">screenLeft</mark> / <mark class="marksec">screenTop</mark> / <mark class="marksec">moveTo()</mark> / <mark class="marksec">moveBy()</mark> / <mark class="marksec">devicePixeRatio</mark>
            </li>
            <li class="des">窗口大小：
                <br><mark class="marksec">innerWidth</mark> / <mark class="marksec">innerHeight</mark> / <mark class="marksec">outerWidth</mark> / <mark class="marksec">outerHeight</mark> / <mark class="marksec">resizeTo()</mark> / <mark class="marksec">resizeBy()</mark>
            </li>
            <li class="des">视口位置：
                <br><mark class="marksec">pageXoffset</mark> / <mark class="marksec">pageYoffset</mark> / <mark class="marksec">scrollX</mark> / <mark class="marksec">scrollY</mark> / <mark class="marksec">scroll()</mark> / <mark class="marksec">scrollTo()</mark> / <mark class="marksec">scrollBy()</mark>
            </li>
            <li class="des">打开新窗口：
                <br><mark class="marksec">window.open()</mark>
            </li>
            <li class="des">定时器：
                <br><mark class="marksec">setTimeout()</mark> / <mark class="marksec">clearTimeout()</mark> / <mark class="marksec">setInterval()</mark> / <mark class="marksec">clearInterval()</mark>
            </li>
            <li class="des">打开新窗口：
                <br><mark class="marksec">alert()</mark> / <mark class="marksec">confirm()</mark> / <mark class="marksec">promt()</mark>
            </li>
        </ul>
        <h2><mark>窗口关系</mark>：</h2>
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
                    <td><mark class="marksec">top</mark></td>
                    <td>top 对象始终指向最上层（最外层）窗口，即浏览器窗口本身</td>
                    <td rowspan="3">
                        <pre class="contentarea" v-highlight><code>    console.log(window.top)      // Window
        console.log(window.parent)       // Window
        console.log(window.self)     // Window</code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">parent</mark></td>
                    <td>parent 对象则始终指向当前窗口的父窗口</td>
                </tr>
                <tr>
                    <td><mark class="marksec">self</mark></td>
                    <td>self 对象
                        <br>它是终极 window 属性，始终会指向 window。
                        <br>实际上，self 和 window 就 是同一个对象。
                        <br>之所以还要暴露 self，就是为了和 top、parent 保持一致
                    </td>
                </tr>
            </tbody>
        </table>
        <h2><mark>窗口位置与像素比</mark>：</h2>
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
                    <td><mark class="marksec">screenLeft</mark></td>
                    <td>浏览器窗口距离屏幕左侧的距离
                        <br>返回值单位为px
                    </td>
                    <td rowspan="2">
                        <pre class="contentarea" v-highlight><code>    console.log(window.screenLeft)      // 0
        console.log(window.screenTop)       // 0
        // 浏览器全屏模式时，为0</code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">screenTop</mark></td>
                    <td>浏览器窗口距离屏幕顶部的距离
                        <br>返回值单位为px
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">moveTo()</mark></td>
                    <td>接收一个坐标参数
                        <br>将浏览器移动到该最标位置
                    </td>
                    <td rowspan="2">
                        <pre class="contentarea" v-highlight><code>    window.moveTo(100, 200)
        window.moveBy('100px', '200px')
        // 一般浏览器都会禁用这两个函数</code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">moveBy()</mark></td>
                    <td>接收一个两个方向上的像素值
                        <br>相对于当前位置按像素值移动浏览器窗口
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">devicePixelRatio</mark></td>
                    <td>物理像素与逻辑像素的缩放系数</td>
                    <td>
                        <pre class="contentarea" v-highlight><code>    console.log(window.devicePixelRatio)      // 1
        // 一般都为1</code></pre>
                    </td>
                </tr>
            </tbody>
        </table>
        <h2>
            <mark>窗口大小</mark>：
        </h2>
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
                    <td><mark class="marksec">innerWidth</mark></td>
                    <td rowspan="2">innerHeight：返回浏览器页面视口高度
                        <br>innerWidth：返回浏览器页面视口宽度
                        <br>不包含浏览器边框和工具栏
                    </td>
                    <td rowspan="2">
                        <pre class="contentarea" v-highlight><code>    console.log(window.innerHeight)     // 747
        console.log(window.innerWidth)      // 1225
        // 取决于页面视口大小</code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">innerHeight</mark></td>
                </tr>
                <tr>
                    <td><mark class="marksec">outerWidth</mark></td>
                    <td rowspan="2">返回浏览器窗口的实际大小
                        <br>通俗来讲，就是浏览器在全屏模式下的屏幕大小(不包含window下方的任务栏)
                    </td>
                    <td rowspan="2">
                        <pre class="contentarea" v-highlight><code>    console.log(window.outerWidth)      // 1456
        console.log(window.outerHeight)     // 876</code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">outerHeight</mark></td>
                </tr>
                <tr>
                    <td><mark class="marksec">resizeTo()</mark></td>
                    <td rowspan="2">调整浏览器窗口大小
                        <br>resizeTo()接收两个参数，高度宽度
                        <br>resizeBy()接收两个参数，高度宽度像素值
                    </td>
                    <td rowspan="2">
                        <pre class="contentarea" v-highlight><code>    window.resizeTo(100, 200)
        window.resizeBy('100px', '200px')
        // 一般浏览器都是禁用这两个方法</code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">resizeBy()</mark></td>
                </tr>
            </tbody>
        </table>
        <h2>
            <mark>视口位置</mark>：
        </h2>
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
                    <td><mark class="marksec">pageXoffset</mark></td>
                    <td rowspan="4">页面在水平方向和垂直方向上滚动的距离
                        <br>pageXoffset/pageYoffext兼容性更好
                    </td>
                    <td rowspan="4">
                        <pre class="contentarea" v-highlight><code>    console.log(window.pageXOffset)     // 0
        console.log(window.pageYOffset)     // 0
        console.log(window.scrollX)     // 0
        console.log(window.scrollY)     // 0
        // 页面未滚动的情况下都是0</code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">pageYoffset</mark></td>
                </tr>
                <tr>
                    <td><mark class="marksec">scrollX</mark></td>
                </tr>
                <tr>
                    <td><mark class="marksec">scrollY</mark></td>
                </tr>
                <tr>
                    <td><mark class="marksec">scroll()</mark></td>
                    <td rowspan="3">都接受一个坐标参数
                        <br>表示要滚动到的位置
                    </td>
                    <td rowspan="3">
                        <pre class="contentarea" v-highlight><code>    window.scroll(100, 200)
        window.scrollTo(100, 200)
        window.scrollBy(100, 200)</code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">scrollTo()</mark></td>
                </tr>
                <tr>
                    <td><mark class="marksec">scrollBy()</mark></td>
                </tr>
            </tbody>
        </table>
        <h2><mark>打开新窗口</mark>：</h2>
        <ul>
            <li class="des"><mark class="marksec">window.open(url)</mark></li>
        </ul>
        <pre class="contentarea" v-highlight><code>    window.open('https://www.baidu.com')</code></pre>
        <h2><mark>定时器</mark>：</h2>
        <table>
            <thead>
                <tr>
                    <td width='15%'>方法</td>
                    <td width='30%'>描述</td>
                    <td>实例</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><mark class="marksec">setTimeout</mark></td>
                    <td rowspan="2">setTimeout(function(){},time)
                        <br>time是一个时间
                        <br>time时间之后执行function回调函数
                        <br>clearTimeout用于清除定时器
                    </td>
                    <td rowspan="2">
                        <pre class="contentarea" v-highlight><code>    let time = setTimeout(() => {
            console.log('hello world')
        }, 3000);
        // 3秒之后打印hello world
        clearTimeout(time)  // 清除time定时器</code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">clearTimeout</mark></td>
                </tr>
                <tr>
                    <td><mark class="marksec">setInterval</mark></td>
                    <td rowspan="2">setInterval(function(){},time)
                        <br>time是一个时间
                        <br>每隔time时间就执行一次function回调函数
                        <br>clearInterval用于清除定时器
                    </td>
                    <td rowspan="2">
                        <pre class="contentarea" v-highlight><code>    let time = setInterval(() => {
            console.log('hello world')
        }, 3000);
        // 每隔3秒打印一次hello world
        clearInterval(time)  // 清除time定时器</code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">clearTimeout</mark></td>
                </tr>
            </tbody>
        </table>
        <h2><mark>系统对话框</mark>：</h2>
        <table>
            <thead>
                <tr>
                    <td width='15%'>方法</td>
                    <td width='30%'>描述</td>
                    <td>实例</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><mark class="marksec">alert()</mark></td>
                    <td>警告框，弹出一个谨示信息</td>
                    <td rowspan="3">
                        <pre class="contentarea" v-highlight><code>    alert('hello world')
        confirm('确认删除吗？')
        prompt('请输入：')</code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">confirm()</mark></td>
                    <td>确认框，用于询问用户</td>
                </tr>
                <tr>
                    <td><mark class="marksec">promt()</mark></td>
                    <td>提示框，提示用户输入信息</td>
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