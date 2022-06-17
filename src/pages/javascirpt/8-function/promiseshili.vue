<template>
    <div class="promiseshili">
        <h2><mark>知识点：</mark></h2>
        <ul>
            <li class="des">属性：
                <br><mark class="marksec">[[PromiseState]]</mark>
                <br><mark class="marksec">[[PromiseResult]]</mark>
            </li>
            <li class="des">方法：
                <br><mark class="marksec">then: ƒ then()</mark>
                <br><mark class="marksec">catch: ƒ catch()</mark>
                <br><mark class="marksec">finally: ƒ finally()</mark>
            </li>
        </ul>
        <h2><mark>属性</mark>：</h2>
        <h3><mark class="marksec">[[PromiseState]]</mark></h3>
        <ul>
            <li class="des">promise实例的状态值
            </li>
            <li class="des">promiseState有三个值：
                <br>pending：默认值
                <br>fulfilled：成功
                <br>rejected：失败
            </li>
            <li class="des">值的改变
                <br>由pending变为fulfilled
                <br>由pending变为rejected
                <br>fulfilled和rejected之间不能直接变换
                <br>promise的状态只能改变一次
            </li>
        </ul>
        <h3><mark class="marksec">[[PromiseResult]]</mark></h3>
        <ul>
            <li class="des">promise实例的结果值
                <br>存着异步任务成功或失败的结果
                <br>只能由resolved/rejected这两个函数修改

            </li>
            <li class="des">resolved：成功/结果值为value
            </li>
            <li class="des">rejected：失败/结果值为reason</li>
        </ul>
        <pre class="contentarea" v-highlight><code>    let p = new Promise((resolve, reject) => {
            console.log(111)
            resolve('hello')
            reject('error')  // 显然再次改变状态不生效
        })
        console.log(p)      // Promise { &lt;state>: "fulfilled", &lt;value>: "hello" }</code></pre>
        <h2><mark>方法</mark>：</h2>
        <h3><mark class="marksec">then()</mark>：</h3>
        <ul>
            <li class="des"> <mark class="marksec">(onResolved, onRejected) => {}</mark>
                <br>onResolved 函数：成功的回调函数 (value) => {}
                <br>onRejected 函数：失败的回调函数 (reason) => {}
                <br>返回一个新的 promise 对象
                <br>返回值：
                <br>非promise：无论当前promise是成功还是失败，都返回成功的promise，这是promise的异常穿透机制，避免链式调用终止
                <br>promise：结果和状态由该promise决定
                <br>抛出错误：失败的promise，值为错误信息
            </li>
        </ul>
        <pre class="contentarea" v-highlight><code>    let p = new Promise((resolve, reject) => {
            resolve('hello')
        })
        // 成功的非promise值
        let p2 = p.then((res) => {
            return res
        }, (error) => {
            return error
        })
        console.log(p2)  // Promise { &lt;state>: "fulfilled"，&lt;value>: "hello"}
        // 返回一个promise
        let p3 = p.then((res) => {
            return new Promise((resolve, reject) => {
                reject(res)
            })
        }, (error) => {
            return error
        })
        console.log(p3)  // Promise { &lt;state>: "rejected"，&lt;value>: "hello"}
        // 失败的非promise结果
        let p_ = new Promise((resolve, reject) => {
            reject('error')
        })
        let p4 = p_.then((res) => {
            return res
        }, (error) => {
            return error
        })
        console.log(p4)  // Promise { &lt;state>: "fulfilled"，&lt;value>: "error"}
        // 这里会让人感到诧异，为什么失败的结果会返回一个成功的promise
        // 这是因为promise的异常穿透机制，为了让后续的then方法能够继续调用
        // 避免因为某一个then方法失败而导致链式调用终止

        // 抛出错误
        let p5 = p.then((res) => {
            throw 'error'
        }, (error) => {
            return error
        })
        console.log(p5)  // Promise { &lt;state>: "rejected"，&lt;value>: "error"}</code></pre>
        <h3><mark class="marksec">catch()</mark>：</h3>
        <ul>
            <li class="des"> (onRejected) => {}
                <br>onRejected 函数：失败的回调函数 (reason) => {}
                <br>then()的语法糖, 相当于: then(undefined, onRejected)
                <br>用于捕获错误，返回一个promise，规则与then方法一致
            </li>
        </ul>
        <pre class="contentarea" v-highlight><code>    let p = new Promise((resolve, reject) => {
            reject('error')
        })
        let p1 = p.then((res) => {
            console.log(res)
        }).catch((error) => {
            return error
        })
        console.log(p1)   // Promise { &lt;state>: "fulfilled"，&lt;value>: "error" }</code></pre>
        <h3><mark class="marksec">finally()</mark>：</h3>
        <ul>
            <li class="des">用于指定不管 Promise 对象最后状态如何，都会执行的操作</li>
            <li class="des">finally方法的回调函数不接受任何参数
                <br>这表明，finally方法里面的操作，应该是与状态无关的，不依赖于 Promise 的执行结果
            </li>
        </ul>
        <pre class="contentarea" v-highlight><code>    promise
        .then(result => {···})
        .catch(error => {···})
        .finally(() => {···});
        // 不管promise最后的状态，在执行完then或catch指定的回调函数以后，都会执行finally方法指定的回调函数
    </code></pre>
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>