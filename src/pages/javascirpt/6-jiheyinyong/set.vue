<template>
    <div class="set">
        <h2><mark>Set</mark>：</h2>
        <ul>
            <li class="des">类似于加强的Map，会自动去重</li>
            <li class="des">Set会维护值插入时的顺序，因此支持按顺序迭代
                <br>因为 values()是默认迭代器，所以可以直接对集合实例使用扩展操作，把集合转换为数组
                <br>原始值不会被修改，引用值可以修改内部属性<br>
            </li>
            <li class="des">知识点：
                <br><mark class="marksec">new Set()</mark>
                <br><mark class="marksec">size</mark> / <mark class="marksec">add()</mark> / <mark class="marksec">has()</mark> / <mark class="marksec">delete()</mark> / <mark class="marksec">clear()</mark>
                <br><mark class="marksec">entries()</mark> / <mark class="marksec">keys()</mark> / <mark class="marksec">values()</mark> / <mark class="marksec">forEach()</mark>
            </li>
        </ul>
        <pre class="contentarea" v-highlight><code>    // set结构可以接收一个数组作为初始化的值
        let set = new Set([1, 2, 3, 4, 4])
        console.log(set)        // Set(4) [ 1, 2, 3, 4 ]</code></pre>
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
                    <td>返回元素个数</td>
                    <td rowspan="5">
                        <pre class="contentarea" v-highlight><code>    let set = new Set()
        // size
        console.log(set.size)       // 0
        // add()
        set.add(10)
        set.add(2)
        set.add(0)
        console.log(set)        // Set(3) [ 10, 2, 0 ]
        //has()
        console.log(set.has(10))        // true
        console.log(set.has(20))        // false
        // delete()
        set.delete(0)
        console.log(set)        // Set [ 10, 2 ]
        // clear()
        set.clear()
        console.log(set)        // Set []</code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">add()</mark></td>
                    <td>接收一个参数：value
                        <br>添加元素
                        <br>返回set
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">has()</mark></td>
                    <td>接收一个参数：value
                        <br>检测set中是否包含某个元素，返回布尔值
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">delete()</mark></td>
                    <td>接收一个参数：value
                        <br>删除某个元素
                        <br>返回布尔值，成功返回true否则返回false
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">clear()</mark></td>
                    <td>清空set</td>
                </tr>
                <tr>
                    <td><mark class="marksec">entries()</mark></td>
                    <td>返回一个可迭代对象
                        <br>键和值都是一样的
                    </td>
                    <td rowspan="3">
                        <pre class="contentarea" v-highlight><code>    let set = new Set([1, 2, 3, 4, 5])
        for (let once of set.entries()) {
            console.log(once)       // Array[1, 1]，Array[2, 2]，Array[3, 3]，Array[4, 4]，Array[5, 5]
        }
        for (let once of set.keys()) {
            console.log(once)       // 1 2 3 4 5
        }
        for (let once of set.values()) {
            console.log(once)       // 1 2 3 4 5
        }</code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">keys()</mark></td>
                    <td>返回可迭代对象
                        <br>键
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">values()</mark></td>
                    <td>可迭代对象
                        <br>值
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">forEach()</mark></td>
                    <td>类似于map的forEach方法</td>
                    <td>
                        <pre class="contentarea" v-highlight><code>    let set = new Set([1, 2, 3, 4, 5])
        set.forEach((ele, index) => {
            console.log(ele)        // 1 2 3 4 5
        })</code></pre>
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