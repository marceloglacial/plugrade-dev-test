import { FC } from 'react';

export const Results: FC = () => {
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
          <tr>
            <td>0 </td>
            <td> 1000 </td>
            <td> 100 </td>
            <td> 10% </td>
          </tr>
        </tbody>
        <tfoot className='font-bold'>
          <tr>
            <td colSpan={2}>Total taxes owned</td>
            <td> 100 </td>
            <td className='text-center'> - </td>
          </tr>
          <tr>
            <td colSpan={3}>Effective Rate</td>
            <td> 10%</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};
