// Сделаем отдельный класс для отображения игры в консоли.

class View {
  render(track, count, name) {
    const yourTeamName = 'Elbrus';

    // Тут всё рисуем.
    console.clear();
    console.log('🌱','🪨','🌱','🪨','🌱','🌱','🌱','🌱','🌱','🌱','🌱','🌱','🌱','🌱','🌱','🌱', '\n')
    console.log(track.join(''),'\n');
    console.log('🌱','🌱','🌱','🌱','🌱','🌱','🌱','🌱','🌱','🌱','🌱','🌱','🌱','🌱','🌱','🌱')
    console.log('\n\n');
    console.log(`Ты заработал '${count}' очков`);
    console.log(`Created by "${yourTeamName}" with love`);
    console.log(name);
  }
}

module.exports = View;
