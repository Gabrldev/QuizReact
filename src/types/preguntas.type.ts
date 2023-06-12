export interface Preguntas {
  id: number
  pregunta: string
  respuestas: string[]
  respuesta_correcta: number
  userSelectedAnswer?: number
  isCorrectUserAnswer?: boolean
}
