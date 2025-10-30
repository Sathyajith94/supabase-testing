import { createClient } from '@supabase/supabase-js';
import dotenv from "dotenv";
dotenv.config();

const supabaseURl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_KEY;
const supabaseClientOptions = {
    auth: {
        autoRefreshToken: false,
        persistSession: false,
        detectSessionInUrl: false
    }
};
export const supabase = createClient(supabaseURl, supabaseKey, supabaseClientOptions);

/*
* By default, the supabase client sets persistSession to true and attempts to store the session in local storage.
* When using the supabase client in an environment that doesn't support local storage, you might notice the following warning message being logged:
* No storage option exists to persist the session, which may result in unexpected behavior when using auth.
* If you want to set persistSession to true, please provide a storage option or you may set persistSession to false to disable this warning.
* This warning message can be safely ignored if you're not using auth on the server-side.
* If you are using auth and you want to set persistSession to true, you will need to provide a custom storage implementation that follows this interface.
 */