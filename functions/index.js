const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

//http callable function
exports.arranque = functions.https.onCall((data, context) => {

    const info = [];

    return admin.firestore().collection('rosario').get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
            info.push(doc.data());
        });

        console.log(info);
        return info;

    }).catch(error => {
        console.log(error, error.message)
        return error.message;
    });
});

exports.masUno1 = functions.https.onCall(async (data, context) => {
    
    const ref = admin.firestore().collection('rosario').doc('T0nPrMNtvvxkD5Roj5Ac');
    const res = await ref.update({ 
        prim : admin.firestore.FieldValue.increment(1)
    });
    return '';
});

exports.masUno2 = functions.https.onCall(async (data, context) => {
    
    const ref = admin.firestore().collection('rosario').doc('T0nPrMNtvvxkD5Roj5Ac');
    const res = await ref.update({ 
        sec : admin.firestore.FieldValue.increment(1)
    });
    return '';
});

exports.masUno3 = functions.https.onCall(async (data, context) => {
    
    const ref = admin.firestore().collection('rosario').doc('T0nPrMNtvvxkD5Roj5Ac');
    const res = await ref.update({ 
        prep : admin.firestore.FieldValue.increment(1)
    });
    return '';
});

exports.masUno4 = functions.https.onCall(async (data, context) => {
    
    const ref = admin.firestore().collection('rosario').doc('T0nPrMNtvvxkD5Roj5Ac');
    const res = await ref.update({ 
        per : admin.firestore.FieldValue.increment(1)
    });
    return '';
});

exports.masUno5 = functions.https.onCall(async (data, context) => {
    
    const ref = admin.firestore().collection('rosario').doc('T0nPrMNtvvxkD5Roj5Ac');
    const res = await ref.update({ 
        fam : admin.firestore.FieldValue.increment(1)
    });
    return '';
});

