<template>
    <div class="handlenode">
        <h2><mark>知识点</mark>：</h2>
        <ul>
            <li class="des"><mark class="marksec">appendChild()</mark></li>
            <li class="des"><mark class="marksec">insertBefore()</mark></li>
            <li class="des"><mark class="marksec">removeChild()</mark></li>
            <li class="des"><mark class="marksec">replaceChild()</mark></li>
            <li class="des"><mark class="marksec">replaceChildren()</mark></li>
            <li class="des"><mark class="marksec">cloneNode()</mark></li>
            <li class="des"><mark class="marksec">contains()</mark></li>
        </ul>
        <h2><mark>操作节点</mark>：</h2>
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
                    <td><mark class="marksec">appendChild()</mark></td>
                    <td>子节点末尾添加节点
                        <br>具有改变位置的功能
                    </td>
                    <td>
                        <pre class="contentarea" v-highlight><code>    &lt;ul>
            &lt;li>hello world&lt;/li>
        &lt;/ul>
        let ul = document.querySelector('ul')
        let li = document.createElement('li')
        ul.appendChild(li)
        console.log(ul.children)    // HTMLCollection { 0: li, 1: li, length: 2 }</code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">insertBefore()</mark></td>
                    <td>在某个节点前添加节点</td>
                    <td>
                        <pre class="contentarea" v-highlight><code>    &lt;ul>
            &lt;li class="one">hello world&lt;/li>
        &lt;/ul>
        let ul = document.querySelector('ul')
        let li = ul.lastElementChild
        let newLi = document.createElement('li')
        ul.insertBefore(newLi, li)
        console.log(ul.children)    // HTMLCollection { 0: li, 1: li.one, length: 2 }</code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">removeChild()</mark></td>
                    <td>移除某个子节点</td>
                    <td>
                        <pre class="contentarea" v-highlight><code>    &lt;ul>
            &lt;li class="one">hello world&lt;/li>
        &lt;/ul>
        let ul = document.querySelector('ul')
        let li = ul.lastElementChild
        ul.removeChild(li)
        console.log(ul.children)    // HTMLCollection { length: 0 }</code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">replaceChild()</mark></td>
                    <td>替换某个子节点</td>
                    <td>
                        <pre class="contentarea" v-highlight><code>    &lt;ul>
            &lt;li class="one">hello world&lt;/li>
        &lt;/ul>
        let ul = document.querySelector('ul')
        let li = ul.lastElementChild
        let newLi = document.createElement('li')
        console.log(ul.children)    // HTMLCollection { 0: li.one, length: 1 }
        ul.replaceChild(newLi, li)
        console.log(ul.children)    // HTMLCollection { 0: li, length: 1 }</code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">replaceChildren()</mark></td>
                    <td>替换所有子节点</td>
                    <td>
                        <pre class="contentarea" v-highlight><code>    &lt;ul>
            &lt;li class="one">hello world&lt;/li>
            &lt;li class="tow">&lt;/li>
        &lt;/ul>
        let ul = document.querySelector('ul')
        let li = ul.lastElementChild
        let newLi = document.createElement('li')
        console.log(ul.children)    // HTMLCollection { 0: li.one, 1: li.tow, length: 2 }
        ul.replaceChildren(newLi)
        console.log(ul.children)    // HTMLCollection { 0: li, length: 1 }</code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">cloneNode()</mark></td>
                    <td>克隆某个节点
                        <br>接收一个布尔值
                        <br>表示深复制还是浅复制
                    </td>
                    <td>
                        <pre class="contentarea" v-highlight><code>    &lt;ul>
            &lt;li class="one">hello world&lt;/li>
            &lt;li class="tow">&lt;/li>
        &lt;/ul>
        let ul = document.querySelector('ul')
        let newul = ul.cloneNode()
        console.log(newul.children)      // HTMLCollection { length: 0 }
        let deepNewLi = ul.cloneNode(true)
        console.log(deepNewLi.children)     // HTMLCollection { 0: li.one, 1: li.tow, length: 2 }</code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">contains()</mark></td>
                    <td>检查某个元素是否包含某个元素
                        <br>返回布尔值
                    </td>
                    <td>
                        <pre class="contentarea" v-highlight><code>    &lt;ul>
            &lt;li class="one">hello world&lt;/li>
        &lt;/ul>
        let ul = document.querySelector('ul')
        let li = ul.lastElementChild
        console.log(ul.contains(li))    // true</code></pre>
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