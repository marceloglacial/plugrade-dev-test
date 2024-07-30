import { taxCalculator } from '@/lib';
import { FC } from 'react';
import { ErrorState, LoadingState } from '@/components';

export const Results: FC<IResultsProps> = ({
  income,
  data,
  isLoading,
  isError,
}): JSX.Element => {
  if (isLoading) return <LoadingState />;
  if (isError) return <ErrorState />;
  if (!data?.tax_brackets) return <></>;

  const result = taxCalculator(income, data);

  return (
    <div className='results'>
      <table>
        <thead>
          <tr>
            <th colSpan={2}>Income Bracket</th>
            <th colSpan={2}>Taxes</th>
          </tr>
          <tr>
            <th>Minimum</th>
            <th>Maximum</th>
            <th>Tax Owed</th>
            <th>Rate</th>
          </tr>
        </thead>
        <tbody>
          {result.taxDetails.map((bracket, index) => (
            <tr key={index}>
              <td>{bracket.min}</td>
              <td>{bracket.max}</td>
              <td>{bracket.tax}</td>
              <td>{bracket.rate}</td>
            </tr>
          ))}
        </tbody>
        <tfoot className='font-bold'>
          <tr>
            <td colSpan={2}>Total taxes owned</td>
            <td>{result.totalTaxes}</td>
            <td className='text-center'> - </td>
          </tr>
          <tr>
            <td colSpan={3}>Effective Rate</td>
            <td>{result.effectiveRate}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};
