<template>
    <div class="yuanshizhi">
        <h2><mark>原始值 / 引用值</mark>：</h2>
        <ul>
            <li class="des"><mark class="marksec">原始值</mark>：
                <br>6种简单数据类型：Undefined / Null / Boolean / Number / String / Symbol
                <br>保存原始值的变量是按值（by value）访问的，操作的就是存储在变量中的实际值
            </li>
            <li class="des"><mark class="marksec">引用值</mark>：
                <br>由多个值构成的对象(Object)，保存在内存中
                <br>js不允许直接访问内存中的位置，所以不能直接操作对象的内存空间
                <br>保存对象的变量实际上保存的使对象的引用(指针)，而不是实际的对象，因此这些值是按引用访问的
            </li>
        </ul>
        <h2><mark>动态属性</mark>：</h2>
        <ul>
            <li class="des"><mark class="marksec">原始值</mark>：
                <br>原始值不能有属性，尽管尝试给原始值添加属性不会报错
                <br>原始类型的初始化可以只使用原始字面量形式
                <br>如果使用new会创建一个实例，但是具有原始值的行为
            </li>
            <li class="des"><mark class="marksec">引用类型</mark>：
                <br>可以随时添加、修改和删除其属性和方法
            </li>
        </ul>
        <pre class="contentarea" v-highlight><code>    // 原始值
        let a = 10
        // 给a添加属性
        a.hello = 'world'
        console.log(a.hello)  // undefined 添加属性不会报错，但是也不起作用

        // 引用值
        let obj = {}
        // 给obj添加属性
        obj.hello = 'world'
        console.log(obj)  // Object { hello: "world" }
        // 修改属性
        obj.hello = 'world2'
        console.log(obj)  // Object { hello: "world2" }
        // 删除属性
        delete obj.hello
        console.log(obj)  // Object {  }</code></pre>
        <h2><mark>赋值</mark>：</h2>
        <ul>
            <li class="des"><mark class="marksec">原始值</mark>：
                <br>赋值会拷贝一个独立的副本，具有独立的内存空间，互不影响
            </li>
            <li class="des"><mark class="marksec">引用类型</mark>：
                <br>这个被复制的值，实际上是一个指针，这个指针指向存存中的一个对象
                <br>副本和本体会互相影响
            </li>
        </ul>
        <pre class="contentarea" v-highlight><code>    // 原始值
        let a = 10
        let b = a
        console.log(a, b)  // 10 10
        b = 20
        console.log(a, b)  // 10 20  独立互不影响
        
        // 引用值
        let obj1 = { name: 'obj1', age: 20 }
        let obj2 = obj1
        console.log(obj1)  // Object { name: "obj1", age: 20 }
        console.log(obj2)  // Object { name: "obj1", age: 20 }
        obj2.name = 'hello'
        console.log(obj1) // Object { name: "hello", age: 20 }
        console.log(obj2) // Object { name: "hello", age: 20 }  只修改obj2，obj1也发生改变</code></pre>
        <h2><mark>作为参数</mark>：</h2>
        <ul>
            <li class="des"><mark class="marksec">原始值</mark>：
                <br>将值赋值给参数局部变量，即复制一份
                <br>对参数进行操作不会影响外部变量的值
            </li>
            <li class="des"><mark class="marksec">引用类型</mark>：
                <br>作为参数传递时，会将该值在内存中的地址复制一份传给参数局部变量
                <br>问题：参数只能按值传递，引用值作为参数，到底是值还是引用？
                <br>答案：在函数内部访问引用值，虽然是按值传递的，但是依然是使用引用的方式访问，参数的变化会反应到函数的外部
                <br>错误观点：在局部作用域中修改对象，会在全局作用域中体现出来，所以参数是按引用传递的
                <br>解释：
                <br>如果在函数局部作用域内，对传入的对象进行重写，即对该对象进行重新声明，对其属性重新赋值，如果是按照引用传递的，那么外部的变量也会指向这个一个新的对象，并且属性值会发生变化
                <br>但是实际上，外部的变量指向的还是那一个对象，引用是不变化的，属性值也没有发生变化
                <br>这说明，当引用类型值作为参数传到函数内部时，参数只能对该对象的值进行操作，不能改变其内存地址
                <br>也足够能证明是按值传递，因为只能对值进行操作，不能改变引用
                <br>事实上，在函数内存重写的对象，是一个局部对象，函数执行完毕会立即销毁
                <br>理解为共享会更好一点，例如这是一个汽车对象，共享使用，你可以改变汽车内的内饰，但是你不能把汽车变成飞机
            </li>
        </ul>
        <pre class="contentarea" v-highlight><code>    // 原始值
        let a = 10
        function test(A) {
            A = 100
            console.log(A, a)  // 100 10，可以看出两者是独立的
        }
        test(a)
        // 引用值
        let obj = { a: 10, b: 20 }
        function test2(A) {
            A.a = 100
            console.log(A)  // Object { a: 100, b: 20 }
            console.log(obj)  // Object { a: 100, b: 20 } 可以看出两者依然是互相影响的
            // 重写A
            A = { name: 'a', age: 20 }
            console.log(A)  // Object { name: "a", age: 20 }
            console.log(obj)  // Object { a: 100, b: 20 }
            // 这里强有力的证明了，即使是引用类型作为函数的参数也是按值传递的，否者obj也会被重写，但是却没有
        }
        test2(obj)</code></pre>
        <h2><mark>instanceof</mark>操作符：</h2>
        <ul>
            <li class="des">typeof对基本类型值得检测是最佳的，但是在面对引用类型值和null时会返回Object</li>
            <li class="des">如果想知道它是什么类型的对象，js提供了instanceof操作符：
                <br><mark class="marksec">var result = varibale instanceof constructor</mark>
                <br>如果引用值是给定类型的实例，就会返回true
                <br>instanceof检测引用值和Object构造函数时，都会返回true
                <br>检测基本类型值，返回false，因为基本类型值不是对象
            </li>
        </ul>
        <pre class="contentarea" v-highlight><code>    let a = 10
        console.log(a instanceof Object)  // false  原始值使用instanceof操作符始终返回false
        let obj = {}
        console.log(obj instanceof Object)  // true 任何引用值对Object使用instanceof操作符始终返回true
        // 构造函数
        function Test(name) {
            this.name = name
        }
        let test1 = new Test('hello')
        console.log(obj instanceof Test)  // false 因为obj不是Test的实例
        console.log(test1 instanceof Test) // true test1是Test的实例</code></pre>
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>