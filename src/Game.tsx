import { usePreguntas } from './state/preguntas'
import { Preguntas } from './types/preguntas.type'

const Question = ({ info }: { info: Preguntas }) => {
  return (
    <div>
      <h1 className='text-white'>{info.pregunta}</h1>
      <div className=" flex flex-col gap-3">
        {info.respuestas.map((res, i) => {
          return (
            <div key={i} className="flex justify-center bg-gray-500 rounded-md border border-white/20">
              <button className='py-3 text-white'>{res}</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function Game () {
  const preguntas = usePreguntas((state) => state.preguntas)
  const currentQuestion = usePreguntas((state) => state.currentQuestion)

  const QuestionInfo = preguntas[currentQuestion]
  return (
    <>
      <Question info={QuestionInfo} />
    </>
  )
}
export default Game
