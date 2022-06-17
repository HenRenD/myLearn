<template>
    <div class="geolocation">
        <h2><mark>geolocation</mark>：</h2>
        <ul>
            <li class="des">用于定位用户的位置，navigator对象的Geolocation属性</li>
        </ul>
        <h2><mark>Geolocation</mark>属性的三个方法：</h2>
        <table>
            <thead>
                <tr>
                    <td class="tdfirst">方法</td>
                    <td>描述</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><mark>getCurrentPosition</mark></td>
                    <td>
                        <pre>
    参数一<mark class="marksec">success</mark>：
                获取位置成功的回调函数
                会返回一个position对象
                position有一个coords属性，包含以下信息：
                经度 : coords.longitude
                纬度 : coords.latitude
                准确度 : coords.accuracy
                海拔 : coords.altitude
                海拔准确度 : coords.altitudeAcuracy
                行进方向 : coords.heading
                地面速度 : coords.speed
                时间戳 : new Date(position.timestamp)
    参数二<mark class="marksec">fail</mark>：
                获取位置失败的回调函数
                会返回一个error对象
                error.code会返回错误码：
                1 —— Permission denied - 用户不允许地理定位
                2 —— Position unavailable - 无法获取当前位置
                3 —— Timeout - 操作超时
    参数三<mark class="marksec">option</mark>：
                option是一个参数对象
                option = {
                        //是否要求高精度的位置信息
                        enableHighAcuracy: true,
                        //获取位置允许最长时间
                        timeout: 5000,
                        //位置可以缓存的最大时间
                        maximumAge: 5000
                }</pre>
                    </td>
                </tr>
                <tr>
                    <td><mark>watchCurrentPosition</mark></td>
                    <td>持续获取用户的位置信息
                        <br>int watchCurrentPosition(onSuccess, onError, option)
                        <br>该方法返回的是一个类似于SetInterval的返回值。可以被clearWatch使用
                        <br>这个东西类似于gps，实时更新位置
                    </td>
                </tr>
                <tr>
                    <td><mark>clearWatch</mark></td>
                    <td>停止当前的watchCurrentPosition</td>
                </tr>
            </tbody>
        </table>
        <h2><mark>geolocation</mark>实例：</h2>
        <pre class="contentarea" v-highlight><code>            &lt;body>
                    &lt;button>点击获取地理位置&lt;/button>
                    &lt;div class="box">&lt;/div>
                &lt;/body>
                &lt;script>
                    const button = document.querySelector('button')
                    const div = document.querySelector('.box')
                    const options = {
                        // 是否要求高精度的位置信息
                        enableHighAccuracy: false,
                        // 操作超时的时间
                        timeout: 5000,
                        // 数据过期时间
                        maximumAge: 5000
                    }
                    button.onclick = () => {
                        if (navigator.geolocation) {
                            navigator.geolocation.getCurrentPosition(successCallback, failCallback, options)
                        }
                        else {
                            alert("您的浏览器不支持HTML5获取地理位置！")
                        }
                    }
                    // 获取位置成功的回调函数
                    function successCallback(positon) {
                        let longitude = position.coords.longitude
                        let latitude = position.coords.latitude
                        let accuracy = position.coords.accuracy
                        div.innerText = `您的经度是：${longitude},您的纬度是：${latitude},位置精确度为：${accuracy}`
                    }
                    // 获取位置失败的回调函数
                    function failCallback(error) {
                        if (error.code === 1) {
                            alert('用户不允许获取位置！')
                        }
                        else if (error.code === 2) {
                            alert("无法获取当前位置！")
                        }
                        else {
                            alert("操作超时！")
                        }
                    }
                &lt;/script></code></pre>
    </div>
</template>

<script>
export default {};
</script>

<style>
</style>