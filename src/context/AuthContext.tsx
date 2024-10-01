// src/context/AuthContext.tsx
import React, { createContext, useState, useContext, useEffect, useCallback, ReactNode } from 'react';
import { useRouter } from 'next/router';
import { createClient, User as SupabaseUser } from '@supabase/supabase-js';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://mmrztyzajrvcakmkfkqr.supabase.co/rest/v1/';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

console.log('Supabase URL:', supabaseUrl);
console.log('Supabase Anon Key:', supabaseAnonKey);

const supabase = createClient(supabaseUrl, supabaseAnonKey);

interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (token: string) => Promise<void>;
  logout: () => void;
  register: (email: string, password: string, name: string) => Promise<{ message: string }>;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        setUser({
          id: session.user.id,
          email: session.user.email || '',
          name: session.user.user_metadata.name || '',
          avatar: session.user.user_metadata.avatar_url,
        });
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const logout = async () => {
    await supabase.auth.signOut();
    router.push('/login');
  };
  const login = async (token: string) => {
    // Implement login logic here
    // For example:
    // await supabase.auth.signInWithToken(token);
  };

  const register = async (email: string, password: string, name: string) => {
    // Implement register logic here
    // For example:
    // const { data, error } = await supabase.auth.signUp({
    //   email,
    //   password,
    //   options: {
    //     data: { name }
    //   }
    // });
    // if (error) throw error;
    return { message: 'Registration successful' };
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};