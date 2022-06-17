<template>
    <div class="typepf">
        <h2><mark>typeof</mark>操作符：</h2>
        <ul>
            <li class="des">可以确定任意变量的数据类型</li>
            <li class="des">typeof是操作符，不是函数，所以不需要参数（可以有参数）</li>
        </ul>
        <h2><mark>typeof</mark>实例：</h2>
        <pre class="contentarea" v-highlight><code>    let a = 10
        console.log(typeof a)  //number</code></pre>
        <h2><mark>返回结果</mark>：</h2>
        <table>
            <thead>
                <tr>
                    <td>结果</td>
                    <td>描述</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><mark class="marksec">undefined</mark></td>
                    <td>未定义</td>
                </tr>
                <tr>
                    <td><mark class="marksec">boolean</mark></td>
                    <td>布尔值</td>
                </tr>
                <tr>
                    <td><mark class="marksec">string</mark></td>
                    <td>字符串</td>
                </tr>
                <tr>
                    <td><mark class="marksec">number</mark></td>
                    <td>数值</td>
                </tr>
                <tr>
                    <td><mark class="marksec">object</mark></td>
                    <td>对象或null</td>
                </tr>
                <tr>
                    <td><mark class="marksec">function</mark></td>
                    <td>函数</td>
                </tr>
                <tr>
                    <td><mark class="marksec">symbol</mark></td>
                    <td>符号</td>
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