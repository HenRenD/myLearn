<template>
    <div class="promisefunction">
        <h2><mark>promise构造函数</mark>：</h2>
        <ul>
            <li class="des">promise(excutor){}
                <br><mark class="marksec">executor</mark> 函数:执行器 (resolve, reject) => {}
                <br><mark class="marksec">resolve</mark> 函数:内部定义成功时我们调用的函数 resolve(value)
                <br><mark class="marksec">reject</mark> 函数:内部定义失败时我们调用的函数 reject(reson)
            </li>
            <li class="des">executor 会在 Promise 内部立即同步调用</li>
        </ul>
        <pre class="contentarea" v-highlight><code>    let p = new Promise((resolve, reject) => {
            console.log(111)
            resolve('hello')
        })
        p.then((resolve) => {
            console.log(222)
        })
        console.log(333)
        // 输出顺序为：111 333 222
        // 说明执行器函数是同步，then方法是异步的</code></pre>
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>