import camelCase from './camelCase'


test("camelcase the-stealth-warrior ", ()=>{
  expect(camelCase('the-stealth-warrior')).toBe("theStealthWarrior")
})

test("The_Stealth_Warrior", ()=>{
  expect(camelCase("The_Stealth_Warrior")).toBe('TheStealthWarrior')
})



