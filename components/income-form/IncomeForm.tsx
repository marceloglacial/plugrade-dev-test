'use client';
import { DEFAULT_YEAR, MIN_INCOME } from '@/constants';
import { useYears } from '@/hooks';
import { FC, useState } from 'react';
import { ErrorState, LoadingState } from '@/components';
import { styles } from './IncomeFormStyles';

export const IncomeForm: FC<IDataStateProps> = (props): JSX.Element => {
  const { data: taxYears, isLoading, isError } = useYears();
  const [formData, setFormData] = useState<FormDataType>(props.taxData);

  if (isLoading) return <LoadingState>Loading</LoadingState>;
  if (isError || !taxYears) return <ErrorState />;

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
  };

  return (
    <div className={styles.container} data-testid='form-container'>
      <form data-testid='form' className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label data-testid='income-title'>Anual income</label>
          <input
            name='income'
            type='number'
            min={MIN_INCOME}
            defaultValue={MIN_INCOME}
            disabled={props.isSubmiting}
            onChange={handleFormDataChanges}
            data-testid='income-input'
            required
            className={styles.input.disabled}
          />
        </div>
        <div className={styles.formGroup}>
          <label data-testid='year-title'>Tax year</label>
          <select
            name='year'
            className={styles.input.disabled}
            defaultValue={DEFAULT_YEAR}
            onChange={handleFormDataChanges}
            data-testid='year-select'
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
            data-testid='form-submit'
            className={`${styles.input.submit} ${styles.input.disabled}`}
            disabled={props.isSubmiting}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
