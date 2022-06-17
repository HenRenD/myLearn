<template>
    <div class="position">
        <h2><mark>position</mark>定位：</h2>
        <table>
            <thead>
                <tr>
                    <td width='20%'>类型</td>
                    <td>特点</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><mark>relative(相对定位)</mark></td>
                    <td>1.开启元素的相对定位后，如果不设置偏移量元素不会发生任何变化
                        <br>2.相对定位元素相对于其自身在文档流中的位置来定位
                        <br>3.相对定位的元素不会脱离文档流
                        <br>4.相对定位不会改变元素的性质，块元素还是块元素，内联元素还是内联元素
                        <br>5.相对定位的元素会提升一个层级
                        <br>一般来说是作为绝对定位的参考
                    </td>
                </tr>
                <tr>
                    <td><mark>absolute(绝对定位)</mark></td>
                    <td>1.元素设置绝对定位以后，如果不设置偏移量，元素的位置不会发生变化
                        <br>2.以开启了定位的最近的祖先元素作为基准定位，如果没有则以浏览器窗口定位
                        <br>3.绝对定位的元素会完全脱离文档流以及文本流
                        <br>4.行内元素开启绝对定位，会变成行内块
                        <br>5.绝对定位会使元素提升一个层级
                    </td>
                </tr>
                <tr>
                    <td><mark>fixed(固定定位)</mark></td>
                    <td>1.固定定位是一种特殊的绝对定位，它的特点大部分都和绝对定位一样
                        <br>2.不同的是，固定定位的元素永远都是相对于浏览器窗口进行定位的，并且他不会随滚动条滚动
                        <br>3.IE6不支持固定定位
                    </td>
                </tr>
                <tr>
                    <td><mark>sticky(粘滞定位)</mark></td>
                    <td>1.粘滞定位和相对定位的特点基本一致
                        <br>2.不会脱离文档流
                        <br>3.不同的是粘滞定位可以在元素到达某个位置时将其固定，
                        <br>4.并且是相对浏览器窗口定位
                    </td>
                </tr>
            </tbody>
        </table>
        <h2><mark>偏移量</mark>：</h2>
        <table>
            <thead>
                <tr>
                    <td width="20%">选项</td>
                    <td>描述</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><mark>left</mark></td>
                    <td>元素距离定位位置的左侧距离</td>
                </tr>
                <tr>
                    <td><mark>right</mark></td>
                    <td>元素距离定位位置的右侧距离</td>
                </tr>
                <tr>
                    <td><mark>top</mark></td>
                    <td>元素距离定位位置的上边距离</td>
                </tr>
                <tr>
                    <td><mark>bottom</mark></td>
                    <td>元素距离定位位置的下边距离</td>
                </tr>
            </tbody>
        </table>
        <h2><mark>z-index层级</mark>：</h2>
        <ul>
            <li class="des">定位元素 > 浮动元素 > 文档流中的元素</li>
            <li class="des">当元素开启了定位以后，可以通过<mark class="marksec">z-index</mark>来设置元素的层级</li>
            <li class="des"><mark class="marksec">z-index</mark>值越高元素越优先显示</li>
            <li class="des">如果<mark class="marksec">z-index</mark>值一样，或者都没有<mark class="marksec">z-index</mark>则优先显示最后出现的元素</li>
            <li class="des">父元素永远不会盖住子元素</li>
        </ul>
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>