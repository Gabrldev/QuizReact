/* eslint-disable @typescript-eslint/naming-convention */
import Modalresult from './components/Modalresult'
import { Question } from './components/Question'
import { usePreguntas } from './state/preguntas'

function Game () {
  const preguntas = usePreguntas((state) => state.preguntas)
  const currentQuestion = usePreguntas((state) => state.currentQuestion)

  const QuestionInfo = preguntas[currentQuestion]
  return (
    <>
      <Question info={QuestionInfo} />
      <Modalresult />
    </>
  )
}
export default Game
