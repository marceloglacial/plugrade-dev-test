'use client';
import { DEFAULT_YEAR, MIN_INCOME } from '@/constants';
import { useYears } from '@/hooks';
import { FC, useState } from 'react';

export const IncomeForm: FC<DataStateProps> = (props): JSX.Element => {
  const { data: taxYears, isLoading, isError } = useYears();
  const [formData, setFormData] = useState<FormDataType>(props.taxData);

  if (isLoading) return <>Loading ...</>;
  if (isError || !taxYears) return <>Error loading data!</>;

  const handleFormDataChanges = (e: any) => {
    return setFormData({
      ...formData,
      [e.target.name]: parseInt(e.target.value || 0),
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    props.setIsSubmitting(true);
    props.setTaxData(formData);
    props.setShowResults(true);
  };

  return (
    <div className='w-[200px] '>
      <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
        <div className='flex flex-col'>
          <label>Anual income</label>
          <input
            name='income'
            type='number'
            min={MIN_INCOME}
            defaultValue={MIN_INCOME}
            disabled={props.isSubmiting}
            onChange={handleFormDataChanges}
            required
            className='disabled:cursor-not-allowed disabled:opacity-30'
          />
        </div>
        <div className='flex flex-col'>
          <label>Tax year</label>
          <select
            name='year'
            className=' disabled:cursor-not-allowed disabled:opacity-30'
            defaultValue={DEFAULT_YEAR}
            onChange={handleFormDataChanges}
            disabled={props.isSubmiting}
          >
            {taxYears.map((taxYear) => (
              <option key={taxYear.id} value={taxYear.value}>
                {taxYear.title}
              </option>
            ))}
          </select>
        </div>
        <div>
          <button
            className='bg-black text-white disabled:opacity-30 px-4'
            disabled={props.isSubmiting}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
