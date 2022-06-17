<template>
    <div class="proandmethod">
        <h2><mark>知识点：</mark></h2>
        <ul>
            <li class="des">属性：
                <br><mark class="marksec">[[Configurable]]</mark> / <mark class="marksec">[[Enumberable]]</mark> / <mark class="marksec">[[Writable]]</mark> / <mark class="marksec">[[Value]]</mark> / <mark class="marksec">[[Get]]</mark> / <mark class="marksec">[[Set]]</mark>
            </li>
            <li class="des">构造函数方法：
                <br><mark class="marksec">Object.defineProperty()</mark> / <mark class="marksec">Object.defineProperties()</mark>
                <br><mark class="marksec">Object.getOwnPropertyDescriptor()</mark> / <mark>Object.getOwnPropertyDescriptors()</mark>ES6
                <br><mark class="marksec">Object.getOwnPropertyNames()</mark> / <mark class="marksec">Object.getOwnPropertySymbols()</mark>
                <br><mark>Object.getPrototypeOf()</mark>ES6 / <mark>Object.setPrototypeOf()</mark>ES6
                <br><mark>Object.assign()</mark>ES6 / <mark class="marksec">Object.create()</mark>
                <br><mark class="marksec">Object.freeze()</mark> / <mark class="marksec">Object.isFrozen()</mark>
                <br><mark class="marksec">Object.isExtensible()</mark> / <mark class="marksec">Object.preventExtensions()</mark>
                <br><mark class="marksec">Object.seal()</mark> / <mark class="marksec">Object.isSealed()</mark>
                <br><mark>Object.is()</mark>ES6
                <br><mark>Object.entries()</mark>ES6 / <mark>Object.keys()</mark>ES6 / <mark>Object.values()</mark>ES6 / <mark>Object.fromEntries()</mark>ES6
            </li>
            <li class="des">操作符：
                <br><mark class="marksec">delete操作符</mark> / <mark class="marksec">in操作符</mark>
            </li>
            <li class="des">实例方法属性：
                <br><mark class="marksec">constructor</mark> / <mark class="marksec">hasOwnProperty()</mark> / <mark class="marksec">isPrototypeOf()</mark> / <mark class="marksec">propertyIsEnumerable()</mark> / <mark class="marksec">toLocaleString()</mark> / <mark class="marksec">toString()</mark> / <mark class="marksec">valueOf()</mark>
            </li>
        </ul>
        <h2><mark>属性</mark>：</h2>
        <h3><mark class="marksec">数据属性</mark>：</h3>
        <ul>
            <li class="des">数据属性包含一个保存数据值的位置
                <br>值会从这个位置读取，也会写入这个位置
                <br>数据属性有一些特性描述他们的行为
            </li>
            <li class="des">数据属性不能直接定义，必须使用：
                <br>Object.defineProperty（）
                <br>Objece.defineProperties（）
            </li>
        </ul>
        <table>
            <thead>
                <tr>
                    <td width='15%'>属性</td>
                    <td width='30%'>描述</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><mark class="marksec">[[Configurable]]</mark></td>
                    <td>表示属性是否可以通过delete删除并重新定义
                        <br>是否可以修改他的特性
                        <br>是否可以把它修改为访问器属性
                        <br>默认情况下：直接定义在对象上的属性的该特性都是true
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">[[Enumberable]]</mark></td>
                    <td>表示属性是否可以通过for-in枚举
                        <br>默认情况下：所有直接定义在对象上的属性的该特性都是true
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">[[Writable]]</mark></td>
                    <td>表示属性是否可以被修改
                        <br>默认为true
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">[[Value]]</mark></td>
                    <td>包含属性的实际值
                        <br>就是读取和写入属性的位置
                        <br>默认为undefined
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">[[Get]]</mark></td>
                    <td>获取函数，在读取属性时调用
                        <br>默认值为undefined
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">[[Set]]</mark></td>
                    <td>设置函数，在写入属性时调用
                        <br>默认值为undefined
                    </td>
                </tr>
            </tbody>
        </table>
        <h2><mark>定义属性</mark>：</h2>
        <h3><mark class="marksec">Object.defineProperty()</mark></h3>
        <ul>
            <li class="des">三个参数：目标对象，目标对象属性，描述符对象：即要修改那些特性
                <br>只要调用了该方法，即使不设置，这些特性也会默认为false
                <br>configurable一旦设置为false,就不能再更改
                <br>严格模式下，设置为false后，在进行操作会报错，非严格模式也会报错
            </li>
        </ul>
        <pre class="contentarea" v-highlight><code>    let person = {}
        Object.defineProperty(person, 'name', {
            configurable: true,
            enumerable: true,
            writable: true,
            value: 'henren'
        })
        console.log(person)     // Object { name: "henren" }</code></pre>
        <h3><mark class="marksec">Object.defineProperties()</mark></h3>
        <ul>
            <li class="des">可以一次性定义多个属性
                <br>接收两个参数：目标对象，属性对象，要定义那些属性（也是对象的形式）
            </li>
        </ul>
        <pre class="contentarea" v-highlight><code>    let person = {}
        Object.defineProperties(person, {
            name: {
                configurable: true,
                enumerable: true,
                writable: true,
                value: 'henren'
            },
            age: {
                configurable: true,
                enumerable: true,
                writable: true,
                value: 20
            }
        })
        console.log(person)     // Object { name: "henren", age: 20 }</code></pre>
        <h2><mark>获取属性描述</mark>：</h2>
        <h3><mark class="marksec">Object.getOwnPropertyDescriptor()</mark></h3>
        <ul>
            <li class="des">接收两个参数：目标对象，属性名
                <br>返回一个特性对象，该特性对象就是属性的特性组成的对象
            </li>
        </ul>
        <pre class="contentarea" v-highlight><code>    let person = {
            name: 'henren',
            age: 20
        }
        let res = Object.getOwnPropertyDescriptor(person, 'name')
        console.log(res)  // Object { value: "henren", writable: true, enumerable: true, configurable: true }</code></pre>
        <h3><mark class="marksec">Object.getOwnPropertyDescriptors()</mark>ES6</h3>
        <ul>
            <li class="des">该方法只接受一个参数：目标对象
                <br>返回所有属性和其对应的特性，对象的形式
            </li>
        </ul>
        <pre class="contentarea" v-highlight><code>    let person = {
            name: 'henren',
            age: 20
        }
        let res = Object.getOwnPropertyDescriptors(person)
        console.log(res)
        // {
        //     age: Object { value: 20, writable: true, enumerable: true, … }
        //     name: Object { value: "henren", writable: true, enumerable: true, … }
        // }</code></pre>
        <h2><mark>获取属性名</mark>：</h2>
        <h3><mark class="marksec"> Object.getOwnPropertyNames()</mark></h3>
        <ul>
            <li class="des">以一个列表的形式返回对象所有的属性名，不包括符号属性
                <br>接收一个参数：目的对象
            </li>
        </ul>
        <pre class="contentarea" v-highlight><code>    let person = {
            namr: 'henren',
            age: 20,
            [Symbol()]: 'symbol'
        }
        let res = Object.getOwnPropertyNames(person)
        console.log(res)        // Array [ "namr", "age" ]</code></pre>
        <h3><mark class="marksec"> Object.getOwnPropertySymbols()</mark></h3>
        <ul>
            <li class="des">接收一个参数：目标对象
                <br>以列表的形式返回对象的所有符号属性
            </li>
        </ul>
        <pre class="contentarea" v-highlight><code>    let person = {
            namr: 'henren',
            age: 20,
            [Symbol()]: 'symbol'
        }
        let res = Object.getOwnPropertySymbols(person)
        console.log(res)        // Array [ Symbol() ]</code></pre>
        <h2><mark>操作原型</mark>：</h2>
        <h3><mark class="marksec">Object.getPrototypeOf()</mark></h3>
        <ul>
            <li class="des">接收一个参数：目标对象
                <br>返回该对象的原型
            </li>
        </ul>
        <pre class="contentarea" v-highlight><code>    function Person(name, age) {
            this.name = name
            this.age = age
        }
        let person = new Person('henren', 20)
        let res = Object.getPrototypeOf(person)
        console.log(res)    // Object { … }   constructor: function Person(name, age)</code></pre>
        <h3><mark class="marksec">Object.setPrototypeOf()</mark></h3>
        <ul>
            <li class="des">Object.setPrototypeOf(obj, prototype)
                <br>obj：要设置其原型的对象
                <br>prototype：该对象的新原型(一个对象 或 null).
                <br>设置一个指定的对象的原型 ( 即, 内部[[Prototype]]属性）到另一个对象或null
                <br>该方法的操作对浏览器来说是一个很慢的操作，用create代替
            </li>
        </ul>
        <pre class="contentarea" v-highlight><code>    function Person(name, age) {
            this.name = name
            this.age = age
        }
        let person = new Person('henren', 20)
        let res = Object.getPrototypeOf(person)
        console.log(res)    // Object { … }   constructor: function Person(name, age)

        let test = {
            a: 2,
            b: 3
        }
        Object.setPrototypeOf(person, test)
        console.log(Object.getPrototypeOf(person))      // Object { a: 2, b: 3 }</code></pre>
        <h2><mark>合并/创造对象</mark>：</h2>
        <h3><mark class="marksec">Object.assign()</mark></h3>
        <ul>
            <li class="des">将一个对象赋值到另一个对象上
                <br>Object.assign(target, ...sources)
                <br>target：目标对象
                <br>sources：源对象
                <br>返回值：目标对象
                <br>把源对象所有的本地属性，一起复制到目标对象上
                <br>有时候也成为了“混入”
                <br>因为目标对象通过混入源对象的属性得到增强
            </li>
        </ul>
        <pre class="contentarea" v-highlight><code>    let person = {
            name: 'henren',
            age: 20
        }
        let son = {
            name: 'son',
            age: 99,
            address: 'beidou'
        }
        Object.assign(son, person) // 会覆盖掉相同的属性
        console.log(son)        // Object { address: "beidou", name: "henren", age: 20 }</code></pre>
        <h3><mark class="marksec">Object.create()</mark></h3>
        <ul>
            <li class="des">创建一个新的对象，并为其指定原型和属性
                <br>Object.create(proto，[propertiesObject])
                <br>proto：新创建对象的原型对象
                <br>propertiesObject：可选，一个对象，该对象的属性类型参照Object.defineProperties()的第二个参数
                <br>如果propertiesObject参数是 null 或非原始包装对象，则抛出一个 TypeError 异常
                <br>返回值：一个新对象，带着指定的原型对象和属性
            </li>
        </ul>
        <pre class="contentarea" v-highlight><code>    let person = {
            name: 'henren',
            age: 20
        }
        let createObj = Object.create(person, {
            address: {
                configurable: true,
                enumerable: true,
                writable: true,
                value: 'beidou'
            }
        })
        console.log(createObj)      // Object { address: "beidou" }
        console.log(Object.getPrototypeOf(createObj))   // Object { name: "henren", age: 20 }</code></pre>
        <h2><mark>对象冻结</mark>：</h2>
        <h3><mark class="marksec">Object.freeze()</mark></h3>
        <ul>
            <li class="des">Object.freeze(obj)：冻结一个对象
                <br>一个被冻结的对象再也不能被修改
                <br>冻结了一个对象则不能向这个对象添加新的属性，不能删除已有属性
                <br>不能修改该对象已有属性的可枚举性、可配置性、可写性，不能修改已有属性的值
                <br>此外，冻结一个对象后该对象的原型也不能被修改
                <br>obj：要被冻结的对象
                <br>返回值：被冻结的对象
            </li>
        </ul>
        <h3><mark class="marksec">Object.isFrozen()</mark></h3>
        <ul>
            <li class="des">Object.isFrozen(obj)
                <br>判断一个对象是否被冻结
                <br>obj：被检测的对象
                <br>返回值：表示给定对象是否被冻结的Boolean
            </li>
        </ul>
        <pre class="contentarea" v-highlight><code>    let person = {
            name: 'henren',
            age: 20
        }
        console.log(Object.isFrozen(person))   // false

        Object.freeze(person)
        console.log(Object.isFrozen(person))    // true
        delete person.name
        console.log(person)     // Object { name: "henren", age: 20 } 删除失败</code></pre>
        <h2><mark>对象扩展</mark>：</h2>
        <h3><mark class="marksec">Object.isExtensible()</mark></h3>
        <ul>
            <li class="des">Object.isExtensible(obj)
                <br>判断一个对象是否是可扩展的（是否可以在它上面添加新的属性）
                <br>obj：需要检测的对象
                <br>返回值：表示给定对象是否可扩展的一个Boolean
            </li>
        </ul>
        <h3><mark class="marksec">Object.preventExtensions()</mark></h3>
        <ul>
            <li class="des">Object.preventExtensions(obj)
                <br>让一个对象变的不可扩展，也就是永远不能再添加新的属性
                <br>obj：将要变得不可扩展的对象
                <br>返回值：已经不可扩展的对象
            </li>
        </ul>
        <pre class="contentarea" v-highlight><code>    let person = {
            name: 'henren',
            age: 20
        }
        console.log(Object.isExtensible(person))    // true
        Object.preventExtensions(person)
        console.log(Object.isExtensible(person))    // false
        person.address = 'beidou'
        console.log(person)     // Object { name: "henren", age: 20 } 添加新属性失败</code></pre>
        <h2><mark>对象封闭</mark>：</h2>
        <h3><mark class="marksec">Object.isSealed()</mark></h3>
        <ul>
            <li class="des">Object.isSealed(obj)
                <br>判断一个对象是否被密封
                <br>obj：要被检查的对象
                <br>返回值：表示给定对象是否被密封的一个Boolean
                <br>密封对象：是指那些不可扩展的且所有自身属性都不可配置且因此不可删除（但不一定是不可写）的对象。
            </li>
        </ul>
        <h3><mark class="marksec">Object.seal()</mark></h3>
        <ul>
            <li class="des">Object.seal(obj)
                <br>封闭一个对象，阻止添加新属性并将所有现有属性标记为不可配置。当前属性的值只要原来是可写的就可以改变
                <br>obj：将要被密封的对象
                <br>返回值：被密封的对象
            </li>
        </ul>
        <pre class="contentarea" v-highlight><code>    let person = {
            name: 'henren',
            age: 20
        }
        console.log(Object.isSealed(person))    // false
        Object.seal(person)
        console.log(Object.isSealed(person))    // true
        person.name = 'xxxx'  
        person.address = 'beidou'
        delete person.age
        console.log(person)     // Object { name: "xxxx", age: 20 } 修改成功 添加新属性失败 删除失败</code></pre>
        <h2><mark>判断对象相等</mark>：</h2>
        <h3><mark class="marksec">Object.is()</mark></h3>
        <ul>
            <li class="des">Object.is(value1, value2)
                <br>判断两个值是否为同一个值
                <br>value1：被比较的第一个值
                <br>value2：被比较的第二个值
                <br>返回值：一个 Boolean 类型标示两个参数是否是同一个值
            </li>
        </ul>
        <pre class="contentarea" v-highlight><code>    let person = {
            name: 'henren'
        }
        let person2 = {
            name: 'yefan'
        }
        console.log(Object.is(person, person2))     // false
        let person3 = person
        console.log(Object.is(person, person3))     // true</code></pre>
        <h2><mark>对象迭代方法</mark>：</h2>
        <h3><mark class="marksec">Object.entries()</mark></h3>
        <ul>
            <li class="des">Object.entries(obj)
                <br>obj：可以返回其可枚举属性的键值对的对象
                <br>返回值：给定对象自身可枚举属性的键值对数组
            </li>
        </ul>
        <h3><mark class="marksec">Object.keys()</mark></h3>
        <ul>
            <li class="des">Object.keys(obj)
                <br>obj：要返回其枚举自身属性的对象
                <br>返回值：一个表示给定对象的所有可枚举属性的字符串数组
            </li>
        </ul>
        <h3><mark class="marksec">Object.values()</mark></h3>
        <ul>
            <li class="des">Object.values(obj)
                <br>返回一个给定对象自身的所有可枚举属性值的数组
                <br>obj：被返回可枚举属性值的对象
                <br>返回值：一个包含对象自身的所有可枚举属性值的数组
            </li>
        </ul>
        <h3><mark class="marksec">Object.fromEntries()</mark></h3>
        <ul>
            <li class="des">Object.fromEntries(iterable);
                <br>将类似 Array 、 Map的键值对可迭代对象，变成对象
                <br>返回值：一个由该迭代对象条目提供对应属性的新对象
            </li>
        </ul>
        <pre class="contentarea" v-highlight><code>    let person = {
            name: 'henren',
            age: 20,
            [Symbol()]: "xxxx"
        }
        console.log(Object.entries(person))     // [0: Array["name", "henren"]，1: Array["age", 20]]
        console.log(Object.keys(person))    // Array [ "name", "age" ]
        console.log(Object.values(person))      // Array [ "henren", 20 ]

        console.log(Object.fromEntries(Object.entries(person)))  // Object { name: "henren", age: 20 }</code></pre>
        <h2><mark>delete / in</mark>操作符：</h2>
        <h3><mark class="marksec">delete</mark></h3>
        <ul>
            <li class="des">delete obj.property
                <br>可以删除实例对象的属性
            </li>
        </ul>
        <h3><mark class="marksec">in</mark></h3>
        <ul>
            <li class="des">判断某个属性是否存在对象或其原型上
                <br>只要存在都会返回true
            </li>
        </ul>
        <pre class="contentarea" v-highlight><code>    let person = {
            name: 'henren',
            age: 20
        }
        delete person.name
        console.log(person)     // Object { age: 20 }
        console.log('age' in person)    // true
        console.log('name' in person)    // false
        person.__proto__.address = 'beidou'
        console.log('address' in person)    // true</code></pre>
        <h2><mark>Object对象原型上的方法和属性</mark>：</h2>
        <ul>
            <li class="des">Object 是所有对象的基类，所以任何对象都有这些属性和方法</li>
            <li class="des"><mark class="marksec">constructor</mark>：保存着用于创建当前对象实例的函数（构造函数）object_.constructor()</li>
            <li class="des"><mark class="marksec">hasOwnProperty()</mark>：用于检查给定的属性在当前对象实例(不是原型上) 上是否存在，object_.hasOwnProperty("name")</li>
            <li class="des"><mark class="marksec">isPrototypeOf()</mark>：用于检查当前对象是否是另一个对象的原型，object_.isPrototypeOf(object)</li>
            <li class="des"><mark class="marksec">propertyIsEnumerable()</mark>：用于检查给定的属性能否用for-in语句来枚举，object_.propertyIsEnumerable("name")</li>
            <li class="des"><mark class="marksec">toLocaleString()</mark>：返回对象的字符串表示，该字符串与执行环境的地区对应，object_.toLocalsString()</li>
            <li class="des"><mark class="marksec">toString()</mark>：返回对象的字符串表示，一般情况先与toLocaleString结果一致，object_.toString()</li>
            <li class="des"><mark class="marksec">valueOf()</mark>：返回原对象，object_.valueOf()</li>
        </ul>
        <pre class="contentarea" v-highlight><code>    function Person(name, age) {
            this.name = name
            this.age = age
        }
        let person = new Person('henren', 20)
        // Person的原型对象
        console.log(Person.prototype)   // Object {constructor: function Person(name, age)}
        // Person原型对象上的constructor属性
        console.log(Person.prototype.constructor)   // function Person(name, age)
        // 检查属性是否存在实例上，非原型上
        console.log(person.hasOwnProperty('name'))  // true
        // 检查一个对象是不是另一个对象的原型
        console.log(Person.prototype.isPrototypeOf(person))     // true
        // 检查属性是否可以枚举
        console.log(person.propertyIsEnumerable()) // false
        // 返回对象的字符串表示
        console.log(person.toLocaleString())    // [object Object]
        console.log(person.toString())  // [object Object]
        // 返回原对象
        console.log(person.valueOf())  // Object { name: "henren", age: 20 }</code></pre>
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>