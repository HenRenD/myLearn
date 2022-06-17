<template>
    <div class="promisequestion">
        <h2><mark>1，如何改变 promise 的状态</mark>：</h2>
        <ul>
            <li class="des">调用resolve(value)：如果当前是 pending 就会变为 resolved</li>
            <li class="des">调用reject(reason)：如果当前是 pending 就会变为 rejected</li>
            <li class="des">抛出异常：如果当前是 pending 就会变为 rejected</li>
        </ul>
        <pre class="contentarea" v-highlight><code>    const p1 = new Promise((resolve, reject) => {
            resolve()
        })
        console.log(p1)     // Promise { &lt;state>: "fulfilled", &lt;value>: undefined }
        const p2 = new Promise((resolve, reject) => {
            reject()
        })
        console.log(p2)     // Promise { &lt;state>: "rejected", &lt;reason>: undefined }
        const p3 = new Promise((resolve, reject) => {
            throw new Error
        })
        console.log(p3)     // Promise { &lt;state>: "rejected", &lt;reason>: Error }</code></pre>
        <h2><mark>2，一个 promise 指定多个成功/失败回调函数, 都会调用吗</mark>：</h2>
        <ul>
            <li class="des">当 promise 改变为对应状态时都会调用</li>
        </ul>
        <pre class="contentarea" v-highlight><code>    const p1 = new Promise((resolve, reject) => {
            resolve()
        })
        p1.then((value) => {
            console.log(111)    // 111
        })
        p1.then((value) => {
            console.log(222)    // 222
        })</code></pre>
        <h2><mark>3，改变 promise 状态和指定回调函数谁先谁后</mark>：</h2>
        <ul>
            <li class="des">都有可能, 正常情况下先改状态再指定回调, 但也可以先指定回调再改变状态</li>
            <li class="des">但是回调函数的执行一定是在状态改变之后</li>
        </ul>
        <pre class="contentarea" v-highlight><code>    // 先改变状态再指定回调
        const p1 = new Promise((resolve, reject) => {
            resolve()
        })
        p1.then((value) => {
            return
        })
        // 先指定回调，再改变状态
        const p2 = new Promise((resolve, reject) => {
            settimeout(() => {
                resolve()
            })
        })
        p2.then((value) => {
            return
        })</code></pre>
        <h2><mark>4，promise.then()返回的新 promise 的结果状态由什么决定</mark>：</h2>
        <ul>
            <li class="des">如果抛出异常：新 promise 变为 rejected, reason 为抛出的异常
                <br>如果返回的是非 promise 的任意值：新 promise 变为 resolved, value 为返回的值
                <br>如果返回的是另一个新 promise：此 promise 的结果就会成为新 promise 的结果
            </li>
        </ul>
        <pre class="contentarea" v-highlight><code>    const p1 = new Promise((resolve, reject) => {
            resolve()
        })
        // 返回非promise
        let x1 = p1.then((value) => {
            return 1
        })
        console.log(x1)     // promise {state:'fulfilled',value:1}
        // 返回promise
        let x2 = p1.then((value) => {
            return new Promise((resolve, reject) => {
                reject('error')
            })
        })
        console.log(x2)     // promise {state:'rejected',value:error}
        // 抛出错误
        let x3 = p1.then((value) => {
            throw new Error
        })
        console.log(x3)     // promise {state:'rejected',reason:Error}</code></pre>
        <h2><mark>5，promise 如何串连多个操作任务</mark>：</h2>
        <ul>
            <li class="des">promise 的 then()返回一个新的 promise, 可以开启 then()的链式调用
                <br>通过 then 的链式调用串连多个同步/异步任务
            </li>
        </ul>
        <pre class="contentarea" v-highlight><code>    const p1 = new Promise((resolve, reject) => {
            resolve()
        })
        p1.then((value) => {
            console.log(111)
        }).then((value) => {
            console.log(222)
        }).then((value) => {
            console.log(333)
        })</code></pre>
        <h2><mark>6，promise 异常传透</mark>：</h2>
        <ul>
            <li class="des">当使用 promise 的 then 链式调用时, 可以在最后指定失败的回调
                <br>前面任何操作出了异常, 都会传到最后失败的回调中处理
            </li>
        </ul>
        <pre class="contentarea" v-highlight><code>    const p1 = new Promise((resolve, reject) => {
            resolve()
        })
        p1.then((value) => {
            console.log(111)
        }).then((value) => {
            console.log(222)
        }).then((value) => {
            console.log(333)
        }).catch((error) => {
            console.log(error)
        })</code></pre>
        <h2><mark>7，中断 promise 链</mark>：</h2>
        <ul>
            <li class="des">当使用 promise 的 then 链式调用时, 在中间中断, 不再调用后面的回调函数
                <br>办法：在回调函数中返回一个 pendding 状态的 promise 对象
            </li>
        </ul>
        <pre class="contentarea" v-highlight><code>    const p1 = new Promise((resolve, reject) => {
            resolve()
        })
        p1.then((value) => {
            console.log(111)    // 111
        }).then((value) => {
            return new Promise((resolve, reject) => {
                return
            })
        }).then((value) => {
            console.log(333)    // 这了不会输出了 上一个状态为pendding,链式调用被中断了
        })</code></pre>
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>