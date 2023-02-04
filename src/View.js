// Сделаем отдельный класс для отображения игры в консоли.

class View {
  render(track, count, name) {
    const yourTeamName = 'Elbrus';

    // Тут всё рисуем.
    console.clear();
    console.log(track.join(''));
    console.log('\n\n');
    console.log(`Ты заработал '${count}' очков`);
    console.log(`Created by "${yourTeamName}" with love`);
    console.log(name);
  }
}

module.exports = View;
