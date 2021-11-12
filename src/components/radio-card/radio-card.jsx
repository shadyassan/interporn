import cx from 'classnames';
import { CardWrapper, CardTitle } from './radio-card.style';

const RadioCard = ({ id, name, title, disabled, checked, onChange }) => {
  return (
    <CardWrapper
      htmlFor={`${name}-${id}`}
      className={cx('label', {
        ['active']: checked,
        ['not_active']: !checked,
      })}>
      <input
        type="radio"
        id={`${name}-${id}`}
        name={name}
        value={name}
        disabled={disabled}
        checked={checked}
        onChange={onChange}
      />
      {title && <CardTitle>{title}</CardTitle>}
    </CardWrapper>
  );
};

export default RadioCard;
