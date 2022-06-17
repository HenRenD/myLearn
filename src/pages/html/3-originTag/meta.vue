<template>
    <div class="metatag">
        <!-- meta标签 -->
        <h2><mark>&lt;meta></mark>标签：</h2>
        <ul>
            <li class="des">提供关于 HTML 文档的元数据。</li>
            <li class="des">它不会显示在页面上，但是对于机器是可读的。</li>
            <li class="des">meta常用于定义页面的说明，关键字，最后修改日期，和其它的元数据。</li>
            <li class="des">这些元数据将服务于浏览器（如何布局或重载页面），搜索引擎和其它网络服务。</li>
        </ul>
        <!-- 实例 -->
        <h2><mark>&lt;meta></mark>实例：</h2>
        <pre class="contentarea" v-highlight><code>        &lt;html>
                &lt;head>
                        &lt;meta name="description" content="我的博客...">
                        &lt;meta name="keywords" content="HTML,CSS,XML,JavaScript">
                        &lt;meta name="author" content="henren">
                        &lt;meta charset="UTF-8">
                &lt;/head>
                &lt;body>
                &lt;/body>
            &lt;/html></code></pre>
        <!-- 浏览器支持 -->
        <h2><mark>&lt;meta></mark>浏览器支持：</h2>
        <ul>
            <li class="des">所有主流浏览器都支持 <mark class="marksec">&lt;meta></mark> 标签。</li>
        </ul>
        <!-- 属性 -->
        <h2><mark>&lt;meta></mark>属性：</h2>
        <table>
            <thead>
                <tr>
                    <td class="tdfirst">属性</td>
                    <td class="tdsecond">可选值</td>
                    <td>实例</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="tdfirst" rowspan='9'><mark>name</mark></td>
                    <td class="tdsecond"><mark class="marksec">keywords</mark>：告诉搜索引擎，网页的关键字。</td>
                    <td><mark class="markdes">
                            &lt;meta name="keywords" content="博客,前端">
                        </mark>
                    </td>
                </tr>
                <tr>
                    <td class="tdsecond"><mark class="marksec">description</mark>：告诉搜索引擎，网站的主要内容。</td>
                    <td><mark class="markdes">&lt;meta name="description" content="热爱前端与编程"></mark></td>
                </tr>
                <tr>
                    <td class="tdsecond"><mark class="marksec">author</mark>：用于标注网页作者。</td>
                    <td><mark class="markdes">&lt;meta name="author" content="xxx,xxxxx@qq.com"></mark></td>
                </tr>
                <tr>
                    <td class="tdsecond"><mark class="marksec">generator</mark>：用于标明网页是什么软件做的。</td>
                    <td><mark class="markdes">&lt;meta name="generator" content="vsCode"></mark></td>
                </tr>
                <tr>
                    <td class="tdsecond"><mark class="marksec">copyright</mark>：用于标注版权信息。</td>
                    <td><mark class="markdes">&lt;meta name="copyright" content="xxx"></mark>(代表该网站为xxx个人版权所有)</td>
                </tr>
                <tr>
                    <td class="tdsecond"><mark class="marksec">revisit-after</mark>：设置搜索引擎抓取间隔，减轻搜索引擎爬虫对服务器带来的压力。</td>
                    <td><mark class="markdes">&lt;meta name="visit-after" content="7 days" ></mark></td>
                </tr>
                <tr>
                    <td class="tdsecond">
                        <mark class="marksec">robots</mark>：设置搜索引擎可以抓取的页面，默认为all。
                        <br>1，index: 允许搜索引擎抓取此页面
                        <br>2，noindex: 不允许搜索引擎抓取此页
                        <br>3，follow: 允许搜索引擎抓取子页面
                        <br>4，nofollow: 允许搜索引擎抓取子页面
                        <br>5，none: 等同于 noindex 和 nofollow
                        <br>6，all: 等同于 index 和 follow
                    </td>
                    <td><mark class="markdes">&lt;meta name="robots" content="none"></mark></td>
                </tr>
                <tr>
                    <td class="tdsecond"><mark class="marksec">renderer</mark>：renderer是为双核浏览器准备的， 用于指定双核浏览器默认以何种方式渲染页面。</td>
                    <td><mark class="markdes">&lt;meta name="renderer" content="webkit"></mark>默认webkit内核
                        <br><mark class="markdes">&lt;meta name="renderer" content="ie-comp"></mark>默认IE兼容模式
                        <br><mark class="markdes">&lt;meta name="renderer" content="ie-stand"></mark>默认IE标准模式
                    </td>
                </tr>
                <tr>
                    <td class="tdsecond"><mark class="marksec">viewport</mark>：常用于设计移动端网页。
                        <br>1，<mark class="markdes">width viewport</mark>的宽度(数值/device-width)
                        <br>2，<mark class="markdes">height viewport</mark>的高度(数值/device-height)
                        <br>3，<mark class="markdes">user-scalable</mark> 是否允许缩放,(yes/no)
                        <br>4，<mark class="markdes">initial-scale</mark> 初始化比例（范围从0 到 10）
                        <br>5，<mark class="markdes">minimum-scale</mark> 允许缩放的最小比例
                        <br>6，<mark class="markdes">maximum-scale</mark> 允许缩放的最大比例
                        <br>7，<mark class="markdes">target-densitydpi</mark>像素密度
                    </td>
                    <td>
                        <mark class="markdes">&lt;meta name="viewport" content="width=device-width, initial-scale=1"></mark>
                    </td>
                </tr>
                <tr>
                    <td class="tdfirst" rowspan="9"><mark>http-equiv</mark></td>
                    <td class="tdsecond"><mark class="marksec">content-language</mark>：设置网页语言。</td>
                    <td><mark class="markdes">&lt;meta http-equiv="content-language" content="zh-CN" /></mark></td>
                </tr>
                <tr>
                    <td class="tdsecond"><mark class="marksec">content-Type</mark>：设定网页字符集，便于浏览器解析与渲染页面。</td>
                    <td><mark class="markdes">&lt;meta http-equiv="content-Type" content="text/html;charset=utf-8"></mark>
                        <br>不推荐这种方式，
                        推荐使用meta标签的charset属性设置，h5的方法
                    </td>
                </tr>
                <tr>
                    <td class="tdsecond"><mark class="marksec">pragma</mark>：禁止缓存。</td>
                    <td><mark class="markdes">&lt;meta http-equiv="pragma" content="no-cache" /></mark>
                    </td>
                </tr>
                <tr>
                    <td class="tdsecond"><mark class="marksec">cache-control</mark>：指导浏览器如何缓存某个响应以及缓存多长时间。
                        <br>1，<mark class="markdes">public</mark>：允许任何人缓存此页
                        <br>2，<mark class="markdes">private</mark>：不允许缓存服务器缓存此页
                        <br>3，<mark class="markdes">no-cache</mark>：响应不能被缓存
                        <br>4，<mark class="markdes">no-stroe</mark>：请求相应都不能被缓存
                        <br>5，<mark class="markdes">max-age</mark>：最大生存周期(秒)
                        <br>6，<mark class="markdes">min-fresh</mark>：客户端愿意接受的最小缓存时长，缓存时间超过该值会要求向服务器查新
                        <br>7，<mark class="markdes">max-stale</mark>：接受超过缓存时限但不超过该值的数据
                    </td>
                    <td><mark class="markdes">&lt;meta http-equiv="cache-control" content="no-cache"></mark></td>
                </tr>
                <tr>
                    <td class="tdsecond"><mark class="marksec">expires</mark>：用于设定网页的到期时间，过期后网页必须到服务器上重新传输。</td>
                    <td><mark class="markdes">&lt;meta http-equiv="expires" content="Sunday 26 October 2016 01:00 GMT" /></mark></td>
                </tr>
                <tr>
                    <td class="tdsecond"><mark class="marksec">refresh</mark>：网页将在设定的时间内，自动刷新并调到设定的网址。</td>
                    <td>
                        <mark class="markdes">&lt;meta http-equiv="refresh" content="2;URL=http://www.lxxyx.win/"></mark> <br>2秒后跳转
                    </td>
                </tr>
                <tr>
                    <td class="tdsecond"><mark class="marksec">X-UA_Compatible</mark>：告知浏览器以何种版本来渲染页面。</td>
                    <td><mark class="markdes">&lt;meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/></mark><br>指定IE和Chrome使用最新版本渲染当前页面</td>
                </tr>
                <tr>
                    <td class="tdsecond"><mark class="marksec">page-enter</mark>：页面加载动画。</td>
                    <td><mark class="markdes">&lt;meta http-equiv="page-enter" content="blandtrans(duration=0.5)" /></mark></td>
                </tr>
                <tr>
                    <td class="tdsecond"><mark class="marksec">page-exit</mark>：页面退出动画。</td>
                    <td><mark class="markdes">&lt;meta http-equiv="page-exit" content="revealtrans(duration=0.5,transtion=1)"/></mark></td>
                </tr>
                <tr>
                    <td class="tdfirst"><mark>charset</mark></td>
                    <td class="tdsecond">字符集声明，告诉文档使用哪种字符编码。</td>
                    <td><mark class="markdes">&lt;meta charset="utf-8"></mark> <br>HTML5设定网页字符集的方式，推荐使用UTF-8</td>
                </tr>
                <tr>
                    <td class="tdfirst"><mark>content</mark></td>
                    <td colspan="2">此属性包含http-equiv 或name 属性的值，具体取决于所使用的值</td>
                </tr>
                <tr>
                    <td colspan="3">支持全局属性</td>
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