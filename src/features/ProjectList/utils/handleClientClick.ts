import { MouseEvent } from 'react';

import showClientProjectNotification from '../../../components/ClientProjectNotification';

const handleClientClick = (e: MouseEvent, type: string) => {
  if (type === 'client') {
    e.preventDefault();
    showClientProjectNotification();
  }
};

export default handleClientClick;
