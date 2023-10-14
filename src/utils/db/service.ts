import {collection, getFirestore, getDocs, query, where, getDoc, doc, addDoc, Timestamp,} from 'firebase/firestore';
import app from './firebase';
import bcrypt from 'bcrypt';


const firestore = getFirestore(app);

export async function retrieveDataById(collectionName: string, id: string){
    const snapshot = await getDoc(doc(firestore, collectionName, id));

    const data = snapshot.data();
    return data;  
}



export async function signUp(
    userData : {
        email: string,
        username: string;
        password: string;
        confirmpassword: string;

    },
    callback : Function
)   {
    const q = query(collection(firestore, "users"), where("email", "==", userData.email));
    
    const snapshot = await getDocs(q);
    const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
    }));
    if(data.length > 0){
        console.log('masuk siniii');
        console.log(userData);
        console.log(data);
        callback({status:false, message: "Email already exists"});

    }
    else{
        console.log('masuk sini');
        console.log(userData);
        
        console.log(userData);
        await addDoc(collection(firestore, "users"), userData).then(() =>{
            callback({status: true, message: "Successfully registered"});
        }).catch((error) => {
            callback({status: false, message: error});
        });
    }
}

export async function signIn(userData : {email: string}){
    const q = query(collection(firestore, "users"), where("email", "==", userData.email));
    const snapshot = await getDocs(q);
    const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
    }));
    if(data){
        return data[0];

    }else{
        return null;
    }
}


export async function createSubmissionData(
    formData : {
        judul_film: string;
        bahasa: string;
        tahun: string;
        festival: string;
        kota: string;
        penghargaan: string;
        durasi: string;
        link_film: string;
        link_cover: string;
        sinopsis: string;
        suara: string;
        nama: string;
        no_hp: string 
        alamat: string
        email: string
        kota_sutradara: string
        foto: string
        provinsi: string
        biografi: string
        gender: string
        nama_produksi: string
        alamat_produksi: string
        no_hp_produksi: string
        provinsi_produksi: string
        nama_produser: string
        no_hp_produser: string        
    },
    callback : Function
)
{
    await addDoc(collection(firestore, "submissions"), formData).then(() =>{
        callback({status: true, message: "Successfully submitted"});
    

}).catch((error) => {
    callback({status: false, message: error});
}
);
}