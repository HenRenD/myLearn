<template>
    <div class="inputtag">
        <h2><mark>input</mark>标签：</h2>
        <ul>
            <li class="des"><mark class="marksec">input</mark>规定了用户可以输入的字段内容</li>
            <li class="des">可以输入的类型由<mark class="marksec">type</mark>属性值决定</li>
        </ul>
        <h2><mark>input</mark>实例：</h2>
        <pre class="contentarea" v-highlight><code>        &lt;form action="?" method="post">
                        First name: &lt;input type="text" name="fname">&lt;br>
                        Last name: &lt;input type="text" name="lname">&lt;br>
                        &lt;input type="submit" value="提交">
            &lt;/form></code></pre>
        <h2><mark>input</mark>浏览器支持：</h2>
        <ul>
            <li class="des">所有主流浏览器都支持 <mark class="marksec">input</mark> 标签。</li>
        </ul>
        <h2><mark>input</mark>属性(H4)：</h2>
        <table>
            <thead>
                <tr>
                    <td>属性</td>
                    <td class="tdsecond">值</td>
                    <td>描述</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><mark>type</mark></td>
                    <td>见type可选值表格</td>
                    <td>规定input类型</td>
                </tr>
                <tr>
                    <td><mark>checked</mark></td>
                    <td>checked</td>
                    <td>规定在页面加载时应该被预先选定（<mark class="marksec">type=checkbox或radio时可用</mark>）</td>
                </tr>
                <tr>
                    <td><mark>value</mark></td>
                    <td>根据特定的type类型取特定的值</td>
                    <td>规定input元素的value值</td>
                </tr>
                <tr>
                    <td><mark>disabled</mark></td>
                    <td>disabled</td>
                    <td>规定应该禁用的input元素</td>
                </tr>
                <tr>
                    <td><mark>maxlength</mark></td>
                    <td>number数字</td>
                    <td>规定input元素允许的最大字符个数</td>
                </tr>
                <tr>
                    <td><mark>readonly</mark></td>
                    <td>readonly</td>
                    <td>规定输入字段是只读的</td>
                </tr>
                <tr>
                    <td><mark>name</mark></td>
                    <td>text字符串</td>
                    <td>规定input元素的名称</td>
                </tr>
                <tr>
                    <td><mark>size</mark></td>
                    <td>number数字</td>
                    <td>规定input元素的可见宽度</td>
                </tr>
                <tr>
                    <td><mark>accept</mark></td>
                    <td>audio/ video/ image/ MIME_type</td>
                    <td>规定可上传文件的类型（<mark class="marksec">type=file时可用</mark>）</td>
                </tr>
                <tr>
                    <td><mark>alt</mark></td>
                    <td>text字符串</td>
                    <td>输入图像时的替代文本（<mark class="marksec">type=image时可用</mark>）</td>
                </tr>
                <tr>
                    <td><mark>src</mark></td>
                    <td>url地址</td>
                    <td>规定图像的地址（<mark class="marksec">type=image时可用</mark>）</td>
                </tr>
            </tbody>
        </table>
        <h2><mark>input</mark>属性(H5新增)：</h2>
        <table>
            <thead>
                <tr>
                    <td>属性</td>
                    <td class="tdsecond">值</td>
                    <td>描述</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><mark>required</mark></td>
                    <td>required</td>
                    <td>表示该字段是必须的</td>
                </tr>
                <tr>
                    <td><mark>placeholder</mark></td>
                    <td>text字符串</td>
                    <td>规定input元素的初始化提示信息</td>
                </tr>
                <tr>
                    <td><mark>autofocus</mark></td>
                    <td>autofocus</td>
                    <td>规定input元素应该自动获取焦点</td>
                </tr>
                <tr>
                    <td><mark>autocomplete</mark></td>
                    <td> on <br>off</td>
                    <td>规定input元素输入字段是否应该启用自动完成功能</td>
                </tr>
                <tr>
                    <td><mark>form</mark></td>
                    <td>表单的id</td>
                    <td>规定input元素属于哪一个或多个表单</td>
                </tr>
                <tr>
                    <td><mark>formaction</mark></td>
                    <td>url地址</td>
                    <td>规定当表单提交时处理输入控件的文件的 URL<br><mark class="marksec">type=submit或image时可用</mark></td>
                </tr>
                <tr>
                    <td><mark>formenctype</mark></td>
                    <td> application/x-www-form-urlencoded <br> multipart/form-data <br> text/plain</td>
                    <td>规定当表单数据提交到服务器时如何编码<br><mark class="marksec">type=submit或image时可用</mark></td>
                </tr>
                <tr>
                    <td><mark>formmethod</mark></td>
                    <td>get <br> post</td>
                    <td>定义发送表单数据到 action URL 的 HTTP 方法<br><mark class="marksec">type=submit或image时可用</mark></td>
                </tr>
                <tr>
                    <td><mark>formnovalidate</mark></td>
                    <td>formnovalidate</td>
                    <td>覆盖form元素的 novalidate 属性</td>
                </tr>
                <tr>
                    <td><mark>formtarget</mark></td>
                    <td>_blank <br>_self <br>_parent <br>_top</td>
                    <td>规定提交表单后，在哪里打开action中给定的url链接<br><mark class="marksec">type=submit或image时可用</mark></td>
                </tr>
                <tr>
                    <td><mark>width</mark></td>
                    <td>px</td>
                    <td>规定input元素的宽度（<mark class="marksec">typd=image时可用</mark>）</td>
                </tr>
                <tr>
                    <td><mark>height</mark></td>
                    <td>px</td>
                    <td>规定input元素的高度（<mark class="marksec">typd=image时可用</mark>）</td>
                </tr>
                <tr>
                    <td><mark>list</mark></td>
                    <td>datalist元素的id</td>
                    <td>属性引用（<mark class="marksec">当input元素和datalist元素配合使用时才会用到该属性</mark>）</td>
                </tr>
                <tr>
                    <td><mark>max</mark></td>
                    <td>见下表</td>
                    <td>规定 input 元素的最大值（<mark class="marksec">一般type=number或range时，会用到该属性</mark>）</td>
                </tr>
                <tr>
                    <td><mark>min</mark></td>
                    <td>见下表</td>
                    <td>规定 input 元素的最小值（<mark class="marksec">一般type=number或range时，会用到该属性</mark>）</td>
                </tr>
                <tr>
                    <td><mark>multiple</mark></td>
                    <td> multiple</td>
                    <td>规定允许用户输入到 input 元素的多个值</td>
                </tr>
                <tr>
                    <td><mark>pattern</mark></td>
                    <td>regexp</td>
                    <td>规定用于验证 input 元素的值的正则表达式</td>
                </tr>
                <tr>
                    <td><mark>step</mark></td>
                    <td>number数字</td>
                    <td>规定 input 元素的合法数字间隔</td>
                </tr>
            </tbody>
        </table>
        <h2><mark>type</mark>可选值(H4)：</h2>
        <table>
            <thead>
                <tr>
                    <td class="tdsecond">类型</td>
                    <td>描述</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><mark>checkbox</mark></td>
                    <td>定义复选框</td>
                </tr>
                <tr>
                    <td><mark>radio</mark></td>
                    <td>定义单选</td>
                </tr>
                <tr>
                    <td><mark>password</mark></td>
                    <td>定义密码字段</td>
                </tr>
                <tr>
                    <td><mark>text</mark></td>
                    <td>定义一般文本字段</td>
                </tr>
                <tr>
                    <td><mark>button</mark></td>
                    <td>定义一般按钮</td>
                </tr>
                <tr>
                    <td><mark>reset</mark></td>
                    <td>定义重置按钮</td>
                </tr>
                <tr>
                    <td><mark>submit</mark></td>
                    <td>定义提交按钮</td>
                </tr>
                <tr>
                    <td><mark>file</mark></td>
                    <td>上传文件</td>
                </tr>
                <tr>
                    <td><mark>hidden</mark></td>
                    <td>隐藏的输入字段，允许 Web 开发者存放一些用户不可见、不可改的数据，在用户提交表单时，这些数据会一并发送出</td>
                </tr>
                <tr>
                    <td><mark>image</mark></td>
                    <td>定义图像形式的提交按钮</td>
                </tr>
            </tbody>
        </table>
        <h2><mark>type</mark>可选值(H5新增)：</h2>
        <table>
            <thead>
                <tr>
                    <td class="tdsecond">类型</td>
                    <td>描述</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><mark>color</mark></td>
                    <td>定义一个允许用户选择的颜色选择器</td>
                </tr>
                <tr>
                    <td><mark>date</mark></td>
                    <td>创建一个让用户输入一个日期的输入区域</td>
                </tr>
                <tr>
                    <td><mark>datetime-local</mark></td>
                    <td>创建让用户便捷输入日期和时间的输入控件
                        <br>包括“年”、“月”、“日”，以及“时”和“分”。
                    </td>
                </tr>
                <tr>
                    <td><mark>month</mark></td>
                    <td>创建一个方便输入年份或月份的输入控件</td>
                </tr>
                <tr>
                    <td><mark>time</mark></td>
                    <td>旨在让用户轻松输入时间
                        <br>小时和分钟，以及可选的秒
                    </td>
                </tr>
                <tr>
                    <td><mark>week</mark></td>
                    <td>以便轻松输入年份以及该年
                        <br>（即第1周到52 or 53周）的ISO 8601 week number
                    </td>
                </tr>
                <tr>
                    <td><mark>number</mark></td>
                    <td>用于让用户输入一个数字。
                        <br>其包括内置验证以拒绝非数字输入
                    </td>
                </tr>
                <tr>
                    <td><mark>range</mark></td>
                    <td> range 类型的元素允许用户指定一个数值
                        <br>该数值必须不小于给定值，并且不得大于另一个给定值
                        <br>但是，精确值并不重要
                    </td>
                </tr>
                <tr>
                    <td><mark>email</mark></td>
                    <td>能够让用户输入或编辑一个电子邮箱地址，
                        <br>此外，如果指定了multiple属性，用户还可以输入多个电子邮箱地址
                        <br>会自动验证邮箱格式
                    </td>
                </tr>
                <tr>
                    <td><mark>search</mark></td>
                    <td>search 类型是 专为用户输入搜索查询而设计的文本字段
                        <br>功能上与 text 输入相同
                        <br>但是可以通过 user agent 进行不同样式的设置
                    </td>
                </tr>
                <tr>
                    <td><mark>tel</mark></td>
                    <td>tel类型的元素用于让用户输入和编辑电话号码
                        <br>在提交表格之前，输入值不会被自动验证为特定格式
                        <br>如果不支持tel，会自动转换为text
                    </td>
                </tr>
                <tr>
                    <td><mark>url</mark></td>
                    <td>url用于让用户输入和编辑URL。</td>
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