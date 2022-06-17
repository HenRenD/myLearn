<template>
    <div class="date">
        <h2><mark>Date</mark>：</h2>
        <ul>
            <li class="des"><mark class="marksec">Date</mark>类型可以精确的表示1970年1月1日之前及之后的日期(毫秒数)</li>
            <li class="des">使用<mark class="marksec">new</mark>操作符和<mark class="marksec">Date</mark>构造函数即可，<mark class="marksec">let now = new Date();</mark>
                <br>如果不传递参数，会自动获取当前的日期和时间
                <br>如果想在特定的日期和时间创建日期对象，必须传入表示该日期的毫秒数
            </li>
            <li class="des">知识点：
                <br><mark class="marksec">new Date()</mark>
                <br><mark class="marksec">Date.parse()</mark> / <mark class="marksec">Date.UTC()</mark> / <mark class="marksec">Date.now()</mark> / <mark class="marksec">+new Date()</mark>
                <br><mark class="marksec">toDateString()</mark> / <mark class="marksec">toTimeString()</mark> / <mark class="marksec">toLocalDateString()</mark> / <mark class="marksec">toLocalTimeString()</mark> / <mark class="marksec">toUTCString()</mark>
                <br><mark class="marksec">getTime()</mark> / <mark class="marksec">getFullYear()</mark> / <mark class="marksec">getMonth()</mark> / <mark class="marksec">getDate()</mark> / <mark class="marksec">getDay()</mark> / <mark class="marksec">getHours()</mark> / <mark class="marksec">getMinutes()</mark> / <mark class="marksec">getSeconds()</mark>
            </li>
        </ul>
        <pre class="contentarea" v-highlight><code>    const time = new Date()
        console.log(time)       // Date Mon Nov 22 2021 22:15:50 GMT+0800 (中国标准时间)
        // 传入毫秒数
        const time2 = new Date(1624291200000)
        console.log(time2)      // Date Tue Jun 22 2021 00:00:00 GMT+0800 (中国标准时间)</code></pre>
        <h2><mark>返回毫秒数的方法</mark>：</h2>
        <h3><mark class="marksec">Date.parse()</mark>：</h3>
        <ul>
            <li class="des">接收一个表示日期的字符串参数，然后尝试根据这个日期返回毫秒数
            </li>
            <li class="des">如果直接将日期字符串传递给new Date()，后台会自动调用Date.parse()</li>
            <li class="des">字符串参数格式：
                <br>“月/日/年”，如“6/22/2021”
                <br>“月名 日，年”，如“Jue 22，2021”
                <br>“周几 月名 日 年 时：分：秒 时区”，如”Tue May 23 2019 00：00：00 GMT-0700“
                <br>IOS 8601扩展格式：“YYYY-MM-DDTHH：mm:ss:sssZ”，如“2019-05-23T00:00:00”，只适用于兼容ES5的实现
                <br>如果该字符串不能表示日期，则会返回NaN
            </li>
        </ul>
        <pre class="contentarea" v-highlight><code>    const time = Date.parse('6/22/2021')
        console.log(time)       // 1624291200000
        // 字符串不能表示时间
        const time2 = Date.parse('111')
        console.log(time2)      // NaN
        // 直接将字符串传递给 new Date()
        const time3 = new Date('6/22/2021') // 会自动调用Date.parse将字符串换成毫秒数
        console.log(time3)      // Date Tue Jun 22 2021 00:00:00 GMT+0800 (中国标准时间)</code></pre>
        <h3><mark class="marksec">Date.UTC()</mark>：</h3>
        <ul>
            <li class="des">同样也返回日期的毫秒数
            </li>
            <li class="des">如果直接将参数传递给new Date()，也会在后台自动调用Date.UTC()，只不过此时创建的是本地日期，不是GMT日期</li>
            <li class="des">参数格式：
                <br>年份 //必需的
                <br>基于0的月份 //必需的
                <br>1~31的天
                <br>0~23的小时
                <br>分，秒，以及毫秒
                <br>如果没给定其他的参数，天会假设为1，其余全部是0
            </li>
        </ul>
        <pre class="contentarea" v-highlight><code>    const time = Date.UTC(2021, 10, 22, 22, 21, 43)
        console.log(time)       // 1637619703000
        console.log(new Date(time))         // Date Tue Nov 23 2021 06:21:43 GMT+0800 (中国标准时间)</code></pre>
        <h3><mark class="marksec">Date.now()</mark>：</h3>
        <ul>
            <li class="des">返回调用这个方法的时刻的毫秒数
            </li>
            <li class="des">使用<mark class="marksec">+new Date()</mark>格式也可以达到相同的效果</li>
        </ul>
        <pre class="contentarea" v-highlight><code>    const time = Date.now()
        console.log(time)        // 1637591078782 
        const time2 = +new Date()
        console.log(time2)      // 1637591078783</code></pre>
        <h2><mark>日期格式化方法</mark>：</h2>
        <ul>
            <li class="des">将日期格式化为特定格式的字符串显示</li>
        </ul>
        <table>
            <thead>
                <tr>
                    <td width='10%'>方法</td>
                    <td width='20%'>描述</td>
                    <td>实例</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><mark class="marksec">toDateString()</mark></td>
                    <td>周几、月、日、年</td>
                    <td rowspan="5">
                        <pre class="contentarea" v-highlight><code>    const time = new Date()
        console.log(time)       // Date Mon Nov 22 2021 22:32:32 GMT+0800 (中国标准时间)
        console.log(time.toDateString())        // Mon Nov 22 2021
        console.log(time.toTimeString())        // 22:32:32 GMT+0800 (中国标准时间)
        console.log(time.toLocaleDateString())        // 2021/11/22
        console.log(time.toLocaleTimeString())        // 下午10:37:42
        console.log(time.toUTCString())        // Mon, 22 Nov 2021 14:39:06 GMT</code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">toTimeString()</mark></td>
                    <td>时、分、秒、和时区</td>
                </tr>
                <tr>
                    <td><mark class="marksec">toLocalDateString()</mark></td>
                    <td>年、月、日</td>
                </tr>
                <tr>
                    <td><mark class="marksec">toLocalTimeString()</mark></td>
                    <td>上午/下午，时、分、秒</td>
                </tr>
                <tr>
                    <td><mark class="marksec">toUTCString()</mark></td>
                    <td>完整的UTC日期</td>
                </tr>
            </tbody>
        </table>
        <h2><mark>获取日期对象某一项</mark>：</h2>
        <table>
            <thead>
                <tr>
                    <td width='10%'>方法</td>
                    <td width='15%'>描述</td>
                    <td>实例</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><mark class="marksec">getTime()</mark></td>
                    <td>返回毫秒数</td>
                    <td rowspan="8">
                        <pre class="contentarea" v-highlight><code>    const time = new Date()
        // 返回毫秒数
        console.log(time.getTime())         // 1637592563563
        // 返回年份
        console.log(time.getFullYear())         // 2021
        // 返回月份
        console.log(time.getMonth())        // 10
        // 返回天
        console.log(time.getDate())         // 22
        // 返回周
        console.log(time.getDay())      // 1
        // 返回小时
        console.log(time.getHours())        // 22
        // 返回分钟
        console.log(time.getMinutes())      // 51
        // 返回秒
        console.log(time.getSeconds())       // 6</code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">getFullYear()</mark></td>
                    <td>返回年份，四位</td>
                </tr>
                <tr>
                    <td><mark class="marksec">getMonth()</mark></td>
                    <td>返回月份，0~11</td>
                </tr>
                <tr>
                    <td><mark class="marksec">getDate()</mark></td>
                    <td>返回天数，1~31</td>
                </tr>
                <tr>
                    <td><mark class="marksec">getDay()</mark></td>
                    <td>返回周几，0~6</td>
                </tr>
                <tr>
                    <td><mark class="marksec">getHours()</mark></td>
                    <td>返回小时，0~23</td>
                </tr>
                <tr>
                    <td><mark class="marksec">getMinutes()</mark></td>
                    <td>返回分钟，0~59</td>
                </tr>
                <tr>
                    <td><mark class="marksec">getSeconds()</mark></td>
                    <td>返回秒数，0~59</td>
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