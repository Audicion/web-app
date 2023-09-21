import { type FC, memo } from 'react';

import { type AppView } from '$stores/navigation';
import { StartView } from './StartView';

export interface ViewProps {
  active: AppView;
}

const ViewComponent: FC<ViewProps> = ({ active }) => {
  switch (active) {
    case 'start':
      return <StartView />;
    default:
      return <h2>View {active} is not found</h2>;
  }
};

export const View = memo(ViewComponent);
