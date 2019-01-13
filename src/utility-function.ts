declare type Utility = {
  possibility: number,
  value: number
}

declare type Value = {
  average: number,
  sum: number
}

declare type Utilities = Utility[]

export class UtilityFunction {
  utilities: Utilities
  value: Value
  add: (possibility: number, value: number) => void
  calculate: () => void
  reset: () => void

  public constructor(...utilities: Utility[]) {
    this.value = {
      average: 0,
      sum: 0
    }
    this.reset = () => {
      this.value = {
        average: 0,
        sum: 0
      }
      this.utilities = []
    }
    this.utilities = []
    this.add = (possibility: number, value: number) => {
      this.utilities.push({ possibility, value })
      this.calculate()
    }
    this.calculate = () => {
      const tmp = new Array()
      this.value = {
        average: 0,
        sum: 0
      }
      this.utilities.forEach((utility: Utility) => {
        tmp.push((utility.possibility / 100) * utility.value)
      })
      const sum = tmp.reduce(function (a, b) { return a + b; })
      this.value = {
        sum: sum,
        average: sum / tmp.length
      }
    }
  }

}
