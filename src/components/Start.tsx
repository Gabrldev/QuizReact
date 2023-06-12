import { usePreguntas } from '../state/preguntas'
function Start (): JSX.Element {
  const fetchPreguntas = usePreguntas((state) => state.fetchQuestions)
  const handleSubmt = () => {
    fetchPreguntas(10)
  }
  return (
    <button
      className="bg-[#347EFF] px-14 text-white border-none rounded-md py-1 hover:bg-sky-600"
      onClick={handleSubmt}
    >
      Start
    </button>
  )
}
export default Start
