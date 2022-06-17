<template>
    <div class="remlayout">
        <h2><mark>rem布局</mark>：</h2>
        <ul>
            <li class="des">rem是一个相对单位</li>
            <li class="des">em是相对于其父元素的字体大小</li>
            <li class="des">rem是相对于html的字体大小</li>
            <li class="des">优点就是可以通过修改html的字体大小来整体控制页面元素的大小</li>
        </ul>
        <h2><mark>rem布局解决的问题</mark>：</h2>
        <ul>
            <li class="des">页面文字能否随着屏幕大小发生变化</li>
            <li class="des">流式布局和flex布局主要针对宽度布局，如何设置高度</li>
            <li class="des">如何让屏幕发生变化的时候，元素高度和宽度等比例缩放</li>
        </ul>
        <h2><mark>rem+媒体查询+less技术方案</mark>：</h2>
        <ul>
            <li class="des">动态设置html—font-size大小
                <br>根据设计尺寸m
                <br>将屏幕划分为n等份
                <br>每一份作为html-font-size的大小为：m/n px
            </li>
            <li class="des">使用媒体查询，当屏幕宽度改变时，分的份数是不变，只是m改变了</li>
            <li class="des">这样就实现了，在不同的尺寸屏幕下，等比例的缩放页面元素的目的</li>
            <li class="des">页面元素rem值为 = 页面元素大小(px) / (m / n)px，记住单位为rem</li>
        </ul>
        <h2><mark>flexible.js+rem技术方案</mark></h2>
        <ul>
            <li class="des">利用js技术自动获取屏幕尺寸，划分为10等分</li>
            <li class="des">不需要再进行媒体查询了，并且变化是持续性的</li>
        </ul>
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>