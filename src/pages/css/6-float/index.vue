<template>
    <div class="float">
        <h2><mark>float浮动</mark>：</h2>
        <ul>
            <li class="des"><mark class='marksec'>none</mark>默认值：不浮动，元素在文档流中</li>
            <li class="des"><mark class='marksec'>left</mark>：元素向左浮动</li>
            <li class="des"><mark class='marksec'>right</mark>：元素向右浮动</li>
        </ul>
        <h2><mark>浮动元素的特点：</mark></h2>
        <ul>
            <li class="des">元素浮动以后会完全脱离文档流</li>
            <li class="des">浮动以后元素会一直向父元素的最上方移动，直到遇到父元素的边框或者其他的浮动元素，会停止移动</li>
            <li class="des">如果浮动元素的上边是一个块元素，则浮动元素不会覆盖块元素</li>
            <li class="des">浮动元素不会超过他上边的浮动的兄弟元素，最多一边齐</li>
            <li class="des">浮动元素不会脱离文本流，因为浮动的出现本来是为了解决文字环绕问题的</li>
            <li class="des">块元素不会独占一行，高度和宽度都被内容撑开</li>
            <li class="des">行内元素脱离文档流以后会变成行内块元素</li>
        </ul>
        <h2><mark>高度塌陷与清除浮动</mark>：</h2>
        <h3><mark class="marksec">clear</mark>：</h3>
        <ul>
            <li class="des">作用：清除浮动元素对当前元素所产生的影响</li>
            <li class="des">left：清除左侧浮动元素对当前元素的影响</li>
            <li class="des">right：清除右侧浮动元素对当前元素的影响</li>
            <li class="des">both：清除两侧中最大影响的那侧</li>
            <li class="des">原理：设置清除浮动以后，浏览器会自动为元素添加一个上外边距，以使其位置不受其他元素的影响</li>
        </ul>
        <h3><mark class="marksec">高度塌陷</mark>：</h3>
        <ul>
            <li class="des">父元素在文档流中高度默认是被子元素撑开的，当子元素脱离文档流以后，将无法撑起父元素的高度，也就会导致父元素的高度塌陷</li>
            <li class="des">父元素的高度一旦塌陷所有元素的位置将会上移，导致整个页面的布局混乱</li>
        </ul>
        <h3><mark class="marksec">解决高度塌陷：</mark></h3>
        <table>
            <thead>
                <tr>
                    <td width='20%'>方法</td>
                    <td>描述</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>开启bfc</td>
                    <td>BFC 全称 Block Formatting Context，块级格式化上下文
                        <br>默认是在关闭状态的
                        <br>BFC父元素与子元素的外边距不会重叠，子元素之间的垂直外边距会重叠
                        <br>BFC的区域不会与float box重叠，也就是开启BFC的元素不会被浮动元素所覆盖
                        <br>BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素，反之也如此
                        <br>开启BFC的元素可以包含浮动子元素，计算BFC的高度时，浮动元素也参与计算
                        <br><mark class="marksec">开启方式</mark>：
                        <br>1、根元素 -- HTML元素
                        <br>2、float属性不为none
                        <br>3、position为absolute或fixed
                        <br>4、display为inline-block, table-cell, table-caption, flex, inline-flex，
                        <br>5、overflow不为visible
                        <br>6、flow-root 意为：触发BFC 兼容不太好 css新加的
                    </td>
                </tr>
                <tr>
                    <td>隔墙法(额外标签法)</td>
                    <td>
                        <br>在塌陷的父元素的最后添加一个空白的div，
                        然后对该div进行清除浮动
                        <pre>
    &lt;div class="box1">
        &lt;div class="box2" style='float:left'>&lt;/div>
        &lt;div style="clear:both">&lt;/div>
    &lt;/div>
    </pre>
                        使用这种方式会在页面中添加多余的结构，不推荐
                    </td>
                </tr>
                <tr>
                    <td>after伪元素(推荐)</td>
                    <td>
                        使用after伪类，向父元素后添加一个块元素，并对其清除浮动
                        <br>该种方式的原理和额外标签法原理一样，但是不用向页面中添加多余的结构
    <pre>.clearfix:after{
        content:"";
        display:block;
        height:0;
        visibility:hidden;
        clear:both;
    }
    .clearfix{
        zoom:1;
    }</pre>
                        zoom:1是为了兼容ie
                    </td>
                </tr>
                <tr>
                    <td>双伪元素</td>
                    <td>
                        <pre>.clearfix:before,.clearfix:after {
        content: "";
        display: block;
        clear: both;
    }
    .clearfix {
        zoom: 1;
    }</pre>
                        这种方法是after方法的改良版
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