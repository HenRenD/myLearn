<template>
    <div class="jsinhtml">
        <h2><mark>script</mark>元素：</h2>
        <ul>
            <li class="des">该元素是由网景公司创造的</li>
            <li class="des">使用<mark class="marksec">script</mark>元素将javascript脚本插入html中</li>
            <li class="des">使用方式：
                <table>
                    <thead>
                        <tr>
                            <td width='22%'>方式</td>
                            <td>描述</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>网页中嵌入javascript代码
                            </td>
                            <td>将javascript代码放入<mark class="marksec"> &lt;script>&lt;/script></mark>元素中
                                <br>代码内不能出现<mark class="marksec">&lt;/script></mark>，因为会被当成结束符号，可以使用转义字符 “ \ ”
                            </td>
                        </tr>
                        <tr>
                            <td>
                                外部javascript文件
                            </td>
                            <td>使用<mark class="marksec">src属性</mark>，包含外部文件地址
                                <br>使用了src属性，内部的js代码会被忽略
                                <br>这是推荐的方式，可维护性好，复用性高
                            </td>
                        </tr>
                        <tr>
                            <td>
                                外部javascript资源链接url</td>
                            <td>使用src属性，包含外部脚本链接url
                                <br>在解析时会向该url发送get请求
                                <br>使用该方法应该确保该url是安全可靠的，避免安全问题
                            </td>
                        </tr>
                    </tbody>
                </table>
            </li>
            <li class="des">位置：
                <table>
                    <thead>
                        <tr>
                            <td width='20%'>位置</td>
                            <td>描述</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><mark class="marksec">
                                    &lt;head>标签内
                                </mark></td>
                            <td>目的是把脚本文件放在一起
                                <br>当脚本过多时，使用该方法会出现明显的页面延迟
                            </td>
                        </tr>
                        <tr>
                            <td><mark class="marksec">&lt;body>标签后</mark></td>
                            <td>现在通常将脚本放在body标签的页面内容后面</td>
                        </tr>
                    </tbody>
                </table>
            </li>
        </ul>
        <h2><mark>script元素属性：</mark></h2>
        <table>
            <thead>
                <tr>
                    <td width='20%'>属性</td>
                    <td>描述</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><mark class="marksec">src
                        </mark></td>
                    <td>可选
                        <br>表示外部脚本文件地址或者资源链接url
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">
                            defer
                        </mark></td>
                    <td>可选
                        <br>推迟执行脚本，只对外部脚本有效
                        <br>同步下载脚本，但是推迟执行，直到解析到&lt;/html>结束标签时才会执行
                        <br>H5规范要求推迟脚本也要按照顺序执行，并且在DOMContentLoaded事件之前
                        <br>但是在实际执行时却并不总是这样，因此最好只包含一个推迟脚本
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">
                            async
                        </mark></td>
                    <td>可选
                        <br>异步执行脚本，只对外部脚本有效
                        <br>与defer类似，不同的是，async脚本和页面时并行加载，加载完立即执行
                        <br>异步脚本不应该在加载期间修改DOM
                        <br>异步脚本保证会在页面的load事件前执行，但是可能会在DOMContentLoaded事件前后
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">
                            type
                        </mark></td>
                    <td>可选
                        <br>这个值在大多数情况下都是“text/javascript”
                        <br>如果这个值是module，代码会被当成ES6模块，代码中才能出现import和export
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">
                            crossorigin
                        </mark></td>
                    <td>可选
                        <br>配置相关请求的CORS（跨域资源共享）设置，默认不使用CORS
                        <br>crossorigin=“anonymous”
                        <br>配置文件请求不必设置凭据标志
                        <br>crossorigin=“use-credentials”
                        <br>设置凭据标志，意味着出站请求会包含凭据
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">
                            charset
                        </mark></td>
                    <td>可选
                        <br>使用src属性指定的代码字符集
                        <br>很少使用，大多数浏览器不在乎它的值
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">
                            integrity</mark></td>
                    <td>可选
                        <br>允许对比接收到的资源和指定的加密签名以验证子资源完整性
                        <br>如果不匹配，页面报错，脚本不会执行
                        <br>确保内容分发网络不会提供恶意内容<br>
                    </td>
                </tr>
            </tbody>
        </table>
        <h2><mark>动态加载脚本：</mark></h2>
        <ul>
            <li class="des">通过DOM API创建&lt;script>元素，动态的加载脚本</li>
            <li class="des">以这种方式创建的script元素，添加了async属性</li>
            <li class="des">不是所有的浏览器都支持async属性，需要将该属性设置为false</li>
            <li class="des">同时以该方式获取的资源对浏览器预加载器是不可见的，会严重影响其在资源队列中的优先级，严重影响性能</li>
            <li class="des">可以在文档头部显式的声明：&lt;link rel="preload" href="xxxxxx.js"&lt;</li>
        </ul>
        <h2><mark>文档模式：</mark></h2>
        <table>
            <thead>
                <tr>
                    <td width='20%'>模式</td>
                    <td>描述</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><mark class="marksec">
                            混杂模式
                        </mark></td>
                    <td>当文档开头的doctype声明不完成，或者错误的时候会开启混杂模式
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">标准模式</mark></td>
                    <td>正确的文档声明</td>
                </tr>
                <tr>
                    <td><mark class="marksec">准标准模式</mark></td>
                    <td>通过过渡性文档类型和框架集文档类型来触发</td>
                </tr>
            </tbody>
        </table>
        <h2><mark>noscript元素：</mark></h2>
        <ul>
            <li class="des">浏览器不支持脚本，浏览器对脚本的支持被关闭
                <br>以上两种情况下，该元素中的内容会被浏览器解析，否则永远不会解析
            </li>
        </ul>
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>