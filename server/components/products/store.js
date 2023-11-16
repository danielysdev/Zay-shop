const db = require("./model.js");

async function addProduct(product) {
    const docRef = db.collection('productos');
    return await docRef.add(product);
}


async function getAllProducts(){
    const snapshot = await db.collection('productos').get();

    return snapshot.docs.map((product) =>{
        console.log(product)
        return {
            id: product.id,
            producto: product.data()
        }
    });
}
/*
 Me genera por cada uno de los productos de mi coleccion


 return {
            id: product.id,
            producto: product.data()
        }

        =

        {
            id: 2aVGEkFNPavmiKRxz2Wc,
            producto: {
                categia: "anillo"
                imagen: "https:lallala",
                nombre: "ojo",
                precio: 2
            }
        }

        product.producto.image = la imagen

*/
async function getOnlyProduct(title) {
    const productReference = db.collection('productos');
    const snapshot = await productReference.where('title', '==', title).get();
  
    if (snapshot.empty) {
      console.error('No matching!!');
      return;
    }
  
    return snapshot.docs.map((product) => {
      return {
        id: product.id,
        producto: product.data()
      }
    })
}

async function getOnlyProductByID(id) {
    const productReference = db.collection('productos').doc(`${id}`);
    const snapshot = await productReference.get();
  
    if (!snapshot.exists) {
      console.error('No matching!!');
      return;
    }
  
    return snapshot.data();
}

async function updateProduct(id, change) {
    const product = db.collection('productos').doc(id);
  
    const updateChange = await product.update(change);
  
    return updateChange;
}

async function deleteProduct(id) {
    const productDeleted = await db.collection('productos').doc(id).delete();
  
    return productDeleted;
  }
  
  module.exports = {
    add: addProduct,
    list: getAllProducts,
    only: getOnlyProduct,
    getID: getOnlyProductByID,
    update: updateProduct,
    delete: deleteProduct,
  }