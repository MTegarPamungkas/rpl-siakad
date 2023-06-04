// import { User } from 'firebase/auth';
import { create } from 'zustand';

interface BeritaState {
	isLoading: boolean;
	error: string;
    berita: any;
	// user: User;
	setLoading: (bool: boolean) => void;
	setError: (err: string) => void;
	setBerita: (berita: any) => void;
}

interface InformasiKelasState {
	isLoading: boolean;
	error: string;
    informasiKelas: any;
	// user: User;
	setLoading: (bool: boolean) => void;
	setError: (err: string) => void;
	setInformasiKelas: (informasiKelas: any) => void;
}

interface AddBeritaState {
	isLoading: boolean;
	error: string;
    isiberita: string;
    titleberita: string;
	keteranganberita: string;
	// user: User;
	setLoading: (bool: boolean) => void;
	setError: (err: string) => void;
	setIsiBerita: (isiberita: string) => void;
	setTitleBerita: (titleberita: string) => void;
	setKeteranganBerita: (keteranganberita: string) => void;
}

interface GetBeritaState {
	isLoading: boolean;
	error: string;
	detailberita: any;
	// user: User;
	setLoading: (bool: boolean) => void;
	setError: (err: string) => void;
	setDetailBerita: (detailberita: any) => void;
	
}


export const useAddBeritaStore = create<AddBeritaState>()(set => ({
	isLoading: false,
	error: '',
    isiberita: "",
	titleberita: "",
	keteranganberita: "",
	// user: {} as User,
	setLoading: (bool: boolean) => set(state => ({ ...state, isLoading: bool })),
	setError: (err: string) => set(state => ({ ...state, error: err })),
	setIsiBerita: (isiberita: string) => set(state => ({ ...state, isiberita: isiberita })),
	setTitleBerita: (titleberita: string) => set(state => ({ ...state, titleberita: titleberita })),
	setKeteranganBerita: (keteranganberita: string) => set(state => ({ ...state, keteranganberita: keteranganberita })),
}));

export const useInformasiKelasStore = create<InformasiKelasState>()(set => ({
	isLoading: false,
	error: '',
    informasiKelas: [],
	// user: {} as User,
	setLoading: (bool: boolean) => set(state => ({ ...state, isLoading: bool })),
	setError: (err: string) => set(state => ({ ...state, error: err })),
	setInformasiKelas: (informasiKelas: string) => set(state => ({ ...state, informasiKelas: informasiKelas })),
}));


export const useGetBeritaStore = create<GetBeritaState>()(set => ({
	isLoading: false,
	error: '',
    isiberita: "",
	titleberita: "",
	keteranganberita: "",
	tanggalberita: "",
	urlberita: "",
	timestampberita: 0,
	detailberita: [],
	// user: {} as User,
	setLoading: (bool: boolean) => set(state => ({ ...state, isLoading: bool })),
	setError: (err: string) => set(state => ({ ...state, error: err })),
	setIsiBerita: (isiberita: string) => set(state => ({ ...state, isiberita: isiberita })),
	setTitleBerita: (titleberita: string) => set(state => ({ ...state, titleberita: titleberita })),
	setKeteranganBerita: (keteranganberita: string) => set(state => ({ ...state, keteranganberita: keteranganberita })),
	setTanggalBerita: (tanggalberita: string) => set(state => ({ ...state, tanggalberita: tanggalberita })),
	setUrlBerita: (urlberita: string) => set(state => ({ ...state, urlberita: urlberita })),
	setTimestampBerita: (timestampberita: number) => set(state => ({ ...state, timestampberita: timestampberita })),
	setDetailBerita: (detailberita: any) => set(state => ({ ...state, detailberita: detailberita })),
}));

export const useBeritaStore = create<BeritaState>()(set => ({
	isLoading: false,
	error: '',
    berita: [],
	// user: {} as User,
	setLoading: (bool: boolean) => set(state => ({ ...state, isLoading: bool })),
	setError: (err: string) => set(state => ({ ...state, error: err })),
	setBerita: (berita: any) => set(state => ({ ...state, berita: berita })),
}));
