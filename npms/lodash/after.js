const _ = require('lodash');
let saves = ['profile', 'settings'];

let done = _.after(saves.length, function() {
  console.log('done saving!');
});

let i = 0;
_.forEach(saves, function(type) {
  i++;
  print({'type': type, 'complete': done});
  console.log(i, type);
});

print({'type': 123, 'complete': done});

 function print(data) {
  setTimeout(() => {
    console.log(JSON.stringify(data));
    return {status: 200};
  }, 1000);
}

