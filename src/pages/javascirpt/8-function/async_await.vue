<template>
    <div class="async-await">
        <h2><mark>async / await</mark>：</h2>
        <ul>
            <li class="des"><mark class="marksec">async</mark>函数的返回值为promise对象
                <br>promise对象的结果由async函数执行的返回值决定，和then方法的返回结果规则是一模一样的
                <br>async函数返回的 Promise 对象，必须等到内部所有await命令后面的 Promise 对象执行完，才会发生状态改变，除非遇到return语句或者抛出错误
                <br>async函数内部抛出错误，会导致返回的 Promise 对象变为reject状态
                <br>async 函数，使得异步操作变得更加方便
            </li>
            <li class="des"><mark class="marksec">await</mark><mark class="markdes">会等到右边的异步操作执行完，才会往下执行</mark>
                <br>await右侧的表达式一般为promise对象，但也可以时其他值
                <br>如果表达式是promise对象，await返回的是promise成功的值，如果表达式是其他值，自动转成立即 resolved 的 Promise 对象并取得该值
                <br>await命令后面是一个thenable对象（即定义了then方法的对象），那么await会将其等同于 Promise 对象
                <br><mark class="markdes">await必须写在async函数里面，但是async可以没有await</mark>
                <br>如果await的promise失败了，就会抛出异常，整个async函数都会中断执行，可以通过try / catch捕获
            </li>
            <li class="des"><mark class="marksec">Async 是 Generator 函数的语法糖</mark>：
                <br>1，内置执行器：Generator 函数的执行必须靠执行器，而async函数自带执行器
                <br>2，更好的语义：async和await，比起星号和yield，语义更清楚了。async表示函数里有异步操作，await表示紧跟在后面的表达式需要等待结果
                <br>3，更广的适用性：yield命令后面只能是 Thunk 函数或 Promise 对象，而async函数的await命令后面，可以是 Promise 对象和原始类型的值
                <br>4，返回值是 Promise：async函数的返回值是 Promise 对象，这比 Generator 函数的返回值是 Iterator 对象方便多了
                <br>
            </li>
        </ul>
        <pre class="contentarea" v-highlight><code>    async function hello() {
            // await后面是成功的promise
            let res1 = await new Promise((resolve, reject) => {
                resolve('success')
            })
            console.log(res1)   // success
            // await后面是失败的promise
            let res2 = await new Promise((resolve, reject) => {
                reject('error')
            })
            console.log(res2)   // Uncaught (in promise) error
            // await后面是其他值
            let res3 = await 10
            console.log(res3)   // 10
            return 10
        }
        let res = hello()
        console.log(res)    // promise {state:'fulfilled',value:10}</code></pre>
        <h2><mark>async函数的实现原理</mark>：</h2>
        <ul>
            <li class="des">async 函数的实现原理，就是将 Generator 函数和自动执行器，包装在一个函数里</li>
        </ul>
        <pre class="contentarea" v-highlight><code>    // 返回一个promise
        function returnPromise(time) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(time)
                    console.log(time)
                }, time);
            })
        }
        // generator函数
        function* generator_() {
            const res = yield returnPromise(500)
            const res1 = yield 1
            // 如果这里出错，那么下面的async函数
            // yield new Promise((resolve, reject) => {
            //     console.log("出错了！")
            //     reject(300)
            // })
            const res2 = yield returnPromise(res1)
        }
        // 封装async函数
        function _async(gen) {
            return new Promise((resolve, reject) => {
                // 获取迭代对象
                const genIterator = gen()
                // 用于保存成功结果的数组
                const result = []
                // 这里run函数的参数是用来接收参数，作为当前yield的返回值，以便传给别人
                const run = (value) => {
                    let item = genIterator.next(value)
                    if (!item.done) {
                        // 判断await右边的值是不是promise
                        if (item.value instanceof Promise) {
                            item.value.then((value) => {
                                // async函数的状态改变，得等到所有的promise执行完成才会改变
                                // 这里先添加到数组中，等到所有的promise成功，在执行resolve
                                result.push(value)
                                // 只有promise成功的时候才会继续执行run函数
                                run(value)
                            }).catch((error) => {
                                // 如果出错，async函数中断执行，返回reject
                                reject(error)
                            })
                        }
                        else {
                            // 如果await的右边不是promise，resolve(value)
                            result.push(item.value)
                            run(item.value)
                        }
                    }
                    else {
                        resolve(result)
                    }
                }
                run()
            })
        }
        _async(generator_).then((value) => {
            console.log(value)
        }).catch((error) => {
            console.log(error)
        })</code></pre>
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>