<template>
    <div class="location_">
        <h2><mark>知识点</mark>：</h2>
        <ul>
            <li class="des">操作地址：
                <br><mark class="marksec">location.assign(url)</mark>
                <br><mark class="marksec">window.location = url</mark>
                <br><mark class="marksec">location.href = url</mark>
                <br><mark class="marksec">location.replace(url)</mark>
                <br><mark class="marksec">location.reload(true)</mark>
            </li>
            <li class="des">属性：
                <br><mark class="marksec">hash</mark> / <mark class="marksec">host</mark> / <mark class="marksec">hostname</mark> / <mark class="marksec">href</mark> / <mark class="marksec">pathname</mark> / <mark class="marksec">port</mark> / <mark class="marksec">protocol</mark> / <mark class="marksec">search</mark>
            </li>
        </ul>
        <h2><mark>Location</mark>：</h2>
        <ul>
            <li class="des">location是BOM中最有用的对象之一
                <br>提供了当前窗口中加载文档的信息，以及通常的导航功能
                <br>它即是window的属性也是document的属性
            </li>
        </ul>
        <h2><mark>操作地址方法</mark>：</h2>
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
                    <td><mark class="marksec">location.assign</mark></td>
                    <td>location.assign = url</td>
                    <td>
                        <pre class="contentarea" v-highlight><code>    location.assign('https://www.baidu.com')
        // 跳转到百度，不能回退</code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">window.location</mark></td>
                    <td>window.location = url</td>
                    <td>
                        <pre class="contentarea" v-highlight><code>    window.location = 'https://www.baidu.com'
        // 挑战到百度，不能回退</code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">location.href</mark></td>
                    <td>location.href = url</td>
                    <td>
                        <pre class="contentarea" v-highlight><code>    location.href = 'https://www.baidu.com'
        // 跳转到百度，不能回退</code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">location.replace</mark></td>
                    <td>location.replace(url)</td>
                    <td>
                        <pre class="contentarea" v-highlight><code>    location.replace('https://www.baidu.com')
        // 将当前页面替换为百度，不可以回退</code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">location.reload</mark></td>
                    <td>location.reload(true)
                        <br>重新加载页面，加上true参数，表示强制重新加载
                    </td>
                    <td>
                        <pre class="contentarea" v-highlight><code>    location.reload(true)
        // 强制重新加载页面</code></pre>
                    </td>
                </tr>
            </tbody>
        </table>
        <h2><mark>属性</mark>：</h2>
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
                    <td><mark class="marksec">hash</mark></td>
                    <td>返回url中的hash，#号后面的内容，如果没有返回空字符串</td>
                    <td rowspan="8">
                        <pre class="contentarea" v-highlight><code>    console.log(location.hash)      // &lt;empty string >
        console.log(location.host)      // &lt;empty string>
        console.log(location.hostname)      // &lt;empty string>
        console.log(location.href)      //  file:///e:/DeskTop/mylearn_/test.ht
        console.log(location.pathname)  //  /e:/DeskTop / mylearn_ / test.html
        console.log(location.port)      //  &lt;empty string>
        console.log(location.protocol)      // file:
        console.log(location.search)        // &lt;empty string></code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">host</mark></td>
                    <td>返回主机名加端口</td>
                </tr>
                <tr>
                    <td><mark class="marksec">hostname</mark></td>
                    <td>返回主机名</td>
                </tr>
                <tr>
                    <td><mark class="marksec">href</mark></td>
                    <td>返回完整的url</td>
                </tr>
                <tr>
                    <td><mark class="marksec">pathname</mark></td>
                    <td>返回url中的资源路径</td>
                </tr>
                <tr>
                    <td><mark class="marksec">port</mark></td>
                    <td>返回端口</td>
                </tr>
                <tr>
                    <td><mark class="marksec">protocao</mark></td>
                    <td>返回http协议</td>
                </tr>
                <tr>
                    <td><mark class="marksec">search</mark></td>
                    <td>返回url的查询字符串</td>
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