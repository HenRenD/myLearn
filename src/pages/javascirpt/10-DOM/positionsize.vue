<template>
    <div class="positionsiz">
        <h2><mark>知识点</mark>：</h2>
        <ul>
            <li class="des">偏移尺寸：
                <br><mark class="marksec">offsetWidth</mark> / <mark class="marksec">offsetHeight</mark> / <mark class="marksec">offsetLeft</mark> / <mark class="marksec">offsetTop</mark>
            </li>
            <li class="des">客户端尺寸：
                <br><mark class="marksec">clientWidth</mark> / <mark class="marksec">clientHeight</mark>

            </li>
            <li class="des">滚动尺寸：
                <br><mark class="marksec">scrollWidth</mark> / <mark class="marksec">scrollHeight</mark> / <mark class="marksec">scrollTop</mark> / <mark class="marksec">scrollLeft</mark>
            </li>
            <li class="des">确定元素尺寸：
                <br><mark class="marksec">getBoundingClientRect()</mark>
            </li>
        </ul>
        <h2><mark>偏移尺寸</mark>：</h2>
        <ul>
            <li class="des"><mark class="marksec">offsetWidth</mark></li>
            <li class="des"><mark class="marksec">offsetHeight</mark></li>
            <li class="des"><mark class="marksec">offsetTop</mark></li>
            <li class="des"><mark class="marksec">offsetLeft</mark></li>
            <li class="des">offsetHeight / offsetHeight分别返回元素的高宽</li>
            <li class="des">offsetLeft / offsetTop必须在元素开启了定位才会返回正确的结果，否则会以body作为基准</li>
        </ul>
        <img src="../image/offset.png" alt="">
        <pre class="contentarea" v-highlight><code>    &lt;div class="hello" style="width:200px;height:200px;position: relative;">
            &lt;div class="son" style="width: 50px;height: 50px;position: absolute;left:20px;top:20px">&lt;/div>
        &lt;/div>
        let son = document.querySelector('.son')
        console.log(son.offsetWidth)        // 50
        console.log(son.offsetHeight)       // 50
        console.log(son.offsetLeft)     // 20
        console.log(son.offsetTop)      // 20</code></pre>
        <h2><mark>客户端尺寸</mark>：</h2>
        <ul>
            <li class="des"><mark class="marksec">clientHeight</mark></li>
            <li class="des"><mark class="marksec">clientWidth</mark></li>
            <li class="des">返回元素的宽高，不包含边框和外边距</li>
        </ul>
        <img src="../image/client.png" alt="">
        <pre class="contentarea" v-highlight><code>    &lt;div class="content" style="width: 200px;height: 200px;padding: 10px;margin: 10px;border: 10px solid red;">&lt;/div>
        let div = document.querySelector('.content')
        console.log(div.clientHeight)       // 200 + 10 + 10 = 220 
        console.log(div.clientWidth)        // // 200 + 10 + 10 = 220 </code></pre>
        <h2><mark>滚动尺寸</mark>：</h2>
        <ul>
            <li class="des"><mark class="marksec">scrollHeight</mark>：元素总的高度</li>
            <li class="des"><mark class="marksec">scrollWidth</mark>：元素总的宽度</li>
            <li class="des"><mark class="marksec">scrollLeft</mark>：元素左侧被卷去的宽度</li>
            <li class="des"><mark class="marksec">scrollTop</mark>：元素上部被卷去的高度</li>
        </ul>
        <img src="../image/scroll.png" alt="">
        <h2><mark>确定元素尺寸</mark>：</h2>
        <ul>
            <li class="des"><mark class="marksec">getBoundingClientRect()</mark></li>
            <ul>
                <li class="des">浏览器在每个元素上都暴露了该方法
                    <br>返回一个 DOMRect 对象，包含6 个属性：
                    <br>left、top、right、bottom、height 和 width
                    <br>这些属性给出了元素在页面中相对于视口的位置
                </li>
            </ul>
        </ul>
        <img src="../image/getsize.png" alt="">
        <pre class="contentarea" v-highlight><code>    &lt;div class="content">&lt;/div>
        let div = document.querySelector('.content')
        let obj = div.getBoundingClientRect()
        console.log(obj)
        // DOMRect { x: 8, y: 110, width: 200, height: 0, top: 110, right: 208, bottom: 110, left: 8 }</code></pre>
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>