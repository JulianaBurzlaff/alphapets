import React, { createContext, useCallback, useState } from 'react';
import { useSnackbar } from 'notistack';
import { api } from '../services/api';

export const AppointmentContext = createContext({});

export const AppointmentProvider = ({ children }) => {
  const [appointments, setAppointments] = useState([]);
  const { enqueueSnackbar } = useSnackbar();

  const createAppointment = useCallback(
    async ({ ownerId, petId, name, service, date, time }) => {
      try {
        const { data } = await api.post('/appointments', {
          ownerId,
          petId,
          name,
          service,
          date,
          time,
        });
        setAppointments((prev) => [data, ...prev]);
        enqueueSnackbar('Agendamento efetuado com sucesso!', {
          variant: 'success',
        });
      } catch (error) {
        //
      }
    },
    []
  );

  const fetchAppointments = useCallback(async (petId) => {
    try {
      const { data } = await api.get(`/appointments?petId=${petId}`);
      setAppointments(data);
      return data;
    } catch (error) {
      return null;
    }
  }, []);

  return (
    <AppointmentContext.Provider
      value={{
        appointments,
        fetchAppointments,
        createAppointment,
      }}
    >
      {children}
    </AppointmentContext.Provider>
  );
};
