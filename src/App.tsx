import reactLogo from './assets/react.svg'
import Game from './Game'
import Start from './Start'
import { usePreguntas } from './state/preguntas'

function App (): JSX.Element {
  const preguntas = usePreguntas(state => state.preguntas)
  return (

    <div className="h-screen m-auto flex flex-col items-center justify-center bg-[#13151A]">
      <header className="flex items-center gap-2 justify-center text-white py-10">
        <img src={reactLogo} className="App-logo" alt="logo" />
        <h1 className="font-roboto font-bold text-3xl">React Quiz</h1>
      </header>
      <main className='container flex justify-center'>
       {preguntas.length === 0 && <Start/>}
       {preguntas.length > 0 && <Game />}
      </main>
    </div>

  )
}

export default App
