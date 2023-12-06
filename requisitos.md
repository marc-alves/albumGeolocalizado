# Detalhamento do escopo
O trabalho deve contemplar as seguintes telas e suas funcionalidades descritas em
seguida.

## Tela principal
- O cabeçalho traz o nome, o logotipo do site e um menu de opções
- A página deve apresentar um carrossel com fotos registradas na estrutura DESTAQUES e
que fazem parte dos diversos álbuns registrados na aplicação
ORIENTAÇÃO: use componente do bootstrap
- A página deve apresentar uma grade com todos os álbuns registrados na estrutura
ÁLBUNS. Deve ser apresentada as seguinte informações associada a cada um dos álbuns
exibidos na página: uma imagem, o título do álbum, um breve descritivo (20 caracteres) e
um link para mais detalhes desse álbum.
- A página deve apresentar um mapa com marcadores sinalizando a localização geográfica
de cada um dos álbuns registrados na esturtura ÁLBUNS.
ORIENTAÇÃO: utilize o exemplo do MapboxLinks to an external site. para montar o seu
mapa
- Rodapé com informações sobre responsável pelo site (aluno/aluna)

## Tela de detalhes do ÁLBUM
- Informações gerais do ÁLBUM que apresente: foto de capa do album, título, descritivo,
geolocalização (endereço ou latitude/longitude) e data de registro
Deve ser possível marcar o álbum como um destaque para ser exibido na home-page
registrando essa informação na estrutura DESTAQUES (via requisição de POST na API
JSONServer)
- Grade com fotos incluídas no ÁLBUM e apresentadas de forma reduzida (thumbnail) com
descrição. Os dados devem ser obtidos da estrutura FOTOS.

## Tela/popup/modal de zoom da FOTO
- A funcionalidade (página independente, popup ou modal) deve apresentar as fotos do
álbum na forma de um carrossel, oferecendo botão para exibir a foto anterior e a próxima
foto
- A página de detalhes pode ser apresentada de forma independente da tela do álbum ou
como um popup (no caso de popup, colocar botão para fechar ou fechar com tecla ESC)
- A página deve apresentar a descrição da foto de forma visível