import { NextResponse,NextRequest } from "next/server";
import {getEventData,postEventData,delEventData,putEventData} from '@cont/event';


export async function GET(){
    try {
        const {data,err} = await getEventData();
        if(err){
            throw new Error(err);
        }
        return NextResponse.json({
            data: data,
            message: "Hello",
        });
    } catch(error) {
        console.log('Error fetching Event dataaa:', error);
        return NextResponse.json({
            data: [],
            error: error,
            message: "Error fetching Event data",
        });
    }
}
export async function POST(req,res){
    try{
        //console.log(await req.json());
        let dataa = await req.json();
        console.log(dataa);
        const {data,err} = await postEventData(dataa);
        if(err){
            throw new Error(err);
        }
        return NextResponse.json({
            data: data,
            message: "Success!",
        });
    }catch(error){
        console.log('Error fetching Event dataaa:', error);
        return NextResponse.json({
            data: [],
            error: error,
            message: "Error posting Event data",
        });
    }
}

export async function DELETE(req,res){
    try{
        //console.log(await req.json());
        let dataa = await req.json();
        console.log(dataa);
        const {data,err} = await delEventData(dataa);
        if(err){
            throw new Error(err);
        }
        return NextResponse.json({
            data: data,
            message: "Success!",
        });
    }catch(error){
        console.log('Error fetching Event dataaa:', error);
        return NextResponse.json({
            data: [],
            error: error,
            message: "Error posting Event data",
        });
    }
}

export async function PUT(req,res){
    try{
        //console.log(await req.json());
        let dataa = await req.json();
        console.log(dataa);
        const {data,err} = await putEventData(dataa);
        if(err){
            throw new Error(err);
        }
        return NextResponse.json({
            data: data,
            message: "Success!",
        });
    }catch(error){
        console.log('Error fetching Event dataaa:', error);
        return NextResponse.json({
            data: [],
            error: error,
            message: "Error posting Event data",
        });
    }
}
