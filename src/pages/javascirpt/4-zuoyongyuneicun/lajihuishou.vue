<template>
    <div class="lajihuishou">
        <h2><mark>垃圾回收</mark>：</h2>
        <ul>
            <li class="des">js具有自动垃圾收集机制，即执行上下文会负责管理代码执行过程中使用的内存</li>
            <li class="des">原理：
                <br>找到那些不在继续使用的变量，释放内存
                <br>垃圾收集器会周期性的执行这一操作
            </li>
        </ul>
        <h2><mark>标记清理</mark>：</h2>
        <ul>
            <li class="des">js中最常用的垃圾收集方式是标记清除</li>
            <li class="des">当变量进入上下文就将这个变量标记为进入上下文，当变量离开上下文就将其标记为离开上下文</li>
            <li class="des">可以通过翻转某个特殊的位来实现，有多种方式</li>
            <li class="des">垃圾收集器会给存在内存中的所有变量都加上标记，然后他会去掉进入上下文中的变量或者被引用的变量的标记</li>
            <li class="des">之后这些变量如果再次被加上标记，则会被视为要删除的变量</li>
        </ul>
        <h2><mark>引用计数</mark>：</h2>
        <ul>
            <li class="des">还有一种不太常见的垃圾收集策略，引用计数</li>
            <li class="des">引用计数的原理是跟踪每个值被引用的次数，每使用这个值一次引用的次数就加1</li>
            <li class="des">如果对这个值引用的变量又取得了另一个值，引用的次数就减1</li>
            <li class="des">当引用的次数变成0的时候，就说明不在需要这个值了</li>
            <li class="des">但是引用计数存在一个严重的问题，就是循环引用，循环引用中的次数永远都不会为0，当大量的调用，会占用很多的空间</li>
        </ul>
        <h2><mark>性能</mark>：</h2>
        <ul>
            <li class="des">垃圾回收是一个周期性的操作</li>
            <li class="des">如果内存中有很多变量，会造成性能损失</li>
            <li class="des">那么多久调用一次垃圾回收机制，这个时间调度很重要</li>
        </ul>
        <h2><mark>内存管理</mark>：</h2>
        <ul>
            <li class="des">js使用垃圾回收策略，会让程序员免于内存管理的问题</li>
            <li class="des">但是系统给web浏览器分配的内存通常要比桌面应用要少，这么做的原因是防止js的网页资源耗尽内存资源导致系统崩溃，因此为了提升性能，需要优化内存</li>
            <li class="des">优化内存的最佳方式，就是为执行中的代码只保存必要的数据，一旦数据不在有用，就将其设置为null来释放引用</li>
            <li class="des">这叫这<mark class="marksec">解除引用</mark>，让值脱离执行上下文，以便垃圾回收器下次将其回收，最适合全局变量和全局对象的属性</li>
            <li class="des">局部变量会在离开执行上下文时，自动解除引用</li>
            <li class="des"><mark class="marksec">通过let/const提升性能</mark>：
                <br>let/const都是块级作用域，能让垃圾回收机制更早的介入
            </li>
            <li class="des"><mark class="marksec">内存泄漏</mark>：
                <br>未使用关键字声明的全局变量引起
                <br>定时器引起
                <br>闭包
            </li>
        </ul>
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>