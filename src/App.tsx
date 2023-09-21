import { useStore } from '@nanostores/react';

import { step, view } from '$stores/navigation';
import { Logo } from './components';
import { View } from './views';

import styles from './App.module.scss';

function App() {
  const activeView = useStore(view);
  const progressStep = useStore(step);

  return (
    <>
      <Logo className={styles.logo} />
      <div className={styles.container}>
        <div className={styles.view}>
          <View active={activeView} />
          <div className={styles.stepper}>
            <p>{progressStep}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
