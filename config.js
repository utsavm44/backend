import dotenv from "dotenv";

dotenv.config();

export default {
  PORT: process.env.PORT || 5000,
  MONGODB_URL:
    process.env.MONGODB_URL ||
    "mongodb+srv://medcure:ElSb9rHX77PEiQjP@medicine.cr0qk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  JWT_SECRET: process.env.JWT_SECRET || "somethingsecret",
  PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID || "sb",
  accessKeyId: process.env.accessKeyId || "accessKeyId",
  secretAccessKey: process.env.secretAccessKey || "secretAccessKey",
};
