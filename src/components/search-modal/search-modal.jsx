import { useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useUI } from 'contexts/ui.context';
import { Input } from 'components/common/form/input';
import { CATALOG_PAGE } from 'site-settings/site-navigation';
import { StyledForm, StyledButton } from './search-modal.style';

import SearchIcon from 'components/icons/SearchIcon';

const SearchModal = () => {
  const { searchTerm, setSearchTerm, closeModal } = useUI();
  const inputRef = useRef();
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
      query: { ...rest, search: searchTerm },
    });
    setSearchTerm('');
    closeModal();
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <StyledForm onSubmit={onSearch}>
      <Input
        type="text"
        name="search"
        ref={inputRef}
        placeholder="Search for shows"
        value={searchTerm}
        onChange={handleOnChange}
      />
      <StyledButton>
        <SearchIcon />
      </StyledButton>
    </StyledForm>
  );
};

export default SearchModal;
