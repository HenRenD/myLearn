<template>
    <div class="regexp">
        <h2><mark>RegExp</mark>：</h2>
        <ul>
            <li class="des">js通过<mark class="marksec">RegExp类型</mark>支持正则表达式</li>
            <li class="des">作用：
                <br>数据验证 / 替换文本 / 匹配特定模式并提取子字符串
                <br>只能处理字符串，它是一个规则
            </li>
        </ul>
        <h2><mark>使用方式</mark>：</h2>
        <h3><mark class="marksec">字面量方式</mark>：</h3>
        <ul>
            <li class="des">字面量语法：
                <br><mark class="marksec">let expression = /pattern/flags；</mark>
                <br><mark class="marksec">pattern</mark>：要使用的规则，不可以拼接
                <br><mark class="marksec">flags</mark>：模式
                <br>字面量语法不能使用变量形式的规则
                <br>两个斜杠之间的内容不都是元字符，也可以包含具有特殊意义的字符
                <br>应用场景：当正则表达式保持不变时，使用此方法可获得更好的性能
            </li>
        </ul>
        <pre class="contentarea" v-highlight><code>    // 匹配字符串中所有的“hello”
        let reg = /hello/g</code></pre>
        <h3><mark class="marksec">构造函数方式</mark>：</h3>
        <ul>
            <li class="des">RegExp构造函数语法：
                <br><mark class="marksec">let expression = new RegExp("pattern","flags");</mark>
                <br>传递给 RegExp 构造函数的两个参数都是字符串
                <br>因为传递的是字符串，所有特殊字符都需要使用“\”转义
                <br>这里的pattern可以是事先定义的变量，也可以拼接
                <br>应用场景：当你知道正则表达式的模式将会改变，或者你不知道模式，并且从其他来源获取它，如用户输入
            </li>
        </ul>
        <pre class="contentarea" v-highlight><code>    // 匹配字符串中所有的“hello”
        let reg = new RegExp('hello','g')</code></pre>
        <h2><mark>flags模式</mark>：</h2>
        <table>
            <thead>
                <tr>
                    <td width='15%'>模式</td>
                    <td>描述</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><mark class="marksec">g</mark>
                    </td>
                    <td>全局模式，表示查找所有要匹配的字符串</td>
                </tr>
                <tr>
                    <td><mark class="marksec">i
                        </mark></td>
                    <td>表示在匹配时，忽略大小写</td>
                </tr>
                <tr>
                    <td>
                        <mark class="marksec">m</mark>
                    </td>
                    <td>多行模式，表示查找到一行文本末尾时会继续查找</td>
                </tr>
                <tr>
                    <td>
                        <mark class="marksec">y</mark>
                    </td>
                    <td>粘附模式，表示只查找从lastIndex开始及之后的字符串</td>
                </tr>
                <tr>
                    <td>
                        <mark class="marksec">u</mark>
                    </td>
                    <td>Unicode模式，启用Unicode匹配</td>
                </tr>
                <tr>
                    <td>
                        <mark class="marksec">s</mark>
                    </td>
                    <td>dotall模式，表示元字符，匹配任何字符，包括\n和\r</td>
                </tr>
            </tbody>
        </table>
        <h2><mark>常用元字符</mark>：</h2>
        <table>
            <thead>
                <tr>
                    <td width='15%'>元字符</td>
                    <td width='15%'></td>
                    <td>描述</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>转义</td>
                    <td><mark class="marksec">/</mark></td>
                    <td>对元字符进行转义</td>
                </tr>
                <tr>
                    <td>小数点</td>
                    <td><mark class="marksec">.</mark></td>
                    <td>（小数点）默认匹配除换行符之外的任何单个字符
                        <br>如果 s ("dotAll") 标志位被设为 true，它也会匹配换行符
                    </td>
                </tr>
                <tr>
                    <td>竖线</td>
                    <td><mark class="marksec">a|b</mark></td>
                    <td>匹配‘a’或者‘b’
                    </td>
                </tr>
                <tr>
                    <td rowspan="4">单个字符/数字</td>
                    <td><mark class="marksec">\d</mark></td>
                    <td>匹配一个0到9之间的数字，等价于[0-9]
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">\D</mark></td>
                    <td>匹配一个非数字字符，等价于[^0-9]。
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">\w</mark></td>
                    <td>匹配一个单字字符（字母、数字或者下划线），等价于 [A-Za-z0-9_]
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">\W</mark></td>
                    <td>匹配一个非单字字符，等价于 [^A-Za-z0-9_]
                    </td>
                </tr>
                <tr>
                    <td rowspan="2">空白/非空白字符</td>
                    <td><mark class="marksec">\s</mark></td>
                    <td>匹配一个空白字符，包括空格、制表符、换页符和换行符，等价于[ \f\n\r\t\v\u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]。
                    </td>
                </tr>
                <tr>
                    <td>
                        <mark class="marksec">\S</mark>
                    </td>
                    <td>匹配一个非空白字符，等价于 [^ \f\n\r\t\v\u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]</td>
                </tr>
                <tr>
                    <td rowspan="4">边界符</td>
                    <td><mark class="marksec">^</mark></td>
                    <td>匹配输入的开始
                        <br>如果多行标志被设置为 true，那么也匹配换行符后紧跟的位置
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">$</mark></td>
                    <td>匹配输入的结束
                        <br>如果多行标志被设置为 true，那么也匹配换行符前的位置
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">\b</mark></td>
                    <td>匹配一个词的边界
                        <br>一个词的边界就是一个词不被另外一个“字”字符跟随的位置或者前面跟其他“字”字符的位置
                        <br>例如在字母和空格之间
                        <br>注意，匹配中不包括匹配的字边界
                        <br>换句话说，一个匹配的词的边界的内容的长度是0
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">\B</mark></td>
                    <td>匹配一个非单词边界。
                        <br>匹配如下几种情况：
                        <br>字符串第一个字符为非“字”字符
                        <br>字符串最后一个字符为非“字”字符
                        <br>两个单词字符之间
                        <br>两个非单词字符之间
                        <br>空字符串
                    </td>
                </tr>
                <tr>
                    <td rowspan="3">字符集</td>
                    <td><mark class="marksec">[ ]</mark></td>
                    <td>出现在中括号中的任何字符，都是普通字符，没有任何意思
                        <br>除了\d这种单个字符匹配
                        <br>不识别两位数
                        <br>表示匹配方括号中的一个
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">[xyz]</mark></td>
                    <td>一个字符集合
                        <br>匹配方括号中的任意字符，包括转义序列
                        <br>你可以使用破折号（-）来指定一个字符范围
                        <br>对于点（.）和星号（*）这样的特殊符号在一个字符集中没有特殊的意义
                        <br>他们不必进行转义，不过转义也是起作用的
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">[^xyz]</mark></td>
                    <td>一个反向字符集
                        <br>它匹配任何没有包含在方括号中的字符
                        <br>你可以使用破折号（-）来指定一个字符范围
                        <br>任何普通字符在这里都是起作用的
                    </td>
                </tr>
                <tr>
                    <td rowspan="6">量词符</td>
                    <td><mark class="marksec">*</mark></td>
                    <td>匹配前一个表达式 0 次或多次。等价于 {0,}</td>
                </tr>
                <tr>
                    <td><mark class="marksec">+</mark></td>
                    <td>匹配前面一个表达式 1 次或者多次。等价于 {1,}</td>
                </tr>
                <tr>
                    <td><mark class="marksec">?</mark></td>
                    <td>匹配前面一个表达式 0 次或者 1 次。等价于 {0,1}
                        <br>如果紧跟在任何量词 *、 +、? 或 {} 的后面，将会使量词变为非贪婪（匹配尽量少的字符）
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">{n}</mark></td>
                    <td>n是一个正整数，匹配前一个字符出现了n次</td>
                </tr>
                <tr>
                    <td><mark class="marksec">{n，}</mark></td>
                    <td>n是一个正整数，匹配前一个字符至少出现了n次</td>
                </tr>
                <tr>
                    <td><mark class="marksec">{n,m}</mark></td>
                    <td>n 和 m 都是整数。
                        <br>匹配前面的字符至少n次，最多m次。
                        <br>如果 n 或者 m 的值是0， 这个值被忽略。
                    </td>
                </tr>
                <tr>
                    <td rowspan="6">分组</td>
                    <td><mark class="marksec">(x)</mark></td>
                    <td>它会匹配 'x' 并且记住匹配项。
                        <br>其中括号被称为捕获括号
                        <br>小括号表示优先级
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">(?:x)</mark></td>
                    <td>匹配 'x' 但是不记住匹配项。
                        <br>这种括号叫作非捕获括号
                        <br>使得你能够定义与正则表达式运算符一起使用的子表达式<br>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">x(?=y)</mark></td>
                    <td>匹配“x”后面跟着“y”的x项
                        <br>这种叫做先行断言
                        <br>y不是匹配结果的一部分
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">(?&lt;=y)x</mark></td>
                    <td>匹配'x'仅当'x'前面是'y'.这种叫做后行断言。</td>
                </tr>
                <tr>
                    <td><mark class="marksec">x(?!y)</mark></td>
                    <td>匹配'x'仅当'x'前面是'y'.这种叫做后行断言。</td>
                </tr>
                <tr>
                    <td><mark class="marksec">(?&lt;!y)x</mark></td>
                    <td>仅仅当'x'前面不是'y'时匹配'x'，
                        <br>这被称为反向否定查找
                    </td>
                </tr>
            </tbody>
        </table>
        <h2><mark>RegExp实例属性</mark>：</h2>
        <table>
            <thead>
                <tr>
                    <td width='15%'>属性</td>
                    <td>描述</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><mark class="marksec">global</mark></td>
                    <td>布尔值，表示是否设置了g标记</td>
                </tr>
                <tr>
                    <td><mark class="marksec">ignoreCase</mark></td>
                    <td>布尔值，表示是否设置了i标记</td>
                </tr>
                <tr>
                    <td><mark class="marksec">unicode</mark></td>
                    <td>布尔值，表示是否设置了u标记</td>
                </tr>
                <tr>
                    <td><mark class="marksec">sticky</mark></td>
                    <td>布尔值，表示是否设置了y标记</td>
                </tr>
                <tr>
                    <td><mark class="marksec">multiline</mark></td>
                    <td>布尔值，表示是否设置了m标记</td>
                </tr>
                <tr>
                    <td><mark class="marksec">dotAll</mark></td>
                    <td>布尔值，表示是否设置了s标记</td>
                </tr>
                <tr>
                    <td><mark class="marksec">lastIndex</mark></td>
                    <td>整数，模式在源字符串中下一次搜索的开始位置，始终从0开始</td>
                </tr>
                <tr>
                    <td><mark class="marksec">source</mark></td>
                    <td>正则表达式的字面量字符串</td>
                </tr>
                <tr>
                    <td><mark class="marksec">flags</mark></td>
                    <td>正则表达式的标记字符串，始终以字面量形式的字符串模式返回</td>
                </tr>
            </tbody>
        </table>
        <h2><mark>RegExp实例方法</mark>：</h2>
        <table>
            <thead>
                <tr>
                    <td width='15%'>方法</td>
                    <td width="30%">描述</td>
                    <td>实例</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><mark class="marksec">exec()</mark></td>
                    <td>主要用于配合捕获组使用
                        <br>参数：即待匹配字符串
                        <br>返回值：数组 / null
                        <br>数组是Array的实例，包含额外的两个属性，index和input
                        <br>index：匹配项的起始位
                        <br>input：要查找的字符串
                        <br>数组第一项是匹配到的字符
                        <br>如果没有捕获组，则只有一个元素
                        <br>全局模式和非全局模式先结果不同，全局模式下会逐渐匹配所有的匹配项，非全局模式下始终是第一个匹配项
                    </td>
                    <td>
                        <pre class="contentarea" v-highlight><code>    // 匹配一个数字一次或多次
        let reg = /\d+/
        console.log(reg.exec('hello'))      // null
        console.log(reg.exec('hello 111'))      // [0:"111",index:6,input:"hello 111"]
        console.log(reg.exec('hello 1'))      // [0:"1",index:6,input:"hello 1"]</code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">test()</mark></td>
                    <td>主要用于检测字符串是否匹配，多用于用户验证
                        <br>参数：即待匹配字符串
                        <br>返回值：如果匹配，返回true，否则返回false
                    </td>
                    <td>
                        <pre class="contentarea" v-highlight><code>    // 匹配一个数字一次或多次
        let reg = /\d+/
        console.log(reg.test('hello'))      // false
        console.log(reg.test('hello 111'))      // true
        console.log(reg.test('hello 1'))      // true</code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">match()</mark></td>
                    <td>返回结果和exec方法一致，但是使用方法不同
                        <br>该方法是属于字符串的方法
                    </td>
                    <td>
                        <pre class="contentarea" v-highlight><code>    // 匹配一个数字一次或多次
        let reg = /\d+/
        console.log('hello'.match(reg))         // null
        console.log('hello 111'.match(reg))         // [0: "111",index: 6,input: "hello 111"]
        console.log('hello 1'.match(reg))         // [0: "1",index: 6,input: "hello 1"]</code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">replace()</mark></td>
                    <td>替换
                        <br>第一个参数为正则表达式
                        <br>第二个参数表示要替换成的字符
                        <br>字符串的方法
                    </td>
                    <td>
                        <pre class="contentarea" v-highlight><code>    // 匹配一个数字一次或多次
        let reg = /\d+/
        console.log('hello'.replace(reg, 'xxx'))         // hello
        console.log('hello 111'.replace(reg, 'xxx'))         // hello xxx
        console.log('hello 1'.replace(reg, 'xxx'))         // hello x</code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">toLocaleString()</mark></td>
                    <td>返回正则表达式的字面量</td>
                    <td>
                        <pre class="contentarea" v-highlight><code>    // 匹配一个数字一次或多次
        let reg = /\d+/
        console.log(reg.toLocaleString())         // /\d+/</code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">toString()</mark></td>
                    <td>返回正则表达式的字面量</td>
                    <td>
                        <pre class="contentarea" v-highlight><code>    // 匹配一个数字一次或多次
        let reg = /\d+/
        console.log(reg.toString())         // /\d+/</code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">valueOf()</mark></td>
                    <td>返回正则表达式对象本身</td>
                    <td><img src="../image/reg.png" alt=""></td>
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