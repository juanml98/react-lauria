import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where, addDoc } from 'firebase/firestore'


const firebaseConfig = { 
  apiKey: "AIzaSyDLAS3b-E_6WREte_8dQ0mX30nDCEcgCBk",
  authDomain: "react-34815lauria.firebaseapp.com",
  projectId: "react-34815lauria",
  storageBucket: "react-34815lauria.appspot.com",
  messagingSenderId: "610687484620",
  appId: "1:610687484620:web:818e6463e7464b80a93869",
  measurementId: "G-YLJZ0DCNGD"
};

const app = initializeApp(firebaseConfig);
const DB = getFirestore(app);

export default async function getItems() {
   
  const colectionProductsRef = collection(DB, "products");
  const documentSnapshot = await getDocs(colectionProductsRef);

  const documentsData = documentSnapshot.docs.map((doc) => {
      
    return {
      ...doc.data(),
      id: doc.id,
    };
  });

  return documentsData;
  
};

export async function getItemById(id){
  const docRef = doc(DB, "products", id);
 
  const docSnapshot = await getDoc(docRef);

  return {
    ...docSnapshot.data(),
    id: docSnapshot.id
  }
};

export async function getItemsByCategory(category){
  const collectionRef = collection(DB, "products");

  const queryCat = query(collectionRef, where("category", "==",category))
  
  const documentSnapshot = await getDocs(queryCat);

  const documentsData = documentSnapshot.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });

  return documentsData;
}

export async function createOrder(order){
  
  const collectionRef = collection(DB, "orden creada")
  
  const docOrder = await addDoc(collectionRef, order)
  console.log(docOrder.id);
  return docOrder.id;
}

