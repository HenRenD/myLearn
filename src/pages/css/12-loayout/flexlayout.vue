<template>
    <div class="flexlayout">
        <h2>
            <mark>flex布局</mark>：
        </h2>
        <ul>
            <li class="des">弹性布局，任何容器都可以指定flex布局</li>
            <li class="des">通过给父元素设置flex属性，来控制子元素的排列</li>
            <li class="des">子元素的float，clear，vertical-align属性失效</li>
        </ul>
        <h2><mark>flex布局父项属性</mark>：</h2>
        <table>
            <thead>
                <tr>
                    <td width="30%">属性</td>
                    <td>描述</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><mark>flex-direction</mark></td>
                    <td>设置主轴的方向
                        <br><mark class="marksec">row</mark>：从左到右
                        <br><mark class="marksec">row-reverse</mark>：从右到左
                        <br><mark class="marksec">column</mark>：从上到下
                        <br><mark class="marksec">column-reverse</mark>：从下到上
                    </td>
                </tr>
                <tr>
                    <td><mark>justify-content</mark></td>
                    <td>主轴元素排列方式
                        <br><mark class="marksec">flex-start</mark>：从左边/上边对齐
                        <br><mark class="marksec">flex-end</mark>：从右边/下边对齐
                        <br><mark class="marksec">center</mark>：居中对齐
                        <br><mark class="marksec">space-around</mark>：平分剩余空间
                        <br><mark class="marksec">space-between</mark>：两边贴，中间平分
                    </td>
                </tr>
                <tr>
                    <td><mark> align-items / align-content</mark></td>
                    <td>侧轴元素排列方式
                        <pre>align-items(单行)：
            <mark class="marksec">flex-start</mark>：从上到下/从左到右
            <mark class="marksec">flex-end</mark>：从下到上/从右到左
            <mark class="marksec">center</mark>：居中对齐
            <mark class="marksec">stretch</mark>：拉伸，默认值
align-content(多行)：
            <mark class="marksec">flex-start</mark>：从侧轴的头部开始排列
            <mark class="marksec">flex-end</mark>：从侧轴尾部开始排列
            <mark class="marksec">center</mark>：侧轴居中显示
            <mark class="marksec">space-around</mark>：在侧轴平分剩余空间
            <mark class="marksec">space-between</mark>：在侧轴两边贴，中间平分剩余空间
            <mark class="marksec">stretch</mark>：子项高度平分父元素高度</pre>
                    </td>
                </tr>
                <tr>
                    <td><mark>flex-wrap</mark></td>
                    <td>子元素是否换行
                        <br><mark class="marksec">nowarp</mark>：默认值，不换行
                        <br><mark class="marksec">warp</mark>：换行
                    </td>
                </tr>
                <tr>
                    <td><mark>flex-flow</mark></td>
                    <td>简写属性
                        <br><mark class="marksec">flex-flow：row wrap;</mark>
                        <br>可以同时设置主轴方向和是否换行
                    </td>
                </tr>
            </tbody>
        </table>
        <h2><mark>flex布局子项属性</mark>：</h2>
        <table>
            <thead>
                <tr>
                    <td width="30%">属性</td>
                    <td>描述</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><mark>flex</mark></td>
                    <td>子项所占的份数
                        <br><mark class="marksec">flex：number</mark> 默认为0
                        <br>该属性给子项设置，表示子项在父元素中占几份
                        <br>注意，是在剩余空间中
                        <br>也可以写百分比
                    </td>
                </tr>
                <tr>
                    <td><mark> align-self</mark></td>
                    <td>控制子项自己在侧轴的排列
                        <br><mark class="marksec">align-self</mark>
                        <br>继承父属性，align-items
                        <br>但是只作用与当前子元素本身
                    </td>
                </tr>
                <tr>
                    <td><mark>order</mark></td>
                    <td>定义子项的排列顺序
                        <br><mark class="marksec">order:number</mark>
                        <br>默认为零，数值越小排序越靠前
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