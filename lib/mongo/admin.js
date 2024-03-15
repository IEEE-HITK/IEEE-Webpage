import clientPromise from '.';

let client;
let db
let admin
async function init() {
    client = await clientPromise;
    db = await client.db();
    admin = await db.collection('admins');
}
;(async () => {
    await init();
    console.log("Connected to admin.js");
})();

export async function getAdminData() {
    try {
        if(!admin) await init();
        const data = await admin.find().toArray();
        console.log('admin.js Admin data:', data);
        return {data:data};
       
    } catch (error) {
        console.error('IN admin.js Error fetching admin dataaa:', error);
        return [];
    } 
}
export async function postAdminData(data) {
    try {
        if(!admin) await init();
        const dat= await data;
        console.log('admin.js Admin data:', dat);
        const res = await admin.insertOne(dat);
        console.log('admin.js Admin data:', res);
        return {data:res, message:"Success!"};
       
    } catch (error) {
        console.error('IN admin.js Error posting admin dataaa:', error);
        return [];
    } 
}
