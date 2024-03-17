import connect from '../index.js';
import Com from '@schema/comSchema.js';


export async function getComData() {
    try {
        await connect();
        const data = await Com.find();
        console.log('com.js get method Com data:', data);
        return {data:data};
       
    } catch (error) {
        console.error('IN com.js Error fetching com dataaa:', error);
        return [];
    } 
}
export async function postComData(data) {
    try {
        await connect();
        const dat= await data;
        console.log('com.js Com data:', dat);
        const res = await Com.create(dat);
        console.log('Com.js com data:', res);
        return {data:res, message:"Success!"};
       
    } catch (error) {
        console.error('IN com.js Error posting Com dataaa:', error);
        return [];
    } 
}
export async function delComData(dataa) {
    try {
        await connect();
        const qry= await dataa;
        const data = await Com.deleteOne(qry);
        console.log('com.js Com data:', data);
        return {data:data};
       
    } catch (error) {
        console.error('IN com.js Error fetching Com dataaa:', error);
        return [];
    } 
}
