
import { Link } from 'react-router-dom'
import Tema from '../../models/Tema'

interface CardTemaProps {
  tema: Tema
}

function CardTemas({tema}: CardTemaProps) {
  return (
    <div className="relative mt-6 flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <div className="p-6">
       
        <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          {tema.descricao}
        </h5>
      </div>
      <div className="flex h-20 p-6 pt-0">
        <Link
          to={`/editarTema/${tema.id}`}
        >
          <button
            className="flex select-none items-center gap-2 rounded-lg py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-blue-700 transition-all hover:bg-pink-500/10 active:bg-rose-400 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-dark="true"
          >
            Editar serviço
            
          </button>
        </Link>

        <Link
          to={`/deletarTema/${tema.id}`}
          
        >
          <button
            className="flex select-none items-center gap-2 rounded-lg py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-rose-400 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-dark="true"
          >
            Deletar serviço
          
          </button>
        </Link>
      </div>
    </div>
  )
}

export default CardTemas