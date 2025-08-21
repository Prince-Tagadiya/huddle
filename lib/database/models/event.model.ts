import { Document, Schema, model, models, Types } from "mongoose";

export interface IEvent extends Document {
  _id: string;
  title: string;
  description?: string;
  location?: string;
  createdAt: Date;
  imageUrl: string;
  startDateTime: Date;
  endDateTime: Date;
  price?: string;
  isFree: boolean;
  url?: string;
  category: Types.ObjectId | { _id: string; name: string };
  organizer: Types.ObjectId | { _id: string; firstName: string; lastName: string };
}

const EventSchema = new Schema<IEvent>({
  title: { type: String, required: true },
  description: { type: String },
  location: { type: String },
  createdAt: { type: Date, default: Date.now },
  imageUrl: { type: String, required: true },
  startDateTime: { type: Date, required: true },
  endDateTime: { type: Date, required: true },
  price: { type: String },
  isFree: { type: Boolean, default: false },
  url: { type: String },
  category: { type: Schema.Types.ObjectId, ref: "Category", required: true },
  organizer: { type: Schema.Types.ObjectId, ref: "User", required: true },
});

const Event = models.Event || model<IEvent>("Event", EventSchema);

export default Event;
