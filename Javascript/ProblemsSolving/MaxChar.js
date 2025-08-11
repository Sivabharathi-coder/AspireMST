findMaxChar('dddbsjakeldpgd');

function findMaxChar(str) {
  let maxChar = '';
  let maxCount = 0;

  for (let i = 0; i < str.length; i++) {
    let count = 0;
    for (let j = 0; j < str.length; j++) {
      if (str[i] === str[j]) count++;
    }

    if (count > maxCount) {
      maxCount = count;
      maxChar = str[i];
    }
  }

  console.log(`Most char: '${maxChar}' ( ${maxCount} times)`);
}
