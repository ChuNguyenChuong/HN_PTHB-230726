// FUNCTION REACTOR CODE

function findMaxSheep(sheeps) {
  let maxSheep = sheeps[0]
  for (let i = 1; i < sheeps.length; i++) {
    const sheep = sheeps[i];
    if (sheep > maxSheep) {
      maxSheep = sheep
    }
  }
  console.log(`Con cừu lớn nhất của tôi có kích thước ${maxSheep}, hãy thiến nó.`);

  return maxSheep
}

const resetSheepsByMaxSheep = (maxSheep, sheeps) => {
  const indexMaxSheep = sheeps.indexOf(maxSheep);
  let newSheeps = sheeps.map((sheep, index) => {
    if (index === indexMaxSheep) {
      return 8
    }
    else {
      return sheep
    }
  })
  console.log("sau khi thiến, đây là đàn cừu của tôi", newSheeps);
  return newSheeps
}

const updateSheeps50kilo = function (sheeps) {
  let sheepsAfterMonth = []
  for (let i = 0; i < sheeps.length; i++) {
    const sheep = sheeps[i];
    let newSheep = sheep + 50;
    sheepsAfterMonth.push(newSheep)
  }
  console.log("Đã được 1 tháng trôi qua, bầy cừu của tôi đã lớn, đây là kích thước của nó :", sheepsAfterMonth);
  return sheepsAfterMonth
}


let sheeps = [5, 7, 300, 90, 24, 50, 75]// 7.1
console.log("xin chào, đây là kích thước đàn cừu của tôi :", sheeps);

// let maxSheep = findMaxSheep(sheeps)

// let newSheep1 = resetSheepsByMaxSheep(maxSheep, sheeps)

// let sheepsAfterUpdate50Kg = updateSheeps50kilo(newSheep1)

// let maxSheep1 = findMaxSheep(sheepsAfterUpdate50Kg)

// let newSheep2 = resetSheepsByMaxSheep(maxSheep1, sheepsAfterUpdate50Kg)

// let sheepsAfterUpdate50Kg1 = updateSheeps50kilo(newSheep2)


for (let i = 0; i < 3; i++) {
  console.log(`==============thang ${i + 1} =============`);
  let maxSheep = findMaxSheep(sheeps)
  sheeps = resetSheepsByMaxSheep(maxSheep, sheeps)
  sheeps = updateSheeps50kilo(sheeps)
}

const sum = sheeps.reduce((total, sheep) => {
  total = total + sheep
  return total
}, 0)

console.log("🚀 ~ file: app.js:68 ~ sum ~ sum:", sum * 2)































































let metor12 = footToMeter(60)
console.log("🚀 ~ file: app.js:142 ~ metor12:", metor12)
