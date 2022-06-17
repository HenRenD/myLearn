<template>
    <div class="weakmap">
        <h2><mark>WeakMap</mark>：</h2>
        <ul>
            <li class="des">带来了增强的键/值对存储机制
                <br>WeakMap 是 Map 的“兄弟”类型
                <br>WeakMap 中的“weak”（弱），描述的是 JavaScript 垃圾回收程序对待“弱映射”中键的方式
            </li>
            <li class="des">WeakMap只接受对象作为键名（null除外），不接受其他类型的值作为键名</li>
            <li class="des">WeakMap的键名所指向的对象，不计入垃圾回收机制</li>
            <li class="des">知识点：
                <br><mark class="marksec">new WeakMap()</mark>
                <br><mark class="marksec">set()</mark> / <mark class="marksec">get()</mark> / <mark class="marksec">has()</mark> / <mark class="marksec">delete()</mark>
            </li>
        </ul>
        <pre class="contentarea" v-highlight><code>    let a = {}
        let b = {}
        let arr = [
            [a, 1],
            [b, 2]
        ]
        // 上面这里，arr数组对a和b对象产生了引用
        // 一旦不再需要这两个对象，我们就必须手动删除这个引用，否则垃圾回收机制就不会释放a和b占用的内存
        arr[0] = null
        arr[1] = null
        // 如果没有手动解除引用，就会造成内存泄漏
        // WeakMap的出现就是为了解决这个问题

        let arr_ = new WeakMap()
        arr_.set(a, 1)
        arr_.set(b, 2)
        // 使用了weakMap，就不需要我们手动解除引用
        // 当a和b消失的时候，weakMap会自动解除引用
        // WeakMap的专用场合就是，它的键所对应的对象，可能会在将来消失。WeakMap结构有助于防止内存泄漏
        const wm = new WeakMap();
        let key = {};
        let obj = { foo: 1 };
        wm.set(key, obj);
        obj = null;
        wm.get(key)     // Object {foo: 1}
        // WeakMap 弱引用的只是键名，而不是键值。键值依然是正常引用</code></pre>
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
                    <td><mark class="marksec">set()</mark></td>
                    <td>向weakMap中添加元素</td>
                    <td rowspan="4">
                        <pre class="contentarea" v-highlight><code>    let a = {}
        let b = {}
        let c = {}
        let wm = new WeakMap()
        wm.set(a, 1)
        wm.set(b, 2)
        console.log(wm)        // WeakMap { {} → 2, {} → 1 }
        console.log(wm.get(a))      // 1
        console.log(wm.has(a))      // true  
        console.log(wm.has(c))      // false  
        console.log(wm.delete(a))       // true，表示删除成功
        console.log(wm)     // WeakMap { {} → 2 }</code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">get()</mark></td>
                    <td>获取weakMap中的元素</td>
                </tr>
                <tr>
                    <td><mark class="marksec">has()</mark></td>
                    <td>检测weakMap中是否存在某个元素</td>
                </tr>
                <tr>
                    <td><mark class="marksec">delete()</mark></td>
                    <td>删除某个元素</td>
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