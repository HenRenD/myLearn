<template>
    <div class="fontandtext">
        <h2><mark>字体</mark>：</h2>
        <table>
            <thead>
                <tr>
                    <td width='20%'>样式属性</td>
                    <td>描述</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><mark>color</mark></td>
                    <td>字体的颜色</td>
                </tr>
                <tr>
                    <td><mark>font-size</mark></td>
                    <td>字体的大小
                        <br>浏览器中默认的字体大小一般都是16px，而我们开发时一般会统一为12px
                    </td>
                </tr>
                <tr>
                    <td><mark>font-family</mark></td>
                    <td>设置文字的字体
                        ，表示使用哪一种字体</td>
                </tr>
                <tr>
                    <td><mark>font-style</mark></td>
                    <td>设置字体的风格</td>
                </tr>
                <tr>
                    <td><mark>font-weight</mark></td>
                    <td>设置字体的粗细</td>
                </tr>
                <tr>
                    <td><mark>font</mark></td>
                    <td>文字的简写属性
                        <br>可以同时设置所有的字体相关的样式
                        <br>font-style、font-variant、font-weight、 font-size/line-height、font-family
                        <br>加粗，斜体，小大字母，顺序无所谓，写不写都行，如果不写则使用默认值
                        <br>文本大小，和字体必须写，且大小必须是倒数第二个，字体必须是最后一个
                        <br>大小后可以设置行高，可写可不写，如果不写则使用默认值
                    </td>
                </tr>
                <tr>
                    <td><mark>font-variant</mark>(css3)</td>
                    <td>小型大写字母
                        ，可选值：
                        small-caps/normal</td>
                </tr>
                <tr>
                    <td><mark>font-stretch</mark>(css3)</td>
                    <td>为字体定义一个正常或经过伸缩变形的字体外观
                        <br>这个属性并不会通过伸展/缩小而改变字体的几何外形，如font-feature-settings和font-variant属性，
                        <br>它仅仅意味着当有多种字体可供选择时，会为字体选择最适合的大小。<br>
                    </td>
                </tr>
                <tr>
                    <td>
                        <mark>@font-face</mark>(css3)
                    </td>
                    <td>
                        CSS3中的一个模块, 使用它, 我们可以在web应用中使用自己喜欢的字体.
                        <pre>@font-face {
        font-family: '字体名称';
        src: url()format('truetype');
        font-variant: 字体变型，默认normal;
        font-stretch: 字体拉伸，默认normal;
        font-weight: 字体粗细，默认normal;
        font-style: 字体样式，默认normal;
        unicode-range: 字体Unicode字符范围，默认U+0-10FFFF;
}</pre>
                        <pre>format:
        TureTpe(.ttf)格式
        OpenType(.otf)格式
        Web Open Font Format(.woff)格式
        Embedded Open Type(.eot)格式
        SVG(.svg)格式</pre>
                    </td>
                </tr>
            </tbody>
        </table>
        <h2><mark>文本</mark>：</h2>
        <table>
            <thead>
                <tr>
                    <td width="20%">样式属性</td>
                    <td>描述</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><mark>text-align</mark></td>
                    <td>设置文本水平对齐
                        ，left right center
                    </td>
                </tr>
                <tr>
                    <td><mark>text-indent</mark></td>
                    <td>设置首行缩进
                        ，它需要一个长度单位
                        ，如果是正值则首行向右移动
                        ，如果是负值则向左移动</td>
                </tr>
                <tr>
                    <td><mark>text-transform</mark></td>
                    <td>设置文本的大小写</td>
                </tr>
                <tr>
                    <td><mark>text-decoration</mark></td>
                    <td>设置文本修饰
                        <br>删除线，下划线等
                        <br>none underline overline line-through
                    </td>
                </tr>
                <tr>
                    <td><mark>line-hight</mark></td>
                    <td>行高
                        <br>文本默认都是在行高中垂直居中的
                        <br>通过line-height可以修改行高
                        <br>行间距 = 行高 - 字体大小
                    </td>
                </tr>
                <tr>
                    <td><mark>direction</mark></td>
                    <td>文本方向
                        <br>ltr 从左到右 默认值
                        <br>rtl 从右到左
                    </td>
                </tr>
                <tr>
                    <td><mark>letter-spacing</mark></td>
                    <td>字符之间的距离
                        <br>不是单词之间的距离
                        <br>支持汉字
                    </td>
                </tr>
                <tr>
                    <td><mark>word-spacing</mark></td>
                    <td>单词之间的距离
                        <br>不是字符之间的距离
                        <br>不支持汉字
                    </td>
                </tr>
                <tr>
                    <td><mark>white-space</mark></td>
                    <td>设置网页如何处理空白
                        <br>normal 去除空白和换行符，换行
                        <br>nowrap 去除空白和换行符，不换行
                        <br>pre 保留空白和换行符，不换行
                        <br>pre-line 保留空白和换行符，不换行
                        <br>pre-wrap 保留空白和换行符，换行
                    </td>
                </tr>
                <tr>
                    <td><mark>vertical-align</mark></td>
                    <td>指定行内元素（inline）或表格单元格（table-cell）元素的垂直对齐方式
                        <br>baseline 默认值 基线对齐
                        <br>top 顶部对齐
                        <br>bottom 底部对齐
                        <br>middle 居中对齐
                        <br>注意：不能用它垂直对齐块级元素。
                    </td>
                </tr>
                <tr>
                    <td>
                        <mark>text-shadow</mark>(css3)
                    </td>
                    <td>给文本添加阴影
                        <br>text-shadow: h-shadow v-shadow blur color;
                        <br>h-shadow 必需。水平阴影的位置。允许负值
                        <br>v-shadow 必需。垂直阴影的位置。允许负值
                        <br>blur 可选。模糊的距离
                        <br>color 可选。阴影的颜色
                    </td>
                </tr>
                <tr>
                    <td>
                        <mark>text-overflow</mark>(css3)
                    </td>
                    <td>如何处理文本溢出
                        <br>clip 修剪文本
                        <br>ellipsis 显示省略符号来代表被修剪的文本
                        <br>string 使用给定的字符串来代表被修剪的文本
                    </td>
                </tr>
                <tr>
                    <td>
                        <mark>text-stroke</mark>(css3)
                    </td>
                    <td>text-stroke：px width;
                        <br>表示给字体描边
                        <br>但是这个属性有严重的兼容问题
                        <br>使用方法：-webkit-text-stroke: 1px skyblue;
                    </td>
                </tr>
                <tr>
                    <td>
                        <mark>text-fill-color</mark>(css3)
                    </td>
                    <td>text-fill-color：color；
                        <br>文字的填充颜色
                        <br>这个属性有兼容性问题
                        <br>使用：-webkit-text-fill-color: white;
                    </td>
                </tr>
                <tr>
                    <td>
                        <mark>word-wrap</mark>(css3)
                    </td>
                    <td>允许对不可分割的单词进行分割并换行到下一行
                        <br>word-wrap: normal|break-word;
                        <br>normal 只在允许的断字点换行（浏览器保持默认处理）
                        <br>break-word：一般情况先不分割单词，除非单词长到一整行都放不下，才会分割到下一行
                    </td>
                </tr>
                <tr>
                    <td>
                        <mark>word-break</mark>(css3)
                    </td>
                    <td>规定非中日韩文本的换行规则
                        <br>word-break: normal|break-all|keep-all;
                        <br>normal 使用浏览器默认的换行规则
                        <br>break-all：在换行处分割所有遇到的单词
                        <br>keep-all：始终保留单词的完整性
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