<template>
    <div class="whatisjs">
        <h2><mark>前言</mark>：</h2>
        <ul>
            <li class="des">javascript在1995年问世</li>
            <li class="des">用途：代替服务端语言处理输入验证</li>
        </ul>
        <h2><mark>历史</mark>：</h2>
        <ul>
            <li class="des"><mark class="marksec">1995年</mark>：
                <br>由网景公司Brendan Eich工程师开发
                <br>网景与sun公司结合为开发联盟，共同开发了1.0版本，1.0版本获得成功
                <br>网景在navigator3中发布了1.1版本
            </li>
            <li class="des"><mark class="marksec">1996年</mark>：
                <br>1.1版本发布后不久，微软发布IE3
                <br>包含名为jscript的javascript
                <br>1996年8月，微软进入web浏览器领域
            </li>
            <li class="des"><mark class="marksec">1997年</mark>：
                <br>为了标准化javascript
                <br>javascript1.1版本作为提案被提交给欧洲计算机制造商协会（ECMA）
                <br>T39技术委员会打造出ECMA-262，也就是ECMAscript
            </li>
            <li class="des"><mark class="marksec">1998年</mark>：
                <br>国际标准化组织（ISO）和国际电工委员会（IEC）
                <br>将ECMAScript采纳为标准（ISO/IEC-16262）
                <br>至此，各家浏览器均以ECMAScript作为自家javascript实现的依据和标准
            </li>
        </ul>
        <h2><mark>javascript实现</mark>：</h2>
        <ul>
            <li class="des"><mark class="marksec">核心(ECMAScript)</mark>：
                <br>由ECMA-262定义的语言
                <br>提供核心功能包括：<mark class="markdes">语法 / 类型 / 语句 / 关键字 / 保留字 / 操作符 / 全局对象</mark>
                <table>
                    <thead>
                        <tr>
                            <td width='25%'>ECMAScript版本</td>
                            <td>描述</td>
                            <td width='20%'></td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><mark>ECMA-262 第一版</mark></td>
                            <td>本质上与网景公司的javascript1.1相同
                                <br>删除了所有浏览器特定的代码
                                <br>支持Unicode标准，以支持多语言
                                <br>对象与平台无关
                            </td>
                            <td rowspan="5"><mark class="marksec">统称为ES5</mark></td>
                        </tr>
                        <tr>
                            <td><mark>ECMA-262 第二版</mark></td>
                            <td>只是做了一些编校工作
                                <br>为了更符合ISO/IEC-16262的要求
                                <br>没有增减或改变任何特性
                                <br>通常不使用第2版来衡量符合性
                            </td>
                        </tr>
                        <tr>
                            <td><mark>ECMA-262 第三版</mark></td>
                            <td>第一次真正对这个标准进行更新
                                <br><mark class="marksec">更新了字符串处理，错误定义和数值输出</mark>
                                <br><mark class="marksec">增加了对正则表达式，新的控制语句，try/catch异常处理的支持</mark>
                                <br>该版本标志着，javascript最为一门真正的编程语言的时代到来了
                            </td>
                        </tr>
                        <tr>
                            <td><mark>ECMA-262 第四版</mark></td>
                            <td>对这门语言的一次彻底的修正
                                <br>由于跨度太大，几乎重新定义了一门语言，该版本在发布前被废弃
                            </td>
                        </tr>
                        <tr>
                            <td><mark>ECMA-262 第五版</mark></td>
                            <td>ECMAScript 3.1
                                <br>对javascript引擎做了一些较小的改动，致力于理清第三版中的歧义
                                <br>增加了一些新功能：<mark class="marksec">包括JSON对象 / 方便继承 / 高级属性定义的方法 / 严格模式</mark>
                                <br>该版本被称为ECMA-262的第5版，于2009年12月3日正式发布
                                <br>2011年6月发布了一个维护性修订版，只更正了规范中的错误，为添加新的特性
                            </td>
                        </tr>
                        <tr>
                            <td><mark>ECMA-262 第六版</mark></td>
                            <td>2015年6月发布，俗称ES6、ES2015
                                <br>该版本包含了有史以来最重要的一批增强特性
                                <br>支持：<mark class="marksec">类 / 模块 / 迭代器 / 生成器 / 箭头函数 / 期约 / 反射 / 代理 / 众多数据类型</mark>
                            </td>
                            <td rowspan="5"><mark class="marksec">统称为ES6</mark></td>
                        </tr>
                        <tr>
                            <td><mark>ECMA-262 第七版</mark></td>
                            <td>2016年6月发布，俗称ES7、ES2016
                                <br>此次修订只包含少量语法层面的增强
                                <br>如：Array.prototype.includes和指数操作符
                            </td>
                        </tr>
                        <tr>
                            <td><mark>ECMA-262 第八版</mark></td>
                            <td>2017年6月发布，俗称ES8、ES2017
                                <br>增加：<mark class="marksec">异步函数（async/await） / ShareArrayBuffer / Atomics API / Object.values() / Object.entries() / Object.getOwnPropertyDescriptors() / 字符串填充方法 / 明确支持对象字面量最后的逗号</mark>
                            </td>
                        </tr>
                        <tr>
                            <td><mark>ECMA-262 第九版</mark></td>
                            <td>2018年6月发布，俗称ES9、ES2018
                                <br>此次修订包括：<mark class="marksec">异步迭代 / 剩余和扩展属性 / 一组新的正则表达式特性 / Promise finally() / 模板字面量修订</mark>
                            </td>
                        </tr>
                        <tr>
                            <td><mark>ECMA-262 第十版</mark></td>
                            <td>2019年6月发布，ES10，ES2019
                                <br>增加：<mark class="marksec">Array.prototype.flat() / flatMap() / String.prototype.trimStart() / trimEnd() / Object.fromEntries() / Symbol.prototype.description属性 / 明确定义了Function.prototype.toString()的返回值 / 固定了Array.prototype.sort()的顺序 / 解决了与JSON字符串兼容的问题 / 定义了catch子句的可选绑定</mark>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <mark class="marksec">ECMAScript符合性</mark>：
                <br>必须的：支持ECMA-262中描述的所有“类型，值，对象，属性，函数，以及程序语法与语义”，支持Unicode字符标准
                <br>非必须：增加ECMA-262中未提及的“额外的类型，值，对象，属性和函数”，允许修改和扩展内置的正则表达式特性，(带来了比较好的灵活性)
            </li>
            <li class="des"><mark class="marksec">文档对象模型（DOM）</mark>：
                <br>应用编程接口（API）
                <br>提供与网页内容交互的方法和接口
            </li>
            <li class="des">
                <mark class="marksec">浏览器对象模型（BOM）</mark>：
                <br>浏览器对象模型API
                <br>提供与浏览器交互的方法和接口
            </li>
        </ul>

    </div>
</template>

<script>
export default {};
</script>

<style>
</style>