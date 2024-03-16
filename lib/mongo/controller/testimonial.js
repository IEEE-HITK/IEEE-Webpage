import connect from '../index.js';
import Testimonial from '@schema/testimonialSchema.js';


export async function getTestData() {
    try {
        await connect();
        const data = await Testimonial.find();
        console.log('test.js get method Testimonial data:', data);
        return {data:data};
       
    } catch (error) {
        console.error('IN test.js Error fetching test dataaa:', error);
        return [];
    } 
}
export async function postTestData(data) {
    try {
        await connect();
        const dat= await data;
        console.log('Test.js testimonial data:', dat);
        const res = await Testimonial.create(dat);
        console.log('Testimonial.js Test data:', res);
        return {data:res, message:"Success!"};
       
    } catch (error) {
        console.error('IN test.js Error posting testimonial dataaa:', error);
        return [];
    } 
}
export async function delTestData(dataa) {
    try {
        await connect();
        const qry= await dataa;
        const data = await Testimonial.deleteOne(qry);
        console.log('test.js Testimonial data:', data);
        return {data:data};
       
    } catch (error) {
        console.error('IN test.js Error fetching testimonial dataaa:', error);
        return [];
    } 
}
