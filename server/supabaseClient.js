import dotenv from 'dotenv'
dotenv.config()

import { createClient } from "@supabase/supabase-js";

const supabase = createClient(process.env.PROJECT_URL, process.env.SERVICE_ROLE_KEY);

export default supabase;