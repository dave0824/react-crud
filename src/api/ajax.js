import axios from 'axios'

const baseUrl = "http://localhost:8080"
export default function ajax(url = '',data = {}, type = 'GET') {
    if (type === 'GET'){
        // 准备url参数
        let dataStr = ''; // 用于拼接参数
        Object.keys(data).forEach(key => {
            dataStr += key + '=' + data[key] + '&'
        })
        if (dataStr !== ''){
             dataStr = dataStr.substring(0,dataStr.lastIndexOf("&"));
             url = baseUrl + url + '?' + dataStr;
        }
        return axios.get(url)
    }else if (type.toUpperCase() === 'POST'){
        return axios.post(baseUrl+url,data)
    } else if (type.toUpperCase() === 'PUT'){
        return axios.put(baseUrl+url,data)
    } else if (type.toUpperCase() === 'DELETE'){
        // 准备url参数
        let dataStr = ''; // 用于拼接参数
        Object.keys(data).forEach(key => {
            dataStr += key + '=' + data[key] + '&'
        })
        if (dataStr !== ''){
            dataStr = dataStr.substring(0,dataStr.lastIndexOf("&"));
            url = baseUrl + url + '?' + dataStr;
        }
        return axios.delete(baseUrl +url)
    }
    
}