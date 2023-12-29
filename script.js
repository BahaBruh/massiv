const ord = []





for (let i = 0; i < Infinity ; i++) {
    
    var add = prompt(' Введите команды')


    if (add == 'add ' ) {

        ord.push(add)
    }
    
    if (add == 'del') {

            var pop = ord.pop()

    }
    

    if (add == 'stop') {
        break
    }
}
console.log(ord);








const person = {
    name: 'Baha,',
    sayNamee: function() {
    console.log(this.name);
    }
};
person.sayNamee()



    const personn = {
    name: 'John',
    sayName: () => {
    console.log(this.name);
    }
};
  person.sayName(); 