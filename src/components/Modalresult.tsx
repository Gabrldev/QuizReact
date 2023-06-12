import confetti from 'canvas-confetti'
import { useResult } from '../hooks/useResul'
import { usePreguntas } from '../state/preguntas'
function Modalresult () {
  const { correct, incorrect, unanswered } = useResult()
  const restart = usePreguntas(state => state.restart)

  if (unanswered === 0) {
    confetti({
      particleCount: 130,
      spread: 130
    })
  }
  return (
    <>
      {unanswered === 0 && (
        <div className="fixed top-0 flex justify-center items-center  backdrop-blur-2xl w-full h-screen">
          <div className="bg-white/5 border-4 border-white/5 flex justify-center items-center flex-col  rounded-md  w-[500px] h-[500px] max-sm:w-[400px] max-sm:h-[400px]">
            <h1 className="text-3xl text-white">Resultados</h1>
            <div className="flex flex-col gap-3 mt-10">
              <p className="text-white">✅Correctas: {correct | 0}</p>
              <p className="text-white">❌Incorrectas: {incorrect | 0}</p>
            </div>
            <button className='bg-blue-500 px-4 text-white py-1 rounded-md mt-6' onClick={() => restart()}>Volver a jugar</button>
          </div>
        </div>
      ) }
    </>
  )
}
export default Modalresult
