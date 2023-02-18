import { FC, ChangeEvent, useState, useEffect } from 'react';
// import { format } from 'date-fns';
// import numeral from 'numeral';
// import PropTypes from 'prop-types';
// import axios from 'axios';
import {
  Tooltip,
  Divider,
  Box,
  FormControl,
  InputLabel,
  Card,
  Checkbox,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TableContainer,
  Select,
  MenuItem,
  Typography,
  useTheme,
  List,
  Button,
  CardHeader
} from '@mui/material';

import Label from '@/components/Label';
import { RequestDtoForStaff, RequesSellSecondHandtDto, RequestStatus } from '@/models/crypto_requests';
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import BulkActions from '@/content/Management/BulkActions';

const apiURL = "https://soleauthenticity.azurewebsites.net/api/admin/request-sell-secondhands";

interface RecentRequestsTableProps {
  className?: string;
}

interface Filters {
  status?: RequestStatus;
}

const getStatusLabel = (requestStatus: RequestStatus): JSX.Element => {
  const map = {
    Cancle: {
      text: 'Cancle',
      color: 'error'
    },
    Sold: {
      text: 'Sold',
      color: 'success'
    },
    Checking: {
      text: 'Checking',
      color: 'primary'
    },
    Accept: {
      text: 'Accept',
      color: 'warning'
    },
    In_Progress: {
      text: 'In_Progress',
      color: 'secondary'
    },
  };

  const { text, color }: any = map[requestStatus];

  return <Label color={color}>{text}</Label>;
};

