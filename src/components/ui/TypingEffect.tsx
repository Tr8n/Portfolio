import { useState, useEffect } from 'react'

type TypingEffectProps = {
  words: string[]
  typingSpeed?: number
  deletingSpeed?: number
  delayBetweenWords?: number
}

export function TypingEffect({
  words,
  typingSpeed = 80,
  deletingSpeed = 40,
  delayBetweenWords = 1500,
}: TypingEffectProps) {
  const [wordIndex, setWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    let timer: number
    const activeWord = words[wordIndex]

    if (isDeleting) {
      timer = window.setTimeout(() => {
        setCurrentText((prev) => prev.slice(0, -1))
      }, deletingSpeed)
    } else {
      timer = window.setTimeout(() => {
        setCurrentText((prev) => activeWord.slice(0, prev.length + 1))
      }, typingSpeed)
    }

    if (!isDeleting && currentText === activeWord) {
      timer = window.setTimeout(() => setIsDeleting(true), delayBetweenWords)
    } else if (isDeleting && currentText === '') {
      timer = window.setTimeout(() => {
        setIsDeleting(false)
        setWordIndex((prev) => (prev + 1) % words.length)
      }, 0)
    }

    return () => window.clearTimeout(timer)
  }, [currentText, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, delayBetweenWords])

  return (
    <span className="inline-flex items-center">
      <span className="text-white font-mono">{currentText}</span>
      <span className="ml-1.5 h-6 w-[2px] bg-white animate-[blink_1s_infinite]" style={{ animationTimingFunction: 'step-end' }} />
      <style>{`
        @keyframes blink {
          from, to { background-color: transparent }
          50% { background-color: white }
        }
      `}</style>
    </span>
  )
}
