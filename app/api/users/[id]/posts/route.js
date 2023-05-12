import { connectToDB } from "@utils/database";
import Declaration from "@models/declaration";

export const GET = async (request, { params } ) => {
    try {
        await connectToDB();

        
        const declarations = await Declaration.find({
            creator: params.id
        }).populate('creator');

        return new Response(JSON.stringify(declarations), {
            status : 200 
        })
    } catch (error) {
        return new Response("Failed to Fetch Declarations", { status : 500 })   
    }
}