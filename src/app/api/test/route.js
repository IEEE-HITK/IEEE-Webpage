import { NextResponse,NextRequest } from "next/server";
import {getTestData,postTestData,delTestData} from '@cont/testimonial';
export async function GET(){
    try{
        const {data,err} = await getTestData();
        if(err){
            throw new Error(err);
        }
        return NextResponse.json({
            data: data,
            message: "Hello",
        });
    }catch(error){
        console.log('Error fetching testimonial dataaa:', error);
        return NextResponse.json({
            data: [],
            error: error,
            message: "Error fetching testimonial data",
        });
    }
}
export async function POST(req,res){
    try{
        //console.log(await req.json());
        let dataa = await req.json();
        console.log(dataa);
        const {data,err} = await postTestData(dataa);
        if(err){
            throw new Error(err);
        }
        return NextResponse.json({
            data: data,
            message: "Success!",
        });
    }catch(error){
        console.log('Error fetching testimonial dataaa:', error);
        return NextResponse.json({
            data: [],
            error: error,
            message: "Error posting testimonial data",
        });
    }
}

export async function DELETE(req,res){
    try{
        //console.log(await req.json());
        let dataa = await req.json();
        console.log(dataa);
        const {data,err} = await delTestData(dataa);
        if(err){
            throw new Error(err);
        }
        return NextResponse.json({
            data: data,
            message: "Success!",
        });
    }catch(error){
        console.log('Error fetching testimonial dataaa:', error);
        return NextResponse.json({
            data: [],
            error: error,
            message: "Error posting testimonial data",
        });
    }
}