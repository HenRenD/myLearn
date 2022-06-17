<template>
    <div class="promisemethod">
        <h2><mark>知识点：</mark></h2>
        <ul>
            <li class="des"><mark class="marksec">all: ƒ all()</mark></li>
            <li class="des"><mark class="marksec">allSettled: ƒ allSettled()</mark></li>
            <li class="des"><mark class="marksec">any: ƒ any()</mark></li>
            <li class="des"><mark class="marksec">race: ƒ race()</mark></li>
            <li class="des"><mark class="marksec">reject: ƒ reject()</mark></li>
            <li class="des"><mark class="marksec">resolve: ƒ resolve()</mark></li>
        </ul>
        <h2><mark>all() / race() / any()</mark>：</h2>
        <h3><mark class="marksec">all()</mark>：</h3>
        <ul>
            <li class="des">参数：包含 n 个 promise 的数组
                <br>返回一个新的 promise
                <br>只有所有的 promise 都成功才成功，只要有一个失败了就直接失败
                <br>如果都成功，则当前promise的值为一个数组，包含所有的promise值
                <br>如果失败，为该失败的promise的状态和结果
            </li>
        </ul>
        <pre class="contentarea" v-highlight><code>    const p1 = new Promise((resolve, reject) => {
            resolve('hello')
        })
        const p2 = new Promise((resolve, reject) => {
            resolve('world')
        })
        const p3 = new Promise((resolve, reject) => {
            reject('error')
        })
        // 当所有的promise都是成功时
        const res1 = Promise.all([p1, p2])
        console.log(res1)       // promise{&lt;state>: "fulfilled"，&lt;value>: Array [ "hello", "world" ]}
        // 当其中有失败的时
        const res2 = Promise.all([p1, p2, p3])
        console.log(res2)   // promise{&lt;state>: "rejected"，&lt;value>: error}</code></pre>
        <h3><mark class="marksec">race()</mark>：</h3>
        <ul>
            <li class="des">
                参数：包含 n 个 promise 的数组
                <br>返回一个新的 promise
                <br>第一个完成的 promise 的结果状态就是最终的结果状态
            </li>
        </ul>
        <pre class="contentarea" v-highlight><code>    const p1 = new Promise((resolve, reject) => {
            resolve('hello')
        })
        const p2 = new Promise((resolve, reject) => {
            reject('error')
        })
        // 当所有的promise都是成功时
        const res1 = Promise.race([p1, p2])
        console.log(res1)       // promise{&lt;state>: "fulfilled"，&lt;value>: hello}
        // 当其中有失败的时
        const res2 = Promise.race([p2, p1])
        console.log(res2)   // promise{&lt;state>: "rejected"，&lt;value>: error}</code></pre>
        <h3><mark class="marksec">any()</mark>：</h3>
        <ul>
            <li class="des">接受一组 Promise 实例作为参数
                <br>返回一个新的promise
                <br>只要有一个promise成功，就返回成功的promise
                <br>全部失败，才会返回失败的promise
            </li>
        </ul>
        <pre class="contentarea" v-highlight><code>    const p1 = new Promise((resolve, reject) => {
            resolve('hello')
        })
        const p2 = new Promise((resolve, reject) => {
            reject('error')
        })
        const p3 = new Promise((resolve, reject) => {
            reject('error2')
        })
        // 只要有一个成功
        const res1 = Promise.any([p1, p2])
        console.log(res1)       // promise{&lt;state>: "fulfilled"，&lt;value>: hello}
        // 当全部失败时
        const res2 = Promise.any([p2, p3])
        console.log(res2)   // promise{&lt;state>: "rejected"，&lt;reason>: AggregateError: No Promise in Promise.any was resolved}</code></pre>
        <h2><mark>resolve() / reject()</mark>：</h2>
        <h3><mark class="marksec">resolve()</mark>：</h3>
        <ul>
            <li class="des">接收一个参数
                <br>参数为非promise：返回成功的promise,值为参数
                <br>参数为Promise：根据参数的状态返回对应的Promise
            </li>
        </ul>
        <pre class="contentarea" v-highlight><code>    const p1 = Promise.resolve()
        const p2 = Promise.resolve('hello')
        const p3 = Promise.resolve(new Promise((resolve, reject) => {
            resolve('world')
        }))
        const p4 = Promise.resolve(new Promise((resolve, reject) => {
            reject('error')
        }))
        console.log(p1)     // Promise { &lt;state>: "fulfilled", &lt;value>: undefined }
        console.log(p2)     // Promise { &lt;state>: "fulfilled", &lt;value>: "hello" }
        console.log(p3)     // Promise { &lt;state>: "fulfilled", &lt;value>: "world" }
        console.log(p4)     // Promise { &lt;state>: "rejected", &lt;reason>: "error" }</code></pre>
        <h3><mark class="marksec">reject()</mark>：</h3>
        <ul>
            <li class="des">接收一个参数，不论参数为何都返回一个失败的Promise对象</li>
        </ul>
        <pre class="contentarea" v-highlight><code>    const p1 = Promise.reject()
        const p2 = Promise.reject('hello')
        const p3 = Promise.reject(new Promise((resolve, reject) => {
            resolve('world')
        }))
        const p4 = Promise.reject(new Promise((resolve, reject) => {
            reject('error')
        }))
        console.log(p1)     // Promise { &lt;state>: "rejected", &lt;reason>: undefined }
        console.log(p2)     // Promise { &lt;state>: "rejected", &lt;reason>: "hello"}
        console.log(p3)     // Promise { &lt;state>: "rejected", &lt;reason>: Promise { &lt;state>: "fulfilled", &lt;value>: "world" }}
        console.log(p4)     // Promise { &lt;state>: "rejected", &lt;reason>: Promise { &lt;state>: "rejected", &lt;reason>: "error" }}</code></pre>
        <h2><mark>allSettled()</mark>：</h2>
        <ul>
            <li class="des">接受一个数组作为参数，数组的每个成员都是一个 Promise 对象
                <br>并返回一个新的 Promise 对象
                <br>只有等到参数数组的所有 Promise 对象都发生状态变更（不管是fulfilled还是rejected）
                <br>返回的 Promise 对象才会发生状态变更
                <br>新的 Promise 实例，状态总是fulfilled，值为包含所有所有参数promise对象的数组
            </li>
        </ul>
        <pre class="contentarea" v-highlight><code>    const p1 = new Promise((resolve, reject) => {
            resolve('hello')
        })
        const p2 = new Promise((resolve, reject) => {
            reject('error')
        })
        const res = Promise.allSettled([p1, p2])
        console.log(res)        // promise{&lt;state>: "fulfilled"，&lt;value>: Array [ { status: "fulfilled", value: "hello" }, { status: "rejected", reason: "error" } ]}</code></pre>
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>