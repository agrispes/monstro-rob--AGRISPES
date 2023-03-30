const mostros = [

    {

        id: 1,
        nome: 'Osvaldo',
        altura: 2,
        habilidades: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam natus repellat nam animi, consequatur aperiam ipsa sequi corrupti neque cum dolorem deserunt nihil eum possimus non, optio, dolores incidunt laboriosam!',    
        foto: 'https://robohash.org/osvaldo'

    },

    {

        id: 2,
        nome: 'Megamente',
        altura: 6,
        habilidades: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam natus repellat nam animi, consequatur aperiam ipsa sequi corrupti neque cum dolorem deserunt nihil eum possimus non, optio, dolores incidunt laboriosam!',    
        foto: 'https://robohash.org/Megamente'

    },

    {

        id: 3,
        nome: 'Devinho',
        altura: 5,
        habilidades: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam natus repellat nam animi, consequatur aperiam ipsa sequi corrupti neque cum dolorem deserunt nihil eum possimus non, optio, dolores incidunt laboriosam!',    
        foto: 'https://robohash.org/Devinho'

    },

    {

        id: 4,
        nome: 'Abacate',
        altura: 8,
        habilidades: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam natus repellat nam animi, consequatur aperiam ipsa sequi corrupti neque cum dolorem deserunt nihil eum possimus non, optio, dolores incidunt laboriosam!',    
        foto: 'https://robohash.org/Abacate'

    },




]


const secao = document.querySelector('.monstros')

const botao = document.querySelector('.btm')

botao.addEventListener('click', () => {

document.documentElement.classList.toggle('dark')


})


const todosOsMonstros =      mostros.map( (monstro) => {      

    return `<div>

<p>Nome: ${monstro.nome}</p>
<p>Altura: ${monstro.altura}</p>
<img src="${monstro.foto}">
<p class="habilidades">Habilidade: ${monstro.habilidades}</p>


</div>`

})


secao.innerHTML = todosOsMonstros