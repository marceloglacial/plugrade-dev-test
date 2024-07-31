import { FC } from 'react';
import { styles } from './ErrorStateStyles';

export const ErrorState: FC = (): JSX.Element => {
  return (
    <div data-testid='error-state' className={styles.container}>
      <h2 data-testid='error-state-title' className={styles.title}>
        Sorry!
      </h2>
      <div data-testid='error-state-content'>
        <p>Something got wrong while loading the data.</p>
        <p>Please try again.</p>
      </div>
    </div>
  );
};
