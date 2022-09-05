import { Swipe, SwipeItem,Button,List, Popup } from 'vant';
//为了全局管理vant组件，避免一次次注册重启
let plugins=[
    //放入数组中,利用循环拿到数组里的元素，再使用app.use()
    Swipe,SwipeItem,Button,List,Popup
]
export default function getVant(app) { //export default是导出函数
    plugins.forEach((item) => {
        return app.use(item) //在main.js中调用getVant()函数，并将app传入函数中，即传入了item，故而在这里就等于遍历循环过后为数组里的每个值都调用了一遍app.use()
    }) 
}
