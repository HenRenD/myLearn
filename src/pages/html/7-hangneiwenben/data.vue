<template>
    <div class="datatag">
        <h2><mark>&lt;data></mark>标签：</h2>
        <ul>
            <li class="des">HTML <mark class="marksec">data</mark> 元素将一个指定内容和机器可读的翻译联系在一起。</li>
            <li class="des">但是，如果内容是与时间或者日期相关的，则一定要使用 <mark class="marksec">data</mark>。</li>
        </ul>
        <h2><mark>&lt;data></mark>实例：</h2>
        <pre class="contentarea" v-highlight><code>            &lt;p>新产品&lt;/p>
                &lt;ul>
                        &lt;li>&lt;data value="398">迷你番茄酱&lt;/data>&lt;/li>
                        &lt;li>&lt;data value="399">巨无霸番茄酱&lt;/data>&lt;/li>
                        &lt;li>&lt;data value="400">超级巨无霸番茄酱&lt;/data>&lt;/li>
                &lt;/ul></code></pre>
        <h2><mark>&lt;data></mark>浏览器支持：</h2>
        <ul>
            <li class="des">主流浏览器都支持 <mark class="marksec">&lt;data></mark> 标签，IE9开始支持</li>
        </ul>
        <h2><mark>&lt;data></mark>属性：</h2>
        <ul>
            <li class="des">支持全局属性</li>
        </ul>
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>