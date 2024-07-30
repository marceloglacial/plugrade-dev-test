'use client';
import { IncomeForm, Results } from '@/components';

export default function Home() {
  return (
    <main className='py-16 p-4 md:p-24'>
      <div className='income-form flex flex-wrap gap-8'>
        <IncomeForm />
        <Results />
      </div>
    </main>
  );
}
