import tripleTrouble from './tripleTrouble'

test('test triple trouble 451999277,41177722899', ()=>{
  expect(tripleTrouble(451999277,41177722899)).toBe(1)
})


test('test triple trouble 451999277,41177722899', ()=>{
  expect(tripleTrouble(451277,41177722899)).toBe(0)
})

test('test triple trouble', ()=>{
  expect(tripleTrouble(12345666,6641177722899)).toBe(1)
})

