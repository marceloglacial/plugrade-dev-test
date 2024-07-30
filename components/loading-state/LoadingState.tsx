import { FC } from 'react';

export const LoadingState: FC = (): JSX.Element => {
  return (
    <div className='loading-state'>
      <p>Calculating your taxes ...</p>
    </div>
  );
};
