<template>
    <div class="scripttag">
        <!-- script标签 -->
        <h2><mark>&lt;script></mark>标签：</h2>
        <ul>
            <li class="des">用于链接外部脚本，或者内嵌脚本</li>
            <li class="des">如果使用了src属性，标签内部的代码会被忽略</li>
        </ul>
        <h2><mark>&lt;script></mark>实例：</h2>
        <pre class="contentarea" v-highlight><code>        //内嵌脚本
            &lt;script>
                    document.write("Hello World!")
            &lt;/script>
            //链接外部脚本
            &lt;script src="xxxxx.js">&lt;/script></code></pre>
        <h2><mark>&lt;script></mark>浏览器支持：</h2>
        <ul>
            <li class="des">所有主流浏览器都支持 <mark class="marksec">&lt;script></mark> 标签。</li>
        </ul>
        <h2><mark>&lt;script></mark>属性：</h2>
        <li>
            <ul>
                <li class="des"><mark>async</mark>：布尔值，异步脚本，只对外部脚本生效
                    <br>一般脚本：<img src="../image/yibanscript.png" alt="">
                    <br>async脚本：<img src="../image/asyncscript.png" alt="">
                    <br>说明：脚本的加载和页面的渲染同步进行，但是加载完
                    会立即执行，此时会阻塞页面的渲染，由于受到加载事件的影响，不能保证执行顺序<br>应用场景：当要加载的脚本
                    是一个独立的脚本，可以使用async
                </li>
                <li class="des"><mark>defer</mark>：布尔值，延迟脚本，只对外部脚本生效
                    <br>defer脚本：<img src="../image/deferscript.png" alt="">
                    <br>说明：脚本的加载和页面的渲染同步，但是加载完不会执行
                    ，等到整个页面渲染完毕才会执行，不会阻塞页面的渲染，保证执行顺序<br>应用场景：当要加载的脚本依赖于其他脚本，
                    要保证顺序，可以使用defer属性
                </li>
                <li class="des"><mark>crossorigin</mark>：跨域属性</li>
                <li class="des"><mark>src</mark>：外部资源路径，
                    带有该属性的script标签内的代码会被忽略</li>
                <li class="des"><mark>type</mark>：资源类型，
                    一般为text/javascript，
                    默认为javascript</li>
                <li class="des">支持全局属性</li>
            </ul>
        </li>
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>