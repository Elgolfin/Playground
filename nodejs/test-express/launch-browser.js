var opn = require('opn')

opn('http://localhost:3000/', {app: ['chrome', '--auto-open-devtools-for-tabs']})