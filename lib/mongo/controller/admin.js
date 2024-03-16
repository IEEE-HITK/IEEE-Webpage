import connect from '../index.js';
import Admin from '@schema/adminSchema.js';


export async function getAdminData() {
    try {
        await connect();
        const data = await Admin.find();
        console.log('admin.js Admin data:', data);
        return {data:data};
       
    } catch (error) {
        console.error('IN admin.js Error fetching admin dataaa:', error);
        return [];
    } 
}
export async function postAdminData(data) {
    try {
        await connect();
        const dat= await data;
        console.log('admin.js Admin data:', dat);
        const res = await Admin.create(dat);
        console.log('admin.js Admin data:', res);
        return {data:res, message:"Success!"};
       
    } catch (error) {
        console.error('IN admin.js Error posting admin dataaa:', error);
        return [];
    } 
}
export async function delAdminData(dataa) {
    try {
        await connect();
        const qry= await dataa;
        const data = await Admin.deleteOne(qry);
        console.log('admin.js Admin data:', data);
        return {data:data};
       
    } catch (error) {
        console.error('IN admin.js Error fetching admin dataaa:', error);
        return [];
    } 
}
