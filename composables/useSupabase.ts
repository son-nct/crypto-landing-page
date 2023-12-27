import { createClient } from '@supabase/supabase-js'

export const useSupaBase = () => {
    const runtimeConfig = useRuntimeConfig()
    const supabaseUrl  = runtimeConfig.public.supabaseConfig.supabaseURL
    const supabaseAnonKey  = runtimeConfig.public.supabaseConfig.supabaseAnonKey

    const connectSupaBase = () => {
        const supabase = createClient(supabaseUrl, supabaseAnonKey)
        return supabase
    }

    const getListEmail = async () => {
        try {
            const supabase = connectSupaBase()
            const { data, error } = await supabase.from('emails').select()
            if (error) throw error
            return data
        } catch (error) {
            console.error('Error fetching emails:', error)
            return null
        }
    }

    const registerNewEmail = async (email: string) => {
        try {
            const supabase = connectSupaBase()
            const { data, error } = await supabase.from('emails').insert({
                email
            })
            if (error) throw error
            return data
        } catch (error) {
            console.error('Error fetching emails:', error)
            return null
        }
    }

    return {
        getListEmail,
        registerNewEmail
    }
}