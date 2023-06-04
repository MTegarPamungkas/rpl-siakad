import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, User } from 'firebase/auth';
import { getDocs } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import UserDataService from "../service/user";
import { useAuthStore, useUserStore } from '../store/auth.store';

const useAuth = () => {
	const { user, setUser, isLoading, setLoading, error, setError } = useAuthStore();
	const {userDetail, setUserDetail, setRole, setKelas } = useUserStore();
	const navigate = useNavigate();

	const signUp = async (email: string, password: string) => {
		setLoading(true);
		await createUserWithEmailAndPassword(auth, email, password)
			.then(res => {
				// navigate('/');
				setUser(res.user);
			})
			.catch(error => {
				const result = error as Error;
				setError(result.message);
			})
			.finally(() => setLoading(false));
	};

	const signIn = async (email: string, password: string) => {
		setLoading(true);
		await signInWithEmailAndPassword(auth, email, password)
			.then(res => {
				navigate('/');
				setUser(res.user);
			})
			.catch(error => {
				const result = error as Error;
				setError(result.message);
			})
			.finally(() => setLoading(false));
	};

	const logout = () => {
		setLoading(true);

		signOut(auth)
			.then(() => {
				setUser({} as User);
				navigate('/auth');
				setRole('')
				setUserDetail([])
			})
			.catch(err => {
				const result = err as Error;
				setError(result.message);
			})
			.finally(() => setLoading(false));
	};

	const getUserByEmail = async (email: string) => {
		const data = await UserDataService.getUserEmail(email);
		const doc_refs = await getDocs(data);
		const res: {
			[x: string]: string; userDetail: string 
			}[] = [];
	
		doc_refs.forEach((user) => {
		  res.push({
			userDetail: user.id,
			...user.data(),
		  });
		});
	
		setUserDetail(res);
		res.forEach((user) => {
			setRole(user.role)
			setKelas(user.kelas)
		});
		return res;
	  };

	return { getUserByEmail, signIn, signUp, logout, isLoading, error };
};

export default useAuth;
