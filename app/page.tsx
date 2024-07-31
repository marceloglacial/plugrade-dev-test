'use client';
import { IncomeForm, Results } from '@/components';
import { DEFAULT_YEAR } from '@/constants';
import { getTaxBrackets } from '@/lib';
import { useEffect, useState } from 'react';

export default function Home() {
  const [isSubmiting, setIsSubmitting] = useState(false);
  const [isError, setIsError] = useState<any>(false);
  const [data, setData] = useState<any>(null);
  const [taxData, setTaxData] = useState<FormDataType>({
    income: 0,
    year: DEFAULT_YEAR,
  });

  const dataStateProps: IDataStateProps = {
    isSubmiting,
    setIsSubmitting,
    taxData,
    setTaxData,
  };

  const resultProps: IResultsProps = {
    income: taxData.income,
    data,
    isLoading: isSubmiting,
    isError,
  };

  useEffect(() => {
    if (isSubmiting)
      getTaxBrackets({
        year: taxData.year,
        setData,
        setIsError,
        setIsSubmitting,
      });
  }, [isSubmiting, taxData.year]);

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <IncomeForm {...dataStateProps} />
        <Results {...resultProps} />
      </div>
    </main>
  );
}

const styles = {
  main: 'main-page py-16 p-4 md:p-24',
  container: 'main-page__container flex flex-wrap gap-8',
};
