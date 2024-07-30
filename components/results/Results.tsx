'use client';
import { useTaxBrackets } from '@/hooks';
import { taxCalculator } from '@/lib';
import { FC } from 'react';

export const Results: FC<DataStateProps> = (props): JSX.Element => {
  const { data, isLoading, isError } = useTaxBrackets(
    props.taxData.year,
    props
  );

  if (isLoading) return <>Loading ...</>;
  if (isError) return <>Error!</>;
  if (!data) return <></>;

  console.log('isLoading', isLoading);

  const result = taxCalculator(props.taxData.income, data);

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
