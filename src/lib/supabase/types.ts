export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      courses: {
        Row: {
          id: string
          slug: string
          title: string
          tag: string
          category: string
          level: string
          duration: string
          enrollment: string
          mode: string
          accreditation: string
          credits: string
          tuition: number
          description: string
          overview: string
          outcomes: Json
          phases: Json
          created_at?: string
        }
        Insert: {
          id?: string
          slug: string
          title: string
          tag: string
          category: string
          level: string
          duration: string
          enrollment: string
          mode: string
          accreditation: string
          credits: string
          tuition: number
          description: string
          overview: string
          outcomes: Json
          phases: Json
          created_at?: string
        }
        Update: Partial<Database['public']['Tables']['courses']['Insert']>
      }
      applications: {
        Row: {
          id: string
          application_no: string
          full_name: string
          email: string
          phone: string
          country: string
          course_slug: string
          course_title: string
          statement_of_intent: string
          request_financial_aid: boolean
          current_occupation: string
          status: 'pending' | 'reviewing' | 'accepted' | 'waitlist'
          created_at: string
        }
        Insert: {
          id?: string
          application_no?: string
          full_name: string
          email: string
          phone: string
          country: string
          course_slug: string
          course_title: string
          statement_of_intent: string
          request_financial_aid?: boolean
          current_occupation?: string
          status?: 'pending' | 'reviewing' | 'accepted' | 'waitlist'
          created_at?: string
        }
        Update: Partial<Database['public']['Tables']['applications']['Insert']>
      }
      certificates: {
        Row: {
          id: string
          credential_id: string
          recipient_name: string
          course_title: string
          issue_date: string
          grade: string
          status: 'verified' | 'revoked' | 'expired'
          verification_hash: string
          accreditation_body: string
          created_at: string
        }
        Insert: {
          id?: string
          credential_id: string
          recipient_name: string
          course_title: string
          issue_date: string
          grade?: string
          status?: 'verified' | 'revoked' | 'expired'
          verification_hash: string
          accreditation_body?: string
          created_at?: string
        }
        Update: Partial<Database['public']['Tables']['certificates']['Insert']>
      }
      inquiries: {
        Row: {
          id: string
          full_name: string
          email: string
          phone: string
          subject: string
          message: string
          priority: 'low' | 'normal' | 'urgent'
          status: 'open' | 'in_progress' | 'resolved'
          created_at: string
        }
        Insert: {
          id?: string
          full_name: string
          email: string
          phone?: string
          subject: string
          message: string
          priority?: 'low' | 'normal' | 'urgent'
          status?: 'open' | 'in_progress' | 'resolved'
          created_at?: string
        }
        Update: Partial<Database['public']['Tables']['inquiries']['Insert']>
      }
      newsletter_subscribers: {
        Row: {
          id: string
          email: string
          subscribed_at: string
        }
        Insert: {
          id?: string
          email: string
          subscribed_at?: string
        }
        Update: Partial<Database['public']['Tables']['newsletter_subscribers']['Insert']>
      }
    }
  }
}
