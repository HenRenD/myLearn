<template>
    <div class="eventleixing">
        <h2><mark>用户界面事件</mark>：</h2>
        <table>
            <thead>
                <tr>
                    <td width='15%'>事件</td>
                    <td>描述</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><mark class="marksec">load</mark></td>
                    <td>load 事件会在整个页面（包括所有外部资源如图片、JavaScript 文件和 CSS 文件）加载完成后触发
                        <br>使用方式：
                        <br>JavaScript方式
                        <br>向body元素添加 onload 属性
                        <br>实际开发中要尽量使用 JavaScript 方式
                        <br>根据 DOM2 Events，load 事件应该在 document 而非 window 上触发。可是为了向后兼容，所有浏览器都在 window 上实现了 load 事件
                        <br>图片上也会触发load事件
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">unload</mark></td>
                    <td>unload 事件会在文档卸载完成后触发
                        <br>unload 事件一般是在从一个页面导航到另一个页面时触发，最常用于清理引用，以避免内存泄漏
                        <br>使用方式：
                        <br>js方式
                        <br>body添加
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">resize</mark></td>
                    <td>当浏览器窗口被缩放到新高度或宽度时，会触发 resize 事件
                        <br>这个事件在 window 上触发
                        <br>在 window 上或者为body元素添加 onresize 属性来指定事件处理程序
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">scroll</mark></td>
                    <td>虽然 scroll 事件发生在 window 上，但实际上反映的是页面中相应元素的变化</td>
                </tr>
            </tbody>
        </table>
        <h2><mark>焦点事件</mark>：</h2>
        <table>
            <thead>
                <tr>
                    <td width='15%'>事件</td>
                    <td>描述</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><mark class="marksec">blur</mark></td>
                    <td>当元素失去焦点时触发。这个事件不冒泡，所有浏览器都支持。</td>
                </tr>
                <tr>
                    <td><mark class="marksec"> focus</mark></td>
                    <td>当元素获得焦点时触发。这个事件不冒泡，所有浏览器都支持。</td>
                </tr>
                <tr>
                    <td><mark class="marksec">focusin</mark></td>
                    <td>当元素获得焦点时触发。这个事件是 focus 的冒泡版。</td>
                </tr>
                <tr>
                    <td><mark class="marksec"> focusout</mark></td>
                    <td>当元素失去焦点时触发。这个事件是 blur 的通用版。</td>
                </tr>
            </tbody>
        </table>
        <h2><mark>鼠标和滚轮事件</mark>：</h2>
        <table>
            <thead>
                <tr>
                    <td width='15%'>事件</td>
                    <td>描述</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><mark class="marksec">click</mark></td>
                    <td>在用户单击鼠标主键（通常是左键）或按键盘回车键时触发。这主要是基于无障碍的考虑，让键盘和鼠标都可以触发 onclick 事件处理程序。</td>
                </tr>
                <tr>
                    <td><mark class="marksec">dblclick</mark></td>
                    <td>在用户双击鼠标主键（通常是左键）时触发。这个事件不是在 DOM2 Events 中定义的，但得到了很好的支持，DOM3 Events 将其进行了标准化。</td>
                </tr>
                <tr>
                    <td><mark class="marksec">mousedown</mark></td>
                    <td>在用户按下任意鼠标键时触发。这个事件不能通过键盘触发。</td>
                </tr>
                <tr>
                    <td><mark class="marksec">mouseenter</mark></td>
                    <td>在用户把鼠标光标从元素外部移到元素内部时触发。
                        <br>这个事件不冒泡，也不会在光标经过后代元素时触发。mouseenter 事件不是在 DOM2 Events 中定义的，而是 DOM3 Events中新增的事件。
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">mouseleave</mark></td>
                    <td>在用户把鼠标光标从元素内部移到元素外部时触发。
                        <br>这个事件不冒泡，也不会在光标经过后代元素时触发。
                        <br>mouseleave 事件不是在 DOM2 Events 中定义的，而是 DOM3 Events中新增的事件。
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">mousemove</mark></td>
                    <td>在鼠标光标在元素上移动时反复触发。这个事件不能通过键盘触发。</td>
                </tr>
                <tr>
                    <td><mark class="marksec">mouseout</mark></td>
                    <td>在用户把鼠标光标从一个元素移到另一个元素上时触发。
                        <br>移到的元素可以是原始元素的外部元素，也可以是原始元素的子元素。
                        <br>这个事件不能通过键盘触发。
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">mouseover</mark></td>
                    <td>在用户把鼠标光标从元素外部移到元素内部时触发。
                        <br>这个事件不能通过键盘触发。
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">mouseup</mark></td>
                    <td>在用户释放鼠标键时触发。这个事件不能通过键盘触发。</td>
                </tr>
                <tr>
                    <td><mark class="marksec">mousewheel</mark></td>
                    <td>滚轮事件只有一个事件mousewheel
                        <br>反映的是鼠标滚 轮或带滚轮的类似设备上滚轮的交互
                    </td>
                </tr>
            </tbody>
        </table>
        <h2><mark>键盘事件</mark>：</h2>
        <table>
            <thead>
                <tr>
                    <td width='15%'>事件</td>
                    <td>描述</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><mark class="marksec">keydown</mark></td>
                    <td>用户按下键盘上某个键时触发，而且持续按住会重复触发。</td>
                </tr>
                <tr>
                    <td><mark class="marksec">keypress</mark></td>
                    <td>用户按下键盘上某个键并产生字符时触发，而且持续按住会重复触发。
                        <br>Esc 键也会触发这个事件。
                        <br>DOM3 Events 废弃了 keypress 事件，而推荐 textInput 事件
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">keyup</mark></td>
                    <td>用户释放键盘上某个键时触发。</td>
                </tr>
                <tr>
                    <td><mark class="marksec">textInput</mark></td>
                    <td>输入事件只有一个，即 textInput。这个事件是对 keypress 事件的扩展
                        <br>用于在文本显示给用户之前更方便地截获文本输入。
                        <br>textInput 会在文本被插入到文本框之前触发
                        <br>注：keypress在dom3events中已经废弃，该事件是DOM3新增
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