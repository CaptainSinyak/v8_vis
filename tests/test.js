import { multiply } from '../public/index.js'

it('should multiply two numbers', function () {
  let expectedResult = 15
  let result = multiply(3, 5)
  if (result !== expectedResult) {
    throw new Error(
      `Expected ${expectedResult}, but got ${result}`
    )
  }
})