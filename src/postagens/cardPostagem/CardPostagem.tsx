import { Link } from 'react-router-dom'
import Postagem from '../../models/Postagem'

interface CardPostagemProps {
  post: Postagem
}

function CardPostagem({post}: CardPostagemProps) {
  return (

    <div className="max-w-sm rounded overflow-hidden shadow-lg">
    <div className="px-6 py-4">
    <div className="font-bold text-2xl mb-2">{post.titulo}</div>
    <p className="text-gray-700 text-base text-justify mb-4">
     {post.texto}
    </p>
    <p className='text-sm'>Data: {new Intl.DateTimeFormat(undefined, {
                    dateStyle: 'full',
                    timeStyle: 'medium',
                  }).format(new Date(post.data))}</p>
        </div>

        <div className="flex">
      <Link to={`/editarPostagem/${post.id}`} className="flex select-none items-center content-end gap-2 rounded-lg py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-blue-700 transition-all hover:bg-pink-500/10 active:bg-rose-400 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" 
            type="button"
            data-ripple-dark="true">
          <button>Editar</button>
        </Link>
        <Link to={`/deletarPostagem/${post.id}`} className="flex select-none items-center gap-2 rounded-lg py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-blue-700 transition-all hover:bg-pink-500/10 active:bg-rose-400 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-dark="true">
          <button>Deletar</button>
        </Link>
      </div>
  </div>
  
  )
}

export default CardPostagem