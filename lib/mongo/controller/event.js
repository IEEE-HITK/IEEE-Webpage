import connect from '../index.js';
import Event from '@schema/eventSchema.js';


export async function getEventData() {
    try {
        await connect();
        const data = await Event.find();
        console.log('event.js get method Event data:', data);
        return {data:data};
       
    } catch (error) {
        console.error('IN event.js Error fetching test dataaa:', error);
        return [];
    } 
}
export async function postEventData(data) {
    try {
        await connect();
        const dat= await data;
        
        console.log('event.js Event data:', dat);
        const res = await Event.create(dat);
        console.log('Event.js Test data:', res);
        return {data:res, message:"Success!"};
       
    } catch (error) {
        console.error('IN event.js Error posting Event dataaa:', error);
        return [];
    } 
}
export async function delEventData(dataa) {
    try {
        await connect();
        const qry= await dataa;
        const data = await Event.deleteOne(qry);
        console.log('event.js Event data:', data);
        return {data:data};
       
    } catch (error) {
        console.error('IN event.js Error fetching Event dataaa:', error);
        return [];
    } 
}
export async function putEventData(dataa) {
    try {
        await connect();
        const qry= await dataa;
        const data = await Event.updateOne({Name:qry.Name},{$set:{EventGallery:qry.EventGallery}});
        console.log('event.js Event data:', data);
        return {data:data};
    } catch (error) {
         console.error('IN event.js Error fetching Event dataaa:', error);
        return [];   
        }

}