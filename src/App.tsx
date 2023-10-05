import { useStore } from '@nanostores/react';

import { $view } from '$stores/navigation';
import { TitleContext } from '$utils/title';
import { Logo } from './components';
import { View } from './views';

import styles from './App.module.scss';

function App() {
  const activeView = useStore($view);

  return (
    <TitleContext.Provider value="Audición">
      <Logo className={styles.logo} />
      <div className={styles.container}>
        <div className={styles.view}>
          <View active={activeView} />
        </div>
      </div>
    </TitleContext.Provider>
  );
}

export default App;
