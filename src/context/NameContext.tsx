import React, { createContext, useState } from "react";

interface NameContextInterface {
  searchTerm: string;
  updateSearchTerm: (value: string) => void;
}

export const NameContext = createContext<NameContextInterface>(
  {} as NameContextInterface
);

export const NameContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [searchTerm, setSearchTerm] = useState("");

  function updateSearchTerm(value: string) {
    setSearchTerm(value);
  }

  return (
    <NameContext.Provider value={{ searchTerm, updateSearchTerm }}>
      {children}
    </NameContext.Provider>
  );
};
