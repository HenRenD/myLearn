<template>
    <div class="transition">
        <h2><mark>transition过渡</mark>：</h2>
        <ul>
            <li class="des">从一种样式逐渐改变为另一种的效果</li>
            <li class="des">优点：简单易用 </li>
            <li class="des">局限性：
                <br>transition需要事件触发，所以不能在网页加载是自动发生；也就是说不能主动触发，只能被动触发。
                <br>transition是一次性的，不能重复发生，除非一再触发。
                <br>只能定义开始和结束的属性值，不能定义中间状态，也就是说只有两个状态。
            </li>
        </ul>
        <table>
            <thead>
                <tr>
                    <td width='30%'>选项</td>
                    <td>描述</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><mark>transition-property</mark></td>
                    <td>默认值是all（所有属性都获取过渡效果）
                        <br>property（特定属性获得过渡效果，多个属性用逗号隔开；）
                    </td>
                </tr>
                <tr>
                    <td><mark>transition-duration</mark></td>
                    <td>完成过渡需要的时间
                        <br>单位：s/ms
                    </td>
                </tr>
                <tr>
                    <td><mark>transition-timing-function</mark></td>
                    <td>指定transition效果的转速曲线
                        <br>默认ease
                        <br><mark class="marksec">linear</mark> - 以相同速度过渡
                        <br><mark class="marksec">ease</mark> - 慢速开始 -> 变快 -> 慢速结束
                        <br><mark class="marksec">ease-in</mark> - 慢速开始
                        <br><mark class="marksec">ease-out</mark> - 慢速结束
                        <br><mark class="marksec">ease-in-out</mark> - 慢速开始、慢速结束、幅度比ease大
                    </td>
                </tr>
                <tr>
                    <td><mark>transition-delay</mark></td>
                    <td>过渡开始之前的延迟时间
                        <br>单位：s/ms
                    </td>
                </tr>
                <tr>
                    <td><mark>transition</mark></td>
                    <td>简写属性，按照上述顺序简写</td>
                </tr>
            </tbody>
        </table>
        <h2><mark> @keyframes动画</mark>：</h2>
        <h3>
            <mark class="marksec">定义动画</mark>：
        </h3>
        <ul>
            <li class="des">语法：
                <pre><mark class="marksec">@keyframes animationname {</mark>
                    <mark class="marksec">keyframes-selector {1css-styles;}</mark>
                    <mark class="marksec">keyframes-selector{2css0styles;}</mark>
                    <mark class="marksec">}</mark></pre>
            </li>
            <li class="des"><mark class="marksec">animationname</mark>：必需。定义动画的名称</li>
            <li class="des"><mark class="marksec">keyframes-selector</mark>：必需。动画时长的百分比。
                合法值：0-100%，from (和0%相同)，to (和100%相同)</li>
            <li class="des"><mark class="marksec">css-style</mark>：必需。一个或多个合法的 CSS 样式属性</li>
        </ul>
        <h3><mark class="marksec">使用动画</mark>：</h3>
        <table>
            <thead>
                <tr>
                    <td width="30%">选项</td>
                    <td>描述</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><mark>animation-name</mark></td>
                    <td>指定要绑定到选择器的动画的名称</td>
                </tr>
                <tr>
                    <td><mark>animation-duration</mark></td>
                    <td>指定完成动画的时间
                        <br>单位：s/ms
                    </td>
                </tr>
                <tr>
                    <td><mark>animation-timing-function</mark></td>
                    <td>设置动画将如何完成一个周期
                        <br><mark class="marksec">step（n）</mark>：n是一个数字，表示n步完成动画
                        <br><mark class="marksec">linear</mark>：动画从头到尾的速度是相同的。
                        <br><mark class="marksec">ease</mark>：默认。动画以低速开始，然后加快，在结束前变慢。
                        <br><mark class="marksec">ease-in</mark>：动画以低速开始。
                        <br><mark class="marksec">ease-out</mark>：动画以低速结束。
                        <br><mark class="marksec">ease-in-out</mark>：动画以低速开始和结束。
                    </td>
                </tr>
                <tr>
                    <td><mark>animation-delay</mark></td>
                    <td>设置动画在启动前的延迟。
                        <br>单位：s/ms
                    </td>
                </tr>
                <tr>
                    <td><mark>animation-iteration-count</mark></td>
                    <td>定义动画的播放次数。
                        <br>n 一个数字，定义应该播放多少次动画
                        <br><mark class="marksec">infinite</mark> 指定动画应该播放无限次
                    </td>
                </tr>
                <tr>
                    <td><mark>animation-direction</mark></td>
                    <td>指定是否应该轮流反向播放动画。
                        <br><mark class="marksec">normal</mark> 默认值。动画按正常播放
                        <br><mark class="marksec">reverse</mark> 动画反向播放
                        <br><mark class="marksec">alternate</mark> 动画在奇数次（1、3、5...）正向播放，在偶数次（2、4、6...）反向播放
                        <br><mark class="marksec">alternate-reverse</mark> 动画在奇数次（1、3、5...）反向播放，在偶数次（2、4、6...）正向播放
                        <br><mark class="marksec">initial</mark> 设置该属性为它的默认值
                        <br><mark class="marksec">inherit</mark> 从父元素继承该属性
                    </td>
                </tr>
                <tr>
                    <td><mark>animation-fill-mode</mark></td>
                    <td>规定当动画不播放时（当动画完成时，或当动画有一个延迟未开始播放时），要应用到元素的样式。
                        <br><mark class="marksec">none</mark> 默认值。动画在动画执行之前和之后不会应用任何样式到目标元素。
                        <br><mark class="marksec">forwards</mark> 在动画结束后（由 animation-iteration-count 决定），动画将应用该属性值。
                        <br><mark class="marksec">backwards</mark> 动画将应用在 animation-delay 定义期间启动动画的第一次迭代的关键帧中定义的属性值。这些都是 from 关键帧中的值（当 animation-direction 为 "normal" 或 "alternate" 时）或 to 关键帧中的值（当 animation-direction 为 "reverse" 或 "alternate-reverse" 时）。
                        <br><mark class="marksec">both</mark> 动画遵循 forwards 和 backwards 的规则。也就是说，动画会在两个方向上扩展动画属性。
                        <br><mark class="marksec">initial</mark> 设置该属性为它的默认值。请参阅 initial。
                        <br><mark class="marksec">inherit</mark> 从父元素继承该属性。请参阅 inherit。
                    </td>
                </tr>
                <tr>
                    <td><mark>animation-play-state</mark></td>
                    <td>指定动画是否正在运行或已暂停。
                        <br><mark class="marksec">paused </mark>指定暂停动画
                        <br><mark class="marksec">running </mark>指定正在运行的动画
                        <br>该属性不能采用简写的形式
                    </td>
                </tr>
                <tr>
                    <td><mark>animation</mark></td>
                    <td>简写：
                        <br><mark class="marksec">animation:name duration timing-function delay iteration-count direction fill-mode</mark>
                    </td>
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