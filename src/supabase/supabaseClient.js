import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.REACT_APP_PROJECT_URL;
const supabaseApiKey = process.env.REACT_APP_API_KEY;

const supabase = createClient(supabaseUrl, supabaseApiKey);

export default supabase;
