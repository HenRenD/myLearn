<template>
    <div class="reflect">
        <h2><mark>知识点</mark>：</h2>
        <ul>
            <li class="des"><mark class="marksec">Reflect.apply(target, thisArg, args)</mark></li>
            <li class="des"><mark class="marksec">Reflect.construct(target, args)</mark></li>
            <li class="des"><mark class="marksec">Reflect.get(target, name, receiver)</mark></li>
            <li class="des"><mark class="marksec">Reflect.set(target, name, value, receiver)</mark></li>
            <li class="des"><mark class="marksec">Reflect.defineProperty(target, name, desc)</mark></li>
            <li class="des"><mark class="marksec">Reflect.deleteProperty(target, name)</mark></li>
            <li class="des"><mark class="marksec">Reflect.has(target, name)</mark></li>
            <li class="des"><mark class="marksec">Reflect.ownKeys(target)</mark></li>
            <li class="des"><mark class="marksec">Reflect.isExtensible(target)</mark></li>
            <li class="des"><mark class="marksec">Reflect.preventExtensions(target)</mark></li>
            <li class="des"><mark class="marksec">Reflect.getOwnPropertyDescriptor(target, name)</mark></li>
            <li class="des"><mark class="marksec">Reflect.getPrototypeOf(target)</mark></li>
            <li class="des"><mark class="marksec">Reflect.setPrototypeOf(target, prototype)</mark></li>
        </ul>
        <h2><mark>Reflect</mark>：</h2>
        <ul>
            <li class="des">将Object对象的一些明显属于语言内部的方法（比如Object.defineProperty），放到Reflect对象上
                <br>现阶段，某些方法同时在Object和Reflect对象上部署，未来的新方法将只部署在Reflect对象上
                <br>也就是说，从Reflect对象上可以拿到语言内部的方法
            </li>
            <li class="des">修改某些Object方法的返回结果，让其变得更合理
                <br>比如，Object.defineProperty(obj, name, desc)在无法定义属性时，会抛出一个错误
                <br>而Reflect.defineProperty(obj, name, desc)则会返回false
            </li>
            <li class="des">让Object操作都变成函数行为
                某些Object操作是命令式，比如name in obj和delete obj[name]
                <br>而Reflect.has(obj, name)和Reflect.deleteProperty(obj, name)让它们变成了函数行为
            </li>
            <li class="des">Reflect对象的方法与Proxy对象的方法一一对应
                <br>只要是Proxy对象的方法，就能在Reflect对象上找到对应的方法
                <br>这就让Proxy对象可以方便地调用对应的Reflect方法，完成默认行为，作为修改行为的基础
            </li>
        </ul>
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>