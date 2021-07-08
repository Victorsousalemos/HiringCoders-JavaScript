const filmes = [
  {
    id: 1,
    titulo: 'Dilema das Redes',
    descrição: 'Um documentario sobre tecnologia.',
    duração: 120
  },

  {
    id: 2,
    titulo: 'Us',
    descrição: 'Um filme de terror legal demais.',
    duração: 120
  },

  {
    id: 3,
    titulo: 'Corra',
    descrição: 'Um filme de suspense bem legal.',
    duração: 120
  }
]

const [{ id, titulo, descrição, duração }] = filmes

//exemplo abaixo mostra as descrições de todos os filmes juntos.
filmes.map(filme => console.log(filme.descrição))
