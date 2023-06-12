import { usePreguntas } from '../state/preguntas'
export const useResult = () => {
  const questions = usePreguntas((state) => state.preguntas)
  let correct = 0
  let incorrect = 0
  let unanswered = 0
  questions.forEach((question) => {
    const { userSelectedAnswer, respuesta_correcta } = question
    if (userSelectedAnswer == null) unanswered++
    else if (userSelectedAnswer === respuesta_correcta) correct++
    else incorrect++
  })
  return { correct, incorrect, unanswered }
}
