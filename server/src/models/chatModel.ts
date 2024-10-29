import mongoose, { Schema, Model,Document } from "mongoose";

export interface ChatItem extends Document {
    sentBy: string;
    message: string;
}

const chatSchema: Schema = new Schema(
    {
        sentBy: {
            type: String,
            required: true,
            unique: true
        },
        message: {
            type: String,
            required: true,
            unique: true
        },
    },
    {
        timestamps: true
    }
);

const ChatModel: Model<ChatItem> = mongoose.model<ChatItem>('Chat', chatSchema);

export default ChatModel;