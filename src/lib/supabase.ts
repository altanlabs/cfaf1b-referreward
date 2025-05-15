import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://api.altan.ai/tables/v2';
const supabaseKey = 'tenant_5e300e1c_546e_4653_a12f_450fe2721045';

export const supabase = createClient(supabaseUrl, supabaseKey);