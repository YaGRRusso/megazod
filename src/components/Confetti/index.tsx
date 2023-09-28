'use client'

import { FC, useEffect, useState } from 'react'
import ReactConfetti from 'react-confetti'
import { IConfettiOptions } from 'react-confetti/dist/types/Confetti'

export interface ConfettiProps extends Partial<IConfettiOptions> {}

const Confetti: FC<ConfettiProps> = ({ ...rest }) => {
  const [isAppearing, setIsAppearing] = useState(true)
  const [onParty, setOnParty] = useState(true)
  const { scrollHeight, scrollWidth } = document.documentElement

  useEffect(() => {
    setTimeout(() => {
      setOnParty(false)
    }, 1000)
  }, [])

  return (
    isAppearing && (
      <ReactConfetti
        height={scrollHeight}
        width={scrollWidth}
        numberOfPieces={onParty ? 500 : 0}
        onConfettiComplete={() => setIsAppearing(false)}
        gravity={0.1}
        {...rest}
      />
    )
  )
}

Confetti.displayName = 'Confetti'

export default Confetti
