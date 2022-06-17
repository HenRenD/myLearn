<template>
    <div class="symbol">
        <h2><mark>Symbol</mark>类型(ES6)：</h2>
        <ul>
            <li class="des">符号是原始值，且符号实例是唯一、不可变的，比较两个Symbol的时候，会得到false</li>
            <li class="des">符号的用途:确保对象属性使用唯一标识符，不会发生属性冲突的危险
                <br>符号就是用来创建唯一记号，进而用作非字符串形式的对象属性
            </li>
            <li class="des">Symbol定义一些 不希望别人访问的属性，比如密码</li>
            <li class="des">使用：[Symbol()]，中括号语法
            </li>
            <li class="des">简单数据类型(原始值)</li>
        </ul>
        <table>
            <thead>
                <tr>
                    <td width='21%'>类型</td>
                    <td>描述</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><mark class="marksec">符号的基本用法</mark></td>
                    <td>使用 Symbol()函数初始化
                        <br>let sym = Symbol();
                        <br>console.log(typeof sym); symbol
                        <br>参数：可以传入一个字符串参数作为对符号的描述，这个字符串参数与符号定义或标识完全无关
                        <br>特点：
                        <br>符号没有字面量语法，这也是它们发挥作用的关键
                        <br>Symbol()实例都是独一无二的，不会覆盖字符串属性或者之前的符号属性
                        <br>Symbol()函数不能与 new 关键字一起作为构造函数使用，避免创建符号包装对象
                        <br>如果你确实想使用符号包装对象，可以借用 Object()函数
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">使用全局符号注册表</mark></td>
                    <td><mark class="marksec">Symbol.for()方法</mark>：共享和重用符号实例
                        <br>Symbol.for()方法：接收一个参数作为建，在全局符号注册表中创建并重用符号，键值必须是字符串，所以任何值都会转换为字符串，同时键值会用作符号的描述，该方法定义的符号和Symbol()定义的符号也不相同
                        <br>运行原理：第一次使用某个字符串调用时，会检查全局运行时注册表，发现不存在对应的符号，就会生成一个新符号实例并添加到注册表中。，后续使用相同字符串的调用同样会检查注册表，发现存在与该字符串对应的符号，就会返回该符号实例
                        <br><mark class="marksec">Symbol.keyFor()</mark>：查询全局注册表
                        <br>这个方法接收符号，返回该全局符号对应的字符串键，查询的不是全局符号，而是普通符号则返回 undefined
                        <br>如果传给 Symbol.keyFor()的不是符号，则该方法抛出 TypeError
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">使用符号作为属性</mark></td>
                    <td>凡是可以使用字符串或数值作为属性的地方，都可以使用符号
                        <br>let o = {[symbol]: 'foo val'};
                        <br>o[symbol] = 'foo val';
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">内置符号</mark></td>
                    <td>内置符号：
                        <br>内置符号是全局函数 Symbol 的普通字符串属性指向一个符号的实例
                        <br>所有内置符号属性都是不可写、不可枚举、不可配置的
                        <br>内置符号符号在规范中的名称前缀为@@
                        <br>内置符号都以 Symbol 工厂函数字符串属性的形式存在
                        <br>作用：
                        <br>用于暴露语言内部行为，开发者可以直接访问、重写或模拟这些行为
                        <br>内置符号最重要的用途之一是重新定义它们，从而改变原生结构的行为
                    </td>
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