import { createContext, ReactNode, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import useBerita from "../hooks/useBerita";
import { useBeritaStore } from "../store/berita.store";

export interface BeritaContextState {
  berita: any;
  isLoading: boolean;
}

export const BeritaContext = createContext<BeritaContextState>({
  isLoading: false,
  berita: [],
});

export const BeritaProvider = ({ children }: { children: ReactNode }) => {
  const [initialLoader, setInitialLoader] = useState<boolean>(true);
  const { berita, isLoading, setBerita, setLoading } = useBeritaStore();
  const { getBerita } = useBerita();
  const navigate = useNavigate();

  const value = useMemo(
    () => ({
      berita,
      isLoading,
    }),
    [berita, isLoading]
  );

  useEffect(() => {
    getBerita();
    setInitialLoader(false);
    setLoading(false);
  }, []);

  return (
    <BeritaContext.Provider value={value}>
      {initialLoader ? "" : children}
    </BeritaContext.Provider>
  );
};
