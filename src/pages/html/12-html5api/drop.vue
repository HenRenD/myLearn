<template>
    <div class="drop">
        <h2><mark>drop</mark>：</h2>
        <ul>
            <li class="des">元素都具有一个<mark class="marksec">dragable</mark>属性
                ，为true表示可以拖放
                ，为false表示不可以拖放</li>
        </ul>
        <h2>被拖动元素的相关事件：</h2>
        <ul>
            <li class="des">
                <mark>ondragstart</mark>：元素开始拖动触发
            </li>
            <li class="des">
                <mark>ondrag</mark>：元素拖动过程中触发
            </li>
            <li class="des">
                <mark>ondragend</mark>：元素拖动结束触发
            </li>
        </ul>
        <h2>容器的相关事件：</h2>
        <ul>
            <li class="des">
                <mark>ondragenter
                </mark>：当被鼠标拖动的对象进入其容器范围内时触发此事件
            </li>
            <li class="des">
                <mark>
                    ondragover
                </mark>：当被拖动的对象在另一对象容器范围内拖动时触发此事件
            </li>
            <li class="des">
                <mark>
                    ondragleave
                </mark>：当被鼠标拖动的对象离开其容器范围内时触发此事件
            </li>
            <li class="des">
                <mark>
                    ondrop</mark>： 在一个拖动过程中，释放鼠标键时触发此事件
            </li>
        </ul>
        <h2>事件对象方法：</h2>
        <ul>
            <li class="des">
                <mark>dataTransfer.setData()
                </mark>：用于设置被拖数据的数据类型和值
            </li>
            <li class="des">
                <mark>
                    dataTransfer.getData()</mark>：获取之前设置的值
            </li>
        </ul>
        <h2>实例：</h2>
        <pre class="contentarea" v-highlight><code>      //实现图片在两个容器之间拖动
        &lt;div class='box1'>
            &lt;img draggable='true' src='xxx.png' id='img_'>
        &lt;/div>
        &lt;div class='box2'>&lt;/div>
        &lt;script>
            //获取被拖动元素和容器
            const img = document.querySelector('#img_')
            const box1 = document.querySelector('.box1')
            const box2 = document.querySelector('.box2')
            //元素开始拖动时获取数据
            img.ondragstart = (e) = > {
                e.dataTransfer.setData('text',e.target.id)
            }
            //阻止容器的默认行为，允许元素拖入
            box1.ondragover = (e) = > {
                e.preventDefault()
            }
            box2.ondragover = (e) = > {
                e.preventDefault()
            }
            //松开鼠标后，将元素加入容器
            box1.ondrop = (e) = > {
                e.preventDefault()
                let data = e.dataTransfer.getData('text')
                e.target.appendChild(document.querySelector(`#${data}`))
            }
            box2.ondrop = (e) = > {
                e.preventDefault()
                let data = e.dataTransfer.getData('text')
                e.target.appendChild(document.querySelector(`#${data}`))
            }
        &lt;/script>
        </code></pre>
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>