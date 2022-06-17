<template>
    <div class="variable">
        <h2>
            <mark>变量</mark>：
        </h2>
        <ul>
            <li class="des">ECMAscript的变量是松散的
            </li>
            <li class="des">可以保存任何类型的值</li>
        </ul>
        <h2><mark>变量声明</mark>：</h2>
        <table>
            <thead>
                <tr>
                    <td></td>
                    <td width='20%'>语法</td>
                    <td>作用域</td>
                    <td>变量提升</td>
                    <td width='11%'>重复声明</td>
                    <td width='10%'>初始化</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><mark class="marksec">var</mark></td>
                    <td><mark class="marksec">var 变量名 = value；
                        </mark>
                        <br>一次性声明多个变量，使用“，”逗号分隔
                    </td>
                    <td>1.函数外部：始终是全局变量
                        <br>2.函数内部：
                        <pre style="padding:0;margin:0">    使用var：局部变量
        不使用var：全局变量</pre>
                        3.全局变量会添加到window上
                        <br>4.window对象的属性是否可删除：
                        <pre style="padding0;margin:0">    取决对象配置属性configurable
        使用var：false，不可删除
        不使用var：true，可删除</pre>
                        5.严格模式：给未声明的变量赋值，会抛出ReferenceError错误，变量名不能为eval和arguments
                    </td>
                    <td>1.存在变量提升
                        <br>2.会将变量声明拉到当前作用域顶端
                        <br>3.此时值为undefined
                    </td>
                    <td>允许</td>
                    <td>未初始化
                        <br>undefined
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">let</mark>(ES6)</td>
                    <td><mark class="marksec">let 变量名 = value;</mark></td>
                    <td>1.块级作用域
                        <br>2.全局变量不会成为window对象的属性
                        <br>3.for循环中let声明会产生迭代变量
                    </td>
                    <td>1.不存在变量提升
                        <br>2.在变量声明之前执行操作会抛出错误ReferenceError
                        <br>3.在 let 声明之前的执行瞬间被称为“暂时性死区”
                    </td>
                    <td>不允许</td>
                    <td>未初始化
                        <br>undefined
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">const</mark>(ES6)</td>
                    <td><mark class="marksec">const 变量名 = value;</mark></td>
                    <td>块级作用域</td>
                    <td>不存在变量提升</td>
                    <td>不允许</td>
                    <td>必须初始化，且值不可更改</td>
                </tr>
            </tbody>
        </table>
        <h2><mark>最佳实践</mark>：</h2>
        <ul>
            <li class="des">不使用var：
                <br>使用 let 和 const有助于提升代码质量
                <br>变量有了明确的作用域、声明位置，以及不变的值
            </li>
            <li class="des">const优先：
                <br>const 声明可以让浏览器运行时强制保持变量不变
                <br>可以让静态代码分析工具提前发现不合法的赋值操作
            </li>
            <li class="des">let次之：
                <br>只在提前知道未来会有修改时使用let
            </li>
        </ul>
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>