const RecentRequestsTable: FC<RecentRequestsTableProps> = () => {
  const [data, setData] = useState<RequestDtoForStaff>();
  const [datat, setDatat] = useState<RequesSellSecondHandtDto[]>([]);
  const [selectedRequests, setSelectedRequests] = useState<number[]>(
    []
  );
  console.log(data)
  const selectedBulkActions = selectedRequests.length > 0;
  const [page, setPage] = useState<number>(0);
  const [limit, setLimit] = useState<number>(5);
  const [filters, setFilters] = useState<Filters>({
    status: null
  });
  
 useEffect(()=>{
    fetch(apiURL+"?page=1&pageSize=30")
    .then((response) => response.json())
    .then((responsedata) => {
      setData(responsedata.data);
      setDatat(responsedata.data);
      // console.log(responsedata.data);
    })
 }, [])

const applyFilters = (
  filters: Filters
): RequesSellSecondHandtDto[] => {
  return datat.filter((request) => {
    let matches = true;
    console.log(request.requestStatus);
    if (filters.status && request.requestStatus !== filters.status) {
      matches = false;
    }
    return matches;
  });
};
const fetchDataForStatusChecking = async (requestId : number) => {
  console.log(requestId);
  const response = await fetch('https://soleauthenticity.azurewebsites.net/api/request-sell-secondhands/request-sell-secondhand/request-status/checking?id='+requestId, {
    method: 'PUT',
    body: JSON.stringify({ /* data to be sent in the request body */ }),
    // headers: { 'Content-Type': 'application/json' }
  })
  location.reload();
  console.log(response)
  // .then(response => response.json())
  // .then(data => {
  //     console.log(data);
// })

};
const applyPagination = (
  datat: RequesSellSecondHandtDto[],
  page: number,
  limit: number
): RequesSellSecondHandtDto[] => {
  return datat.slice(page * limit, page * limit + limit);
};
  const statusOptions = [
    {
      id: 'all',
      name: 'All'
    },
    {
      id: 'Cancle',
      name: 'Cancle'
    },
    {
      id: 'Sold',
      name: 'Sold'
    },
    {
      id: 'Checking',
      name: 'Checking'
    },
    {
      id: 'Accept',
      name: 'Accept'
    },
    {
      id: 'In_Progress',
      name: 'In_Progress'
    },
  ];

  const handleStatusChange = (e: ChangeEvent<HTMLInputElement>): void => {
    let value = null;

    if (e.target.value !== 'all') {
      value = e.target.value;
    }
    setFilters((prevFilters) => ({
      ...prevFilters,
      status: value
    }));
  };

  const handleSelectAllRequests = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    setSelectedRequests(
      event.target.checked
        ? datat.map((request) => request.id)
        : []
    );
  };

  const handleSelectOneRequest = (
    _event: ChangeEvent<HTMLInputElement>,
    requestId: number,
  ): void => {
    if (!selectedRequests.includes(requestId)) {
      setSelectedRequests((prevSelected) => [
        ...prevSelected,
        requestId
      ]);
    } else {
      setSelectedRequests((prevSelected) =>
        prevSelected.filter((id) => id !== requestId)
      );
    }
  };

  const handlePageChange = (_event: any, newPage: number): void => {
    setPage(newPage);
  };

  const handleLimitChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setLimit(parseInt(event.target.value));
  };

  const filteredRequests = applyFilters(filters);
  const paginatedRequests = applyPagination(
    filteredRequests,
    page,
    limit
  );
  const selectedSomeRequests =
    selectedRequests.length > 0 &&
    selectedRequests.length < datat.length;
  const selectedAllRequests =
    selectedRequests.length === datat.length;
  const theme = useTheme();

  return (
    <Card>
      {selectedBulkActions && (
        <Box flex={1} p={2}>
          <BulkActions />
        </Box>
      )}
      {!selectedBulkActions && (
        <CardHeader
          action={
            <Box width={150}>
              <FormControl fullWidth variant="outlined">
                <InputLabel>Status</InputLabel>
                <Select
                  value={filters.status || 'all'}
                  onChange={handleStatusChange}
                  label="Status"
                  autoWidth
                >
                  {statusOptions.map((statusOption) => (
                    <MenuItem key={statusOption.id} value={statusOption.id}>
                      {statusOption.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          }
          title="Recent Requests"
        />
      )}
      <Divider />
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  color="primary"
                  checked={selectedAllRequests}
                  indeterminate={selectedSomeRequests}
                  onChange={handleSelectAllRequests}
                />
              </TableCell>
              <TableCell>ID</TableCell>
              <TableCell>Product Name</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Brand Name</TableCell>
              <TableCell>Contact</TableCell>
              <TableCell align="right">PriceBuy</TableCell>
              <TableCell align="right">PriceSell</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Actions</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedRequests.map((data) => {
              const isRequestSelected = selectedRequests.includes(
                data.id
              );
              return (
                <TableRow
                  hover
                  key={data.id}
                  selected={isRequestSelected}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      color="primary"
                      checked={isRequestSelected}
                      onChange={(event: ChangeEvent<HTMLInputElement>) =>
                        handleSelectOneRequest(event, data.id)
                      }
                      value={isRequestSelected}
                    />
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {data.id}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {data.productName}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {data.userName}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {data.brandName}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {data.contact}
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {data.priceBuy}
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography
                      variant="body1"
                      fontWeight="bold"
                      color="text.primary"
                      gutterBottom
                      noWrap
                    >
                      {data.priceSell}
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    {getStatusLabel(data.requestStatus)}
                  </TableCell>
                  <TableCell align="right">
                    <Tooltip title="Edit Request" arrow>
                      <IconButton
                        sx={{
                          '&:hover': {
                            background: theme.colors.primary.lighter
                          },
                          color: theme.palette.primary.main
                        }}
                        color="inherit"
                        size="small"
                      >
                        <EditTwoToneIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete Request" arrow>
                      <IconButton
                        sx={{
                          '&:hover': { background: theme.colors.error.lighter },
                          color: theme.palette.error.main
                        }}
                        color="inherit"
                        size="small"
                      >
                        <DeleteTwoToneIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                  <TableCell align="right">
                    <List component={Box} display="flex" width={120} justifyContent={'space-between'} >
                      <Button variant="contained" onClick={() => fetchDataForStatusChecking(data.id)} href={`/management/requestsellsecondhands/details/checking/${data.id}`}>Checking</Button>
                    </List>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <Box p={2}>
        <TablePagination
          component="div"
          count={filteredRequests.length}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleLimitChange}
          page={page}
          rowsPerPage={limit}
          rowsPerPageOptions={[5, 10, 25, 30]}
        />
      </Box>
    </Card>
  );
};
export default RecentRequestsTable;
