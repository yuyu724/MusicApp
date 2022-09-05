//封装axios
//所有请求都放到这个文件里面，封装好的axios会对请求进行集中获取
import axios from "axios";


let service = axios.create({
    baseURL: 'http://localhost:3000/', //在这里封装了基础路径后，之后就可以直接在请求地址处写api接口地址，不用再加上基础地址
    timeout: 6000,
    
})

export default service