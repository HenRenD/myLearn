<template>
    <div class="border">
        <h2><mark>边框和圆角</mark>：</h2>
        <table>
            <thead>
                <tr>
                    <td width='20%'>样式属性</td>
                    <td>描述</td>
                    <td></td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><mark>border-style</mark></td>
                    <td>设置边框线条的样式
                        <br>比如是虚线还是实线
                        <br><mark class="marksec">border-bottom-style</mark>
                        <br><mark class="marksec">border-left-style</mark>
                        <br><mark class="marksec">border-right-style</mark>
                        <br><mark class="marksec">border-top-style</mark>
                    </td>
                    <td rowspan="4">四个值
                        <br>border-width : 10px 20px 30px 40px;
                        <br>border-width : 上 右 下 左;
                        <br>三个值
                        <br>border-width : 10px 20px 30px;
                        <br>border-width : 上 左右 下 ;
                        <br>两个值
                        <br>border-width : 10px 20px;
                        <br>border-width : 上下 左右 ;
                        <br>一个值
                        <br>border-width : 10px;
                        <br>border-width : 上下左右 ;
                        <br>可以单独设置某一边的样式
                        <br>border-left
                        <br>border-top
                        <br>border-right
                        <br>border-bottom
                    </td>
                </tr>
                <tr>
                    <td><mark>border-width</mark></td>
                    <td>用于为元素的所有边框设置宽度
                        <br>或者单独地为各边边框设置宽度
                        <br><mark class="marksec">border-bottom-width</mark>
                        <br><mark class="marksec">border-left-width</mark>
                        <br><mark class="marksec">border-right-width</mark>
                        <br><mark class="marksec">border-top-width</mark>
                    </td>
                </tr>
                <tr>
                    <td><mark>border-color</mark></td>
                    <td>设置元素的所有边框中可见部分的颜色
                        <br>或为4个边分别设置颜色
                        <br><mark class="marksec">border-bottom-color</mark>
                        <br><mark class="marksec">border-left-color</mark>
                        <br><mark class="marksec">border-right-color</mark>
                        <br><mark class="marksec">border-top-color</mark>
                    </td>
                </tr>
                <tr>
                    <td><mark>border</mark></td>
                    <td>简写属性：
                        <br>例如：border：1px solid red;
                    </td>
                </tr>
                <tr>
                    <td><mark>outline</mark></td>
                    <td>获得焦点时的边框
                        <br>例如：input获取焦点时的边框
                        <br>outline：1px solid red;
                        <br>和border的区别：
                        <br>border会影响布局
                        <br>outline不会影响布局
                        <br>outline是由状态影响的，通常类似于:active状态，例如被点击时，获取焦点时
                    </td>
                    <td><mark class="marksec">outline-color</mark>：指定outline的颜色
                        <br><mark class="marksec">outline-width</mark>：指定outline的宽度
                        <br><mark class="marksec">outline-style</mark>：指定outline的样式，例如虚线
                        <pre><mark class="marksec">outline-offset</mark>：指定outline的偏移：
        相当于padding
        设置轮廓框架在 border 边缘外的偏移
        outline-offset: length|inherit:
        length 轮廓与边框边缘的距离。
        inherit 规定应从父元素继承 outline-offset 属性的值。</pre>
                    </td>
                </tr>
                <tr>
                    <td>
                        <mark>border-radius</mark>(css3)
                    </td>
                    <td colspan="2">该属性给边框添加圆角
                        <br><mark class="marksec">border-top-left-radius</mark> 定义了左上角的弧度
                        <br><mark class="marksec">border-top-right-radius </mark>定义了右上角的弧度
                        <br><mark class="marksec">border-bottom-right-radius </mark>定义了右下角的弧度
                        <br><mark class="marksec">border-bottom-left-radius</mark> 定义了左下角的弧度
                        <br>可以采用简写形式
                    </td>
                </tr>
                <tr>
                    <td>
                        <mark>border-image</mark>(css3)
                    </td>
                    <td colspan="2">使用图片创建边框
                        <br><mark class="marksec">border-image-source</mark> 用于指定要用于绘制边框的图像的位置
                        <br><mark class="marksec">border-image-slice</mark> 图像边界向内偏移
                        <br><mark class="marksec">border-image-width</mark> 图像边界的宽度
                        <br><mark class="marksec">border-image-outset</mark> 用于指定在边框外部绘制 border-image-area 的量
                        <br><mark class="marksec">border-image-repeat</mark> 用于设置图像边界是否应重复（repeat）、拉伸（stretch）或铺满（round）。
                        <br>可以采用简写形式
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