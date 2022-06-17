<template>
    <div class="tiaozhenghezi">
        <h2><mark>调整盒子</mark>：</h2>
        <table>
            <thead>
                <tr>
                    <td width='20%'>属性</td>
                    <td>值</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><mark>display</mark></td>
                    <td>设置元素的显示类型
                        <br><mark class="marksec">none</mark> 元素不会在页面中显示，并且不会占据页面的位置，像一些元数据标签的display属性默认为none
                        <br><mark class="marksec">block</mark> 此元素将显示为块级元素
                        <br><mark class="marksec">inline</mark> 元素会作为行内元素显示
                        <br><mark class="marksec">inline-block</mark> 元素会作为行内块元素显示，既具有内联元素的特点也具有块元素的特点
                    </td>
                </tr>
                <tr>
                    <td><mark>overflow</mark></td>
                    <td>设置元素如何处理溢出内容
                        <br><mark class="marksec">visible</mark> 默认值，不会处理溢出的内容，在父元素以外的地方显示
                        <br><mark class="marksec">hidden</mark> 溢出的内容会被隐藏不会显示
                        <br><mark class="marksec">scroll</mark> 在父元素中同时添加水平和垂直方向的滚动条，不论内容是否溢出都会添加滚动条
                        <br><mark class="marksec">auto</mark> 根据需要自动生成滚动条
                    </td>
                </tr>
                <tr>
                    <td><mark>visibility</mark></td>
                    <td>设置元素是否在页面中显示
                        <br><mark class="marksec">visible</mark> 默认值，元素在页面中正常显示
                        <br><mark class="marksec">hidden</mark> 元素不在页面中显示，但是依然在页面中占据位置
                    </td>
                </tr>
                <tr>
                    <td><mark>resize</mark></td>
                    <td>指定一个元素是否是由用户调整大小
                        <br><mark class="marksec">resize</mark> none|both|horizontal|vertical:
                        <br><mark class="marksec">none</mark> 用户无法调整元素的尺寸。
                        <br><mark class="marksec">both</mark> 用户可调整元素的高度和宽度。
                        <br><mark class="marksec">horizontal</mark> 用户可调整元素的宽度。
                        <br><mark class="marksec">vertical</mark> 用户可调整元素的高度。
                    </td>
                </tr>
                <tr>
                    <td><mark>box-sizing</mark>(css3)</td>
                    <td>允许你定义盒子大小的计算方式
                        <br><mark class="marksec">box-sizing</mark> content-box|border-box|inherit:
                        <br><mark class="marksec">content-box</mark> 盒子的实际大小包含边框和边距
                        <br><mark class="marksec">border-box</mark> 盒子的实际大小就是设置的大小
                        <br><mark class="marksec">inherit</mark> 指定 box-sizing 属性的值，应该从父元素继承
                    </td>
                </tr>
                <tr>
                    <td><mark>box-shadow</mark>(css3)</td>
                    <td>该属性给盒子添加阴影
                        <br><mark class="marksec">h-shadow</mark> 必需的。水平阴影的位置。允许负值
                        <br><mark class="marksec">v-shadow</mark> 必需的。垂直阴影的位置。允许负值
                        <br><mark class="marksec">blur</mark> 可选。模糊距离
                        <br><mark class="marksec">spread </mark>可选。阴影的大小
                        <br><mark class="marksec">color </mark>可选。阴影的颜色。在CSS颜色值寻找颜色值的完整列表
                        <br><mark class="marksec">inset</mark> 可选。从外层的阴影（开始时）改变阴影内侧阴影
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