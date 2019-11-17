import order from './orderStringNum'


test('testing is2 Thi1s T4est 3a', ()=>{
  expect(order('is2 Thi1s T4est 3a')).toBe("Thi1s is2 3a T4est")
})

test("4of Fo1r pe6ople g3ood th5e the2", ()=>{
  expect(order('4of Fo1r pe6ople g3ood th5e the2')).toBe("Fo1r the2 g3ood 4of th5e pe6ople")
})

test('testing ', ()=>{
  expect(order('')).toBe("")
})

test('testing 7panama 1a 4plan 2man 3a 5a 6canal', ()=>{
  expect(order(' 7panama 1a 4plan 2man 3a 5a 6canal')).toBe("1a 2man 3a 4plan 5a 6canal 7panama")
})