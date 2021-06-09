const TelegramBot = require('node-telegram-bot-api');
const emojis = require('./emojis');

const token = '1895237223:AAHV4NNxI_SYJW0XdYobYggc8HmFnPlGYwk';

const house = '🏠';

const bot = new TelegramBot(token, { polling: true });
const muskoolLink = 'https://muskool.com';
const welcomeText = `
  <b>bold</b>, <strong>bold</strong>
  <i>italic</i>, <em>italic</em>
  <a href="${muskoolLink}">inline URL</a>
  <code>inline fixed-width code</code>
  ${emojis.welcome}
  <pre>pre-formatted fixed-width code block</pre>
`;

const greetingText = `
  <b>Welcome here, in Muskool! ${emojis.welcome}</b>
  \nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n
<b>Tap here to to see details: <i><a href="${muskoolLink}">Muskool Online Music School</a></i></b>
`;

bot.on('message', (msg) => {
  const start = '/start';
  const chatId = msg.chat.id;
  if (msg.text.toString().toLowerCase().indexOf(start) === 0) {
    // bot.sendMessage(msg.chat.id, 'Hello dear user');
    bot.sendPhoto(chatId, './images/greeting.jpg', {
      caption: greetingText,
      parse_mode: 'HTML',
    });
  }
});

bot.on('message', (msg) => {
  const start = 'hi';
  if (msg.text.toString().toLowerCase().indexOf(start) === 0) {
    bot.sendMessage(msg.chat.id, 'Hello dear user');
  }
});
