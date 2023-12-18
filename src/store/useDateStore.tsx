// useDateStore.ts
import { createContext, useContext } from 'react';
import DateStore from './DateStore';

const DateStoreContext = createContext<DateStore | null>(null);

export const DateStoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const store = new DateStore();
  return (
    <DateStoreContext.Provider value={store}>
      {children}
    </DateStoreContext.Provider>
  );
};

export const useDateStore = () => {
  const store = useContext(DateStoreContext);
  if (!store) {
    throw new Error('useDateStore must be used within a DateStoreProvider');
  }
  return store;
};
