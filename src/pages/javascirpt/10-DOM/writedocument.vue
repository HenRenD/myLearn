<template>
    <div class="documentwrite">
        <h2><mark>知识点</mark>：</h2>
        <ul>
            <li class="des"><mark class="marksec">document.write()</mark></li>
            <li class="des"><mark class="marksec">document.writeln()</mark></li>
            <li class="des"><mark class="marksec">document.open()</mark></li>
            <li class="des"><mark class="marksec">document.close()</mark></li>
        </ul>
        <h2><mark>文档写入</mark>：</h2>
        <table>
            <thead>
                <tr>
                    <td width='15%'>方法</td>
                    <td width='30%'>描述</td>
                    <td>实例</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><mark class="marksec">document.write()</mark></td>
                    <td rowspan="4">Document.write()：向文档中写入一串文本
                        <br>document.open()：打开文档流
                        <br>document.close()：关闭文档流
                        <br>document.writeln()：向文档中写入一串文本，并紧跟着一个换行符
                    </td>
                    <td rowspan="4">
                        <pre class="contentarea" v-highlight><code>    document.open()
        document.write('&lt;h2>hello world&lt;/h2>')
        document.writeln('&lt;mark>hello world&lt;/mark>')
        document.close()</code></pre>
                    </td>
                </tr>
                <tr>
                    <td><mark class="marksec">document.writeln()</mark></td>
                </tr>
                <tr>
                    <td><mark class="marksec">document.open()</mark></td>
                </tr>
                <tr>
                    <td><mark class="marksec">document.close()</mark></td>
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