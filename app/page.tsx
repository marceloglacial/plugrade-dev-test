'use client';
import { IncomeForm, Results } from '@/components';
import { DEFAULT_YEAR } from '@/constants';
import { useState } from 'react';

export default function Home() {
  const [showResults, setShowResults] = useState(false);
  const [isSubmiting, setIsSubmitting] = useState(false);
  const [taxData, setTaxData] = useState<FormDataType>({
    income: 0,
    year: DEFAULT_YEAR,
  });

  const stateProps = {
    isSubmiting,
    setIsSubmitting,
    taxData,
    setTaxData,
    showResults,
    setShowResults,
  };

  return (
    <main className='py-16 p-4 md:p-24'>
      <div className='income-form flex flex-wrap gap-8'>
        <IncomeForm {...stateProps} />
        {showResults && <Results {...stateProps} />}
      </div>
    </main>
  );
}
