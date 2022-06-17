<template>
    <div class="proxy_">
        <h2><mark>知识点</mark>：</h2>
        <ul>
            <li class="des"><mark class="marksec">get(target, propKey, receiver)</mark></li>
            <li class="des"><mark class="marksec">set(target, propKey, value, receiver)</mark></li>
            <li class="des"><mark class="marksec">has(target, propKey)</mark></li>
            <li class="des"><mark class="marksec">deleteProperty(target, propKey)</mark></li>
            <li class="des"><mark class="marksec">ownKeys(target)</mark></li>
            <li class="des"><mark class="marksec">getOwnPropertyDescriptor(target, propKey)</mark></li>
            <li class="des"><mark class="marksec">defineProperty(target, propKey, propDesc)</mark></li>
            <li class="des"><mark class="marksec">preventExtensions(target)</mark></li>
            <li class="des"><mark class="marksec">getPrototypeOf(target)</mark></li>
            <li class="des"><mark class="marksec">isExtensible(target)</mark></li>
            <li class="des"><mark class="marksec">setPrototypeOf(target, proto)</mark></li>
            <li class="des"><mark class="marksec">apply(target, object, args)</mark></li>
            <li class="des"><mark class="marksec">construct(target, args)</mark></li>
        </ul>
        <h2><mark>Proxy</mark>：</h2>
        <ul>
            <li class="des">Proxy 可以在目标对象之前架设一层“拦截”
                <br>外界对该对象的访问，都必须先通过这层拦截
                <br>因此提供了一种机制，可以对外界的访问进行过滤和改写
            </li>
            <li class="des">这个词的原意是代理，用在这里表示由它来“代理”某些操作，可以译为“代理器”</li>
        </ul>
        <h2><mark>get()</mark>：</h2>
        <ul>
            <li class="des"><mark class="marksec">get(target,propKey,reveiver)</mark></li>
            <li class="des">拦截对象的读取操作</li>
            <li class="des">target：代理的目标对象
                <br>propKey：读取的属性名
                <br>receiver：proxy对象
            </li>
        </ul>
        <pre class="contentarea" v-highlight><code>    let person = {
            name: 'henren',
            age: 20
        }
        let proxy = new Proxy(person, {
            get(target, propKey, receiver) {
                console.log(target, propKey, receiver)
                // target：{ name: "henren", age: 20 }
                // name
                // Proxy { &lt;target>: {…}, &lt;handler>: {…} }
                return target[propKey]
            }
        })
        console.log(proxy.name)</code></pre>
        <h2><mark>set()</mark>：</h2>
        <ul>
            <li class="des"><mark class="marksec">set(target,propKey,value,receiver)</mark></li>
            <li class="des">拦截对象属性的设置</li>
            <li class="des">target：代理的目标对象
                <br>propKey：要设置的属性名
                <br>value：要设置的值
                <br>receiver：proxy对象
            </li>
        </ul>
        <pre class="contentarea" v-highlight><code>    let person = {
            name: 'henren',
            age: 20
        }
        let proxy = new Proxy(person, {
            set(target, propKey, value, receiver) {
                console.log(target, propKey, value, receiver)
                // Object { name: "henren", age: 20 } name yefan Proxy { &lt;target>: {…}, &lt;handler>: {…} }
                target[propKey] = value
            }
        })
        proxy.name = 'yefan'
        console.log(person)     // Object { name: "yefan", age: 20 }
        proxy.address = 'beidou'
        console.log(person)     // Object { name: "yefan", age: 20, address: "beidou" }</code></pre>
        <h2><mark>has()</mark>：</h2>
        <ul>
            <li class="des"><mark class="marksec">has(target,propKey)</mark></li>
            <li class="des">拦截propKey in proxy的操作，返回一个布尔值</li>
        </ul>
        <pre class="contentarea" v-highlight><code>    let person = {
            name: 'henren',
            age: 20
        }
        let proxy = new Proxy(person, {
            has(target, propKey) {
                return propKey in target
            }
        })
        console.log('name' in proxy)    // true
        console.log('address' in proxy)     // false</code></pre>
        <h2><mark>deleteProperty()</mark>：</h2>
        <ul>
            <li class="des"><mark class="marksec">deleteProperty(target,propKey)</mark></li>
            <li class="des">拦截delete proxy[propKey]的操作，返回一个布尔值</li>
        </ul>
        <pre class="contentarea" v-highlight><code>    let person = {
            name: 'henren',
            age: 20
        }
        let proxy = new Proxy(person, {
            deleteProperty(target, propKey) {
                return delete target[propKey]
            }
        })
        console.log(delete proxy['name'])    // true
        console.log(delete proxy['address'])     // true
        console.log(person)     // Object { age: 20 }</code></pre>
        <h2><mark>ownKeys()</mark>：</h2>
        <ul>
            <li class="des"><mark class="marksec">ownKeys(target)</mark></li>
            <li class="des">拦截：
                <br><mark class="marksec">Object.getOwnPropertyNames(proxy)</mark>
                <br><mark class="marksec">Object.getOwnPropertySymbol(proxy)</mark>
                <br><mark class="marksec">Object.keys(proxy)</mark>
                <br><mark class="marksec">for...in</mark>
            </li>
            <li class="des">返回一个数组，为目标对象的所有属性值</li>
            <li class="des">Object.keys()返回的是可遍历属性</li>
        </ul>
        <h2><mark>getOwnPropertyDescriptor()</mark>：</h2>
        <ul>
            <li class="des"><mark class="marksec">getOwnPropertyDescriptor(target,propKey)</mark></li>
            <li class="des">拦截Object.getOwnPropertyDescriptor()
                <br>返回一个属性描述对象或者undefined
            </li>
        </ul>
        <h2><mark>defineProperty()</mark>：</h2>
        <ul>
            <li class="des"><mark class="marksec">defineProperty(target, propKey, propDesc)</mark></li>
            <li class="des">拦截Object.defineProperty(proxy, propKey, propDesc）
                <br>Object.defineProperties(proxy, propDescs)
                <br>返回一个布尔值。
            </li>
        </ul>
        <h2><mark>preventExtensions()</mark>：</h2>
        <ul>
            <li class="des"><mark class="marksec">preventExtensions(target)</mark></li>
            <li class="des">拦截Object.preventExtensions(proxy)
                <br>返回一个布尔值
            </li>
        </ul>
        <h2><mark>getPrototypeOf(target)</mark>：</h2>
        <ul>
            <li class="des"><mark class="marksec">getPrototypeOf(target)</mark></li>
            <li class="des">拦截Object.getPrototypeOf(proxy)
                <br>返回一个对象
            </li>
        </ul>
        <h2><mark>isExtensible()</mark>：</h2>
        <ul>
            <li class="des"><mark class="marksec">isExtensible(target)</mark></li>
            <li class="des">拦截Object.isExtensible(proxy)
                <br>返回一个布尔值
            </li>
        </ul>
        <h2><mark>setPrototypeOf()</mark>：</h2>
        <ul>
            <li class="des"><mark class="marksec">setPrototypeOf(target, proto)</mark></li>
            <li class="des">拦截Object.setPrototypeOf(proxy, proto)
                <br>返回一个布尔值
                <br>如果目标对象是函数，那么还有两种额外操作可以拦截
            </li>
        </ul>
        <h2><mark>apply()</mark>：</h2>
        <ul>
            <li class="des"><mark class="marksec">apply(target, object, args)</mark></li>
            <li class="des">拦截 Proxy 实例作为函数调用的操作，比如proxy(...args)、proxy.call(object, ...args)、proxy.apply(...)</li>
        </ul>
        <h2><mark>construct()</mark>：</h2>
        <ul>
            <li class="des"><mark class="marksec">construct(target, args)</mark></li>
            <li class="des">拦截 Proxy 实例作为构造函数调用的操作
                <br>比如new proxy(...args)
            </li>
        </ul>
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>