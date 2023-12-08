'use client'
import { useEffect, useRef, useState } from 'react'

const KEYS = ['high-w1', 'high-w2', 'high-w3', 'high-w4', 'high-w5']
const PLAYERS = [
  'davai',
  'forsaken',
  'jinggg',
  'mindfreak',
  'monyet',
  'something',
]

const Slot = ({
  index,
  slot,
  isSpinning,
}: {
  index: number
  slot: string[]
  isSpinning: boolean
}) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current !== null) {
      ref.current.addEventListener('transitionstart', () => {
        ref.current!.style.filter = 'blur(1px)'
      })
      ref.current.addEventListener('transitionend', () => {
        ref.current!.style.filter = 'blur(0)'
      })
    }
  }, [])

  return (
    <div className="relative w-full bg-white aspect-square overflow-hidden rounded-md">
      <div
        ref={ref}
        className="absolute bottom-0 flex flex-col"
        style={{
          flexDirection: isSpinning ? 'column-reverse' : 'column',
          transition: `transform ${1 + index * 0.5}s ease-out`,
          transform: isSpinning ? `translateY(100%)` : `translateY(0%)`,
          filter: isSpinning ? 'blur(1px)' : '',
        }}
      >
        {slot.map((image) => (
          <img
            className="w-full p-1"
            style={{
              transition: `transform ${1 + index * 0.5}s ease-out`,
              transform: isSpinning ? `translateY(-100%)` : `translateY(0%)`,
            }}
            src={`/slots/${image}.png`}
          />
        ))}
      </div>
    </div>
  )
}
const Home = () => {
  const [start, setStart] = useState(getKeys())
  const [outcome, setOutcome] = useState(getOutcome())
  const [slots, setSlots] = useState(getSlots(outcome, start))
  const [isTop, setIsTop] = useState(false)

  const handleSpin = () => {
    const nextStart = outcome
    const nextOutcome = getOutcome()
    const nextSlots = getSlots(nextOutcome, nextStart)
    setStart(nextStart)
    setOutcome(nextOutcome)
    setSlots(nextSlots)
    setIsTop(!isTop)
  }

  return (
    <main
      className="absolute top-0 bottom-0 left-0 right-0 bg-purple flex flex-row items-center justify-center"
      onClick={handleSpin}
    >
      <div className="w-full max-w-lg flex flex-row pl-2 pr-2 gap-2">
        {slots.map((slot, index) => (
          <Slot key={index} index={index} slot={slot} isSpinning={isTop} />
        ))}
      </div>
    </main>
  )
}

function getSlots(
  outcome: [string, string, string, string, string],
  start: [string, string, string, string, string]
): string[][] {
  const lengths: [number, number, number, number, number] = [
    9 + ~~(Math.random() * 4),
    14 + ~~(Math.random() * 4),
    19 + ~~(Math.random() * 4),
    24 + ~~(Math.random() * 4),
    29 + +~~(Math.random() * 4),
  ]
  const zipped: [string, number][] = lengths.map((length, index) => [
    outcome[index],
    length,
  ])
  return zipped.map(([outcome, length], index) => {
    let shuffled = getShuffled(PLAYERS)
    let slots: string[] = new Array(length).fill('')
    slots[0] = outcome
    for (let i = 1; i < length - 1; i++) {
      if (shuffled.length === 0) {
        shuffled = getShuffled(PLAYERS)
      }
      slots[i] = shuffled.pop() as string
    }
    slots[length - 1] = start[index]
    return slots
  })
}

function getOutcome(): [string, string, string, string, string] {
  const shuffled = getShuffled(PLAYERS)
  const outcome: [string, string, string, string, string] = [
    shuffled[0],
    shuffled[1],
    shuffled[2],
    shuffled[3],
    shuffled[4],
  ]
  if (Math.random() < 0.01) {
    const index = ~~(Math.random() * 5)
    outcome[index] = 'alecks'
  }
  return outcome
}

function getKeys(): [string, string, string, string, string] {
  const shuffled = getShuffled(KEYS)
  return [shuffled[0], shuffled[1], shuffled[2], shuffled[3], shuffled[4]]
}

function getShuffled(source: string[]) {
  return source.slice().sort(() => (Math.random() > 0.5 ? 1 : -1))
}

export default Home
