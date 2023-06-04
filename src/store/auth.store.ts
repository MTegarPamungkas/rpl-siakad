import { User } from 'firebase/auth';
import { create } from 'zustand';

interface AuthState {
	isLoading: boolean;
	error: string;
	user: User;
	setLoading: (bool: boolean) => void;
	setError: (err: string) => void;
	setUser: (user: User) => void;
}

export const useAuthStore = create<AuthState>()(set => ({
	isLoading: false,
	error: '',
	user: {} as User,
	setLoading: (bool: boolean) => set(state => ({ ...state, isLoading: bool })),
	setError: (err: string) => set(state => ({ ...state, error: err })),
	setUser: (user: User) => set(state => ({ ...state, user: user })),
}));


interface UserState {
	isLoading: boolean;
	error: string;
	userDetail: any;
	role: string;
	kelas: string;
	setLoading: (bool: boolean) => void;
	setError: (err: string) => void;
	setUserDetail: (userDetail: any) => void;
	setRole: (role: string) => void;
	setKelas: (kelas: string) => void;

}

export const useUserStore = create<UserState>()(set => ({
	isLoading: false,
	error: '',
	userDetail: [],
	role: '',
	kelas:'',
	setLoading: (bool: boolean) => set(state => ({ ...state, isLoading: bool })),
	setError: (err: string) => set(state => ({ ...state, error: err })),
	setUserDetail: (userDetail: any) => set(state => ({ ...state, userDetail: userDetail })),
	setRole: (role: string) => set(state => ({ ...state, role: role })),
	setKelas: (kelas: string) => set(state => ({ ...state, kelas: kelas })),
}));

