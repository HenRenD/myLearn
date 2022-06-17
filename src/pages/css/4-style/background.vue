<template>
    <div class="background">
        <h2><mark>背景</mark>：</h2>
        <table>
            <thead>
                <tr>
                    <td width='30%'>样式属性</td>
                    <td>描述</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><mark>background-color</mark></td>
                    <td>背景颜色</td>
                </tr>
                <tr>
                    <td><mark>background-image</mark></td>
                    <td>背景图片
                        <br>需要一个url地址作为参数
                        <br>例子：background-image:url(图片的路径)
                    </td>
                </tr>
                <tr>
                    <td><mark>background-repeat</mark></td>
                    <td>设置背景图片重复方式
                        <br><mark class="marksec">repeat</mark>：默认值，背景图片会平铺显示，沿x轴和y轴双方向重复
                        <br><mark class="marksec">no-repeat</mark>：背景图片不重复
                        <br><mark class="marksec">repeat-x</mark>：背景图片沿水平方向重复
                        <br><mark class="marksec">repeat-y</mark>：背景图片沿垂直方向重复
                    </td>
                </tr>
                <tr>
                    <td><mark>background-position</mark></td>
                    <td>设置背景图片的位置
                        <br>设置方式一
                        <pre>    可以直接通过几个位置的关键字来设置图片的位置
        <mark class="marksec">top</mark>   <mark class="marksec">left  </mark> <mark class="marksec">right</mark>   <mark class="marksec">bottom </mark>  <mark class="marksec">center</mark>
        可以通过以上关键字两两组合的形式，将背景图片设置到元素的任意位置
        如果仅仅指定一个值，则第二个值默认是center</pre>
                        设置方式二
                        <pre>    可以直接指定两个值，来设置背景图片的偏移量
        例子：
        background-position : x轴偏移量 y轴偏移量;
        正右负左，正下负上</pre>
                    </td>
                </tr>
                <tr>
                    <td><mark>background-attachment</mark></td>
                    <td>用来设置背景是否随页面滚动
                        <br><mark class="marksec">scroll</mark>：默认值，背景图片会随页面一起滚动
                        <br><mark class="marksec">fixed</mark>：背景图片不随页面滚动，会固定在页面的指定位置
                        <br>设置该属性的背景，则背景会永远相对于浏览器窗口进行定位
                        <br>一般这种背景都会设置给body
                    </td>
                </tr>
                <tr>
                    <td><mark>background</mark></td>
                    <td>背景的简写属性
                        <br>可以通过它来设置所有的背景相关的样式
                        <br>该简写属性没有顺序的要求，也没有数量的要求，不写的属性使用默认值
                    </td>
                </tr>
                <tr>
                    <td><mark>background-size</mark>(css3)</td>
                    <td> 设置背景图片的大小
                        <br>第一个值表示宽度 第二个值表示高度，如果只写一个，则第二个值默认是 auto
                        <br><mark class="marksec">cover</mark> 图片的比例不变，将元素铺满
                        <br><mark class="marksec">contain</mark>图片比例不变，将图片在元素中完整显示
                    </td>
                </tr>
                <tr>
                    <td><mark>background-origin</mark>(css3)</td>
                    <td> 背景图像的位置区域(针对背景图片)
                        <br>background-origin 属性规定 background-position 属性相对于什么位置来定位。
                        <br>可选值
                        <br><mark class="marksec">padding-box</mark> 默认值：背景图片从内边距处开始计算
                        <br><mark class="marksec">content-box</mark>：背景图片从内容区处计算
                        <br><mark class="marksec">border-box</mark>：背景图片从边框处开始计算
                    </td>
                </tr>
                <tr>
                    <td><mark>background-clip</mark>(css3)</td>
                    <td> 设置背景的范围(针对背景颜色)
                        <br>可选值
                        <br><mark class="marksec">border-box</mark> 默认值：背景会出现在边框的下边
                        <br><mark class="marksec">padding-box</mark>：背景不会出现在边框，只出现在内容区和内边距
                        <br><mark class="marksec">content-box</mark>：背景只会出现在内容区
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