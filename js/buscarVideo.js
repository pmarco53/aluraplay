import { conectApi } from './conectApi.js'
import constroiCard from './mostrarVideos.js'

async function buscarVideo(evento) {
  evento.preventDefault()
  const dadosDePesquisa = document.querySelector('[data-pesquisa]').value
  const busca = await conectApi.buscaVideo(dadosDePesquisa)

  const lista = document.querySelector('[data-lista]')

  while (lista.firstChild) {
    lista.removeChild(lista.firstChild)
  }

  busca.forEach((elemento) =>
    lista.appendChild(
      constroiCard(
        elemento.url,
        elemento.descricao,
        elemento.imagem,
        elemento.titulo
      )
    )
  )

  if (busca.length == 0) {
    lista.innerHTML = `<h2>Não existem videos com esse termo</h2>`
  }
}

const botaoDePesquisa = document.querySelector('[data-botao-pesquisa]')

botaoDePesquisa.addEventListener('click', (evento) => buscarVideo(evento))
