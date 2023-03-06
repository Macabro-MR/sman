const axios = require('axios');

const apiInstagram = {
  getCurtidas: async (username) => {
    try {
     let response = await axios.get(`https://www.instagram.com/${username}`);
     const jsonData = response.data;
     
     const indexInicio = jsonData.indexOf('edge_followed_by":{"count":');
     const indexFim = jsonData.indexOf('},"followed_by_viewer');
             
      const resultado = jsonData.slice(indexInicio+27,indexFim);
    
      return {
        ok: true,
        usuario: username,
        curtidas: resultado
      };
    } catch (err){
      console.log(err);
      return {
        ok: false,
        mensagem: 'Erro ao obter curtidas do usuário'
      };
    }
  }
}

module.exports = { apiInstagram }