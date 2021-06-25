import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { useAppointment } from '../../Hooks/useAppointment';
import * as S from './styles';

function DataTable() {
  const { appointments } = useAppointment();
  const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'name', headerName: 'Nome', width: 130 },
    { field: 'service', headerName: 'Serviço', width: 200 },
    {
      field: 'date',
      headerName: 'Data',
      type: 'date',
      width: 120,
    },
    {
      field: 'time',
      headerName: 'Horário',
      width: 150,
    },
    {
      field: 'remove',
      headerName: 'Excluir',
      width: 120,
    },
  ];

  return (
    <S.Container>
      <div style={{ height: 400, width: 670 }}>
        <DataGrid rows={appointments} columns={columns} pageSize={5} />
      </div>
    </S.Container>
  );
}

export default DataTable;
