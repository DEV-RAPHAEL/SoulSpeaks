import { connectToDB } from "@utils/database";
import Declaration from "@models/declaration";

export const GET = async (request) => {
    try {
        await connectToDB();

        const declarations = await Declaration.find({}).populate('creator');

        return new Response(JSON.stringify(declarations), {
            status : 200 
        })
    } catch (error) {
        return new Response("Failed to Fetch Declarations", { status : 500 })   
    }
}