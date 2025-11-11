//armazenar as informações de conecção com o backend

//importar o axios
import axios from 'axios'

//criar uma constante chamada api
//dentro do axios tem a função create
//essa função cria uma conexão da api
//ela tem um padrão de configuração chamado : baseURL
//nela será informado o endereço de conexão com o back(http://localhost:500)

const api = axios.create({
    baseURL:"http://localhost:5000"
})

export default api