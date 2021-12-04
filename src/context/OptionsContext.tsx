import React, { createContext, useState } from "react";

type singleOption = {
  label: string;
  value: string;
};

interface OptionsContextInterface {
  option: singleOption;
  setNewOption: (item: singleOption) => void;
  options: singleOption[];
}

export const OptionsContext = createContext<OptionsContextInterface>(
  {} as OptionsContextInterface
);

const options = [
  { label: "stars", value: "STARGAZERS" },
  { label: "last updated", value: "UPDATED_AT" },
];

export const OptionsContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [option, setOptions] = useState(options[0]);

  function setNewOption(item: singleOption) {
    setOptions(item);
  }

  return (
    <OptionsContext.Provider value={{ option, setNewOption, options }}>
      {children}
    </OptionsContext.Provider>
  );
};
