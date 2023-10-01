import { type FC, memo } from 'react';

import { type AppView } from '$stores/navigation';
import { MeasureView } from './MeasureView/MeasureView';
import { StartView } from './StartView';

export interface ViewProps {
  active: AppView;
}

const ViewComponent: FC<ViewProps> = ({ active }) => {
  switch (active) {
    case 'start':
      return <StartView />;
    case 'measure':
      return <MeasureView />;
    default:
      return <h2>View {active} is not found</h2>;
  }
};

export const View = memo(ViewComponent);
