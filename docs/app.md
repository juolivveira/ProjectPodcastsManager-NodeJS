# Projeto / Project: Podcasts Manager 

## Descrição / Description
Um app no estilo netflix para centralizar diferentes podcasts separados por categoria.

## Domínio: 
Podcasts em vídeo

## Features
- Listar os episódios de podcasts em sessões de categorias
  - [astronomia, educação, política, saúde, fitness, mentalidade, humor]
- Filtrar episódios pelo nome do podcast 

## Como
#### Feature:
Listar os episódios de podcasts em sessões de categorias

### Como vou complementar:
Vou retornar uma API Rest (json): o nome do podcast; nome do episódio; imagem de capa; link do podcast; categorias do podcast.

GET: retorna lista de episódios 

response:

```js
[
{
    podcastName: "Inteligência Ltda",
    episode: "FÍSICA QUÂNTICA: SÉRGIO SACANI E CÉSAR LENZI - Inteligência Ltda. Podcast #1395",
    videoId: "SMC9DlkUwVU",
    cover: "https://i.ytimg.com/vi/SMC9DlkUwVU/hq720.jpg",
    link: "https://www.youtube.com/watch?v=SMC9DlkUwVU",
    category: ["astronomia", "educação"]

},

{
    podcastName: "Inteligência Ltda",
    episode: "TEMPO, O GRANDE MISTÉRIO: SÉRGIO SACANI E CÉSAR LENZI - Inteligência Ltda. Podcast #1347",
    videoId: "5gQJ0Ci5yOU",
    cover: "https://i.ytimg.com/vi/5gQJ0Ci5yOU/hqdefault.jpg",
    link: "https://www.youtube.com/watch?v=5gQJ0Ci5yOU",
    category: ["astronomia", "educação"]

}
]

```
GET: retorna lista de episódios baseado no parâmetro enviado pelo cliente do nome o podcast.