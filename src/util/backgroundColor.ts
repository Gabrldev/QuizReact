/* eslint-disable @typescript-eslint/naming-convention */
import { Preguntas } from '../types/preguntas.type'
export const backgroundColor = (info: Preguntas, index: number) => {
  // aun no se seleciona nada
  if (info.userSelectedAnswer === undefined) { return 'bg-[#252B32] text-xs py-4 text-white' }
  // si el usuario selecciono una respuesta correcta
  if (info.respuesta_correcta === index) { return 'bg-green-800 text-xs py-6 text-white' }
  // si el usuario selecciono la respuesta correcta
  if (
    info.respuesta_correcta === info.userSelectedAnswer &&
    index === info.respuesta_correcta
  ) { return 'bg-green-800 text-xs py-6 text-white' }
  // si el usuario selecciono una respuesta incorrecta
  if (
    info.respuesta_correcta !== info.userSelectedAnswer &&
    index === info.userSelectedAnswer
  ) { return 'bg-red-800 text-xs py-6 text-white' }

  return 'bg-[#252B32] text-xs py-4 text-white'
}
