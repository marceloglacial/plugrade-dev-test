import { FC } from 'react';

export const ErrorState: FC = (): JSX.Element => {
  return (
    <div className='text-red-600'>
      <h2 className='font-bold text-2xl'>Sorry!</h2>
      <p>Something got wrong while loading the data.</p>
      <p>Please try again.</p>
    </div>
  );
};
