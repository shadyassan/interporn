import Link from 'next/link';

const WidgetList = ({ values }) => {
  return (
    values.length > 0 && (
      <ul className="widget-list">
        {values.map(
          ({ name, value }, i) =>
            value && (
              <li key={`${name}${i}`}>
                <Link href={value}>
                  <a>{name}</a>
                </Link>
              </li>
            )
        )}
      </ul>
    )
  );
};

export default WidgetList;
