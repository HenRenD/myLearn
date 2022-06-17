<template>
    <div class="handlestyle">
        <h2><mark>知识点</mark>：</h2>
        <ul>
            <li class="des"><mark class="marksec">style</mark></li>
            <li class="des"><mark class="marksec">className</mark></li>
        </ul>
        <h2><mark>style</mark>：</h2>
        <ul>
            <li class="des">返回 CSSStyleDeclaration 对象，可以设置和获取当前规则中的样式</li>
        </ul>
        <pre class="contentarea" v-highlight><code>    &lt;div class="content hello">&lt;/div>
        let div = document.querySelector('.content')
        console.log(div.style)      // CSS2Properties(0)一个对象，里面包含所有的css规则
        // 例如：
        div.style.backgroundColor = 'red'
        div.style.overflow = 'hidden'</code></pre>
        <h2><mark>className</mark>：</h2>
        <ul>
            <li class="des">返回元素类名的字符串表示，和classList的value属性值一致</li>
            <li class="des">className只是元素的一个属性，用来返回或者设置类名，没有方法</li>
        </ul>
        <pre class="contentarea" v-highlight><code>    &lt;div class="content hello">&lt;/div>
        let div = document.querySelector('.content')
        console.log(div.className)      // content hello
        div.className = 'xxxx'
        console.log(div.className)      // xxxx</code></pre>
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>