<template>
    <div class="math">
        <h2><mark>Math</mark>：</h2>
        <ul>
            <li class="des">ECMAScript提供了Math对象作为数学公式，信息和计算的地方</li>
        </ul>
        <h2><mark>Math属性</mark></h2>
        <table>
            <thead>
                <tr>
                    <td width='15%'>方法</td>
                    <td width='30%'>描述</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><mark class="marksec">Math.E</mark></td>
                    <td>自然对数的基数e的值</td>
                </tr>
                <tr>
                    <td><mark class="marksec">Math.LN10</mark></td>
                    <td>10为底的自然对数</td>
                </tr>
                <tr>
                    <td><mark class="marksec">Math.LN2</mark></td>
                    <td>2为底的自然对数</td>
                </tr>
                <tr>
                    <td><mark class="marksec">Math.LOG2E</mark></td>
                    <td>以2为底e的对数</td>
                </tr>
                <tr>
                    <td><mark class="marksec">Math.LOG10E</mark></td>
                    <td>以10 为底e的对数</td>
                </tr>
                <tr>
                    <td><mark class="marksec">Math.PI</mark></td>
                    <td>π的值</td>
                </tr>
                <tr>
                    <td><mark class="marksec">Math.SQRT1_2</mark></td>
                    <td>1/2的平方根</td>
                </tr>
                <tr>
                    <td><mark class="marksec">Math.SQRT2</mark></td>
                    <td>2的平方根</td>
                </tr>
            </tbody>
        </table>
        <h2><mark>常用方法</mark>：</h2>
        <table>
            <thead>
                <tr>
                    <td width='15%'>方法</td>
                    <td width='30%'>描述</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><mark class="marksec">Math.min()</mark></td>
                    <td>接收任意多个值，返回最小值</td>
                </tr>
                <tr>
                    <td><mark class="marksec">Math.max()</mark></td>
                    <td>接收任意多个值，最大值</td>
                </tr>
                <tr>
                    <td><mark class="marksec">Math.ceil()</mark></td>
                    <td>向上取整</td>
                </tr>
                <tr>
                    <td><mark class="marksec">Math.floor()</mark></td>
                    <td>向下取整</td>
                </tr>
                <tr>
                    <td><mark class="marksec">Math.round()</mark></td>
                    <td>四舍五入</td>
                </tr>
                <tr>
                    <td><mark class="marksec">Math.fround()</mark></td>
                    <td>返回最接近的32位单精度浮点数</td>
                </tr>
                <tr>
                    <td><mark class="marksec">Math.abs(x)</mark></td>
                    <td>返回绝对值</td>
                </tr>
                <tr>
                    <td><mark class="marksec">Math.sqrt(x)</mark></td>
                    <td>返回平方根</td>
                </tr>
            </tbody>
        </table>
        <h2><mark>random()方法</mark>：</h2>
        <ul>
            <li class="des">Math.random（）方法返回0-1之间的随机数，包含0，不包含1</li>
        </ul>
        <pre class="contentarea" v-highlight><code>    let num = Math.floor(Math.random * n + m) //表示从某个范围内取一个整数，n表示可选总数，m表示可能的最小值
        function selectFrom(min, max) {
            let choices = max - min + 1;
            return Math.floor(Math.random * choices + min);
        }
        //这个函数表示从min-- - max之间选一个数</code></pre>
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>