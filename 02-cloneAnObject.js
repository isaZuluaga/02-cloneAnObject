const obj = {
  name: 'Miguel',
  lastName: 'Torres',
  age: 24
}

function say (obj) {
  const clonedObj = { ...obj }
  clonedObj.hobby = 'read books'
  console.log(clonedObj)
}

say(obj)
console.log(obj)


// destructurin in function arguments
function destructuringObj ({ ...props }) {
  const { name, age } = props
  console.log(`Hi, my name is ${name}`)
  console.log(`and I am ${age} years old`)
}

destructuringObj(obj)