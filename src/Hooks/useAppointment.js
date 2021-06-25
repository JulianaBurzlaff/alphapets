import { useContext } from 'react';
import { AppointmentContext } from '../providers/AppointmentProvider';

export function useAppointment() {
  const context = useContext(AppointmentContext);

  return context;
}
