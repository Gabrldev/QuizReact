import { Preguntas } from '../types/preguntas.type'
import { usePreguntas } from '../state/preguntas'
import { backgroundColor } from '../util/backgroundColor'
import { motion } from 'framer-motion'

export const Question = ({ info }: { info: Preguntas }) => {
  const selectAnswer = usePreguntas((state) => state.selectAnswer)

  const HandleClick = (answerIndex: number) => () => {
    selectAnswer(info.id, answerIndex)
  }

  const nextQuestion = usePreguntas((state) => state.nextQuestion)
  const currentQuestion = usePreguntas((state) => state.currentQuestion)

  const delay = 0.2
  return (
    <>
      <div className="bg-[#262B33] px-10 py-36 rounded-lg w-[600px] border-4 border-white/10 max-sm:w-[400px] max-sm:">
        <div className='h-10 w-10 bg-white rounded-full shadow flex justify-center items-center font-bold text-xl mb-6'>
          <span>{currentQuestion + 1}</span>
        </div>
      <h1 className="text-xl text-white">{info.pregunta}</h1>
      <div className="flex flex-col gap-3 mt-10">
        {info.respuestas.map((answer, index) => (
          <motion.button
            key={answer}
            className={backgroundColor(info, index)}
            onClick={HandleClick(index)}
            disabled={info.userSelectedAnswer != null}
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: delay + index * 0.3 }}
          >
            {answer}
          </motion.button>
        ))}
      </div>
      {info.userSelectedAnswer != null && (
        <button
          className="bg-[#347EFF] text-white px-4 py-1 rounded-md mt-5 "
          onClick={() => nextQuestion()}
        >
          Siguiente
        </button>
      )}
    </div>
    </>
  )
}
