import axios from 'axios'
export default axios.create({
    baseURL : 'https://pronos-foot-2-default-rtdb.europe-west1.firebasedatabase.app/'
})