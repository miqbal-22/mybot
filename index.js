console.log('Starting...')
let { spawn } = require('child_process')
let path = require('path')
const CFonts  = require('cfonts')
CFonts.say('JINGAN BOT', {
  font: 'chrome',
  align: 'center',
  gradient: ['red', 'magenta']
})
CFonts.say('\'YouTube:\' Iqbal XD', {
  font: 'console',
  align: 'center',
  gradient: ['red', 'magenta']
})

function start() {
  let args = [path.join(__dirname, 'iqbal.js'), ...process.argv.slice(2)]
  CFonts.say([process.argv[0], ...args].join(' '), {
    font: 'console',
    align: 'center',
    gradient: ['red', 'magenta']
  })
  let p = spawn(process.argv[0], args, {
    stdio: ['inherit', 'inherit', 'inherit', 'ipc']
  })
  .on('message', data => {
    if (data == 'reset') {
      console.log('RESET')
      p.kill()
      start()
      delete p
    }
  })
}

start()
