import { useScrollPosition } from "./hooks/useScrollPosition";

function App() {
  const isAtTop = useScrollPosition();

  return (
    <>
      <nav className="flex flex-row max-w-7xl  fixed top-4  mx-auto inset-x-0 z-50 w-[95%] lg:w-full">
        <div className="hidden lg:block w-full">
          <div
            className={`transition-all duration-300 ${isAtTop ? "w-19/20 shadow-2xs" : "w-5/6 shadow-none"} animate-slideDown shadow-indigo-500 flex relative justify-between px-4 py-3 rounded-2xl transition duration-300 bg-transparent mx-auto backdrop-blur-sm`}
          >
            <div className="flex flex-row gap-2 items-center relative z-10">
              <h2 className="text-[#646cff] text-2xl font-bold">Closefy</h2>
              <div className="flex align-middle items-center gap-1.5">
                <a
                  className="flex items-center justify-center text-sm leading-[110%] px-4 py-2 rounded-md hover:bg-neutral-800 hover:text-white/80 text-white hover:shadow-[0px_1px_0px_0px_#FFFFFF20_inset] transition duration-200"
                  href=""
                >
                  Recursos
                </a>

                <a
                  className="flex items-center justify-center text-sm leading-[110%] px-4 py-2 rounded-md hover:bg-neutral-800 hover:text-white/80 text-white hover:shadow-[0px_1px_0px_0px_#FFFFFF20_inset] transition duration-200"
                  href=""
                >
                  Preços
                </a>
                <a
                  className="flex items-center justify-center text-sm leading-[110%] px-4 py-2 rounded-md hover:bg-neutral-800 hover:text-white/80 text-white hover:shadow-[0px_1px_0px_0px_#FFFFFF20_inset] transition duration-200"
                  href=""
                >
                  Blog
                </a>
                <a
                  className="flex items-center justify-center text-sm leading-[110%] px-4 py-2 rounded-md hover:bg-neutral-800 hover:text-white/80 text-white hover:shadow-[0px_1px_0px_0px_#FFFFFF20_inset] transition duration-200"
                  href=""
                >
                  Contato
                </a>
              </div>
            </div>
            <div className="flex space-x-2 items-center relative z-10">
              <a href="/register">
                <button className="text-[#646cff] inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-purple disabled:opacity-50 disabled:pointer-events-none text-ink-200 hover:text-white hover:bg-[#646cff]/10 hover:shadow-sm text-base px-5 py-2.5 rounded-xl">
                  Cadastrar
                </button>
              </a>
              <button className="inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-purple disabled:opacity-50 disabled:pointer-events-none bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-white shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] hover:shadow-purple-500/25 text-base px-5 py-2.5 rounded-xl">
                Agendar demo
              </button>
            </div>
          </div>
        </div>
      </nav>
      <main>
        <div className="relative overflow-hidden">
          <section className="relative overflow-hidden bg-navy min-h-screen flex items-center">
            <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full blur-[60px] opacity-[0.15] bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"></div>
            <div className="absolute -bottom-40 -right-40 h-[28rem] w-[28rem] rounded-full blur-[60px] opacity-[0.12] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
            <div className="mx-auto px-4 md:px-6 lg:px-8 max-w-[1200px] relative z-10 py-24 md:py-32">
              <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className="opacity: 1; transform: none;">
                  <p className="text-sm font-medium tracking-wide text-stone-300 mb-6">
                    CRM de Chat por IA
                  </p>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight tracking-[-0.02em]">
                    A desorganização da sua equipe de Vendas custa caro.
                  </h1>
                  <p className="mt-6 text-lg md:text-xl text-stone-100 leading-relaxed max-w-[90%]">
                    O único CRM funcional com chat omnichannel que organiza seu
                    atendimento em tempo real, sem atrapalhar sua equipe.
                  </p>
                  <p className="mt-4 text-base md:text-lg text-stone-300">
                    Seu time não precisa de mais um sistema. Precisa de um CRM
                    que funcione com ele.
                  </p>
                  <div className="mt-8 flex items-center gap-4 flex-wrap">
                    <button className="inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-purple disabled:opacity-50 disabled:pointer-events-none bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 text-white shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] hover:shadow-purple-500/25 text-base px-6 py-3 rounded-full group">
                      Agendar demonstração
                    </button>
                    <button className="inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-purple disabled:opacity-50 disabled:pointer-events-none bg-[#161A2E] border border-purple/20 text-stone-100 hover:bg-ui-darkest hover:border-purple/40 hover:shadow-lg hover:shadow-purple-500/10 text-base px-6 py-3 rounded-full">
                      Ver como funciona
                    </button>
                  </div>
                </div>
                <div className="relative">
                  <div className="relative">
                    <div className="rounded-t-lg border border-[#ECECEE] bg-white shadow-card overflow-hidden">
                      <div className="bg-[#F9F9FB] border-b border-white/6 px-4 py-3">
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1.5">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-layout-sidebar mx-1"
                              viewBox="0 0 16 16"
                            >
                              <path d="M0 3a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm5-1v12h9a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zM4 2H2a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h2z" />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-arrow-left mx-1"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
                              />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-arrow-right mx-1"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                              />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-arrow-clockwise mx-1"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"
                              />
                              <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466" />
                            </svg>
                          </div>
                          <div className="flex flex-row bg-[#ECECEE] rounded-md px-3 py-1.5 ml-4 w-full">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-shield mx-1"
                              viewBox="0 0 16 16"
                            >
                              <path d="M5.338 1.59a61 61 0 0 0-2.837.856.48.48 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.7 10.7 0 0 0 2.287 2.233c.346.244.652.42.893.533q.18.085.293.118a1 1 0 0 0 .101.025 1 1 0 0 0 .1-.025q.114-.034.294-.118c.24-.113.547-.29.893-.533a10.7 10.7 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.8 11.8 0 0 1-2.517 2.453 7 7 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7 7 0 0 1-1.048-.625 11.8 11.8 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 63 63 0 0 1 5.072.56" />
                            </svg>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              className="bi bi-lock mx-1"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M8 0a4 4 0 0 1 4 4v2.05a2.5 2.5 0 0 1 2 2.45v5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 13.5v-5a2.5 2.5 0 0 1 2-2.45V4a4 4 0 0 1 4-4M4.5 7A1.5 1.5 0 0 0 3 8.5v5A1.5 1.5 0 0 0 4.5 15h7a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 11.5 7zM8 1a3 3 0 0 0-3 3v2h6V4a3 3 0 0 0-3-3"
                              />
                            </svg>
                            <span className="text-xs text-stone-400 mx-1">
                              app.closefy.com
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <img
                      className="w-full h-auto border border-[#ECECEE] rounded-b-lg shadow-card"
                      src="src\assets\images\app_placeholder.png"
                      alt="A imagem vai aqui."
                    />
                  </div>
                  <p className="text-sm text-stone-400 text-center mt-3">
                    Interface unificada: chat + funil visual em tempo real
                  </p>
                  <div className="animate-float absolute -top-4 -right-4 bg-gradient-to-r from-[#8B5CF6] to-[#00C2FF] text-white px-4 py-2 rounded-full text-sm font-medium shadow-glow">
                    CRM + Chat integrados
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="relative py-24 md:py-32 bg-navy"></section>
        </div>
      </main>
    </>
  );
}

export default App;
