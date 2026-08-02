import { useEffect, useRef, useState } from 'react'

/** Ease-out so the number decelerates into its final value. */
const easeOut = (t) => 1 - Math.pow(1 - t, 3)

/**
 * Counts from 0 up to `end` once `start` becomes true.
 * Returns the current integer value; formatting is left to the caller.
 */
export function useCountUp(end, { duration = 1600, start = false } = {}) {
  const [value, setValue] = useState(0)
  const frame = useRef(0)
  const done = useRef(false)

  useEffect(() => {
    if (!start || done.current) return
    done.current = true

    if (typeof requestAnimationFrame === 'undefined' || end === 0) {
      setValue(end)
      return
    }

    let startTime = null
    const step = (now) => {
      if (startTime === null) startTime = now
      const progress = Math.min((now - startTime) / duration, 1)
      setValue(Math.round(end * easeOut(progress)))
      if (progress < 1) frame.current = requestAnimationFrame(step)
    }
    frame.current = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame.current)
  }, [start, end, duration])

  return value
}
