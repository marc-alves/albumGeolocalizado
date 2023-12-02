const API_URL = "http://localhost:3000"

export const obterFotosInicio = async () => {
  // Carrossel com fotos registradas na estrutura DESTAQUES e que fazem parte dos diversos álbuns registrados na aplicação
  const url = API_URL + "/destaques";
  const response = await fetch(url);
  return response.json()
}

export const obterAlbuns = async () => {
  // A página deve apresentar uma grade com todos os álbuns registrados na estrutura ÁLBUNS.
  const url = API_URL + "/albuns";
  const response = await fetch(url);
  return response.json()
}

export const obterAlbum = (albumId) => {
  // Informações gerais do ÁLBUM
}

export const obterFotosAlbum = (albumId) => {
  // Fotos incluídas no ÁLBUM
}