<template>
    <div class="map">
        <h2><mark>Map</mark>：</h2>
        <ul>
            <li class="des">一种新的集合类型，为js带来了真正的键/值存储机制
                <br>map的大部分特性都可以通过Object对象实现，但是也有区别
                <br>与object只能使用数值，字符串，符号作为键不同，<mark class="marksec">map可以使用任意的数据类型作为键</mark>
                <br>使用严格对象相等的标准来检查键的匹配性
                <br>Map 结构提供了“值—值”的对应
                <br>map实例会维护键值插入的顺序，可以根据插入的顺序进行迭代操作
                <br>map内部的键值为原始值时是不能修改的，键值作为引用值时，可以修改
            </li>
            <li class="des">知识点：
                <br><mark class="marksec">new Map()</mark>
                <br><mark class="marksec">size</mark> / <mark class="marksec">set()</mark> / <mark class="marksec">get()</mark> / <mark class="marksec">has()</mark> / <mark class="marksec">delete</mark> / <mark class="marksec">clear()</mark>
                <br><mark class="marksec">entries()</mark> / <mark class="marksec">keys()</mark> / <mark class="marksec">values()</mark> / <mark class="marksec">forEach()</mark>
            </li>
        </ul>
        <pre class="contentarea" v-highlight><code>    const data = {};
        const element = document.querySelector('.myDiv');
        data[element] = 'metadata';
        data['[object HTMLDivElement]'] // "metadata"
        // 上面原本是想将dom节点作为键，但是因为对象只接受字符串作为建，所以被自动转为字符串
        const map = new Map()
        map.set(element, 'metadata')
        console.log(map.get(element))    // metadata
        // 这里使用map，就不会出现上面的问题</code></pre>
        <h2><mark>基本API</mark>：</h2>
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
                    <td><mark class="marksec">size</mark></td>
                    <td>返回map中键值对的数量</td>
                    <td>
                        <pre class="contentarea" v-highlight><code>    let map = new Map([
                [1, 2],
                [3, 4],
                [5, 6]
        ])
        console.log(map.size)       // 3</code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">set()</mark></td>
                    <td>两个参数：键名，值
                        <br>向map中添加元素
                    </td>
                    <td>
                        <pre class="contentarea" v-highlight><code>    let map = new Map([
            [1, 2],
            [3, 4],
            [5, 6]
        ])
        map.set(7, 8)
        console.log(map)        // { 1 → 2, 3 → 4, 5 → 6, 7 → 8 }</code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">get()</mark></td>
                    <td>接收一个参数：键名
                        <br>返回对应的值
                    </td>
                    <td>
                        <pre class="contentarea" v-highlight><code>    let map = new Map([
            [1, 2],
            [3, 4],
            [5, 6]
        ])
        console.log(map.get(1))     // 2</code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">has()</mark></td>
                    <td>接收一个参数：键名
                        <br>返回布尔值，检查map中是否存在某个元素
                    </td>
                    <td>
                        <pre class="contentarea" v-highlight><code>    let map = new Map([
            [1, 2],
            [3, 4],
            [5, 6]
        ])
        console.log(map.has(1))     // true
        console.log(map.has(4))     // false</code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">delete()</mark></td>
                    <td>接收一个参数：键名
                        <br>删除元素
                    </td>
                    <td>
                        <pre class="contentarea" v-highlight><code>    let map = new Map([
            [1, 2],
            [3, 4],
            [5, 6]
        ])
        map.delete(1)
        console.log(map)        // Map { 3 → 4, 5 → 6 }</code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">clear()</mark></td>
                    <td>清空map</td>
                    <td>
                        <pre class="contentarea" v-highlight><code>    let map = new Map([
            [1, 2],
            [3, 4],
            [5, 6]
        ])
        map.clear()
        console.log(map)    // Map(0)</code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">entries()</mark></td>
                    <td>返回一个键值对可迭代对象
                        <br>可以使用for of迭代，结果是每一个map键值对
                        <br>该方法是默认迭代器，可以使用扩展操作符，将map直接转化为数组，[...map]
                    </td>
                    <td>
                        <pre class="contentarea" v-highlight><code>    let map = new Map([
            [1, 2],
            [3, 4],
            [5, 6]
        ])
        let res = map.entries()
        for (let once of res) {
            console.log(once)       //Array[1, 2]，Array[3, 4]，Array[5, 6]
        }</code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">keys()</mark></td>
                    <td>返回一个键名可迭代对象
                        <br>可以使用for of迭代
                        <br>每一个值是键名
                    </td>
                    <td>
                        <pre class="contentarea" v-highlight><code>    let map = new Map([
            [1, 2],
            [3, 4],
            [5, 6]
        ])
        let res = map.keys()
        for (let once of res) {
            console.log(once)       //1,3,5
        }</code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">values()</mark></td>
                    <td>返回一个值的可迭代对象
                        <br>使用for of迭代
                        <br>每一个值是键对应的值
                    </td>
                    <td>
                        <pre class="contentarea" v-highlight><code>    let map = new Map([
            [1, 2],
            [3, 4],
            [5, 6]
        ])
        let res = map.values()
        for (let once of res) {
            console.log(once)       //2,4,6
        }</code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">forEach()</mark></td>
                    <td>forEach(callback, opt_thisArg)
                        <br>参数：
                        <br>第一个：回调函数
                        <br>回调函数参数：value，key
                        <br>第二个：修改this值
                    </td>
                    <td>
                        <pre class="contentarea" v-highlight><code>    let map = new Map([
            [1, 2],
            [3, 4],
            [5, 6]
        ])
        map.forEach((value, key) => {
            console.log(value)      // 2 4 6
            console.log(key)        // 1 3 5
        })</code></pre>
                    </td>
                </tr>
            </tbody>
        </table>
        <h2><mark>选择Object还是Map</mark>：</h2>
        <ul>
            <li class="des">内存占用：Map更小</li>
            <li class="des">插入性能：Map性能更佳</li>
            <li class="des">查找速度：大型数据差异小，其余情况Object好一点</li>
            <li class="des">删除性能：Map更好</li>
        </ul>
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>