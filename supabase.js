import { createClient } from '@supabase/supabase-js';
import dotenv from "dotenv";
dotenv.config();

const supabaseURl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY;
const supabaseClientOptions = {
    auth: { autoRefreshToken: false, persistSession: false }
};
export const supabase = createClient(supabaseURl, supabaseKey, supabaseClientOptions);