<template>
    <div class="doctype">
        <h2>html文档声明</h2>
        <h3>html4文档声明：</h3>
        <div class="contentarea">
            <p>1，在html4中，
                <!DOCTYPE>声明需要引用<mark>DTD</mark>(文档类型声明)
            </p>
            <p>2，html4是基于<mark>SGML</mark>(Standard Generalized Markup Language)标准的标记语言</p>
            <p>3，<mark>DTD</mark>指定了标记语言的规则，确保浏览提能够正确的渲染内容</p>
            <h3>三种不同的声明：</h3>
            <p>1，Strict：</p>
            <p>
                <mark> &lt;!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML4//EN" "<a class="chaolianjie" href="http://www.w3.org/TR/html4/strict.dtd" target="_blank">http://www.w3.org/TR/html4/strict.dtd</a>"></mark>
            </p>
            <p>这个 <mark>DTD</mark> 包含所有 HTML 元素和属性，但不包括表象或过时的元素(如 font)，框架集是不允许的</p>
            <p>2，Transitional：</p>
            <p>
                <mark>&lt;!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML4 Transitional//EN" "<a class="chaolianjie" href="http://www.w3.org/TR/html4/loose.dtd" target="_blank">http://www.w3.org/TR/html4/loose.dtd</a>"></mark>
            </p>
            <p>这个 <mark>DTD</mark> 包含所有 HTML 元素和属性，包括表象或过时的元素(如 font)框架集是不允许的。</p>
            <p>3，Frameset：</p>
            <p>
                <mark>
                    &lt;!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML4 Frameset//EN" "<a class="chaolianjie" href="http://www.w3.org/TR/html4/frameset.dtd" target="_blank">http://www.w3.org/TR/html4/frameset.dtd</a>">
                </mark>
            </p>
            <p>这个 <mark>DTD</mark> 与 HTML4 Transitional 相同，但是允许使用框架集内容。</p>
        </div>
        <h3>html5文档声明：</h3>
        <div class="contentarea">
            <p>
                <mark>
                    <!DOCTYPE html>
                </mark>
            </p>
            <p>HTML5 不是基于 SGML，因此不要求引用 DTD</p>
            <p>该声明会让目前还不支持的 HTML5 的浏览器采用标准模式解析，对于不支持的新特性会忽略</p>
            <p>如果不给定声明或者声明的格式不对，文档会以混杂模式呈现</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "Doctype",
};
</script>

<style scoped>
</style>