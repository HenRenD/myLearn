<template>
    <div class="global">
        <h2><mark>Global</mark>：</h2>
        <ul>
            <li class="des">Global对象时ECMAScript中最特别的对象，ECMA-262规定Global为兜底对象
            </li>
            <li class="des">所针对是不属于任何对象的属性和方法，全局作用域下定义的变量和函数都会称为Global对象的属性</li>
            <li class="des">ECMA-262没有规定直接访问Global对象的方式
                <br><mark class="marksec">window</mark>对象是Global对象的代理
                <br>Global的属性都是window对象的属性
            </li>
        </ul>
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>