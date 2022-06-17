<template>
    <div class="dagnbenliu">
        <h2><mark>文档流</mark>：</h2>
        <h3><mark class="marksec">什么是文档流？</mark>：</h3>
        <ul>
            <li class="des">文档流是相对于盒子模型来说的</li>
            <li class="des">文档流是网页的基础，是网页的最底层，所有的元素默认都是在文档流中排列</li>
            <li class="des">元素在文档流中默认自左向右，自上向下排列（和我们的书写习惯一致）</li>
        </ul>
        <h3><mark class="marksec">文档流中的块元素</mark>：</h3>
        <ul>
            <li class="des">块元素在文档流中自上向下排列</li>
            <li class="des">块元素在文档流中宽度默认是父元素的100%</li>
            <li class="des">块元素在文档流中高度默认被内容撑开</li>
        </ul>
        <h3><mark class="marksec">文档流中的行内元素</mark>：</h3>
        <ul>
            <li class="des">内联元素在文档流中自左向右排列，如果一行中不足以容下所有的内联元素，则换到下一行，继续自左至右排列</li>
            <li class="des">内联元素在文档流中宽度和高度默认都被内容撑开</li>
        </ul>
        <h2><mark>文本流</mark>：</h2>
        <ul>
            <li class="des">文本流是相对于文字段落讲的，文本流出现在绝对定位或者固定定位的场景</li>
        </ul>
        <h2><mark>两者的异同</mark>：</h2>
        <ul>
            <li class="des">脱离文档流的方式有三种：
                <br>浮动
                <br>绝对定位
                <br>固定定位
            </li>
            <li class="des"><mark class="marksec">以浮动的方式脱离文档流</mark>：
                <br>其他元素会无视浮动元素所占据了的区域，直接在它身下布局
                <br>但是<mark class="markdes">文字却会认同浮动元素所占据的区域，围绕它布局，也就是没有拖出文本流</mark>
            </li>
            <li class="des"><mark class="marksec">以定位的方式脱离文档流</mark>：
                <br><mark class="markdes">不仅元素盒子会脱离文档流，文字也会脱离文本流</mark>，直接在其身下布局
            </li>
        </ul>
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>