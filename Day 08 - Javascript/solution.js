registers       = {};
allTimeMaxValue = Number.MIN_VALUE;
maxValue        = Number.MIN_VALUE;

function maybeUpdateRegistry(register) {
  if (!(register in registers)) {
    registers[register] = {
      name: register,
      value: 0
    }
  }
}

var v = require('readline').createInterface({
  input: require('fs').createReadStream('input')
}).on('line', function (line) {
  var instructionArray  = line.split(" ");
  var register          = instructionArray[0];
  var op                = instructionArray[1];
  var value             = instructionArray[2];
  var conditionRegister = instructionArray[4];
  var conditionOp       = instructionArray[5];
  var conditionValue    = instructionArray[6];

  maybeUpdateRegistry(register)
  maybeUpdateRegistry(conditionRegister)

  var conditional = "" + registers[conditionRegister].value + " " + conditionOp + " " + conditionValue;
  if (eval(conditional)) {
    registers[register].value += (op == "inc") ? parseInt(value) : -1 * parseInt(value);
  }

  if (registers[register].value > allTimeMaxValue) {
    allTimeMaxValue = registers[register].value;
  }

}).on('close', function() {
  for (v in registers) {
    maxValue = (registers[v].value > maxValue) ? registers[v].value : maxValue;
  }
  console.log("Part one solution: "+maxValue+"\nPart two solution: "+allTimeMaxValue);
});
