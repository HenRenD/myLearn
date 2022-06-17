<template>
    <div class="eventliu">
        <h2><mark>事件流</mark>：</h2>
        <ul>
            <li class="des">事件流描述了页面接收事件的顺序</li>
        </ul>
        <h3><mark class="marksec">事件冒泡</mark>：</h3>
        <ul>
            <li class="des">从具体的节点到window对象
                <br>现代浏览器中的事件会一直冒泡到 window 对象
            </li>
        </ul>
        <img src="../image/maopao.png" alt="">
        <h3><mark class="marksec">事件捕获</mark>：</h3>
        <ul>
            <li class="des">从window对象到具体节点
                <br>所有浏览器都是从 window 对象开始捕获事件，而 DOM2 Events规范规定的是从 document 开始
            </li>
        </ul>
        <img src="../image/puhuo.png" alt="">
        <h3><mark class="marksec">DOM事件流</mark>：</h3>
        <ul>
            <li class="des">事件捕获
                <br>到达目标
                <br>事件冒泡
            </li>
        </ul>
        <img src="../image/shijianliu.png" alt="">
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
img {
    width: 35%;
}
</style>