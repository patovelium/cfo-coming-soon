import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = "https://vvgspijjrvjofomsgiwi.supabase.co"
const supabaseAnonKey = "sb_publishable_ucWhyBuE3wKSUr-kqdUbog_BYaMAE7q"

const supabase = createClient(supabaseUrl, supabaseAnonKey)

export default supabase
