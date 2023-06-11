export interface Preguntas {
  id: number
  pregunta: string
  respuestas: []
  respuesta_correcta: string
  userSelected?: string
  isCorrect?: boolean
}
