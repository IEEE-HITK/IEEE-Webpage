import { NextResponse,NextRequest } from "next/server";
import {getComData,postComData,delComData} from '@cont/com';
export async function GET(){
    try{
        const {data,err} = await getComData();
        if(err){
            throw new Error(err);
        }
        return NextResponse.json({
            data: data,
            message: "Hello",
        });
    }catch(error){
        console.log('Error fetching Com dataaa:', error);
        return NextResponse.json({
            data: [],
            error: error,
            message: "Error fetching Com data",
        });
    }
}
export async function POST(req,res){
    try{
        //console.log(await req.json());
        let dataa = await req.json();
        console.log(dataa);
        const {data,err} = await postComData(dataa);
        if(err){
            throw new Error(err);
        }
        return NextResponse.json({
            data: data,
            message: "Success!",
        });
    }catch(error){
        console.log('Error fetching Com dataaa:', error);
        return NextResponse.json({
            data: [],
            error: error,
            message: "Error posting Com data",
        });
    }
}

export async function DELETE(req,res){
    try{
        //console.log(await req.json());
        let dataa = await req.json();
        console.log(dataa);
        const {data,err} = await delComData(dataa);
        if(err){
            throw new Error(err);
        }
        return NextResponse.json({
            data: data,
            message: "Success!",
        });
    }catch(error){
        console.log('Error fetching Com dataaa:', error);
        return NextResponse.json({
            data: [],
            error: error,
            message: "Error posting Com data",
        });
    }
}