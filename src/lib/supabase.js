import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://bceufurrruwukbvwtzsj.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJjZXVmdXJycnV3dWtidnd0enNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM5MjgyODIsImV4cCI6MjA5OTUwNDI4Mn0.FDvn1mFlv5ii2ON40aXaH4iK2d16ov4Jol2C4LY9-oU"
export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
);

