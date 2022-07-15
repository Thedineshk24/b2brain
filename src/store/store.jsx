import create from "zustand";

const useStore = create((set) => ({
  result: [],
  isLoading: false,
  setResultData: (data) => set((state) => ({ result: data })),
  handleClear: () => set((state) => ({ result: [] })),
  setIsLoading: (loading) => set((state) => ({ isLoading: loading })),
}))

export default useStore;