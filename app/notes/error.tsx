'use client'

type Props = {
  error: Error
  reset: () => void
}
const ErrorComponent = ({ error, reset }: Props) => {
  return (
    <>
      <p>Could not fetch the list of notes. {error.message}</p>

      <button onClick={reset}>Reset</button>
    </>
  )
}

export default ErrorComponent