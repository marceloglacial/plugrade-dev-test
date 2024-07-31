import { FC } from 'react';
import { styles } from './ErrorStateStyles';

export const ErrorState: FC = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Sorry!</h2>
      <p>Something got wrong while loading the data.</p>
      <p>Please try again.</p>
    </div>
  );
};
