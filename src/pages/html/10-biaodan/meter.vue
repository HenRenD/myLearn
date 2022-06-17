<template>
    <div class="metertag">
        <h2><mark>meter</mark>标签：</h2>
        <ul>
            <li class="des">标签定义度量衡。仅用于已知最大和最小值的度量</li>
            <li class="des">不能作为一个进度条来使用</li>
        </ul>
        <h2><mark>meter</mark>实例：</h2>
        <pre class="contentarea" v-highlight><code>        &lt;meter value="2" min="0" max="10">2 out of 10&lt;/meter>&lt;br>
            &lt;meter value="0.6">60%&lt;/meter></code></pre>
        <h2><mark>meter</mark>浏览器支持：</h2>
        <ul>
            <li class="des">IE 9 或者更早版本的 IE 浏览器不支持 <mark class="marksec">meter</mark> 标签</li>
        </ul>
        <h2><mark>meter</mark>属性(H5)：</h2>
        <table>
            <thead>
                <tr>
                    <td class="tdfirst">属性</td>
                    <td>值</td>
                    <td>描述</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><mark>form</mark></td>
                    <td>form_id,表单id</td>
                    <td>规定meter元素所属的一个或多个表单</td>
                </tr>
                <tr>
                    <td><mark>high</mark></td>
                    <td>number,数字</td>
                    <td>规定被界定为高的值的范围</td>
                </tr>
                <tr>
                    <td><mark>low</mark></td>
                    <td>number,数字</td>
                    <td>规定被界定为低的值的范围</td>
                </tr>
                <tr>
                    <td><mark>max</mark></td>
                    <td>number,数字</td>
                    <td>规定范围最大值</td>
                </tr>
                <tr>
                    <td><mark>min</mark></td>
                    <td>number,数字</td>
                    <td>规定范围最小值</td>
                </tr>
                <tr>
                    <td><mark>optimum</mark></td>
                    <td>number,数字</td>
                    <td>规定度量的最优值</td>
                </tr>
                <tr>
                    <td><mark>value</mark></td>
                    <td>number,数字</td>
                    <td>规定度量的当前值，必需</td>
                </tr>
                <tr>
                    <td colspan="3">支持全局属性</td>
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