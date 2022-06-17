<template>
    <div class="boxmodel">
        <h2><mark>盒子模型</mark>：</h2>
        <img style="width:500px" src="../image/boxmodel.png">
        <h2><mark>盒子构成</mark>：</h2>
        <table>
            <thead>
                <tr>
                    <td width="20%">项</td>
                    <td>描述</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>内容区</td>
                    <td>内容区相当于盒子存放东西的空间，内容区在盒子的最里边
                        <br>元素的所有的子元素都是放在父元素的内容区
                        <br>内容区设置
                        <br><mark class="marksec">width</mark>：内容区的宽度
                        <br><mark class="marksec">height</mark>：内容区的高度
                    </td>
                </tr>
                <tr>
                    <td>内边距</td>
                    <td>内边距指的是内容区和边框之间的距离，内边距会影响盒子的大小
                        <br>盒子中一共有四个方向的内边距
                        <br><mark class="marksec">padding-top</mark>
                        <br><mark class="marksec">padding-right</mark>
                        <br><mark class="marksec">padding-bottom</mark>
                        <br><mark class="marksec">padding-left</mark>
                        <br><mark class="marksec">padding</mark>
                        <br>padding:上 右 下 左
                        <br>padding:上 左右 下
                        <br>padding:上下 左右
                    </td>
                </tr>
                <tr>
                    <td>边框</td>
                    <td>设置边框需要同时设置三个样式，缺一不可
                        <br>边框盒子可见框最外侧，边框是盒子的边缘
                        <br><mark class="marksec">border</mark>也包含在可见框之内
                    </td>
                </tr>
                <tr>
                    <td>外边距</td>
                    <td>外边距是指盒子和其他盒子之间的距离，
                        <br>外边距不会影响可见框的大小，但是会影响盒子的位置
                        <br>也是具有四个方向的外边距
                        <br><mark class="marksec">margin-top</mark>
                        <br><mark class="marksec">margin-right</mark>
                        <br><mark class="marksec">margin-bottom</mark>
                        <br><mark class="marksec">margin-left</mark>
                        <br>简写属性
                        br<mark class="marksec">margin</mark>：规则和padding一致
                        <br>margin值可以设置为auto
                        <br>如果单独将左右外边距设置为auto，则会将左或右外边距设置为最大值
                        <br>如果同时将左右外边距设置为auto，则会将左右外边距设置为一个相等的值，通过这种方式使一个子元素在它的父元素中水平居中
                        <br>如果将margin设置为负值，则元素会向相反的方向移动
                    </td>
                </tr>
            </tbody>
        </table>
        <h2><mark>盒子水平布局</mark>：</h2>
        <ul>
            <li class="des"><mark class="marksec">margin-left+border-left+padding-left+width+padding-right+border-right+margin-right = 其父元素内容区的宽度 （必须满足）</mark></li>
            <li class="des">以上等式必须满足，如果相加结果使等式不成立，则称为过度约束，则等式会自动调整</li>
            <li class="des">如果这七个值中没有为 auto 的情况，则浏览器会自动调整margin-right值以使等式满足</li>
            <li class="des">如果将两个外边距设置为auto，宽度固定值，则会将外边距设置为相同的值</li>
            <li class="des">所以我们经常利用这个特点来使一个元素在其父元素中水平居中</li>
        </ul>
        <h2><mark>垂直方向外边距折叠</mark>：</h2>
        <ul>
            <li class="des">相邻的垂直方向外边距会发生重叠现象</li>
            <li class="des"><mark>兄弟元素</mark>间的相邻垂直外边距会取两者之间的较大值（两者都是正值）
                <br>如果相邻的外边距一正一负，则取两者的和
                <br>如果相邻的外边距都是负值，则取两者中绝对值较大的
                <br>兄弟元素之间的外边距的重叠，对于开发是有利的，所以我们不需要进行处理
            </li>
            <li class="des"><mark>父子元素</mark>间相邻外边距，子元素的会传递给父元素（上外边距）
                <br>父子外边距的折叠会影响到页面的布局，必须要进行处理
                <br>为父元素定义上边框
                <br>为父元素定义内边距
                <br>为父元素添加overflow:hidden
            </li>
        </ul>
        <h2><mark>行内元素的盒子模型</mark>：</h2>
        <ul>
            <li class="des"><mark>width/height</mark>：不支持</li>
            <li class="des"><mark>padding</mark>：支持水平方向的padding，垂直方向的padding也支持，但是不会影响布局</li>
            <li class="des"><mark>border</mark>：支持四个方向边框，但是垂直的边框不会影响布局</li>
            <li class="des"><mark>margin</mark>：支持水平方向外边距，不支持垂直方向的</li>
        </ul>
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>