<template>
    <div class="weakset">
        <h2><mark>WeakSet</mark>：</h2>
        <ul>
            <li class="des">WeakSet 是 Set 的“兄弟”类型，其 API 也是 Set 的子集。
                <br>WeakSet 中的“weak”（弱），描述的是 JavaScript 垃圾回收程序对待“弱集合”中值的方式
            </li>
            <li class="des">WeakSet 的成员只能是对象，而不能是其他类型的值</li>
            <li class="des">WeakSet 中的对象都是弱引用，即垃圾回收机制不考虑 WeakSet 对该对象的引用</li>
            <li class="des">知识点：
                <br><mark class="marksec">add()</mark>
                <br><mark class="marksec">delete()</mark>
                <br><mark class="marksec">has()</mark>
            </li>
        </ul>
        <pre class="contentarea" v-highlight><code>    let set = new Set([1, 2, 3, 4, 5])
        let weakSet = new WeakSet([[1], [2], [3], [4], [5]])
        console.log(set)   // Set(5) [ 1, 2, 3, 4, 5 ]
        console.log(weakSet)    // WeakSet(5) [ [1], [2], [3], [4], [5] ]</code></pre>
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
                    <td><mark class="marksec">add()</mark></td>
                    <td>添加元素</td>
                    <td rowspan="3">
                        <pre class="contentarea" v-highlight><code>    let ws = new WeakSet()
        let a = [1]
        ws.add(a)
        console.log(ws)     // WeakSet [ [1] ]
        console.log(ws.delete(a)) // true
        console.log(ws)     // WeakSet []
        console.log(ws.has(a))      // false</code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">delete()</mark></td>
                    <td>删除元素</td>
                </tr>
                <tr>
                    <td><mark class="marksec">has()</mark></td>
                    <td>检测元素是否存在</td>
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