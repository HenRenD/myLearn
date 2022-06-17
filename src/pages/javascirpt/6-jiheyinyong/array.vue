<template>
    <div class="array">
        <h2><mark>Array</mark>：</h2>
        <ul>
            <li class="des">javascript中的数组可以存储任意类型的数据
            </li>
            <li class="des">数组是动态大小，会随着数据添加自动增长</li>
            <li class="des">知识点：
                <br><mark class="marksec">new Array()</mark>
                <br><mark>Array.from()</mark>ES6 / <mark>Array.of()</mark>ES6
                <br><mark class="marksec">数组空位</mark> / <mark class="marksec">length属性</mark>
                <br><mark class="marksec">Array.isArray()</mark>
                <br><mark>keys()</mark>ES6 / <mark>values()</mark>ES6 / <mark>entries()</mark>ES6
                <br><mark>fill()</mark>ES6 / <mark>copyWithin()</mark>ES6
                <br><mark class="marksec">valueOf()</mark> / <mark class="marksec">toString()</mark> / <mark class="marksec">toLocaleString()</mark> / <mark class="marksec">join()</mark>
                <br><mark class="marksec">push()</mark> / <mark class="marksec">pop()</mark> / <mark class="marksec">shift()</mark> / <mark class="marksec">unshift()</mark>
                <br><mark class="marksec">reverse()</mark> / <mark class="marksec">sort()</mark>
                <br><mark class="marksec">concat()</mark> / <mark class="marksec">slice()</mark> / <mark class="marksec">splice()</mark>
                <br><mark class="marksec">indexOf()</mark> / <mark class="marksec">lastIndexOf()</mark> / <mark>includes()</mark>ES6 / <mark>find()</mark>ES6 / <mark>findIndex()</mark>ES6
                <br><mark class="marksec">every()</mark> / <mark class="marksec">some()</mark> / <mark class="marksec">filter()</mark> / <mark class="marksec">forEach()</mark> / <mark class="marksec">map()</mark>
                <br><mark class="marksec">reduce()</mark> / <mark class="marksec">reduceRight()</mark>
                <br><mark>flat()</mark>ES6 / <mark>flatMap()</mark>ES6 / <mark>at()</mark>ES6
            </li>
        </ul>
        <h2>
            <mark>创建数组</mark>：
        </h2>
        <table>
            <thead>
                <tr>
                    <td width='17%'>方法</td>
                    <td width='30%'>描述</td>
                    <td>实例</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><mark class="marksec">Array构造函数</mark></td>
                    <td>在使用Array()构造函数的时候 new操作符可以省略</td>
                    <td>
                        <pre class="contentarea" v-highlight><code>    let colors = new Array();
        let colors = new Array(20);         //可以预先指定长度，这个值会给到length
        let colors = new Array("red", "blue", "green");         //可以给定实际的数据</code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">字面量</mark></td>
                    <td>最常用的方法</td>
                    <td>
                        <pre class="contentarea" v-highlight><code>    let colors = ["red"，"blue"，"green"];
        let colors = [];</code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">from</mark>(ES6)</td>
                    <td>用于将类数组结构转换为数组实例
                        <br>Array.from()
                        <br>第一个参数：为类数组对象，可迭代的结构，或者有length属性或索引
                        <br>第二个参数：可选，为映射函数，可以对新数组的值做操作
                    </td>
                    <td>
                        <pre class="contentarea" v-highlight><code>    let str = 'hello'
        let arr = Array.from(str)
        console.log(arr)        // Array(5) [ "h", "e", "l", "l", "o" ]

        let arr2 = Array.from(str, (ele, index) => {
            return ele + 'x'
        })
        console.log(arr2)       // Array(5) [ "hx", "ex", "lx", "lx", "ox" ]</code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">of</mark>(ES6)</td>
                    <td>将一组参数转换为数组实例
                        <br>Array.of()
                        <br>该方法用于替代ES6之前常用的：Array.prototype.slice.call(arguments)
                        <br>一种异常笨拙的将arguments对象转换为数组的方式
                    </td>
                    <td>
                        <pre class="contentarea" v-highlight><code>    function sum(a, b) {
            let argumentarr = Array.of(arguments)
            let ar = Array.from(arguments)      // 使用from 方法也可以将其转换为数组
            console.log(argumentarr)      // argumentsarr[0] = 
                                        //Arguments { 0: 1, 1: 2, 2: 3, … }
                                        //事实上这里是一个类数组对象
            console.log(ar) // [ 1, 2, 3 ]
        }
        sum(1, 2, 3)</code></pre>
                    </td>
                </tr>
            </tbody>
        </table>
        <h2><mark>数组空位(ES6)</mark>：</h2>
        <ul>
            <li class="des">可以使用一串逗号来创建空位
                <br>ES6之间这些空位没有，ES6重新定义了这些空位，会被赋予undefined值
                <br>由于行为不一致和存在性能隐患，应避免使用数组空位
                <br>如果要使用，可以显式的用undedined值代替
            </li>
        </ul>
        <pre class="contentarea" v-highlight><code>    let arr = [1, 2, , , ,]
        console.log(arr)        // Array(5) [ 1, 2, &lt;3 empty slots> ]</code></pre>
        <h2><mark>数组索引与length属性</mark>：</h2>
        <ul>
            <li class="des">数组的索引可以方便的访问数组
                <br>如果索引大于等于0，则从左到右访问，如果索引小于0，则从右到左访问
                <br>数组的<mark class="marksec">length属性</mark>，不仅仅是只读的，还可以修改
                <br>减小length，数组末尾的元素会被删除，增大length，会以undefined值代替
                <br>数组的索引最大值永远是length-1
                <br>所以可以使用array[length]，配合循环向数组中添加元素
            </li>
        </ul>
        <pre class="contentarea" v-highlight><code>    // 向数组中添加元素的方法
        function appendArr(ele, arr) {
            arr[arr.length] = ele
        }
        let arr = []
        for (let i = 0; i &lt; 5; i++) {
            appendArr(i, arr)
        }
        console.log(arr) // Array(5) [ 0, 1, 2, 3, 4 ]</code></pre>
        <h2><mark>检测数组</mark>：</h2>
        <ul>
            <li class="des"><mark class="marksec">Array.isArray(value)</mark>
                <br>检查value是不是数组
                <br>返回布尔值
            </li>
        </ul>
        <pre class="contentarea" v-highlight><code>    let str = 'hello'
        let arr = Array.from(str)

        console.log(Array.isArray(str))         // false
        console.log(Array.isArray(arr))         // true</code></pre>
        <h2><mark>迭代器方法</mark>(ES6)：</h2>
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
                    <td><mark class="marksec">keys()</mark></td>
                    <td>返回数组索引的迭代器</td>
                    <td rowspan="3">
                        <pre class="contentarea" v-highlight><code>    let arr = [1, 2, 3, 4, 5]
        let arrkeys = arr.keys()
        let arrvalues = arr.values()
        let arrentries = arr.entries()
        console.log(arrkeys)        // Array Iterator {  }
        console.log(arrvalues)      // Array Iterator {  }
        console.log(arrentries)         // Array Iterator {  }
        for (let once of arrkeys) {
            console.log(once)       // 0 1 2 3 4
        }
        for (let once of arrvalues) {
            console.log(once)       // 1 2 3 4 5
        }
        for (let once of arrentries) {
            console.log(once)       // Array[0, 1]  Array[1, 2]  Array[2, 3]  Array[3, 4]  Array[4, 5]
        }</code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">values()</mark></td>
                    <td>返回数组元素的迭代器</td>
                </tr>
                <tr>
                    <td><mark class="marksec">entries()</mark></td>
                    <td>返回索引/值键值对的迭代器</td>
                </tr>
            </tbody>
        </table>
        <h2><mark>复制和填充</mark>(ES6)：</h2>
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
                    <td><mark class="marksec">fill()</mark></td>
                    <td>fill(value,start,end)
                        <br>value使用填充的值
                        <br>start表示从哪里开始
                        <br>end表示到哪里结束（不包含）
                        <br>当start和end不符合要求时，不填充，或者填充一部分
                        <br>实际上是替换数组里的内容
                        <br>改变原来的数组
                    </td>
                    <td>
                        <pre class="contentarea" v-highlight><code>    let arr = [1, 2, 3]
        arr.fill('x', 0, 1)
        console.log(arr)        // Array(3) [ "x", 2, 3 ]</code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">copyWithin()</mark></td>
                    <td>copyWithin（index,start,end）
                        <br>index：表示要从哪里开始填充
                        <br>start从哪里开始复制
                        <br>end到哪里结束复制（不包含）
                        <br>当start和end不符合要求时，不填充或者填充一部分
                        <br>使用复制的内容重新填充数组，改变原有位置的元素
                    </td>
                    <td><br>
                        <pre class="contentarea" v-highlight><code>   let arr = [1, 2, 3]
        arr.copyWithin(1, 0, 1)
        console.log(arr)        // Array(3) [ 1, 1, 3 ]</code></pre>
                    </td>
                </tr>
            </tbody>
        </table>
        <h2><mark>转换为字符串</mark>：</h2>
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
                    <td><mark class="marksec">valueOf()</mark></td>
                    <td>返回数组本身</td>
                    <td rowspan="4">
                        <pre class="contentarea" v-highlight><code>    let arr = [1, 2, 3]
        console.log(arr.valueOf())      // Array(3) [ 1, 2, 3 ]
        console.log(arr.toString())         // 1,2,3
        console.log(arr.toLocaleString())       // 1,2,3
        console.log(arr.join('_'))      // 1_2_3</code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">toString()</mark></td>
                    <td>返回数组字符串，以逗号分隔</td>
                </tr>
                <tr>
                    <td><mark class="marksec">toLocaleString()</mark></td>
                    <td>返回数组字符串，以逗号分隔</td>
                </tr>
                <tr>
                    <td><mark class="marksec">join()</mark></td>
                    <td>返回数组字符串，可以指定分隔符，默认使用逗号</td>
                </tr>
            </tbody>
        </table>
        <h2><mark>栈与队列</mark>：</h2>
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
                    <td><mark class="marksec">push()</mark></td>
                    <td>接收任意多个参数
                        <br>将其添加到数组末尾
                        <br>返回新的数组长度
                        <br>直接操作原数组
                    </td>
                    <td rowspan="2">
                        <pre class="contentarea" v-highlight><code>    let arr = [1, 2, 3]
        console.log(arr.push(5,6))        // 5
        console.log(arr)        // Array(5) [ 1, 2, 3, 5, 6]

        console.log(arr.pop())      // 6
        console.log(arr)        // Array(4) [ 1, 2, 3, 5]</code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">pop()</mark></td>
                    <td>删除数组的最后一项
                        <br>并改变数组的长度
                        <br>返回被删除的元素
                        <br>直接操作原数组
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">shift()</mark></td>
                    <td>删除数组的第一个元素
                        <br>改变数组长度
                        <br>返回被删除元素
                        <br>同push一起可以实现队列的效果
                    </td>
                    <td rowspan="2">
                        <pre class="contentarea" v-highlight><code>   let arr = [1, 2, 3]
        console.log(arr.unshift(5, 6))      // 5
        console.log(arr)        // Array(5) [ 5, 6, 1, 2, 3 ]
        console.log(arr.shift())        // 5
        console.log(arr)        // Array(4) [ 6, 1, 2, 3 ]</code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">unshitf()</mark></td>
                    <td>接收任意多个参数
                        <br>添加到数组的开头
                        <br>返回新的数组长度
                    </td>
                </tr>
            </tbody>
        </table>
        <h2><mark>排序方法</mark>：</h2>
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
                    <td><mark class="marksec">reverse()</mark></td>
                    <td>反向排序数组
                        <br>返回新的数组
                    </td>
                    <td>
                        <pre class="contentarea" v-highlight><code>    let arr = [1, 2, 3]
        console.log(arr.reverse())      // Array(3) [ 3, 2, 1 ]</code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">sort()</mark></td>
                    <td>默认升序排列数组</td>
                    <td>
                        <pre class="contentarea" v-highlight><code>    let arr = [1, 3, 9, 2, 4, 1]
        console.log(arr.sort())         // Array(6) [ 1, 1, 2, 3, 4, 9 ]
        // 比较函数
        function compare(value1, value2) {
            return value1 - value2;  // 升序函数
        }
        function compare2(value1, value2) {
            return value2 - value1;  // 降序函数
        }
        console.log(arr.sort(compare2))         // Array(6) [ 9, 4, 3, 2, 1, 1 ]</code></pre>
                    </td>
                </tr>
            </tbody>
        </table>
        <h2><mark>拼接截取数组</mark>：</h2>
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
                    <td>接收任意多个参数
                        <br>参数可以是单独的元素或者数组
                        <br>将所有的项加到当前数组的末尾
                        <br>返回一个新的数组
                        <br>对原数组不产生影响
                    </td>
                    <td>
                        <pre class="contentarea" v-highlight><code>    let arr = [1, 2, 3]
        console.log(arr.concat(5, 6))       // Array(5) [ 1, 2, 3, 5, 6 ]
        console.log(arr.concat([7, 7]))      // Array(5) [ 1, 2, 3, 7, 7 ]</code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">slice()</mark></td>
                    <td>截取子数组
                        <br>slice（start，end）
                        <br>start表示从哪里开始截取
                        <br>end表示到哪里截取结束（不包含）
                        <br>如果不指定end，则截取到数组末尾<br>
                        <br>返回截取的新数组
                    </td>
                    <td>
                        <pre class="contentarea" v-highlight><code>    let arr = [1, 2, 3, 4, 5]
        console.log(arr.slice(0, 3))    // Array(3) [ 1, 2, 3 ]</code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">splice()</mark></td>
                    <td>删除：
                        <br>splice(start,num)
                        <br>start表示从那个位置开始删除
                        <br>num表示删除的数量
                        <br>插入：
                        <br>splice（start，num，value）
                        <br>start表示从哪里开始插入
                        <br>num表示要删除的数量，这里为0
                        <br>value表示要插入的元素
                        <br>替换：
                        <br>splice（start，num，value）
                        <br>start表示从哪里开始
                        <br>num表示数量，这里为1
                        <br>value表示要插入的元素
                        <br>splice方法始终返回一个数组，包含从原数组中删除的元素，如果没有删除，则返回空数组
                    </td>
                    <td>
                        <pre class="contentarea" v-highlight><code>    let arr = [1, 2, 3, 4, 5]
        // 删除
        arr.splice(0, 2)
        console.log(arr)    // Array(3) [ 3, 4, 5 ]

        // 插入
        arr.splice(0, 0, 5)
        console.log(arr)    // Array(4) [ 5, 3, 4, 5 ]

        // 替换
        arr.splice(1, 1, 9)
        console.log(arr)  // Array(4) [ 5, 9, 4, 5 ]</code></pre>
                    </td>
                </tr>
            </tbody>
        </table>
        <h2><mark>查找位置</mark>：</h2>
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
                    <td><mark class="marksec">indexOf()</mark></td>
                    <td rowspan="3">indexOf：从头往后查找，找到了返回索引位置，否则返回-1
                        <br>lastIndexOf：从后往前查找，找到了返回索引位置，否则返回-1
                        <br>includes：从头往后查，找到了返回true，否则返回false
                        <br>都接受两个参数：
                        <br>第一个参数为value，表示要查找的元素
                        <br>第二个为start，表示从哪里开始
                        <br>查找的时候，是使用全等比较===
                    </td>
                    <td rowspan="3">
                        <pre class="contentarea" v-highlight><code>    let arr = [1, 2, 3, 4, 5]
        console.log(arr.indexOf(3))  // 2
        console.log(arr.indexOf(3, 3))  // -1

        console.log(arr.lastIndexOf(3))     // 2
        console.log(arr.lastIndexOf(3, 1))      // -1

        console.log(arr.includes(3))    // true
        console.log(arr.includes(3, 3))     // false</code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">lastIndexOf()</mark></td>
                </tr>
                <tr>
                    <td><mark class="marksec">includes()</mark>ES6</td>
                </tr>
                <tr>
                    <td><mark class="marksec">find()</mark>ES6</td>
                    <td rowspan="2">断言函数接收三个参数：
                        <br>元素
                        <br>索引
                        <br>数组本身
                        <br>find方法和findIndex方法使用了断言函数
                        <br><mark class="marksec">array.find((element,index,array)=>element.属性&lt;条件)</mark>
                        <br>find返回满足条件的值
                        <br>findIndex返回索引
                        <br>这两个方法找到匹配之后，就不在查找
                    </td>
                    <td rowspan="2">
                        <pre class="contentarea" v-highlight><code>    let arr = [1, 2, 3, 4, 5]
        let result1 = arr.find((ele, index, arr) => {
            return ele > 2
        })
        console.log(result1)   // 3

        let result2 = arr.findIndex((ele, index, arr) => {
            return ele > 2
        })
        console.log(result2)    // 2</code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">findIndex()</mark>ES6</td>
                </tr>
            </tbody>
        </table>
        <h2><mark>迭代方法</mark>：</h2>
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
                    <td><mark class="marksec">every()</mark></td>
                    <td rowspan="5">每个方法接收两个参数：
                        <br>第一个是一个函数
                        <br>第二个可选，函数的执行上下文
                        <br>函数接收三个参数：
                        <br>数组元素
                        <br>元素索引
                        <br>数组本身
                        <br>every：数组的每一项的函数结果都为true，该方法返回true
                        <br>some：有一项的函数结果返回true，该方法返回true
                        <br>filter：过滤数组，使函数返回true的项组成一个新数组并返回
                        <br>forEach：数组的每一项都交给函数运行，没有返回值
                        <br>map：每一项都交给函数运行，返回所有的函数结果组成的数组
                        <br>上面的这些方法都不改变原数组
                    </td>
                    <td rowspan="5">
                        <pre class="contentarea" v-highlight><code>    let arr = [1, 2, 3, 4, 5]

        // every
        let resEvery = arr.every((ele, index, arr) => {
            return ele > 3
        })
        console.log(resEvery)   // false
        // some
        let resSome = arr.some((ele, index, arr) => {
            return ele > 3
        })
        console.log(resSome)    // true
        // filter
        let resFilter = arr.filter((ele, index, arr) => {
            return ele > 3
        })
        console.log(resFilter)   // Array [ 4, 5 ]
        // forEach(相当于遍历)
        arr.forEach((ele, index, arr) => {
            console.log(ele)   // 1 2 3 4 5
        })
        // map
        let resMap = arr.map((ele, index, arr) => {
            return ele + 2
        })
        console.log(resMap)     // Array(5) [ 3, 4, 5, 6, 7 ]</code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">filter()</mark></td>
                </tr>
                <tr>
                    <td><mark class="marksec">forEach()</mark></td>
                </tr>
                <tr>
                    <td><mark class="marksec">map()</mark></td>
                </tr>
                <tr>
                    <td><mark class="marksec">some()</mark></td>
                </tr>
            </tbody>
        </table>
        <h2><mark>数组归并</mark>：</h2>
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
                    <td><mark class="marksec">reduce()</mark></td>
                    <td rowspan="2">这两个方法都会迭代数组的所有项
                        <br>在此基础上构建一个最终的返回值
                        <br>都接收两个参数：
                        <br>归并函数
                        <br>归并起点的初始值
                        <br>归并函数参数：
                        <br>上一个归并值
                        <br>当前项
                        <br>当前项的索引
                        <br>数组本身
                        <br>函数的返回值会作为下一次调用函数的第一个参数
                        <br>如果没有传入归并起点的初始值，则从数组的第二项开始
                        <br>reduceRight从右边开始迭代
                    </td>
                    <td rowspan="2">
                        <pre class="contentarea" v-highlight><code>    let arr = [1, 2, 3, 4, 5]
        let sum = arr.reduce((pre, cur, index, arr) => {
            return pre + cur
        }, 0)
        console.log(sum)    // 15
        let sum2 = arr.reduceRight((pre, cur, index, arr) => {
            return pre + cur
        }, 0)
        console.log(sum2)   // 15</code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">reduceRight()</mark></td>
                </tr>
            </tbody>
        </table>
        <h2><mark>数组拉平</mark>：</h2>
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
                    <td><mark class="marksec">flat()</mark></td>
                    <td>用于将嵌套的数组“拉平”，变成一维的数组
                        <br>该方法返回一个新数组，对原数据没有影响
                        <br>可以接收一个参数，表示要拉平的层数
                    </td>
                    <td>
                        <pre class="contentarea" v-highlight><code>    let arr = [1, 2, 3, [4, 5, [6, 7]]]
        console.log(arr.flat())     // Array(6) [ 1, 2, 3, 4, 5, [6,7]] ]
        console.log(arr.flat(2))    // Array(7) [ 1, 2, 3, 4, 5, 6, 7 ]</code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">flatMap()</mark></td>
                    <td>对原数组的每个成员执行一个函数（相当于执行Array.prototype.map()）
                        <br>然后对返回值组成的数组执行flat()方法
                        <br>该方法返回一个新数组，不改变原数组
                        <br>只能展开一层数组
                        <br>参数是一个遍历函数，该函数可以接受三个参数，分别是当前数组成员、当前数组成员的位置（从零开始）、原数组
                        <br>第二个参数，用来绑定遍历函数里面的this
                    </td>
                    <td>
                        <pre class="contentarea" v-highlight><code>    let arr = [1, 2, 3, [4, 5, [6, 7]]]
        let res = arr.flatMap((ele, index, arr) => {
            return ele
        })
        console.log(res)    // Array(6) [ 1, 2, 3, 4, 5, [6,7]]</code></pre>
                    </td>
                </tr>
            </tbody>
        </table>
        <h2><mark>at()</mark>：</h2>
        <ul>
            <li class="des">接受一个整数作为参数，返回对应位置的成员，支持负索引</li>
        </ul>
        <pre class="contentarea" v-highlight><code>    let arr = [1, 2, 3, 4, 5]
        console.log(arr.at(0))      // 1
        console.log(arr.at(1))      // 2
        console.log(arr.at(2))      // 3
        console.log(arr.at(3))      // 4
        console.log(arr.at(4))      // 5</code></pre>
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>