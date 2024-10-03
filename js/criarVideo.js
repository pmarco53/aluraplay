import { conectApi } from './conectApi.js'

const formulario = document.querySelector('[data-formulario]')

async function criarVideo() {
  evento.preventDefault()
  const imagem = document.querySelector('[data-imagem]').value
  const titulo = document.querySelector('[data-titulo]').value
  const url = document.querySelector('[data-url]').value
  const descricao = (Math.floor(Math.random) * 10).toString()

  try {
    await conectApi.criaVideo(titulo, decricao, url, imagem)

    window.location.href = '../pages/envioconcluido.html'
  } catch (e) {
    alert(e)
  }
}

formulario.addEventListener('submit', (evento) => criarVideo(evento))
