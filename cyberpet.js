import inquirer from 'inquirer';

let questions = [
  {
    type: 'input',
    name: 'name',
    message: "What is your Pet's name?",
  },
];

const question_time = async () => {
  let response = await inquirer.prompt(questions);
  return response.name;
};
const stats = {
  name: await question_time(),
  age: 1,
  hunger: 10,
  thirst: 10,
  energy: 10,
  health: 10,
  sleep: 10,
};

const game_loop = () => {
  console.log(`Keep ${stats.name}'s stats above 0 but below 20`);
  console.table(stats);
  if (stats.age > 10 && stats.health > 15) {
    console.log(
      `${stats.name} has died of old age. ${stats.name} was a happy dog.`
    );
    console.log('Game Over');
    return;
  } else if (stats.energy < 0) {
    console.log(`${stats.name} died of exhaustion`);
    console.log('Game Over');
    return;
  } else if (stats.energy > 20) {
    console.log(`${stats.name} died of a heart attack`);
    console.log('Game Over');
    return;
  } else if (stats.hunger < 0) {
    console.log(`${stats.name} died of starvation`);
    console.log('Game Over');
    return;
  } else if (stats.hunger > 20) {
    console.log(`${stats.name} died of obesity`);
    console.log('Game Over');
    return;
  } else if (stats.thirst < 0) {
    console.log(`${stats.name} died of dehydration`);
    console.log('Game Over');
    return;
  } else if (stats.thirst > 20) {
    console.log(`${stats.name} died of overhydration`);
    console.log('Game Over');
    return;
  }
  else if (stats.health < 0){
      console.log(`${stats.name} died of constipation`)
      console.log("Game Over")
      return
  }
  else if (stats.sleep < 0) {
    console.log(`${stats.name} died of insomnia`);
    console.log('Game Over');
    return;
  }

  inquirer
    .prompt([
      {
        type: 'list',
        name: 'action',
        message: `What would you like ${stats.name} to do`,
        choices: ['Play', 'Eat', 'Drink', 'Health-Check', 'Sleep'],
      },
    ])
    .then((answers) => {
      if (answers.action == 'Eat') {
        console.log(`${stats.name} is eating`);
        stats.energy = stats.energy + 1;
        stats.hunger = stats.hunger + 3;
        stats.thirst = stats.thirst + 0;
        stats.health = stats.health - 2;
        stats.sleep = stats.sleep - 1;
      } else if (answers.action == 'Drink') {
        console.log(`${stats.name} is drinking`);
        stats.energy = stats.energy + 1;
        stats.hunger = stats.hunger + 0;
        stats.thirst = stats.thirst + 3;
        stats.health = stats.health - 3;
        stats.sleep = stats.sleep + 0;
      } else if (answers.action == 'Play') {
        console.log(`${stats.name} is playing`);
        stats.energy = stats.energy - 3;
        stats.hunger = stats.hunger - 3;
        stats.thirst = stats.thirst - 2;
        stats.health = stats.health - 0;
        stats.sleep = stats.sleep - 3;
      } else if (answers.action == 'Health-Check') {
        console.log(`${stats.name} is having a health check`);
        stats.energy = stats.energy + 0;
        stats.hunger = stats.hunger + 0;
        stats.thirst = stats.thirst + 0;
        stats.health = stats.health + 1;
        stats.sleep = stats.sleep - 0;
      } else if (answers.action == 'Sleep') {
        console.log(`${stats.name} is sleeping`);
        stats.age = stats.age + 1;
        stats.energy = stats.energy + 2;
        stats.hunger = stats.hunger - 1;
        stats.thirst = stats.thirst - 1;
        stats.health = stats.health - 2;
        stats.sleep = 10;
      }
    })
    .then(() => game_loop());
};

game_loop();
