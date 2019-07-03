let { Network, methods } = require('@liquid-carrot/carrot');
 
// this network learns the XOR gate (through neuro-evolution)
async function execute () {
  // no hidden layers...
   var network = new Network(2,1);
 
   // XOR dataset
   var trainingSet = [
       { input: [0,0], output: [0] },
       { input: [0,1], output: [1] },
       { input: [1,0], output: [1] },
       { input: [1,1], output: [0] }
   ];
 
   await network.evolve(trainingSet, {
       mutation: methods.mutation.FFW,
       equal: true,
       error: 0.05,
       elitism: 5,
       mutation_rate: 0.5
   });
 
   // and it works!
   const final = {}
   final.b0_0 = network.activate([0,0]); // 0.2413
   final.b0_1 = network.activate([0,1]); // 1.0000
   final.b1_0 = network.activate([1,0]); // 0.7663
   final.b1_1 = network.activate([1,1]); // 0.008
   console.log(final)
}
 
execute();