<template>
    <div class="insertcontent">
        <h2><mark>知识点</mark>：</h2>
        <ul>
            <li class="des"><mark class="marksec">innerHTML</mark></li>
            <li class="des"><mark class="marksec">outerHTML</mark></li>
            <li class="des"><mark class="marksec">innerText</mark></li>
            <li class="des"><mark class="marksec">outerText</mark></li>
            <li class="des"><mark class="marksec">insertAdjacentHTML()</mark></li>
            <li class="des"><mark class="marksec">insertAdjacentText()</mark></li>
            <li class="des"><mark class="marksec">insertAdjacentElement()</mark></li>
        </ul>
        <h2><mark>插入内容</mark>：</h2>
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
                    <td><mark class="marksec">innerHTML</mark></td>
                    <td rowspan="2">innerHTML：
                        <br>读取时：返回元素中所有的子元素
                        <br>写入时：以新的字符串值代替其所有的子元素，能识别html格式
                        <br>outerHTML：
                        <br>读取时：返回元素所有的子元素和自身
                        <br>写入时：相当于替换元素
                    </td>
                    <td rowspan="2">
                        <pre class="contentarea" v-highlight><code>    &lt;ul>
            &lt;li>hello&lt;/li>
            &lt;li>world&lt;/li>
        &lt;/ul>
        let ul = document.querySelector('ul')
        console.log(ul.innerHTML)
        //  &lt;li> hello&lt;/li>
        //  &lt;li>world&lt;/li>
        ul.innerHTML = "&lt;li>111111&lt;/li>"
        console.log(ul.innerHTML)       // &lt;li>111111&lt;/li>

        console.log(ul.outerHTML)
        //&lt;ul>&lt;li>111111&lt;/li>&lt;/ul></code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">outerHTML</mark></td>
                </tr>
                <tr>
                    <td><mark class="marksec">innerText</mark></td>
                    <td rowspan="2">innerText
                        <br>读取：返回元素内所有的文本
                        <br>写入：将元素内的内容替换成文本，不识别html
                        <br>outerText
                        <br>读取：undefined
                        <br>写入：删除元素，替换为文本
                    </td>
                    <td rowspan="2">
                        <pre class="contentarea" v-highlight><code>    &lt;div class="in">
            hhhhh
            &lt;div>hello world&lt;/div>
        &lt;/div>
        let in_ = document.querySelector('.in')
        console.log(in_.innerText)      // hhhhh   hello world
        in_.innerText = 'xxxxx'
        console.log(in_.innerHTML)      // xxxxx

        console.log(in_.outerText)      // undefined</code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">outerText</mark></td>
                </tr>
                <tr>
                    <td><mark class="marksec">insertAdjacentHTML()</mark></td>
                    <td rowspan="3">插入标签的方法，都接受两个参数
                        <br>第一个参数：
                        <br>beforebegin：插在当前元素外部的前面
                        <br>afterbegin：插入当前元素的内部，第一个子节点的前面
                        <br>beforeend：插入当前元素的内部，最后一个子节点的前面
                        <br>afterend：插入当前元素的外部的后面
                        <br>第二个参数：
                        <br>HTML或文本或元素
                    </td>
                    <td rowspan="3">
                        <pre class="contentarea" v-highlight><code>    &lt;div class="hello">&lt;/div>
        let div = document.querySelector('.hello')
        div.insertAdjacentHTML('beforebegin', '&lt;li class="one">hello world&lt;/li>')
        console.log(div.previousSibling)    // &lt;li class="one">

        div.insertAdjacentText('afterbegin', 'xxxxxxx')
        console.log(div.firstChild)     // #text "xxxxxxx"
        
        let li = document.createElement('li')
        li.className = 'xxxx'
        div.insertAdjacentElement('afterend', li)
        console.log(div.nextElementSibling)     // &lt;li class="xxxx"></code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">insertAdjacentText()</mark></td>
                </tr>
                <tr>
                    <td><mark class="marksec">insertAdjacentElement()</mark></td>
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