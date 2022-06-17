<template>
    <div class="bzboolean">
        <h2><mark>Boolean</mark>：</h2>
        <ul>
            <li class="des">布尔对象：
                <br><mark class="marksec">let booleanObject = new Boolean (true)</mark>
                <br>使用valueOf()方法，会返回一个原始值
                <br>Boolean对象是一个object，它的布尔值检测永远都是true
                <br>原始布尔值与Boolean对象有很大的区别
                <br>建议永远不要使用Boolean对象
            </li>
        </ul>
        <pre class="contentarea" v-highlight><code>    let bool = new Boolean()
        console.log(bool)       // {false}
        console.log(typeof bool)        // object
        console.log(bool.valueOf())         // false</code></pre>
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>