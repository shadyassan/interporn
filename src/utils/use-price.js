import { useMemo } from 'react';
import { CURRENCY } from 'utils/constant';
import { useRouter } from 'next/router';

export function formatPrice({ amount, currencyCode, locale }) {
  const formatCurrency = new Intl.NumberFormat(locale, {
    style: 'currency',
    unitDisplay: 'narrow',
    currency: currencyCode ?? CURRENCY,
    minimumFractionDigits: 2,
  });

  const str = formatCurrency.format(amount);
  return str.substr(0, 1) + ' ' + str.substr(1, str.length);
}

export function formatVariantPrice({
  amount,
  baseAmount,
  currencyCode,
  locale,
}) {
  const hasDiscount = baseAmount > amount;
  const formatDiscount = new Intl.NumberFormat(locale, { style: 'percent' });
  const discount = hasDiscount
    ? formatDiscount.format((baseAmount - amount) / baseAmount)
    : null;

  const price = formatPrice({ amount, currencyCode, locale });
  const basePrice = hasDiscount
    ? formatPrice({ amount: baseAmount, currencyCode, locale })
    : null;

  return { price, basePrice, discount };
}

export default function usePrice(data) {
  const currency = CURRENCY;
  const { amount, baseAmount, currencyCode = currency } = data ?? {};
  const { locale } = useRouter();
  const value = useMemo(() => {
    if (typeof amount !== 'number' || !currencyCode) return '';
    const currentLocale = locale ? locale : 'en';

    return baseAmount
      ? formatVariantPrice({
          amount,
          baseAmount,
          currencyCode,
          locale: currentLocale,
        })
      : formatPrice({ amount, currencyCode, locale: currentLocale });
  }, [amount, baseAmount, currencyCode, locale]);

  return typeof value === 'string'
    ? { price: value, basePrice: null, discount: null }
    : value;
}
