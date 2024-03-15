import { NextResponse,NextRequest } from "next/server";
import {getAdminData,postAdminData} from '@lib/mongo/admin';
export async function GET(){
    try{
        const {data,err} = await getAdminData();
        if(err){
            throw new Error(err);
        }
        return NextResponse.json({
            data: data,
            message: "Hello",
        });
    }catch(error){
        console.log('Error fetching admin dataaa:', error);
        return NextResponse.json({
            data: [],
            error: error,
            message: "Error fetching admin data",
        });
    }
}
export async function POST(req,res){
    try{
        //console.log(await req.json());
        let dataa = await req.json();
        console.log(dataa);
        const {data,err} = await postAdminData(dataa);
        if(err){
            throw new Error(err);
        }
        return NextResponse.json({
            data: data,
            message: "Success!",
        });
    }catch(error){
        console.log('Error fetching admin dataaa:', error);
        return NextResponse.json({
            data: [],
            error: error,
            message: "Error posting admin data",
        });
    }
}