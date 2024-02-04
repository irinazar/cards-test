import { useState } from "react";

export const useFilter = (): {
  searchQuery: string;
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
} => {
  const [searchQuery, setSearchQuery] = useState<string | "">("");
  const handleSearchChange: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    const trimmedValue = e.target.value;
    setSearchQuery(trimmedValue.length > 0 ? trimmedValue : "");
  };

  return {
    searchQuery,
    handleSearchChange,
  };
};
