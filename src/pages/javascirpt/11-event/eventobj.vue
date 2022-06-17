<template>
    <div class="eventobj">
        <h2><mark>事件对象</mark>：</h2>
        <ul>
            <li class="des">event对象
                <br>DOM 合规的浏览器中，event 对象是传给事件处理程序的唯一参数
                <br>该对象只会在事件处理程序执行期间存在，一旦执行完毕就会被销毁
            </li>
        </ul>
        <h2><mark>公共属性</mark>：</h2>
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
                    <td><mark class="marksec">bubbles </mark></td>
                    <td>布尔值 只读 表示事件是否冒泡</td>
                    <td rowspan="11">
                        <pre class="contentarea" v-highlight><code>    &lt;div class="hello">&lt;/div>
        let div = document.querySelector('.hello')
        div.onclick = (e) => {
            console.log(e.bubbles)   // true
            console.log(e.cancelable)       // true
            console.log(e.currentTarget)    // &lt;div class="hello">
            console.log(e.target)   // &lt;div class="hello">
            console.log(e.defaultPrevented)     // false
            console.log(e.detail)   // 1
            console.log(e.eventPhase)   // 2
            console.log(e.trusted)  // undefined
            console.log(e.type) // click
            console.log(e.view)     // window
            console.log(e.button)   // 0
        }</code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">cancelable </mark></td>
                    <td>布尔值 只读 表示是否可以取消事件的默认行为</td>
                </tr>
                <tr>
                    <td><mark class="marksec">currentTarget </mark></td>
                    <td>元素 只读 当前事件处理程序所在的元素
                        <br>在事件处理程序内部
                        <br>this 对象始终等于 currentTarget 的值
                        <br>而 target 只包含事件的实际目标
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">target </mark></td>
                    <td>元素 只读 事件目标</td>
                </tr>
                <tr>
                    <td><mark class="marksec">defaultPrevented </mark></td>
                    <td>布尔值 只读 true 表示已经调用 preventDefault()方法（DOM3新增） </td>
                </tr>
                <tr>
                    <td><mark class="marksec">detail </mark></td>
                    <td>
                        detail 包含一个数值，表示在给定位置上发生了多少次单击
                        <br>如果鼠标在 mousedown和 mouseup 之间移动了，则 detail 会重置为 0。
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">eventPhase </mark></td>
                    <td>整数 只读
                        <br>表示调用事件处理程序的阶段：
                        <br>1 代表捕获阶段，
                        <br>2 代表到达目标，
                        <br>3 代表冒泡阶段
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">trusted </mark></td>
                    <td>布尔值 只读
                        <br>true 表示事件是由浏览器生成的
                        <br>false 表示事件是开发者通过JavaScript 创建的（DOM3 Events 中新增）
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">type </mark></td>
                    <td>字符串 只读 被触发的事件类型</td>
                </tr>
                <tr>
                    <td><mark class="marksec">View </mark></td>
                    <td>AbstractView 只读
                        <br>与事件相关的抽象视图。等于事件所发生的 window 对象
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">button</mark></td>
                    <td>button 属性，表示按下或释放的是哪个按键
                        <br>0 表示鼠标主键
                        <br>1 表示鼠标中键（常是滚轮键）
                        <br>2 表示鼠标副键
                    </td>
                </tr>
            </tbody>
        </table>
        <h2><mark>公共方法</mark>：</h2>
        <table>
            <thead>
                <tr>
                    <td width='15%'>方法</td>
                    <td>描述</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><mark class="marksec">stopImmediatePropagation() </mark></td>
                    <td>函数 只读
                        <br>用于取消所有后续事件捕获或事件冒泡，
                        <br>并阻止调用任何后续事件处理程序（DOM3 Events 中新增）
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">preventDefault() </mark></td>
                    <td>函数 只读 用于取消事件的默认行为。只有 cancelable 为 true 才可以调用这个方法</td>
                </tr>
                <tr>
                    <td><mark class="marksec">stopPropagation() </mark></td>
                    <td>函数 只读
                        <br>用于立即阻止事件流在 DOM 结构中传播，取消后续的事件捕获或冒泡
                        <br>只有 bubbles为 true 才可以调用这个方法
                    </td>
                </tr>
            </tbody>
        </table>
        <h2><mark>键盘相关</mark>：</h2>
        <table>
            <thead>
                <tr>
                    <td width='15%'>属性</td>
                    <td>描述</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><mark class="marksec">clientX</mark></td>
                    <td rowspan="2">表示事件发生时鼠标光标在视口中的坐标，在页面没有滚动时，pageX 和 pageY 与 clientX 和 clientY 的值相同。
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">clientY</mark></td>
                </tr>
                <tr>
                    <td><mark class="marksec">pageX </mark></td>
                    <td rowspan="2">而页面坐标是事件发生时鼠标光标在页面上的位置坐标</td>
                </tr>
                <tr>
                    <td><mark class="marksec">pageY</mark></td>
                </tr>
                <tr>
                    <td><mark class="marksec">screenX </mark></td>
                    <td rowspan="2">鼠标光标在屏幕上的坐标</td>
                </tr>
                <tr>
                    <td><mark class="marksec">screenY</mark></td>
                </tr>
            </tbody>
        </table>
        <h2><mark>鼠标相关</mark>：</h2>
        <table>
            <thead>
                <tr>
                    <td width='15%'>方法</td>
                    <td>描述</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><mark class="marksec">keyCode</mark></td>
                    <td>event 对象的 keyCode 属性中会保存一个键码</td>
                </tr>
                <tr>
                    <td><mark class="marksec">charCode</mark></td>
                    <td>浏览器在 event 对象上支持 charCode 属性，只有发生 keypress 事件时这个属性才会被设置值
                        包含的是按键字符对应的 ASCII 编码</td>
                </tr>
                <tr>
                    <td><mark class="marksec"> shiftKey</mark></td>
                    <td rowspan="4">键盘上的修饰键 Shift、Ctrl、Alt 和 Meta 经常用于修改鼠标事件的行为
                        <br>这几属性会在各自对应的修饰 键被按下时包含布尔值 true
                        <br>没有被按下时包含 false
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">ctrlKey</mark></td>
                </tr>
                <tr>
                    <td><mark class="marksec"> altKey</mark></td>
                </tr>
                <tr>
                    <td><mark class="marksec">metaKey</mark></td>
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