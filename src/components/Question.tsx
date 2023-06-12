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

  const delay = 0.2
  return (
    <>
      <div className="bg-[#131519] px-10 py-36 rounded-md w-[600px]">
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
