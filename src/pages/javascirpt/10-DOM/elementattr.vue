<template>
    <div class="elementandattr">
        <h2><mark>知识点</mark>：</h2>
        <ul>
            <li class="des">创建元素：
                <br><mark class="marksec">document.createElement()</mark>
            </li>
            <li class="des">设置属性：
                <br><mark class="marksec">getAttribute()</mark> / <mark class="marksec">setAttribute()</mark> / <mark class="marksec">removeAttribute()</mark>
            </li>
        </ul>
        <h2><mark>创建元素document.createElement()</mark>：</h2>
        <ul>
            <li class="des">创建一个dom元素</li>
        </ul>
        <pre class="contentarea" v-highlight><code>    let div = document.createElement('div')
        console.log(div)        // &lt;div></code></pre>
        <h2><mark>元素属性</mark>：</h2>
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
                    <td><mark class="marksec">getAttribute()</mark></td>
                    <td>获取元素设置好的属性</td>
                    <td rowspan="3">
                        <pre class="contentarea" v-highlight><code>    let div = document.createElement('div')
        div.setAttribute('index', 1)
        console.log(div)    // &lt;div index="1">
        let index = div.getAttribute('index')
        console.log(index)      // 1
        div.removeAttribute('index')
        console.log(div)        // &lt;div></code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">setAttribute()</mark></td>
                    <td>为元素设置属性</td>
                </tr>
                <tr>
                    <td><mark class="marksec">removeAttribute()</mark></td>
                    <td>移除设置的元素属性</td>
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