/* export async function exportArrayToFirestore(){
  const products = [
    {
        "id": 1,
        "title": "iPhone 11",
        "price": 3400,
        "category": "iPhone",
        "detalle":"Capacidad: 128GB. Pantalla liquid Retina HD. Chip A13 Bionic. Sistema de cámara dual de 12 Mpx con gran angular y ultra gran angular.",
        "stock": 8,
        "img": "https://www.tradeinn.com/f/13735/137354156/apple-iphone-11-128gb-6.1.jpg"
      }, 
      {
        "id": 2,
        "title": "iPhone X",
        "price": 2400,
        "category": "iPhone",
        "detalle":"Capacidad: 128GB. Pantalla Super Retina HD. Cámara dual de 12 Mpx con gran angular y teleobjetivo. ídeo a cámara lenta en 1080p a 120 o 240 f/s.",
        "stock": 5,
        "img": "https://bdt.computerhoy.com/sites/default/files/iphone-x-apple.png"
      }, 
      {
        "id": 3,
        "title": "iPhone 8",
        "price": 1800,
        "category": "iPhone",
        "discount":20,
        "detalle":"Capacidad: 64GB. Pantalla widescreen LCD Multi-Touch de 4.7 pulgadas con tecnología IPS. Sistema de cámara única de 12 MP: gran angular. Grabación de video 4K.",
        "stock": 12,
        "img": "https://http2.mlstatic.com/D_NQ_NP_770422-MLA50638694136_072022-V.jpg"
      }, 
      {
        "id": 4,
        "title": "iPhone XS",
        "price": 2800,
        "category": "iPhone",
        "detalle":"Capacidad: 64GB. Pantalla OLED Multi-Touch de 5.8 pulgadas. Chip A12 Bionic. Modo Retrato con bokeh avanzado y Control de Profundidad.",
        "stock": 8,
        "img": "https://todoapplecaba.com.ar/wp-content/uploads/2021/05/SwappieXsSpacegray-1-1-1.jpg"
      }, 
      {
        "id": 5,
        "title": "iPhone 12",
        "price": 3900,
        "category": "iPhone",
        "discount":15,
        "detalle":"Capacidad: 128GB. Pantalla Super Retina XDR. Sistema de dos cámaras de 12 MP. Grabación de video HDR en Dolby Vision hasta 4K a 30 cps.",
        "stock": 3,
        "img": "https://www.mylshop.com.ar/wp-content/uploads/2022/03/apple-iphone-12-128gb-verde.jpg"
      }, 
      {
        "id": 6,
        "title": "iPhone 13",
        "price": 4500,
        "category": "iPhone",
        "detalle":"Capacidad: 128GB. Pantalla OLED de 5.4 pulgadas. CPU de 6 núcleos. Sistema de dos cámaras de 12 MP: gran angular y ultra gran angular. Gran angular: apertura de ƒ/1.6",
        "stock": 15,
        "img": "https://buytek.net/wp-content/uploads/2021/10/iphone-13.8.jpg"
      }, 
      {
        "id": 7,
        "title": "iPhone 13 Pro Max",
        "price": 4900,
        "category": "iPhone",
        "detalle":"Capacidad: 128GB. Pantalla Super Retina XDR con ProMotion. Resolución de 2778 x 1284 pixeles a 458 ppi. Sistema de cámaras Pro de 12 MP: teleobjetivo, gran angular y ultra gran angular.",
        "stock": 17,
        "img": "https://www.tiendaip.com.ar/img/fotos/204621-Iphone-13-Pro.3.jpg"
      }, 
      {
        "id": 8,
        "title": "iPhone 14",
        "price": 5600,
        "category": "iPhone",
        "detalle":"Capacidad: 128 y 256GB. Resistencia a las salpicaduras, al agua y al polvo. Chip A16 Bionic. Face ID. Gran angular de 48 MP: 24 mm, apertura de ƒ/1.78.",
        "stock": 16,
        "img": "https://http2.mlstatic.com/D_NQ_NP_773845-MLA52104872125_102022-V.jpg"
      }, 
      {
        "id": 9,
        "title": "iPhone 6s",
        "price": 900,
        "category": "iPhone",
        "detalle":"Capacidad: 32GB. Pantalla Retina HD con 3D Touch. Resolución de 1334 x 750 pixeles a 326 ppi.",
        "stock": 18,
        "img": "https://http2.mlstatic.com/D_NQ_NP_948988-MLA47839516220_102021-V.jpg"
      }, 
      {
        "id": 10,
        "title": "iPhone 7 Plus",
        "price": 1200,
        "category": "iPhone",
        "discount":15,
        "detalle":"Capacidad: 64GB. Pantalla Retina HD. Cámara dual de 12 Mpx con gran angular y teleobjetivo. Grabación de vídeo en 4K a 30 f/s.",
        "stock": 11,
        "img": "https://http2.mlstatic.com/D_NQ_NP_823783-MLA31182385788_062019-O.jpg"
      }, 
      {
        "id": 11,
        "title": "iPhone XR",
        "price": 2300,
        "category": "iPhone",
        "detalle":"Capacidad: 128GB. Pantalla LCD Multi-Touch de 6.1 pulgadas. Resolución de 1792 x 828 pixeles a 326 ppi. Face ID.",
        "stock": 20,
        "img": "https://www.apple.com/newsroom/images/product/iphone/standard/iPhone_XR_red-back_09122018_carousel.jpg.large.jpg"
      }, 
      {
        "id": 12,
        "title": "iPad 10",
        "price": 2400,
        "category": "iPad",
        "detalle":"Capacidad: 128GB. Pantalla. 10.2″ Pantalla Retina. Chip A13 Bionic, Cámara gran angular de 8 MP.",
        "stock": 1,
        "img": "https://www.macstation.com.ar/img/productos/2569-1.jpg"
      }, 
      {
        "id": 13,
        "title": "Apple Watch",
        "price": 2000,
        "category": "accesorios",
        "discount":20,
        "detalle":"GPS, brújula y altímetro siempre activo. Sensor óptico de frecuencia cardiaca de tercera generación. Resistente al agua hasta 50 metros.",
        "stock": 4,
        "img": "https://http2.mlstatic.com/D_NQ_NP_680367-MLA46346545059_062021-V.jpg"
      }, 
      {
        "id": 14,
        "title": "iPad Pro 12",
        "price": 3400,
        "category": "iPad",
        "detalle":" Capacidad: 256GB. Pantalla Liquid Retina, Gran angular: 12 MP y apertura de ƒ/1.8. HDR Inteligente para fotos. Face ID",
        "stock": 7,
        "img": "https://www.macstation.com.ar/img/productos/2915-2698-2.jpg"
      }, 
      {
        "id": 15,
        "title": "iPad Pro 11",
        "category": "iPad",
        "detalle":"Capacidad: 256GB. Pantalla Multi Touch de 11 pulgadas. Resolución de 2388 x 1668 a 264 pixeles por pulgada.",
        "price": 3200,
        "stock": 12,
        "img": "https://http2.mlstatic.com/D_NQ_NP_959904-MLA46639990306_072021-O.jpg"
      }
    ];

  const collectionRef = collection (DB, "products");

  for (let i of products ){
    let docOrder = await addDoc(collectionRef, i)
    console.log("documento hecho", docOrder.id)
  }

}*/


