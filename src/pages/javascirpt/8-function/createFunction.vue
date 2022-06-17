<template>
    <div class="createfunction">
        <h2><mark>创建函数</mark>：</h2>
        <ul>
            <li class="des">每个函数都是Function类型的实例
            </li>
            <li class="des">函数名就是指向函数的指针，也就是说可以把该指针赋值多个变量</li>
            <li class="des">声明方式：
                <br>函数声明：函数声明会有提升
                <br>表达式声明：函数表达式创建的函数，叫做匿名函数或者兰姆达函数，这种函数没有提升，必须有变量接收
                <br>使用Function构造函数（不推荐）
            </li>
        </ul>
        <pre class="contentarea" v-highlight><code>    // 函数声明
        function hello() { }
        // 函数表达式
        let world = function () { }
        // 使用构造函数
        let func = new Function()</code></pre>
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>