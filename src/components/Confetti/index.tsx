'use client'

import { FC, useEffect, useState } from 'react'
import ReactConfetti from 'react-confetti'
import { IConfettiOptions } from 'react-confetti/dist/types/Confetti'
import { useWindowSize } from 'react-use'

export interface ConfettiProps extends Partial<IConfettiOptions> {}

const Confetti: FC<ConfettiProps> = ({ ...rest }) => {
  const [onParty, setOnParty] = useState(false)
  const { width, height } = useWindowSize()

  useEffect(() => {
    setOnParty(true)
    setTimeout(() => {
      setOnParty(false)
    }, 1000)
  }, [])

  return (
    <ReactConfetti
      width={width}
      height={height}
      numberOfPieces={onParty ? 500 : 0}
      gravity={0.2}
      {...rest}
    />
  )
}

Confetti.displayName = 'Confetti'

export default Confetti
