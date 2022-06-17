<template>
    <div class="trans">
        <h2><mark>opacity</mark>：</h2>
        <ul>
            <li class="des">用来设置背景的不透明度
                <br>可选值
                <br>0-1
                <br>0表示完全透明
                <br>1表示完全不透明
                <br>0.5半透明
                <br>IE8及以下的浏览器不支持该样式，可以使用滤镜来代替
                <br>filter:alpha(opacity=值)
                <br>这里值需要一个0-100之间的值
                <br>0相当于完全透明
                <br>100完全不透明
            </li>
        </ul>
        <h2><mark>transparent</mark>：</h2>
        <ul>
            <li class="des">一个参数值，并不是属性，代表一种颜色，透明色</li>
        </ul>
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>