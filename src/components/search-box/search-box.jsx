import { useRef, useCallback } from 'react';
import { useWindowSize } from 'utils/use-window-size';
import { useUI } from 'contexts/ui.context';

import {
  StyledForm,
  StyledInput,
  StyledSearchButton,
} from './search-box.style';

import CloseIcon from 'components/icons/CloseIcon';
import SearchIcon from 'components/icons/SearchIcon';

export const SearchBox = ({
  onEnter,
  onChange,
  value,
  name,
  state,
  className,
  ...rest
}) => {
  const inputRef = useRef();
  const { openModal, openSearch } = useUI();
  const [toggle, setToggle] = state;
  const {isMobile} = useWindowSize(1281);

  const toggleSearch = useCallback(() => {
    setToggle((p) => !p);
    inputRef.current.focus();
  }, []);

  const openSearchHandler = () => {
    openSearch();
    openModal();
  };

  return (
    <StyledForm
      mobileView={isMobile}
      toggle={toggle}
      onSubmit={onEnter}
      className={className}>
      <StyledInput
        type="text"
        onChange={onChange}
        value={value}
        name={name}
        ref={inputRef}
        {...rest}
      />
      {isMobile ? (
        <StyledSearchButton onClick={openSearchHandler}>
          <SearchIcon />
        </StyledSearchButton>
      ) : (
        <StyledSearchButton onClick={toggleSearch}>
          {toggle ? <CloseIcon /> : <SearchIcon />}
        </StyledSearchButton>
      )}
    </StyledForm>
  );
};
