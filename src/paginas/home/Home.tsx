import './Home.css';
import { Link } from 'react-router-dom';
import homeLogo from '../../assets/home.png'
import ModalPostagem from '../../postagens/modalPostagem/ModalPostagem';

function Home() {
    return (
      <>
      <div className="bg-gradient-to-t from-[#ffb347] to-[#ffcc33] flex justify-center">
        <div className='container grid grid-cols-2 text-slate'>
          <div className="flex flex-col gap-4 items-center justify-center py-4">
          
            <h2 className='text-5xl text-center font-bold text-slate fonteTitulo'>Explore, Sonhe, Assista!</h2>
            <p className='text-2xl text-slate fonteParagrafo text-center'>Bem-vindo ao Mundo Mágico do cinema</p>
            
            
            

            <div className="flex justify-around gap-4 mt-2">
            <ModalPostagem />
              <button className='rounded py-2 px-4 text-white bg-zinc-950 hover:border-white hover:bg-zinc-800 hover:text-white'><Link to='/postagens' className='hover:underline'>Ver postagens</Link></button>
            </div>
          </div>

          <div className="flex justify-center ">
            <img src={homeLogo} alt="" className='w-2/3 mt-10' />
          </div>
        </div>
      </div>
    </>
    );
}

export default Home;