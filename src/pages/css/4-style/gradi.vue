<template>
    <div class="gradi">
        <h2><mark>线性渐变（Linear Gradients）</mark>：</h2>
        <table>
            <thead>
                <tr>
                    <td width='25%'></td>
                    <td>描述</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>语法
                    </td>
                    <td><mark class="marksec">background-image:linear-gradient(direction,color-stop1, color-stop2, ...);</mark></td>
                </tr>
                <tr>
                    <td>
                        颜色分布
                    </td>
                    <td>均匀分布：默认的情况，每种颜色比例一样
                        <br>不均匀分布：在颜色后面加上百分比
                    </td>
                </tr>
                <tr>
                    <td>
                        渐变方向
                    </td>
                    <td><mark class="marksec">to left</mark>
                        <br><mark class="marksec">to right</mark>
                        <br><mark class="marksec">to bottom</mark>
                        <br><mark class="marksec">to top</mark>
                        <br>或者从某个角落开始，例如<mark class="marksec">to bottom right</mark>
                    </td>
                </tr>
                <tr>
                    <td>
                        角度方向
                    </td>
                    <td>角度同样是用来控制方向的，但是可以有更多的选择
                        <br>单位：deg
                        <br>0deg代表零度方向
                        <br>并且顺时针增加，相当于一个圆
                    </td>
                </tr>
                <tr>
                    <td>
                        重复的线性渐变</td>
                    <td><mark class="marksec">repeating-linear-gradient()</mark>
                        <br>用于重复线性渐变
                    </td>
                </tr>
            </tbody>
        </table>
        <h2><mark> 径向渐变（Radial Gradients）</mark>：</h2>
        <table>
            <thead>
                <tr>
                    <td width='25%'></td>
                    <td>描述</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>语法
                    </td>
                    <td><mark class="marksec">background-image:radial-gradient(shape size at position,start-color, ..., last-color);</mark></td>
                </tr>
                <tr>
                    <td>
                        颜色分布
                    </td>
                    <td>均匀分布：默认的情况，每种颜色比例一样
                        <br>不均匀分布：在颜色后面加上百分比
                    </td>
                </tr>
                <tr>
                    <td>
                        设置形状shape
                    </td>
                    <td>shape 参数定义了形状
                        <br><mark class="marksec">ellipse</mark> 表示椭圆形，默认值
                        <br><mark class="marksec">circle</mark> 表示圆形
                    </td>
                </tr>
                <tr>
                    <td>
                        尺寸大小size
                    </td>
                    <td>size 参数定义了渐变的大小
                        <br><mark class="marksec">closest-side</mark> 近边
                        <br><mark class="marksec">closest-corner </mark>近角
                        <br><mark class="marksec">farthest-side </mark>远边
                        <br><mark class="marksec">farthest-corner </mark>远角
                    </td>
                </tr>
                <tr>
                    <td>
                        位置position
                    </td>
                    <td>position参数定义了渐变中心的位置
                        <br>可以是x，y方向各自的百分比/px
                        <br>可以是方向名词：<mark class="marksec">top,left,right,bottom,center</mark>
                    </td>
                </tr>
                <tr>
                    <td>
                        重复的径向渐变</td>
                    <td><mark class="marksec">repeating-radial-gradient()</mark>
                        <br>用于重复径向渐变</td>
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