import axios from 'axios'
export default axios.create({
    baseURL : 'https://pronos-foot-default-rtdb.europe-west1.firebasedatabase.app/'
})