<template>
    <div class="histroy_">
        <h2><mark>知识点：</mark></h2>
        <ul>
            <li class="des">属性：
                <br><mark class="marksec">length</mark> / <mark class="marksec">state</mark> / <mark class="marksec">scrollRestoration</mark>
            </li>
            <li class="des">方法：
                <br><mark class="marksec">back()</mark> / <mark class="marksec">go()</mark> / <mark class="marksec">forward()</mark>
                <br><mark class="marksec">pushState()</mark> / <mark class="marksec">replaceState()</mark>
            </li>
            <li class="des">事件：
                <br><mark class="marksec">popState</mark>
            </li>
        </ul>
        <h2><mark>History</mark>：</h2>
        <ul>
            <li class="des">用来管理用户的历史记录</li>
            <li class="des">每个 window 都有自己的 history 对象
            </li>
            <li class="des">出于安全考虑，这个对象不会暴露用户访问过的 URL，但可以通过它在不知道实际 URL 的情况下前进和后退</li>
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
                    <td><mark class="marksec">length</mark></td>
                    <td>length 属性，表示历史记录中有多个条目
                        <br>这个属性反映了历史记录的数量，包括可以前进和后退的页面。
                        <br>对于窗口或标签页中加载的第一个页面，history.length 等于 1。
                        <br>通过以下方法测试这个值，可以确定用户浏览器的起点是不是你的页面
                    </td>
                    <td>
                        <pre class="contentarea" v-highlight><code>    console.log(history.length)     // 1
        if (history.length === 1) {
            console.log('这是第一个页面！')     // 这是第一个页面
        }</code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">state</mark></td>
                    <td>可以通过 history.state 获取当前的状态对象</td>
                    <td rowspan="2">
                        <pre class="contentarea" v-highlight><code>    console.log(history.state)      // null
        console.log(history.scrollRestoration)      // auto</code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">scrollRestoration</mark></td>
                    <td>滚动恢复属性允许web应用程序在历史导航上显式地设置默认滚动恢复行为
                        <br>auto：将恢复用户已滚动到的页面上的位置
                        <br>manual：未还原页上的位置。用户必须手动滚动到该位置
                    </td>
                </tr>
            </tbody>
        </table>
        <h2><mark>方法</mark>：</h2>
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
                    <td><mark class="marksec">back()</mark></td>
                    <td>后退</td>
                    <td rowspan="3">
                        <pre class="contentarea" v-highlight><code>    history.back()      // 后退一个页面
        history.forward()       // 前进一个页面
        history.go(3)       // 前进三个页面</code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">forward()</mark></td>
                    <td>前进</td>
                </tr>
                <tr>
                    <td><mark class="marksec">go()</mark></td>
                    <td>传一个整数
                        <br>整数表示前进
                        <br>负数表示后退
                        <br>数值表示一个是前进或者后退几步
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">pushState()</mark></td>
                    <td>会将该页面的一种新状态推进历史记录，地址栏也会改变，但是页面不会向服务器发送请求
                        <br>都接受三个参数：
                        <br>state：一个状态对象
                        <br>title：一个标题，这个参数暂没有实际作用
                        <br>url(可选)：一个同源的url，如果没有传，就默认当前url
                        <br>因为 pushState()会创建新的历史记录，所以也会相应地启用“后退”按钮
                    </td>
                    <td rowspan="2">
                        <pre class="contentarea" v-highlight><code>    let stateObject = { foo: "bar" };
        history.pushState(stateObject, "My title", "baz.html");
        history.replaceState({ newFoo: "newBar" }, "New title");</code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">replaceState()</mark></td>
                    <td>可以使用 replaceState()并传入与，pushState()同样的前两个参数来更新状态
                        <br>更新状态不会创建新历史记录，只会覆盖当前状态
                    </td>
                </tr>
            </tbody>
        </table>
        <h2><mark>popState事件</mark>：</h2>
        <ul>
            <li class="des">pushState、replaceState不会触发popState事件</li>
            <li class="des">触发条件：
                <br>1，如果路蓝旗的前进，后退按钮改变了页面的状态就会触发popState事件
                <br>比如前面通过pushState推入一条新状态，然后点击后退按钮就会触发popState事件
                <br>2，修改hash也会触发popState事件
            </li>
            <li class="des"><mark class="marksec">vueRouter中的路由跳转与监听原理</mark>：
                <br>vueRouter提供的push、replace以及route-link都是利用了pushState和replaceState方法推送新状态的历史记录，所以不会触发页面刷新
                <br>hash模式手动修改hash，比如在地址栏中修改hash就会触发vueRouter中定义好的popState从而更新页面
                <br>当历史记录中有状态时，前进和后退也会触发vueRouter中定义好的popState从而更新页面
                <br>直接修改url地址或者刷新的话是不会触发popState，并且会去请求服务器资源，所以history模式下，刷新有时会导致404
            </li>
        </ul>
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>