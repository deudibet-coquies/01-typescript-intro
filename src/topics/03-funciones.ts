

// function addName(a:number,b:number){
//     return (a+b);
// }
// const resultado = addName(1,2)

// const suma = (a:number,b:number): string =>  {
//     return `${a + b}` 
// }
// const resultado2 = suma(1,2)



interface ICuality{
    name: string,
    hp: number,
    shopHP: () => void
}


const healCharacter = (character:ICuality, acount:number ) =>  {
  character.hp += acount;
}

const strider:ICuality = {
    name: "emilio",
    hp: 50,
    shopHP() {
        console.log(`puntos de vida ${this.hp}`);
    }
} 
healCharacter( strider , 10);
healCharacter( strider , 30);
strider.shopHP();

//console.log({resultado,resultado2});


export {};