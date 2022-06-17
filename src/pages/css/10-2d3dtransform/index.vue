<template>
    <div class="2d3dtransform">
        <h2><mark>2D转换</mark>：</h2>
        <ul>
            <li class="des">可以对元素进行移动、缩放、转动、拉长或拉伸，只能作用于块元素</li>
            <li class="des"><mark class="marksec">transform: none|transform-functions;</mark></li>
        </ul>
        <table>
            <thead>
                <tr>
                    <td width='20%'>选项</td>
                    <td>描述</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><mark>translate()</mark> 移动</td>
                    <td><mark class="marksec">translate(x,y) </mark> 定义 2D 转换，沿着 X 和 Y 轴移动元素
                        <br><mark class="marksec">translateX(n) </mark>定义 2D 转换，沿着 X 轴移动元素
                        <br><mark class="marksec">translateY(n) </mark>定义 2D 转换，沿着 Y 轴移动元素
                        <br>x和y的单位如果为px：则是相对于其父元素进行移动
                        <br>x和y的单位如果为百分比：则是相对于其自身进行移动
                    </td>
                </tr>
                <tr>
                    <td><mark>scale()</mark> 缩放</td>
                    <td><mark class="marksec">scale(x,y)</mark>定义 2D 缩放转换，改变元素的宽度和高度
                        <br><mark class="marksec">scaleX(n)</mark>定义 2D 缩放转换，改变元素的宽度
                        <br><mark class="marksec">scaleY(n)</mark>定义 2D 缩放转换，改变元素的高度
                        <br>x，y，n表示倍数
                    </td>
                </tr>
                <tr>
                    <td><mark>rotate()</mark> 旋转</td>
                    <td><mark class="marksec">rotate(angle)</mark> 定义 2D 旋转，
                        <br>在参数中规定角度
                        <br>deg度数，默认为0度，顺时针旋转
                    </td>
                </tr>
                <tr>
                    <td><mark>skew()</mark> 倾斜</td>
                    <td><mark class="marksec">skew(x-angle,y-angle)</mark>定义 2D 倾斜转换，沿着 X 和 Y 轴
                        <br><mark class="marksec">skewX(angle)</mark>定义 2D 倾斜转换，沿着 X 轴
                        <br><mark class="marksec">skewY(angle)</mark>定义 2D 倾斜转换，沿着 Y 轴
                        <br>单位为deg度数
                        <br>第一个参数，垂直方向倾斜，方向为逆时针
                        <br>第二个参数，水平方向倾斜，方向为顺时针
                    </td>
                </tr>
                <tr>
                    <td><mark>matrix()</mark></td>
                    <td><mark class="marksec">matrix(n,n,n,n,n,n)</mark> 定义 2D 转换，使用六个值的矩阵
                        <br>相当于一种简写
                    </td>
                </tr>
                <tr>
                    <td><mark>transform-origin</mark></td>
                    <td>设置元素变换中心点
                        <br><mark class="marksec">transform-origin：x y；</mark>
                        <br>参数用空格隔开
                        <br>默认的中心点是：（50% 50%）
                        <br>可以给x y设置方位名词：<mark class="marksec">top bottom left right center</mark>
                    </td>
                </tr>
            </tbody>
        </table>
        <p style="text-indent:0"><mark class="markdes">如果想要一次性定义多个函数，必须一次性写完，顺序视具体场景决定，如果单独写，只会执行最后一个</mark></p>
        <h2><mark>3D转换</mark>：</h2>
        <ul>
            <li class="des">3d的特点：近大远小，物体后面遮挡不可见</li>
            <li class="des"><mark class="marksec">transform: none|transform-functions;</mark></li>
        </ul>
        <table>
            <thead>
                <tr>
                    <td width="20%">选项</td>
                    <td>描述</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><mark>translate3d</mark></td>
                    <td><mark class="marksec">translate3d(x,y,z) </mark>定义 3D 转换
                        <br><mark class="marksec">translateX(x)</mark>定义 3D 转化，仅使用用于 X 轴的值
                        <br><mark class="marksec">translateY(y) </mark>定义 3D 转化，仅使用用于 Y 轴的值
                        <br><mark class="marksec">translateZ(z) </mark>定义 3D 转化，仅使用用于 Z 轴的值
                    </td>
                </tr>
                <tr>
                    <td><mark>scale3d</mark></td>
                    <td><mark class="marksec">scale3d(x,y,z) </mark>定义 3D 缩放转换。
                        <br><mark class="marksec">scaleX(x) </mark>定义 3D 缩放转换，通过给定一个 X 轴的值
                        <br><mark class="marksec">scaleY(y) </mark>定义 3D 缩放转换，通过给定一个 Y 轴的值
                        <br><mark class="marksec">scaleZ(z) </mark>定义 3D 缩放转换，通过给定一个 Z 轴的值
                    </td>
                </tr>
                <tr>
                    <td><mark>rotate3d</mark></td>
                    <td><mark class="marksec">rotate3d(x,y,z,angle) </mark>定义 3D 旋转
                        <br>rotate3d(1,0,0,45deg)表示沿着x轴旋转45度
                        <br>这三个值之间具有矢量的关系
                        <br><mark class="marksec">rotateX(angle) </mark>定义沿 X 轴的 3D 旋转
                        <br><mark class="marksec">rotateY(angle) </mark>定义沿 Y 轴的 3D 旋转
                        <br><mark class="marksec">rotateZ(angle) </mark>定义沿 Z 轴的 3D 旋转
                        <br>默认为顺时针旋转
                    </td>
                </tr>
                <tr>
                    <td><mark>matrix3d</mark></td>
                    <td><mark class="marksec">matrix3d(n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n)</mark>
                        <br>定义 3D 转换，使用 16 个值的 4x4 矩阵
                        <br>相当于简写
                    </td>
                </tr>
                <tr>
                    <td><mark>perspective</mark></td>
                    <td>3D 元素的透视效果
                        <br>透视也称为视距，眼睛到屏幕的距离
                        <br>视距越小，成像越大，视距越大，成像越小（近大远小）
                        <br><mark class="marksec">perspective: number|none;</mark>
                        <br>number 元素距离视图的距离，以像素计。
                        <br>none 默认值。与 0 相同。不设置透视。
                        <br>注意：该属性必须写到被观察元素的父元素上面
                    </td>
                </tr>
                <tr>
                    <td><mark>transform-style</mark></td>
                    <td>规定子元素是否开启三维立体环境
                        <br><mark class="marksec">transform-style: flat|preserve-3d;</mark>
                        <br>flat 表示所有子元素在2D平面呈现。
                        <br>preserve-3d 表示所有子元素在3D空间中呈现。
                        <br>该属性写在父元素中，但是受影响的是子元素
                    </td>
                </tr>
                <tr>
                    <td><mark>transform-origin</mark></td>
                    <td>允许你改变被转换元素的位置
                        <br><mark class="marksec">transform-origin: x-axis y-axis z-axis;</mark>
                        <br>x-axis
                        <br>定义视图被置于 X 轴的何处。可能的值：left center right length %
                        <br>y-axis
                        <br>定义视图被置于 Y 轴的何处。可能的值：top center bottom length %
                        <br>z-axis
                        <br>定义视图被置于 Z 轴的何处。可能的值：length
                    </td>
                </tr>
                <tr>
                    <td><mark>perspective-origin</mark></td>
                    <td>规定 3D 元素的底部位置
                        <br><mark class="marksec">perspective-origin: x-axis y-axis;</mark>
                        <br>x-axis
                        <br>定义该视图在 x 轴上的位置。默认值：50%。
                        <br>可能的值：left center right length %
                        <br>y-axis
                        <br>定义该视图在 y 轴上的位置。默认值：50%。
                        <br>可能的值：top center bottom length %
                    </td>
                </tr>
                <tr>
                    <td><mark>backface-visibility</mark></td>
                    <td>定义元素在不面对屏幕时是否可见
                        <br><mark class="marksec">backface-visibility: visible|hidden;</mark>
                        <br>visible 背面是可见的。
                        <br>hidden 背面是不可见的。
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