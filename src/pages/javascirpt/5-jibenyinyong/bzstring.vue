<template>
    <div class="bzstring">
        <h2><mark>String</mark>：</h2>
        <ul>
            <li class="des">String 是对应字符串的引用类型</li>
            <li class="des">要创建一个 String 对象，使用 String 构造函数并传入一个字符串</li>
            <li class="des">语法：<mark class="marksec">let stringObject = new String("hello world");</mark></li>
            <li class="des">知识点：
                <br><mark class="marksec">length属性</mark>
                <br><mark class="marksec">charAt()</mark> / <mark class="marksec">charCodeAt()</mark> / <mark class="marksec">fromCharCode()</mark> / <mark>codePointAt()</mark>ES6 / <mark>fromCodePoint()</mark>ES6
                <br><mark class="marksec">concat()</mark> / <mark class="marksec">slice()</mark> / <mark class="marksec">substr()</mark> / <mark class="marksec">substring()</mark>
                <br><mark class="marksec">indexOf()</mark> / <mark class="marksec">lastIndexOf()</mark>
                <br><mark>startWith()</mark>ES6 / <mark>endsWith()</mark>ES6 / <mark>includes()</mark>ES6
                <br><mark class="marksec">trim()</mark> / <mark class="marksec">trimLeft()</mark> / <mark class="marksec">trimRight()</mark> / <mark>trimStart()</mark>ES6 / <mark>trimEnd()</mark>ES6
                <br><mark>repeat(n)</mark>ES6 / <mark>padStart(n,[arg])</mark>ES6 / <mark>padEnd(n,[arg])</mark>ES6
                <br><mark class="marksec">toLowerCase()</mark> / <mark class="marksec">toLocaleLowerCase()</mark> / <mark class="marksec">toUpperCase()</mark> / <mark class="marksec">toLocaleUpperCase()</mark>
                <br><mark class="marksec">match(arg)</mark> / <mark class="marksec">search(arg)</mark> / <mark class="marksec">replace(arg,arg)</mark> / <mark class="marksec">split(arg,[arg])</mark> / <mark>replaceAll(arg,arg)</mark>ES6 / <mark>matchAll(arg)</mark>ES6
                <br><mark class="marksec">localeCompare(arg)</mark>
                <br><mark>String.raw()</mark>ES6 / <mark>at()</mark>ES6
            </li>
        </ul>
        <h2><mark>length属性</mark>：</h2>
        <ul>
            <li class="des">每一个String对象都有一个length属性，表示字符串中字符的数量
            </li>
            <li class="des">即使字符串中包含双字节字符，也会按照单字符计算</li>
        </ul>
        <pre class="contentarea" v-highlight><code>    let str = 'hello world'
        console.log(str.length)         // 11</code></pre>
        <h2><mark>字符方法</mark>：</h2>
        <ul>
            <li class="des">javascript字符由16位码元组成，每16位码元对应一个字符</li>
            <li class="des">javascript字符串使用了两种Unicode编码混合的策略：UCS-2/UTF-16，采用16位编码的字符（U+0000~U+FFFF），这两种编码是一样的</li>
            <li class="des">增补平面：Unicode的一个策略，使用另外的16位去选择一个增补平面，每个字符由两个16位码元组成，这种策略叫做代理对</li>
        </ul>
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
                    <td><mark class="marksec">charAt(n)</mark></td>
                    <td>返回给定索引位置的字符
                        <br>参数n表示索引
                        <br>原理是找到索引位置的16位码元
                        <br>返回该码元对应的字符
                        <br>适用于16位码元的字符
                        <br>实例方法
                    </td>
                    <td>
                        <pre class="contentarea" v-highlight><code>    let str = 'hello world'
        console.log(str.charAt(0))      // h
        console.log(str.charAt(1))      // e
        console.log(str.charAt(2))      // l
        console.log(str.charAt(3))      // l</code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">charCodeAt(n)</mark></td>
                    <td>返回指定索引位置字符的码元值
                        <br>参数n表示索引，整数
                        <br>适用于16位码元的字符
                        <br>实例方法
                    </td>
                    <td>
                        <pre class="contentarea" v-highlight><code>    let str = 'hello world'
        console.log(str.charCodeAt(0))      // 104
        console.log(str.charCodeAt(1))      // 101
        console.log(str.charCodeAt(2))      // 108
        console.log(str.charCodeAt(3))      // 108</code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">fromCharCode(...n)</mark></td>
                    <td>该方法可以接受任意多个数值
                        <br>返回该数值对应的字符
                        <br>适用于16位码元的字符
                        <br>构造函数方法
                    </td>
                    <td>
                        <pre class="contentarea" v-highlight><code>    let str = String.fromCharCode(104, 101, 108, 108)
        console.log(str)        // hell</code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">codePointAt(n)</mark></td>
                    <td>返回指定索引位置字符的码元
                        <br>与charCodeAt（）类似
                        <br>不同的是，该方法可以识别完整的码元，包括代理对（32位）
                        <br>实例方法
                    </td>
                    <td>
                        <pre class="contentarea" v-highlight><code>    let str = 'hello world'
        console.log(str.charPointAt(0))      // 104
        console.log(str.charPointAt(1))      // 101
        console.log(str.charPointAt(2))      // 108
        console.log(str.charPointAt(3))      // 108</code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">fromCodePoint(...n)</mark></td>
                    <td>接收任意数量的数值，返回数值对应的字符
                        <br>与fromCharCode（）类似
                        <br>不同的是，可以接收任意数量的码元，不限于16位
                        <br>构造函数方法
                    </td>
                    <td>
                        <pre class="contentarea" v-highlight><code>    let str = String.fromCharPoint(104, 101, 108, 108)
        console.log(str)        // hell</code></pre>
                    </td>
                </tr>
            </tbody>
        </table>
        <h2><mark>字符串拼接与截取</mark>：</h2>
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
                    <td><mark class="marksec">concat()</mark></td>
                    <td>拼接字符串
                        <br>不会影响原始字符串
                        <br>“+”号也用于拼接字符串
                        <br>模板字面量插值具有同样的功能
                    </td>
                    <td>
                        <pre class="contentarea" v-highlight><code>    let stringValue = "hello ";
        let result = stringValue.concat("world");
        console.log(result);   //hello world
        console.log(stringValue);  //hello</code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">slice(m,n)</mark></td>
                    <td>从目标字符串中提取子字符串
                        <br>参数：
                        <br>m：开始位置索引值
                        <br>n：结束位置索引值
                        <br>包含m不包含n，如果省略n，则一直提取到末尾
                        <br>如果参数出现负值，则负值的实际值是：该负值加上字符串长度
                        <br>不会修改原始字符串
                    </td>
                    <td>
                        <pre class="contentarea" v-highlight><code>    let str = 'hello world'
        let str2 = str.slice(1, 5)
        console.log(str2)        // ello
        console.log(str)        // hello world</code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">substr(m,n)</mark></td>
                    <td>从目标字符串中提取子字符串
                        <br>参数：
                        <br>m：开始位置的索引值
                        <br>n：要提取的字符的个数
                        <br>同时包含m和n，如果n省略，则表示提取到末尾
                        <br>如果m为负值，则将m加上字符串长度
                        <br>如果n为负值，则n=0
                        <br>不会修改原始字符串
                    </td>
                    <td>
                        <pre class="contentarea" v-highlight><code>    let str = 'hello world'
        let str2 = str.substr(0, 4)
        console.log(str2)       // hell
        console.log(str)        // hello world</code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">substring(m,n)</mark></td>
                    <td>从目标字符串中提取子字符串
                        <br>参数：
                        <br>m：开始位置索引值
                        <br>n：结束位置索引值
                        <br>包含m不包含n，如果省略n，则一直提取到末尾
                        <br>如果参数出现负值，则将所有负值都转换为0
                        <br>不会修改原始字符串
                    </td>
                    <td>
                        <pre class="contentarea" v-highlight><code>    let str = 'hello world'
        let str2 = str.substring(0, 4)
        console.log(str2)       // hell
        console.log(str)        // hello world</code></pre>
                    </td>
                </tr>
            </tbody>
        </table>
        <h2><mark>字符串位置</mark>：</h2>
        <table>
            <thead>
                <tr>
                    <td width='25%'>方法</td>
                    <td width='30%'>描述</td>
                    <td>实例</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><mark class="marksec">indexOf(string,[arg])</mark></td>
                    <td>在目标字符串中定位子字符串
                        <br>参数string表示要定位的字符串
                        <br>返回索引值，如果没有返回-1
                        <br>默认从字符串的开头向后查找
                        <br>第二个参数可选，表示从哪里开始查找
                    </td>
                    <td rowspan="2">
                        <pre class="contentarea" v-highlight><code>    let str = 'hello world'
        let str2 = 'llo'
        console.log(str.indexOf(str2))      // 2
        console.log(str.indexOf(str2, 4))       // -1
        
        console.log(str.lastIndexOf(str2))      // 2
        console.log(str.lastIndexOf(str2, 1))       // -1</code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">lastIndexOf(string,[arg])</mark></td>
                    <td>在目标字符串中定位子字符串
                        <br>参数string表示要定位的字符串
                        <br>返回索引值，如果没有返回-1
                        <br>默认从字符串的末尾向前查找
                        <br>第二个参数可选，表示从哪里开始查找
                    </td>
                </tr>
            </tbody>
        </table>
        <h2><mark>ES6扩展方法</mark>：</h2>
        <table>
            <thead>
                <tr>
                    <td width='25%'>方法</td>
                    <td width='30%'>描述</td>
                    <td>实例</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><mark class="marksec">startWith(string,[arg])</mark></td>
                    <td>检查目标字符串是否以给定字符串开头
                        <br>默认从索引0的位置开始
                        <br>第二个参数可选，表示以该索引位置作为字符串的开头（相当于忽略前面的字符）
                        <br>返回值是true/false
                    </td>
                    <td rowspan="3">
                        <pre class="contentarea" v-highlight><code>    let str = 'hello world'
        console.log(str.startsWith('h'))        // true
        console.log(str.startsWith('h', 2))         // false

        console.log(str.endsWith('d'))      // true
        console.log(str.endsWith('d', 5))       // false

        let str2 = 'llo'
        console.log(str.includes(str2))         // true
        console.log(str.includes(str2, 3))      // false</code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">endsWith(string,[arg])</mark></td>
                    <td>检查目标字符串是否以给定字符串结尾
                        <br>默认从字符串的尾部开始
                        <br>第二个参数可选，表示字符串以该索引值的位置当做末尾（相当于忽略后面的字符）
                        <br>返回值：true/false
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">includes(string,[arg])</mark></td>
                    <td>检查整个字符串是否包含给定字符串
                        <br>默认从头开始检查
                        <br>第二个参数可选，表示从该索引值的位置向后检查
                        <br>返回值：true/false
                    </td>
                </tr>
            </tbody>
        </table>
        <h2><mark>去除字符串空格</mark>：</h2>
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
                    <td><mark class="marksec">trim()</mark></td>
                    <td rowspan="5">trim（）方法去除两边的空格
                        <br>trimLeft（）去除字符串左边的空格
                        <br>trimRight（）去除字符串右边的空格
                        <br>trimStart()与trimLeft()效果一致，是trimLeft()的别名
                        <br>trimEnd()与trimRight()效果一致，是trimRight()的别名
                        <br>这些方法会创建一个字符串副本，所以不会影响原字符串<br>
                    </td>
                    <td rowspan="5">
                        <pre class="contentarea" v-highlight><code>    let str = '    hello world    '
        console.log(str.trim())         // 'hello world'
        console.log(str.trimLeft())         // 'hello world    '
        console.log(str.trimRight())        // '    hello world'
        console.log(str.trimStart()) // 'hello world    '
        console.log(str.trimEnd()) // '    hello world'</code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">trimLeft()</mark></td>
                </tr>
                <tr>
                    <td><mark class="marksec">trimRight()</mark></td>
                </tr>
                <tr>
                    <td><mark class="marksec">trimStart()</mark>ES6</td>
                </tr>
                <tr>
                    <td><mark class="marksec">trimEnd()</mark>ES6</td>
                </tr>
            </tbody>
        </table>
        <h2><mark>复制字符串</mark>：</h2>
        <table>
            <thead>
                <tr>
                    <td width='20%'>方法</td>
                    <td width='30%'>描述</td>
                    <td>实例</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><mark class="marksec">repeat(n)</mark></td>
                    <td>接收一个整数n
                        <br>表示要将字符串复制多少次，返回所有副本拼接后的结果
                        <br>不会影响原字符串
                    </td>
                    <td>
                        <pre class="contentarea" v-highlight><code>    let str = 'hello world'
        let str2 = str.repeat(3)
        console.log(str2)       // hello worldhello worldhello world</code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">padStart(n,[arg])</mark></td>
                    <td rowspan="2">复制字符串，参数n表示复制的长度
                        <br>如果长度小于字符串长度，则会返回原来的字符串
                        <br>如果长度超出目标字符串，则会进行填充，默认以空格填充
                        <br>第二个参数可选，指定以什么填充
                        <br>不会修改原来的字符串
                        <br>padStart()方法在左侧填充
                        <br>padEnd()方法在右侧填充
                        <br>也可以将两个字符串拼接，长度为两个字符串之和
                    </td>
                    <td rowspan="2">
                        <pre class="contentarea" v-highlight><code>    let str = 'hello'
        console.log(str.padStart(1))        // hello
        console.log(str.padStart(9))        // '    hello'
        console.log(str.padStart(9, 'x'))        // 'xxxxhello'

        console.log(str.padEnd(1))        // hello
        console.log(str.padEnd(9))        // 'hello    '
        console.log(str.padEnd(9, 'x'))        // 'helloxxxx'</code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">padEnd(n,[arg])</mark></td>
                </tr>
            </tbody>
        </table>
        <h2><mark>字符串大小写转换</mark>：</h2>
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
                    <td><mark class="marksec">toLowerCase()</mark></td>
                    <td rowspan="2">将字符串转换为小写
                        <br>toLocaleLowerCase（）是特定地区的方法
                    </td>
                    <td rowspan="2">
                        <pre class="contentarea" v-highlight><code>    let str = 'HELLO WORLD'
        console.log(str.toLowerCase())      // hello world
        console.log(str.toLocaleLowerCase())        // hello world</code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">toLocaleLowerCase()</mark></td>
                </tr>
                <tr>
                    <td><mark class="marksec">toUpperCase()</mark></td>
                    <td rowspan="2">将字符串转换为大写
                        <br>toLocaleUpperCase（）方法是特定地区的方法
                    </td>
                    <td rowspan="2">
                        <pre class="contentarea" v-highlight><code>    let str = 'hello world'
        console.log(str.toUpperCase())      // HELLO WORLD
        console.log(str.toLocaleUpperCase())        // HELLO WORLD</code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">toLocaleUpperCase()</mark></td>
                </tr>
            </tbody>
        </table>
        <h2><mark>字符串模式匹配</mark>：</h2>
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
                    <td><mark class="marksec">match(arg)</mark></td>
                    <td>本质上与RegExp的exec（）方法相同
                        <br>接收一个参数，正则表达式字符串或者RegExp对象
                        <br>返回一个数组，该数组与exec方法返回的数组一致
                    </td>
                    <td>
                        <pre class="contentarea" v-highlight><code>    let reg = /\d+/
        console.log('hello 111'.match(reg))         
        // [0: "111",index: 6,input: "hello 111"]
        console.log('hello world'.match('world'))       
        // [0: "world", index: 6, input: "hello world"]</code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">matchAll(arg)</mark>ES6</td>
                    <td>本质上与RegExp的exec（）方法相同
                        <br>接收一个参数，正则表达式字符串或者RegExp对象
                        <br>返回所有匹配项的可迭代对象
                    </td>
                    <td>
                        <pre class="contentarea" v-highlight><code>    let str = 'hello world hello world'
        console.log(str.match('hello'))
        // [0: "hello",index: 0,input: "hello world hello world"]
        let res = str.matchAll('hello')
        for (let once of res) {
            console.log(once)
            // [0: "hello",index: 0,input: "hello world hello world"]
            // [0: "hello",index: 0,input: "hello world hello world"]
        }</code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">search(arg)</mark></td>
                    <td>查找字符串
                        <br>接收一个参数，正则表达式字符串或者RegExp对象
                        <br>返回匹配模式第一个匹配项的索引
                        <br>从头向后匹配，如果没有匹配到，则返回-1
                    </td>
                    <td>
                        <pre class="contentarea" v-highlight><code>    let reg = /\d+/
        console.log('hello 111'.search(reg))         // 6
        console.log('hello world'.search('world'))       // 6
        console.log('hello 111'.search('0'))        // -1</code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">replace(arg,arg)</mark></td>
                    <td>替换字符串，接收两个参数
                        <br>第一个参数为RegExp对象或者字符串
                        <br>第二个参数为字符串或者函数
                        <br>会替换子字符串，第一个参数是要被替换的字符串，第二个参数是将要替换成的字符串
                        <br>如果要替换所有的字符，则第一个参数必须是正则表达式，且是全局模式
                    </td>
                    <td>
                        <pre class="contentarea" v-highlight><code>    let str = 'hello world'
        console.log(str.replace('world', 'xxxx'))       // hello xxxx
        console.log(str.replace(/llo/, 'xxx'))      // hexxx world</code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">replaceAll(arg,arg)</mark>ES6</td>
                    <td>替换字符串，接收两个参数
                        <br>第一个参数为RegExp对象或者字符串
                        <br>第二个参数为字符串或者函数
                        <br>会替换所有子字符串，第一个参数是要被替换的字符串，第二个参数是将要替换成的字符串
                    </td>
                    <td>
                        <pre class="contentarea" v-highlight><code>    let str = 'hello world hello world'
        console.log(str.replace('hello', 'xxxxx'))      
        // xxxxx world hello world 只会替换一个
        console.log(str.replaceAll('hello', 'xxxxx'))   
        // xxxxx world xxxxx world 会替换所有</code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">split(arg,arg)</mark></td>
                    <td>分割字符串为数组
                        <br>第一个参数是分隔符，可以是字符串或者RegExp对象
                        <br>第二个参数可选，是数组的大小
                    </td>
                    <td>
                        <pre class="contentarea" v-highlight><code>    let str = 'h e l l o'
        console.log(str.split(' '))         // Array(5) [ "h", "e", "l", "l", "o" ]
        console.log(str.split(' ', 3))      // Array(3) [ "h", "e", "l" ]</code></pre>
                    </td>
                </tr>
            </tbody>
        </table>
        <h2><mark>localeCompare(arg)</mark>方法：</h2>
        <ul>
            <li class="des">按照字母表顺序，比较字符串
                <br>如果字符串在字符串参数前，返回-1
                <br>如果字符串在字符串参数后，返回1
                <br>如果相等，返回0
            </li>
        </ul>
        <pre class="contentarea" v-highlight><code>    let str1 = 'b'
        console.log(str1.localeCompare('a'))        // 1
        console.log(str1.localeCompare('b'))        // 0
        console.log(str1.localeCompare('c'))        // -1</code></pre>
        <h2><mark>String.raw()</mark>：</h2>
        <ul>
            <li class="des">该方法返回一个斜杠都被转义（即斜杠前面再加一个斜杠）的字符串</li>
            <li class="des">往往用于模板字符串的处理方法</li>
        </ul>
        <pre class="contentarea" v-highlight><code>    console.log(String.raw`hello\n`)    // hello\n   但是实际返回的是hello\\n
        console.log(String.raw`hello\n` === 'hello\\n')     // true 证明了返回的是hello\\n</code></pre>
        <h2><mark>at()</mark>：</h2>
        <ul>
            <li class="des">接受一个整数作为参数，返回参数指定位置的字符，支持负索引（即倒数的位置）</li>
        </ul>
        <pre class="contentarea" v-highlight><code>    let str = 'hello'
        console.log(str.at(0))  // h
        console.log(str.at(1))  // e
        console.log(str.at(2))  // l
        console.log(str.at(3))  // l
        console.log(str.at(4))  // o</code></pre>
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>