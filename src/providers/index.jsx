import React from 'react';

import { PetProvider } from './PetProvider';
import { UserProvider } from './UserProvider';
import { AppointmentProvider } from './AppointmentProvider';

function AppProvider(props) {
  return (
    <UserProvider>
      <PetProvider>
        <AppointmentProvider>{props.children}</AppointmentProvider>
      </PetProvider>
    </UserProvider>
  );
}

export default AppProvider;
