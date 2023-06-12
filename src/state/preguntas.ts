import { create } from 'zustand'
import { Preguntas } from '../types/preguntas.type'
import { persist } from 'zustand/middleware'
interface State {
  preguntas: Preguntas[]
  currentQuestion: number
  fetchQuestions: (limit: number) => Promise<any>
  selectAnswer: (questionId: number, answerId: number) => void
  nextQuestion: () => void
  restart: () => void
}
export const usePreguntas = create<State>()(persist((set, get) => {
  return {
    preguntas: [],
    currentQuestion: 0,
    fetchQuestions: async (limit: number) => {
      const res = await fetch('http://localhost:5173/data.json')
      const json = await res.json()
      const preguntas = json.sort(() => Math.random() - 0.5).slice(0, limit)
      set({ preguntas })
    },
    selectAnswer: (questionId: number, answerIndex: number) => {
      const { preguntas } = get()
      // usar el structuredClone para clonar el objeto
      const newQuestions = structuredClone(preguntas)
      // encontramos el índice de la pregunta
      const questionIndex = newQuestions.findIndex((q: { id: number }) => q.id === questionId)
      // obtenemos la información de la pregunta
      const questionInfo = newQuestions[questionIndex]
      // averiguamos si el usuario ha seleccionado la respuesta correcta
      const isCorrectUserAnswer = questionInfo.correctAnswer === answerIndex
      // actualizamos la información de la pregunta
      newQuestions[questionIndex] = {
        ...questionInfo,
        isCorrectUserAnswer,
        userSelectedAnswer: answerIndex
      }
      // actualizamos el estado
      set({ preguntas: newQuestions })
    },
    nextQuestion: () => {
      const { currentQuestion, preguntas } = get()
      const nextQuestion = currentQuestion + 1
      if (nextQuestion < preguntas.length) {
        set({ currentQuestion: nextQuestion })
      }
    },
    restart: () => {
      set({
        currentQuestion: 0,
        preguntas: []
      })
    }
  }
}, {
  name: 'preguntas'
}))
