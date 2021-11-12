import { useState, useCallback, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import cx from 'classnames';
import DropArrowIcon from 'components/icons/DropArrowIcon';
import useOnClickOutside from 'utils/use-on-click-outside';

import {
  DropdownWrapper,
  Options,
  List,
  ListItem,
  Label,
} from './dropdown.style';

const Dropdown = ({ options, label = 'Sort by:' }) => {
  const [state, setState] = useState(false);
  const [val, setValue] = useState(
    options.length > 0
      ? options[0]
      : {
          value: { orderBy: '', sortedBy: '' },
          name: '',
        }
  );
  const ref = useRef();
  const router = useRouter();
  const { query, pathname } = router;

  useEffect(() => {
    const { ...rest } = query;
    if (val.value.name !== '') {
      router.push(
        {
          pathname,
          query: { ...rest, ...val.value },
        },
        null,
        { scroll: false }
      );
    }
  }, [val.value]);

  const handleToggle = useCallback((e) => {
    e.stopPropagation();
    setState((r) => !r);
  }, []);

  useOnClickOutside(ref, () => setState(() => false));

  return (
    <DropdownWrapper ref={ref}>
      <Options
        className={cx({
          ['open']: state,
        })}
        onClick={handleToggle}>
        <Label>
          {label} <span>{val.name}</span>
        </Label>
        <DropArrowIcon />
        {state && (
          <List>
            {options.length > 0 &&
              options.map((item) => (
                <ListItem
                  className={cx({ ['active']: val.name === item.name })}
                  onClick={() => setValue(item)}
                  key={item.value}>
                  {item.name}
                </ListItem>
              ))}
          </List>
        )}
      </Options>
    </DropdownWrapper>
  );
};

export default Dropdown;
