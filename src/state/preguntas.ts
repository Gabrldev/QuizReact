import { create } from 'zustand'
import { Preguntas } from '../types/preguntas.type'

interface State {
  preguntas: Preguntas[]
  currentQuestion: number
  fetchQuestions: (limit: number) => Promise<any>
}
export const usePreguntas = create<State>((set) => {
  return {
    preguntas: [],
    currentQuestion: 0,
    fetchQuestions: async (limit: number) => {
      const res = await fetch('http://localhost:5173/data.json')
      const json = await res.json()
      const preguntas = json.sort(() => Math.random() - 0.5).slice(0, limit)
      set({ preguntas })
    }
  }
})