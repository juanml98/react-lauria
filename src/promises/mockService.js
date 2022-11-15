import products from "../data/data";

const getItems = () => {
    return new Promise((resolve) =>{
        setTimeout(()=>{ 
            resolve(products)
        }, 500)
    })
}

export const getItemById = (idParam) =>{
    return new Promise ((resolve) =>{
        setTimeout(()=>{
            resolve(products.find(item => item.id === idParam))
        }, 500)
    })

}

export const getItemsByCategory = (category) =>{
    return new Promise ((resolve) =>{
        setTimeout(()=>{
            resolve(products.filter(products => products.category === category))
        }, 500)
    })
}
/* export function getItemsByCategory (category) {
    return new Promise((resolve) => {

        if (category === undefined) {
            setTimeout(()=> {
            resolve(products);
        },1000);
        }else {
            setTimeout(()=>{
                let itemRequest = products.filter(
                    (product) => product.category === category
                );
                resolve(itemRequest);
            },1000)
        }
        
    });
}

export function getItem (idParam) {
    return new Promise((resolve) => {
       
        let itemRequest = products.find((product) => product.id === idParam)
       
        setTimeout(()=> {
            resolve(itemRequest);
        }, 500);
    });
} */

export default getItems;