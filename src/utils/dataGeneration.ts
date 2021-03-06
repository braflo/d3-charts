import * as d3 from "d3"

const randomAroundMean = (mean: number, deviation: number): number => mean + boxMullerRandom() * deviation

const boxMullerRandom = (): number => (
  Math.sqrt(-2.0 * Math.log(Math.random())) *
  Math.cos(2.0 * Math.PI * Math.random())
)

const today = new Date()
const formatDate = d3.timeFormat("%m/%d/%Y")

export const getTimelineData = (length: number = 100) => {
  let lastTemperature = randomAroundMean(70, 20)
  const firstTemperature = d3.timeDay.offset(today, -length)

  return new Array(length).fill(0).map((_d, i) => {
    lastTemperature += randomAroundMean(0, 2)
    return {
      date: formatDate(d3.timeDay.offset(firstTemperature, i)),
      temperature: lastTemperature,
    }
  })
}