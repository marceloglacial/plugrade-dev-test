import { FC } from 'react';
import { styles } from './LoadingStateStyles';

export const LoadingState: FC = (): JSX.Element => {
  return (
    <div className={styles.contaner}>
      <p>Calculating your taxes ...</p>
    </div>
  );
};
