import PostModel from "../../../models/postModel";
import connectMongo from "../../../utils/connectMongo";

export async function GET() {
  try {
    await connectMongo();
    const postData = await PostModel.find({});
    return Response.json(postData);
  } catch (error) {
    return Response.json({ message: error.message });
  }
}
