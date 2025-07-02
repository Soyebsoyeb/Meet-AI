import { SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react"; // Add this import

import { useMeetingsFilters } from "../../hooks/use-meetings-filters";





export const MeetingsSearchFilter = () => {

  const [filters, setFilters] = useMeetingsFilters();
  const [searchValue, setSearchValue] = useState(filters.search || ""); // Local state

  // Sync local state with URL params
  useEffect(() => {
    setSearchValue(filters.search || "");
  }, [filters.search]);

  // Debounced update to URL
  useEffect(() => {
    const timer = setTimeout(() => {
      setFilters({ ...filters, search: searchValue, page: 1 }); // Reset to page 1 when searching
    }, 300);

    return () => clearTimeout(timer);
  }, [searchValue]);

  return (
    <div className="relative">
      <Input
        placeholder="Filter by name"
        className="h-9 bg-white w-[200px] pl-9"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <SearchIcon className="size-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
    </div>
  );
};
