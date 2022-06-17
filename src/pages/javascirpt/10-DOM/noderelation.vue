<template>
    <div class="noderelation">
        <h2><mark>知识点</mark>：</h2>
        <ul>
            <li class="des">包含文本节点：
                <br><mark class="marksec">childNodes</mark> / <mark class="marksec">firstChild</mark> / <mark class="marksec">lastChild</mark> / <mark class="marksec">previousSibling</mark> / <mark class="marksec">nextSibling</mark> / <mark class="marksec">parentNode</mark>
            </li>
            <li class="des">只包含元素：
                <br><mark class="marksec">children</mark> / <mark class="marksec">firstElementChild</mark> / <mark class="marksec">lastElementChild</mark> / <mark class="marksec">previousElementSibling</mark> / <mark class="marksec">nextElementSibling</mark> / <mark class="marksec">parentElement</mark>
            </li>
        </ul>
        <h2><mark>包含文本节点</mark>：</h2>
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
                    <td><mark class="marksec">childNodes</mark></td>
                    <td>返回所有的子节点
                        <br>包含文本节点和元素节点
                    </td>
                    <td rowspan="6">
                        <pre class="contentarea" v-highlight><code>    &lt;ul>
            &lt;li class="one">1&lt;/li>
            &lt;li class="tow">2&lt;/li>
            &lt;li class="third">3&lt;/li>
            &lt;li class="four">4&lt;/li>
        &lt;/ul>
        let ul = document.querySelector('ul')
        console.log(ul.childNodes)
        // NodeList(9) [ #text, li.one, #text, li.tow, #text, li.third, #text, li.four, #text ]
        console.log(ul.firstChild)  // #text ""
        console.log(ul.lastChild)   // #text ""
        let tow = document.querySelector('.tow')
        console.log(tow.previousSibling)    // #text ""
        console.log(tow.nextSibling)    // #text ""
        console.log(tow.parentNode)     // &lt;ul></code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">firstChild</mark></td>
                    <td>返回第一个子节点
                        <br>可能是文本节点或者元素节点
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">lastChild</mark></td>
                    <td>返回最后一个子节点
                        <br>可能是文本节点或者元素节点
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">previousSibling</mark></td>
                    <td>返回前一个节点
                        <br>可能是文本节点或者元素节点
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">nextSibling</mark></td>
                    <td>返回后一个节点
                        <br>可能是文本节点或者元素节点
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">parentNode</mark></td>
                    <td>返回父节点
                        <br>可能是文本节点或者元素节点
                    </td>
                </tr>
            </tbody>
        </table>
        <h2><mark>只包含元素节点</mark>：</h2>
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
                    <td><mark class="marksec">children</mark></td>
                    <td>返回所有的子元素节点</td>
                    <td rowspan="6">
                        <pre class="contentarea" v-highlight><code>    &lt;ul>
            &lt;li class="one">1&lt;/li>
            &lt;li class="tow">2&lt;/li>
            &lt;li class="third">3&lt;/li>
            &lt;li class="four">4&lt;/li>
        &lt;/ul>
        let ul = document.querySelector('ul')
        console.log(ul.children)
        // HTMLCollection { 0: li.one, 1: li.tow, 2: li.third, 3: li.four, length: 4 }
        console.log(ul.firstElementChild)  // &lt;li class="one">
        console.log(ul.lastElementChild)   // &lt;li class="four">
        let tow = document.querySelector('.tow')
        console.log(tow.previousElementSibling)    // &lt;li class="one">
        console.log(tow.nextElementSibling)    // &lt;li class="third">
        console.log(tow.parentElement)     // &lt;ul></code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">firstElementChild</mark></td>
                    <td>返回第一个子元素节点</td>
                </tr>
                <tr>
                    <td><mark class="marksec">lastElementChild</mark></td>
                    <td>返回最后一个子元素节点</td>
                </tr>
                <tr>
                    <td><mark class="marksec">previousElementSibling</mark></td>
                    <td>返回上一个子元素节点</td>
                </tr>
                <tr>
                    <td><mark class="marksec">nextElementSibling</mark></td>
                    <td>返回下一个子元素节点</td>
                </tr>
                <tr>
                    <td><mark class="marksec">parentElement</mark></td>
                    <td>返回父元素节点</td>
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