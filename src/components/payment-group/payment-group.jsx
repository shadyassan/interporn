import RadioGroup from 'components/radio-group/radio-group';
import RadioCard from 'components/radio-card/radio-card';

const PaymentGroup = ({ name, items, onChange }) => {
  const handleChange = (item) => {
    onChange(item);
  };

  return (
    <RadioGroup
      data={items}
      name={name}
      component={(item) => (
        <RadioCard
          key={item.id}
          name={name}
          onChange={() => handleChange(item)}
          {...item}
        />
      )}
    />
  );
};

export default PaymentGroup;
