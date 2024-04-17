const { createContext, useContext, useState } = require("react");

const loadingContext = createContext();

export const useLoadingContext = () => {
  return useContext(loadingContext);
};

export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <loadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </loadingContext.Provider>
  );
};
