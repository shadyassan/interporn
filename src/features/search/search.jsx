import { useState } from 'react';
import { SearchBox } from 'components/search-box/search-box';
import { useUI } from 'contexts/ui.context';
import { useRouter } from 'next/router';
import { CATALOG_PAGE } from 'site-settings/site-navigation';

const Search = ({ onSubmit, ...props }) => {
  const { searchTerm, setSearchTerm } = useUI();
  const [toggle, setToggle] = useState(false);
  const router = useRouter();

  const handleOnChange = (e) => {
    const { value } = e.target;
    setSearchTerm(value);
  };

  const onSearch = (e) => {
    e.preventDefault();
    const { ...rest } = router.query;
    router.push({
      pathname: CATALOG_PAGE,
      query: {
        ...rest,
        search: `title:${searchTerm};description:${searchTerm}`,
      },
    });
    setSearchTerm('');
    setToggle(false);
    if (onSubmit) {
      onSubmit();
    }
  };

  return (
    <SearchBox
      onEnter={onSearch}
      onChange={handleOnChange}
      value={searchTerm}
      name="search"
      state={[toggle, setToggle]}
      placeholder="Search for shows"
      {...props}
    />
  );
};

export default Search;
