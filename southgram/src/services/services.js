const API_URL = "http://localhost:3000"

export const obterFotosInicio = async () => {
  // Fotos registradas na estrutura DESTAQUES e que fazem parte dos diversos álbuns
  const urlDestaques = API_URL + "/destaques";
  const destaqRes = await fetch(urlDestaques);
  const destaques = await destaqRes.json();
  console.log(destaques);
  if(destaques && destaques.length) {    
    const urlFotos = API_URL + "/fotos?" + destaques.map( d => "albumId=" + d.albumId ).join("&") + "&_limit=8";
    const fotosRes = await fetch(urlFotos);
    return fotosRes.json();
  } 
  return []
}

export const obterAlbuns = async () => {
  // Todos os álbuns registrados na estrutura ÁLBUNS.
  const url = API_URL + "/albuns";
  const response = await fetch(url);
  return response.json();
}

export const obterAlbum = async (albumId) => {
  // Informações gerais do ÁLBUM
  const url = API_URL + "/albuns/" + albumId;
  const response = await fetch(url);
  return response.json();
}

export const obterFotosAlbum = async (albumId) => {
  // Fotos incluídas no ÁLBUM
  const url = API_URL + "/fotos?albumId=" + albumId;
  const response = await fetch(url);
  return response.json();
}

export const adicionarDestaque = async (albumId, descricao) => {
  const url = API_URL + "/destaques";
  const data = {
    albumId,
    descricao
  };
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data)
  });
  return response.ok;
}

export const removerDestaque = async (destaqueId) => {
  const urlDelete = API_URL + "/destaques/" + destaqueId;
  const responseDelete = await fetch(urlDelete, {
    method: "DELETE"
  });
  return responseDelete.ok;
}

export const buscarDestaque = async (albumId) => {
  const url = API_URL + "/destaques?albumId=" + albumId;
  const response = await fetch(url);
  const json = await response.json();
  if(json && json.length) {
    return json[0];
  }
  return null;
}