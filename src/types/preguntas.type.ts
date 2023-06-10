export interface Preguntas {
  id: number
  pregunta: string
  respuestas: {
    [key: string]: string
  }
  respuesta_correcta: string
  userSelected?: string
  isCorrect?: boolean
}
