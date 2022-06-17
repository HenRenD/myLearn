<template>
    <div class="getelement">
        <h2><mark>知识点</mark>：</h2>
        <ul>
            <li class="des"><mark class="marksec">getElementById()</mark></li>
            <li class="des"><mark class="marksec">getElementByTagName()</mark></li>
            <li class="des"><mark class="marksec">getElementsByClassName()</mark></li>
            <li class="des"><mark class="marksec">querySelector()</mark></li>
            <li class="des"><mark class="marksec">querySelectorAll()</mark></li>
        </ul>
        <h2><mark>获取元素</mark>：</h2>
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
                    <td><mark class="marksec">getElementById()</mark></td>
                    <td>通过id获取元素</td>
                    <td>
                        <pre class="contentarea" v-highlight><code>    &lt;div id="app">&lt;/div>
        let div = document.getElementById('app')
        console.log(div)    // &lt;div id="app"></code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">getElementByTagName()</mark></td>
                    <td>通过标签名获取元素
                        <br>获取所有的匹配元素
                        <br>返回一个类数组
                    </td>
                    <td>
                        <pre class="contentarea" v-highlight><code>    &lt;ul>
            &lt;li>&lt;/li>
            &lt;li>&lt;/li>
            &lt;li>&lt;/li>
        &lt;/ul>
        let li = document.getElementsByTagName('li')
        console.log(li)     // HTMLCollection { 0: li, 1: li, 2: li, length: 3 }</code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">getElementByClassName()</mark></td>
                    <td>通过类名获取元素
                        <br>获取所有的匹配元素
                        <br>返回一个类数组
                    </td>
                    <td>
                        <pre class="contentarea" v-highlight><code>    &lt;div class="hello">&lt;/div>
        &lt;div class="hello">&lt;/div>
        &lt;div class="hello">&lt;/div>
        let div = document.getElementsByClassName('hello')
        console.log(div)    
        // HTMLCollection { 0: div.hello, 1: div.hello, 2: div.hello, length: 3 }</code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">querySelector()</mark></td>
                    <td>通过选择器获取元素
                        <br>只会获取第一个匹配元素
                    </td>
                    <td rowspan="2">
                        <pre class="contentarea" v-highlight><code>    &lt;div class="hello">&lt;/div>
        &lt;div class="hello">&lt;/div>
        &lt;div class="hello">&lt;/div>
        let div_ = document.querySelector('.hello')
        console.log(div_)       // &lt;div class="hello">
        let div__ = document.querySelectorAll('.hello')
        console.log(div__)      // NodeList(3) [ div.hello, div.hello, div.hello ]</code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">querySelectorAll()</mark></td>
                    <td>通过选择器获取元素
                        <br>获取所有的匹配元素
                        <br>返回一个类数组
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