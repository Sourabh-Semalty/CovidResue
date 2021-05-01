import * as api from './api-service'


const getInfo = async function() {
    return await api.get('https://api.learnintv.com/info/app')
  }

const addCovidInfo =  async function(info) {
    return await api.post('post/info')
  }

  const routes = { getInfo }
export default routes