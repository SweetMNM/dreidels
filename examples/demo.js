const Spinners = require('..');

const fruits = {
  interval: 150,
  frames: ['🍇', '🍈', '🍉', '🍋']
}
const spinners = new Spinners({
  // spinner: fruits,
  color: 'blue',
  succeedColor: 'green',
  failColor: 'red',
  spinnerColor: 'blueBright'
});

spinners.add('first-spinner', { text: 'Lorem Ipsum is simply dummy text', color: 'white' });

setTimeout(() => {
  spinners.add('second-spinner', { text: 'I\'m line 2' });
}, 3000)

setTimeout(() => {
  spinners.add('third-spinner', { text: 'And I\'m ironman', color: 'yellowBright' });
}, 5000)

setTimeout(() => {
  spinners.add('spinner-that-changes', { text: 'I am another spinner that would love to make some friends! Also I am very long, but I break into two or more lines if needed' });
}, 7000)

setTimeout(() => {
  spinners.add('non-spinnable', { text: 'Im a non-spinnable line',  status: 'non-spinnable' });
}, 8000)

setTimeout(() => {
  spinners.fail('second-spinner', { text: 'And I failed :\\' });
}, 9000)

setTimeout(() => {
  spinners.succeed('first-spinner', { text: 'I\'m the updated (and optional) success message', color: 'magenta' });
}, 10000)

setTimeout(() => {
  spinners.setFrames({frames: ['O', 'o'], interval: 175});
}, 11000)

setTimeout(() => {
  spinners.update('third-spinner', { text: 'I have been updated :D', color: 'yellow', spinnerColor: 'blue' });
}, 12000)

setTimeout(() => {
  spinners.update('third-spinner', { text: 'I have been updated again :D', color: 'cyan' });
}, 14000)

setTimeout(() => {
  spinners.setFrames('arrow');
}, 16000)

setTimeout(() => {
  spinners.update('third-spinner', { text: 'Again, with fancy colors!',  color: 'magenta' });
}, 17000)

setTimeout(() => {
  spinners.update('spinner-that-changes', { text: 'Bye!'});
}, 18000);

setTimeout(() => {
  spinners.succeed('third-spinner');
}, 20000)

setTimeout(() => {
  spinners.update('third-spinner', { text: 'Im going to be removed' });
}, 21000)

setTimeout(() => {
  spinners.remove('third-spinner');
}, 22000)

setTimeout(() => {
  spinners.succeed('spinner-that-changes', { text: 'Bye! but for real this time', succeedColor: 'blue' });
}, 26000);

