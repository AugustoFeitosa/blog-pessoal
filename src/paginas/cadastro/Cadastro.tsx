import { ChangeEvent, useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import Usuario from '../../models/Usuario';
import { cadastrarUsuario } from '../../services/Service';
import './Cadastro.css';
import { toastAlerta } from '../../util/toastAlerta';

function Cadastro() {
  const navigate = useNavigate();

  const [confirmaSenha, setConfirmaSenha] = useState<string>('');

  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: '',
  });

  const [usuarioResposta, setUsuarioResposta] = useState<Usuario>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: '',
  });

  useEffect(() => {
    if (usuarioResposta.id !== 0) {
      back();
    }
  }, [usuarioResposta]);

  function back() {
    navigate('/login');
  }

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
    setConfirmaSenha(e.target.value);
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  }

  async function cadastrarNovoUsuario(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    if (confirmaSenha === usuario.senha && usuario.senha.length >= 8) {
      try {
        await cadastrarUsuario(
          `/usuarios/cadastrar`,
          usuario,
          setUsuarioResposta,
        );
        toastAlerta('Usuário cadastrado com sucesso', 'sucesso');
      } catch (error) {
        toastAlerta('Usuário cadastrado com sucesso', 'sucesso');
      }
    } else {
      toastAlerta(
        'Dados inconsistentes. Verifique as informações de cadastro.',
        'erro',
      );
      setUsuario({ ...usuario, senha: '' }); // Reinicia o campo de Senha
      setConfirmaSenha(''); // Reinicia o campo de Confirmar Senha
    }
  }

  return (
    <>
      <body className="bg-white fonte">
        <div className="flex min-h-screen">
          <div className="flex flex-row w-full">
          <div className="hidden lg:flex flex-col justify-between bg-[#ffcc33] lg:p-8 xl:p-12 lg:max-w-sm xl:max-w-lg">
                    <div className="flex items-center justify-start space-x-3">
                      <span className="bg-black rounded-full w-8 h-8"></span>
                      <a href="#" className="text-xl font-extrabold">
                        CineVerse
                      </a>
                    </div>
                    <div className="space-y-5 flex flex-col">
                      <h1 className="lg:text-3xl xl:text-5xl xl:leading-snug font-extrabold">
                        Cadastre-se e descubra novas experiências
                      </h1>
                      <p>Entre em contato nas plataformas e redes sociais</p>
                <div className="flex items-center justify-center space-x-2 mt-4 flex-wrap">
                  <a
                    href="https://www.linkedin.com/in/feitosaaugusto/"
                    className="flex flex-none items-center justify-center rounded-full w-12 h-12 hover:bg-[#fada5e] transition-all dark:hover:bg-[#fada5e]"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="4.983"
                        cy="5.009"
                        r="2.188"
                        fill="currentColor"
                      ></circle>
                      <path
                        d="M9.237 8.855v12.139h3.769v-6.003c0-1.584.298-3.118 2.262-3.118 1.937 0 1.961 1.811 1.961 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237zm-6.142 0H6.87v12.139H3.095z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>

                  <a
                    href="https://github.com/AugustoFeitosa"
                    className="flex flex-none items-center justify-center rounded-full w-12 h-12 hover:bg-[#fada5e] transition-all dark:hover:bg-[#fada5e]"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/igordao_2/"
                    className="flex flex-none items-center justify-center rounded-full w-12 h-12 hover:bg-[#fada5e] transition-all dark:hover:bg-[#fada5e]"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </a>
                </div>

                    </div>
                    <p className="font-medium">© 2023 CineVerse</p>
                  </div>
            <div className="flex flex-1 flex-col items-center justify-center px-10 relative">
              <div className="flex lg:hidden justify-between items-center w-full py-4">
                
                <div className="flex items-center justify-start space-x-3">
                  <span className="bg-black rounded-full w-6 h-6"></span>
                  <a href="#" className="text-lg font-medium">
                    CineVerse
                  </a>
                </div>
              </div>

              <div className="flex flex-1 flex-col justify-center space-y-2 max-w-md mt-6">
                <div className="flex flex-col space-y-2 text-center">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Cadastre sua conta
                  </h2>
                 
                </div>
                <div className="flex flex-col max-w-md space-y-2">
                  <form
                    className="flex flex-col max-w-md space-y-2"
                    onSubmit={cadastrarNovoUsuario}
                  >
                    <label htmlFor="nome">Nome</label>
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      placeholder="Nome"
                      className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
                      value={usuario.nome}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        atualizarEstado(e)
                      }
                    />
                    <label htmlFor="usuario">E-mail</label>
                    <input
                      type="text"
                      id="usuario"
                      name="usuario"
                      placeholder="E-mail"
                      className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
                      value={usuario.usuario}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        atualizarEstado(e)
                      }
                    />
                    <label htmlFor="foto">Foto</label>
                    <input
                      type="text"
                      id="foto"
                      name="foto"
                      placeholder="Foto"
                      className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
                      value={usuario.foto}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        atualizarEstado(e)
                      }
                    />

                    
                    <label htmlFor="senha">Senha</label>
                    <input
                      type="password"
                      id="senha"
                      name="senha"
                      placeholder="Senha"
                      className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
                      value={usuario.senha}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        atualizarEstado(e)
                      }
                    />

                    <label htmlFor="confirmarSenha">Confirmar Senha</label>
                    <input
                      type="password"
                      id="confirmarSenha"
                      name="confirmarSenha"
                      placeholder="Confirmar Senha"
                      className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
                      value={confirmaSenha}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        handleConfirmarSenha(e)
                      }
                    />
                    <div className='flex gap-4'>
                    <button
                      className="flex items-center justify-center flex-none mt-4 px-3 py-2 md:px-10 md:py-3 border-2 rounded-lg font-medium border-[#d90429] bg-[#d90429] text-white hover:bg-[#ef233c] hover:border-[#ef233c]"
                      onClick={back}
                    >
                      Cancelar
                    </button>
                    <button
                      className="flex items-center justify-center flex-none mt-4 px-3 py-2 md:px-10 md:py- border-2 rounded-lg font-medium border-black bg-black text-white hover:bg-gray-800 hover:border-gray-800 "
                      type="submit"
                    >
                      Cadastrar
                    </button>
                    </div>
                    

                  </form>
                </div>
              </div>
             
            </div>
          </div>
        </div>
      </body>
    </>
  );
}

export default Cadastro;
