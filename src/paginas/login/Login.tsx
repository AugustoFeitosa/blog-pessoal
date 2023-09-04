import { ChangeEvent, useContext, useEffect, useState } from 'react';
import './login.css';

import { Link, useNavigate } from 'react-router-dom';

import { AuthContext } from '../../contexts/AuthContext';
import UsuarioLogin from '../../models/UsuarioLogin';
import { RotatingLines } from 'react-loader-spinner';

function Login() {
  const navigate = useNavigate();

  const [usuarioLogin, setUsuarioLogin] = useState<UsuarioLogin>(
    {} as UsuarioLogin,
  );

  const { usuario, handleLogin } = useContext(AuthContext);

  const { isLoading } = useContext(AuthContext);

  useEffect(() => {
    if (usuario.token !== '') {
      navigate('/home');
    }
  }, [usuario]);

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuarioLogin({
      ...usuarioLogin,
      [e.target.name]: e.target.value,
    });
  }

  function login(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    handleLogin(usuarioLogin);
  }

  return (
    <>
      <body className="bg-white">
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
                Entre na sua conta e descubra novas experiências
                </h1>
                <p className="text-lg">Você ainda não tem uma conta?</p>
                <button className="inline-block w-60 px-4 py-3 border-2 rounded-lg font-medium border-black bg-black text-white hover:underline">
                  <Link to="/cadastro">Cadastre-se</Link>
                </button>
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
                <div className="flex items-center space-x-2">
                  <span>Não é um membro? </span>
                  <a href="#" className="underline font-medium text-[#070eff]">
                  <Link to="/cadastro">Inscreva-se agora</Link>
                  </a>
                </div>
              </div>

              <div className="flex flex-1 flex-col  justify-center space-y-5 max-w-md">
                <div className="flex flex-col space-y-2 text-center">
                  <h2 className="text-3xl md:text-4xl font-bold">
                  Faça login na conta
                  </h2>
                  <p className="text-md md:text-xl">
                  Cadastre-se ou faça login
                  </p>
                </div>
                <div className="flex flex-col max-w-md space-y-5">
                  <form
                    className="flex flex-col max-w-md space-y-5"
                    onSubmit={login}
                  >
                    <input
                      type="text"
                      placeholder="E-mail"
                      name="usuario"
                      className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
                      value={usuarioLogin.usuario}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        atualizarEstado(e)
                      }
                    />
                    <input
                      placeholder="Senha"
                      type="password"
                      name="senha"
                      className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal"
                      value={usuarioLogin.senha}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        atualizarEstado(e)
                      }
                    />
                    <button className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-black text-white">
                      {isLoading ? (
                        <RotatingLines
                          strokeColor="white"
                          strokeWidth="5"
                          animationDuration="0.75"
                          width="24"
                          visible={true}
                        />
                      ) : (
                        <span>Entrar</span>
                      )}
                    </button>

                    <div className="flex justify-center items-center">
                      <span className="w-full border border-black"></span>
                      <span className="px-4">Ou</span>
                      <span className="w-full border border-black"></span>
                    </div>
                    <button className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black relative">
                      <span className="absolute left-4">
                        <svg
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          
                        >
                          <path
                            fill="#EA4335 "
                            d="M5.26620003,9.76452941 C6.19878754,6.93863203 8.85444915,4.90909091 12,4.90909091 C13.6909091,4.90909091 15.2181818,5.50909091 16.4181818,6.49090909 L19.9090909,3 C17.7818182,1.14545455 15.0545455,0 12,0 C7.27006974,0 3.1977497,2.69829785 1.23999023,6.65002441 L5.26620003,9.76452941 Z"
                          />
                          <path
                            fill="#34A853"
                            d="M16.0407269,18.0125889 C14.9509167,18.7163016 13.5660892,19.0909091 12,19.0909091 C8.86648613,19.0909091 6.21911939,17.076871 5.27698177,14.2678769 L1.23746264,17.3349879 C3.19279051,21.2936293 7.26500293,24 12,24 C14.9328362,24 17.7353462,22.9573905 19.834192,20.9995801 L16.0407269,18.0125889 Z"
                          />
                          <path
                            fill="#4A90E2"
                            d="M19.834192,20.9995801 C22.0291676,18.9520994 23.4545455,15.903663 23.4545455,12 C23.4545455,11.2909091 23.3454545,10.5272727 23.1818182,9.81818182 L12,9.81818182 L12,14.4545455 L18.4363636,14.4545455 C18.1187732,16.013626 17.2662994,17.2212117 16.0407269,18.0125889 L19.834192,20.9995801 Z"
                          />
                          <path
                            fill="#FBBC05"
                            d="M5.27698177,14.2678769 C5.03832634,13.556323 4.90909091,12.7937589 4.90909091,12 C4.90909091,11.2182781 5.03443647,10.4668121 5.26620003,9.76452941 L1.23999023,6.65002441 C0.43658717,8.26043162 0,10.0753848 0,12 C0,13.9195484 0.444780743,15.7301709 1.23746264,17.3349879 L5.27698177,14.2678769 Z"
                          />
                        </svg>
                      </span>
                      <span>Faça login com o Google</span>
                    </button>
                  </form>
                </div>
              </div>
              <div className="flex justify-center flex-col m-auto mt-4 mb-16 text-center text-lg dark:text-slate-900 ">
                <p>Entre em contato nas plataformas e redes sociais</p>
                <div className="flex items-center justify-center space-x-2 mt-4 flex-wrap">
                  <a
                    href="https://www.linkedin.com/in/feitosaaugusto/"
                    className="flex flex-none items-center justify-center rounded-full w-12 h-12 hover:bg-slate-200 transition-all dark:hover:bg-slate-300"
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
                    className="flex flex-none items-center justify-center rounded-full w-12 h-12 hover:bg-slate-200 transition-all dark:hover:bg-slate-300"
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
                    className="flex flex-none items-center justify-center rounded-full w-12 h-12 hover:bg-slate-200 transition-all dark:hover:bg-slate-300"
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
            </div>
          </div>
        </div>
      </body>
    </>
  );
}

export default Login;
