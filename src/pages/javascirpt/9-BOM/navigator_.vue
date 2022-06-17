<template>
    <div class="navagator">
        <h2><mark>知识点</mark>：</h2>
        <ul>
            <li class="des">属性：
                <br><mark class="marksec">userAgent</mark> / <mark class="marksec">plugins</mark> / <mark class="marksec">platform</mark> / <mark class="marksec">onLine</mark> / <mark class="marksec">language</mark> / <mark class="marksec">languages</mark> / <mark class="marksec">geolocation</mark> / <mark class="marksec">cookieEnabled</mark>
            </li>
            <li class="des">方法：
                <br><mark class="marksec">javaEnabled()</mark>
                <br><mark class="marksec">sendBeacon()</mark>
            </li>
        </ul>
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
                    <td><mark class="marksec">userAgent</mark></td>
                    <td>返回浏览器厂商和版本信息</td>
                    <td rowspan="8">
                        <pre class="contentarea" v-highlight><code>    console.log(navigator.userAgent)        
        // Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:94.0) Gecko/20100101 Firefox/94.0 
        console.log(navigator.plugins)     
        // PluginArray { length: 0 }
        console.log(navigator.platform)     
        // Win32 
        console.log(navigator.onLine)       
        // true
        console.log(navigator.language)     
        // zh-CN 
        console.log(navigator.languages)        
        // Array(6) [ "zh-CN", "zh", "zh-TW", "zh-HK", "en-US", "en" ]
        console.log(navigator.geolocation)      
        // Geolocation {  }
        console.log(navigator.cookieEnabled)        
        // true</code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">plugins</mark></td>
                    <td>以类数组对象的形式返回浏览器安装的插件</td>
                </tr>
                <tr>
                    <td><mark class="marksec">platform</mark></td>
                    <td>返回用户的操作系统信息</td>
                </tr>
                <tr>
                    <td><mark class="marksec">onLine</mark></td>
                    <td>检测网络是否在线</td>
                </tr>
                <tr>
                    <td><mark class="marksec">language</mark></td>
                    <td>返回一个只读属性，表示网页的首选语言</td>
                </tr>
                <tr>
                    <td><mark class="marksec">languages</mark></td>
                    <td>返回一个数组，表示网页可以接受的语言</td>
                </tr>
                <tr>
                    <td><mark class="marksec">geolocation</mark></td>
                    <td>返回一个对象，该对象包含用户的地理位置信息</td>
                </tr>
                <tr>
                    <td><mark class="marksec">cookieEnabled</mark></td>
                    <td>返回一个布尔值，表示浏览器的cookie功能是否打开</td>
                </tr>
            </tbody>
        </table>
        <h2><mark>方法</mark>：</h2>
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
                    <td><mark class="marksec">javaEnabled()</mark></td>
                    <td></td>
                    <td>
                        <pre class="contentarea" v-highlight><code></code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">sendBeacon()</mark></td>
                    <td></td>
                    <td>
                        <pre class="contentarea" v-highlight><code></code></pre>
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