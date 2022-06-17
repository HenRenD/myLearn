<template>
    <div class="classlit">
        <h2><mark>知识点</mark>：</h2>
        <ul>
            <li class="des">属性：
                <br><mark class="marksec">value</mark> / <mark class="marksec">length</mark>
            </li>
            <li class="des">方法：
                <br><mark class="marksec">add()</mark> / <mark class="marksec">remove()</mark> / <mark class="marksec">replace()</mark> / <mark class="marksec">toggle()</mark> / <mark class="marksec">contains()</mark>
                <br><mark class="marksec">keys()</mark> / <mark class="marksec">values()</mark> / <mark class="marksec">entries()</mark> / <mark class="marksec">item()</mark> / <mark class="marksec">forEach()</mark> / <mark class="marksec">toString()</mark> / <mark class="marksec">supports()</mark>
            </li>
        </ul>
        <h2><mark>classList</mark>：</h2>
        <ul>
            <li class="des">主要用于操作类名
                <br>返回DOMTokenList实例（伪数组）
                <br>可以迭代
            </li>
        </ul>
        <pre class="contentarea" v-highlight><code>    &lt;div class="content hello">&lt;/div>
        let div = document.querySelector('.content')
        console.log(div.classList)   // DOMTokenList["content", "hello"]</code></pre>
        <h3><mark class="marksec">属性</mark>：</h3>
        <table>
            <thead>
                <tr>
                    <td width='15%'>属性</td>
                    <td width='30%'>描述</td>
                    <td>实例</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><mark class="marksec">value</mark></td>
                    <td>返回所有类名的字符串表示</td>
                    <td rowspan="2">
                        <pre class="contentarea" v-highlight><code>    &lt;div class="content hello">&lt;/div>
        let div = document.querySelector('.content')
        console.log(div.classList.value)    // content hello
        console.log(div.classList.length)   // 2</code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">length</mark></td>
                    <td>返回所有类名个数</td>
                </tr>
            </tbody>
        </table>
        <h3><mark class="marksec">方法</mark>：</h3>
        <table>
            <thead>
                <tr>
                    <td width='15%'>方法</td>
                    <td width='30%'>描述</td>
                    <td>实例</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><mark class="marksec">add()</mark></td>
                    <td>添加类名</td>
                    <td rowspan="5">
                        <pre class="contentarea" v-highlight><code>    &lt;div class="content hello">&lt;/div>
        let div = document.querySelector('.content')
        // 添加类名
        div.classList.add('xxx')
        console.log(div.classList)
        // DOMTokenList(3) [ "content", "hello", "xxx" ]
        // 删除类名
        div.classList.remove('hello')
        console.log(div.classList)  // DOMTokenList [ "content", "xxx" ]
        // 替换类名
        div.classList.replace('xxx', 'ooooo')
        console.log(div.classList)      // DOMTokenList [ "content", "ooooo" ]
        // 切换类名 如果 hello 类值已存在，则移除它，否则添加它
        div.classList.toggle('hello')
        console.log(div.classList)  // DOMTokenList(3) [ "content", "ooooo", "hello" ]
        // 检测类名是否存在
        console.log(div.classList.contains('hello'))    // true
        console.log(div.classList.contains('xxx'))  // false</code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">remove()</mark></td>
                    <td>删除类名</td>
                </tr>
                <tr>
                    <td><mark class="marksec">replace()</mark></td>
                    <td>替换类名</td>
                </tr>
                <tr>
                    <td><mark class="marksec">toggle()</mark></td>
                    <td>切换类名</td>
                </tr>
                <tr>
                    <td><mark class="marksec">contains()</mark></td>
                    <td>检测类名是否存在
                        <br>返回布尔值
                    </td>
                </tr>
                <tr>
                    <td colspan="2"><mark class="marksec">keys()/values()/entries()/item()/forEach()/toString()/supports()</mark></td>
                    <td>
                        因为是数组，扩展了一些数组的方法
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