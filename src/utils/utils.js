
// 防抖
export function debounce(func, delay) {
    let timeout
    return function() {
        let context = this
        let args = arguments

        if (timeout) clearTimeout(timeout)

        timeout = setTimeout(() => {
            func.apply(context, args)
        }, delay)
    }
}

// 节流
export function throttle(fn, delay) {
    let lastTime
    let timer
    return function() {
        const args = arguments
        // 记录当前函数触发的时间
        const nowTime = Date.now()
        if (lastTime && nowTime - lastTime < delay) {
            clearTimeout(timer)
            timer = setTimeout(function() {
                // 记录上一次函数触发的时间
                lastTime = nowTime
                // 修正this指向问题
                fn.apply(this, args)
            }, delay)
        } else {
            lastTime = nowTime
            fn.apply(this, args)
        }
    }
}
