import { FC } from 'react';
import { styles } from './LoadingStateStyles';

export const LoadingState: FC = (): JSX.Element => {
  return (
    <div data-testid='loading-state' className={styles.contaner}>
      <p data-testid='loading-state-title'>Calculating your taxes ...</p>
    </div>
  );
};
