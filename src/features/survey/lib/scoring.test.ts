import { describe, expect, it } from 'vitest'
import {
  calculateTotal,
  getCriticalPillars,
  getWeakPillars,
  getZoneFromAnswers,
  isSurveyComplete,
} from './scoring'

describe('scoring', () => {
  it('calculates total score', () => {
    expect(
      calculateTotal({
        a1: 1,
        a2: 2,
        a3: 3,
        a4: 4,
        a5: 5,
        a6: 1,
      }),
    ).toBe(16)
  })

  it('maps scores to zones', () => {
    expect(getZoneFromAnswers({ a1: 1, a2: 1, a3: 1, a4: 1, a5: 1, a6: 1 }).id).toBe(
      'red',
    )
    expect(getZoneFromAnswers({ a1: 3, a2: 3, a3: 3, a4: 3, a5: 3, a6: 3 }).id).toBe(
      'yellow',
    )
    expect(getZoneFromAnswers({ a1: 5, a2: 5, a3: 5, a4: 5, a5: 5, a6: 5 }).id).toBe(
      'green',
    )
  })

  it('returns weakest pillars ordered by score', () => {
    const weak = getWeakPillars(
      'A',
      {
        a1: 5,
        a2: 1,
        a3: 2,
        a4: 4,
        a5: 3,
        a6: 5,
      },
      2,
    )

    expect(weak.map((item) => item.id)).toEqual(['a2', 'a3'])
  })

  it('returns critical pillars with score <= 2', () => {
    const critical = getCriticalPillars('B', {
      b1: 1,
      b2: 2,
      b3: 3,
      b4: 4,
      b5: 5,
      b6: 2,
    })

    expect(critical.map((item) => item.id)).toEqual(['b1', 'b2', 'b6'])
  })

  it('detects survey completion', () => {
    expect(isSurveyComplete('A', { a1: 1, a2: 2 })).toBe(false)
    expect(
      isSurveyComplete('A', {
        a1: 1,
        a2: 2,
        a3: 3,
        a4: 4,
        a5: 5,
        a6: 3,
      }),
    ).toBe(true)
  })
})
