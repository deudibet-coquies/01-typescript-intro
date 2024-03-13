

export interface Product {
    descrip: string,
    price: number
}

interface TasCalculator {
    tax: number,
    products: Product[]
}

const phone: Product = {
    descrip: "moto g",
    price: 2000
}

const table: Product = {
    descrip: "moto g table",
    price: 2500
}


export function tasCalculator(options: TasCalculator): [number, number] 
{

    const { products, tax }= options 

  let total = 0;
  products.forEach(({ price }) => {
     total += price
  });

  return [total, total * tax]
}

const soppingCard = [phone,table]
const tab = 0.05

const [total, totalTax] = tasCalculator(
{   products:soppingCard,
    tax:tab
})

//console.log('resultado',total);
// console.log('resultado2',totalTax);
