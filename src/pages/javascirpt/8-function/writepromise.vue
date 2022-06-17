<template>
    <div class="writepromise">
        <h2><mark>自定义Promise</mark>：</h2>
        <pre class="contentarea" v-highlight style="font-size:16px"><code>        class Promise {
            constructor(executor) {
                // 设置初始的状态
                this.PromiseState = 'pending'
                this.PromiseResult = undefined
                this.callbacks = []
                const self = this
                // resolve函数
                function resolve(data) {
                            // 如果状态已经被修改过，就直接返回，表示不能在修改了
                            if (self.PromiseState !== 'pending') return
                            // 将状态设置为成功fulfilled
                            self.PromiseState = 'fulfilled'
                            // 将成功的结果保存下来
                            self.PromiseResult = data
                            // 当前函数为异步时
                            if (!self.callbacks.length) return
                            setTimeout(() => {
                                self.callbacks.forEach((ele) => {
                                    ele.onResolved(data)
                                })
                            });
                    }
                // reject函数
                function reject(data) {
                            // 如果状态已经修改过，直接返回
                            if (self.PromiseState !== 'pending') return
                            // 将状态设置为rejected
                            self.PromiseState = 'rejected'
                            // 将失败的结果保存
                            self.PromiseResult = data
                            // 当前函数为异步时
                            if (!self.callbacks.length) return
                            setTimeout(() => {
                                self.callbacks.forEach((ele) => {
                                    ele.onRejected(data)
                                })
                            });
                    }
                // 并行执行executor执行器函数
                try {
                            executor(resolve, reject)
                    }
                catch (error) {
                            reject(error)
                    }
            }
            
            // then方法
            then(onResolved, onRejected) {
                        const self = this
                        // 设置参数的默认值，实现异常穿透
                        if (typeof onResolved !== 'function') {
                            onResolved = value => value
                        }
                        if (typeof onRejected !== 'function') {
                            onRejected = (reason) => {
                                throw reason
                            }
                        }
                        return new Promise((resolve, reject) => {
                            // 封装改变状态的函数
                            function changeState(type) {
                                try {
                                    const result = type(self.PromiseResult)
                                    if (result instanceof Promise) {
                                        result.then((value) => {
                                            resolve(value)
                                        }, (reason) => {
                                            reject(reason)
                                        })
                                    }
                                    else {
                                        resolve(result)
                                    }
                                }
                                catch (error) {
                                    reject(error)
                                }
                            }
                            // 根据状态判断该执行什么回调
                            if (self.PromiseState === 'fulfilled') {
                                setTimeout(() => {
                                    changeState(onResolved)
                                });
                            }
                            else if (self.PromiseState === 'rejected') {
                                setTimeout(() => {
                                    changeState(onRejected)
                                });
                            }
                            else {
                                self.callbacks.push(
                                    {
                                        onResolved: () => {
                                            changeState(onResolved)
                                        },
                                        onRejected: () => {
                                            changeState(onRejected)
                                        }
                                    }
                                )
                            }
                        })
            }
            // catch方法
            catch(onRejected) {
                        return this.then(undefined, onRejected)
            }
            // done方法
            done(onResolved, onRejected) {
                        this.then(onResolved, onRejected).catch((reason) => {
                            setTimeout(() => {
                                throw reason
                            })
                        })
            }
            // finally方法
            finally(callback) {
                        this.then((value) => {
                            callback()
                        }, (reason) => {
                            callback()
                        })
            }
            // 静态方法resolve
            static resolve(value) {
                        return new Promise((resolve, reject) => {
                            if (value instanceof Promise) {
                                value.then((value) => {
                                    resolve(value)
                                }, (reason) => {
                                    reject(reason)
                                })
                            }
                            else {
                                resolve(value)
                            }
                        })
            }
            // 静态方法reject
            static reject(value) {
                        return new Promise((resolve, reject) => {
                            reject(value)
                        })
            }
            // 静态方法all
            static all(promises) {
                        return new Promise((resolve, reject) => {
                            let result = []
                            promises.forEach((ele) => {
                                if (ele instanceof Promise) {
                                    ele.then((value) => {
                                        result.push(value)
                                    }, (reason) => {
                                        reject(reason)
                                    })
                                }
                                else {
                                    result.push(ele)
                                }
                            })
                            setTimeout(() => {
                                resolve(result)
                            });
                        })
            }
            //静态方法race
            static race(promises) {
                        return new Promise((resolve, reject) => {
                            promises.forEach((ele) => {
                                if (ele instanceof Promise) {
                                    ele.then((value) => {
                                        resolve(value)
                                    }, (reason) => {
                                        reject(reason)
                                    })
                                }
                                else {
                                    setTimeout(() => {
                                        resolve(ele)
                                    });
                                }
                            })
                        })
                    }
        }</code></pre>
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>