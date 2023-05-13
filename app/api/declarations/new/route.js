import { connectToDB } from "@utils/database";
import Declaration from "@models/declaration";

export const POST = async (req) => {
    const {userId, declaration, tag} = await req.json();

    try {
        await connectToDB();
        const newDeclaration = new Declaration({
            creator : userId, 
            declaration,
            tag 
        })
        await newDeclaration.save();
        return new Response(JSON.stringify(newDeclaration), {
            status: 201
        })
    } catch (error) {
        return new Response("Failed to create a new Declaration", {
            status:500
        })
    }
}
