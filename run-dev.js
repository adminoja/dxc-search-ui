const events = require('events');
const originalAddListener = events.EventEmitter.prototype.addListener;

events.EventEmitter.prototype.addListener = function(type, listener) {
  if (type === 'close') {
    console.log('Adding "close" listener:', this.constructor.name);
    console.trace();
  }
  return originalAddListener.call(this, type, listener);
};

require('events').EventEmitter.defaultMaxListeners = 20;

const { spawn } = require('child_process');

const child = spawn('npx', ['ng', 'serve', '--proxy-config', 'proxy.conf.json', '-c', 'stg'], {
  shell: true,
  stdio: 'inherit'
});

child.on('error', (err) => {
  console.error('❌ Error:', err);
});

process.on('SIGINT', () => {
  child.kill('SIGINT');
  process.exit();
});
