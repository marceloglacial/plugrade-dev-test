import { FC, PropsWithChildren } from 'react';
import { styles } from './LoadingStateStyles';

export const LoadingState: FC<PropsWithChildren> = ({
  children,
}): JSX.Element => {
  return (
    <div data-testid='loading-state' className={styles.contaner}>
      <p data-testid='loading-state-title'>{children}</p>
    </div>
  );
};
