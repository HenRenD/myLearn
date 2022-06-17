<template>
    <div class="fuzhi">
        <h2><mark>赋值操作符</mark>：</h2>
        <ul>
            <li class="des">等号赋值：<mark class="marksec">"="</mark></li>
            <li class="des">乘/赋值：<mark class="marksec">"*="</mark></li>
            <li class="des">除/赋值：<mark class="marksec">"/="</mark></li>
            <li class="des">取余/赋值：<mark class="marksec">"%="</mark></li>
            <li class="des">指数/赋值：<mark class="marksec">“**=”</mark></li>
            <li class="des">加/赋值：<mark class="marksec">"+="</mark></li>
            <li class="des">减/赋值：<mark class="marksec">"-="</mark></li>
            <li class="des">左移/赋值：<mark class="marksec">"&lt;&lt;="</mark></li>
            <li class="des">有符号右移/赋值：<mark class="marksec">">>="</mark></li>
            <li class="des">无符号右移/赋值：<mark class="marksec">">>>="</mark></li>
            <li class="des">这些赋值赋符号能够简化赋值操作，但是不会带来性能提升</li>
        </ul>
        <pre class="contentarea" v-highlight><code>    let a = 10
        a *= 10   //  a = a * 10
        a /= 10   //  a = a / 10
        a %= 10   //  a = a % 10
        a **= 10   //  a = a ** 10
        a += 10   //  a = a + 10
        a -= 10   //  a = a - 10
        a &lt;&lt;= 5  //  a = a &lt;&lt; 5
        a >>= 5  //  a = a >> 5
        a >>>= 5  //  a = a >>> 5</code></pre>
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>