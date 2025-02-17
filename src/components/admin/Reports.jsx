import { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  Grid,
  useTheme,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

const Reports = () => {
  const theme = useTheme();
  const [selectedReport, setSelectedReport] = useState('inventory');
  const [timeRange, setTimeRange] = useState('month');

  // Mock data - replace with real data from API
  const inventoryData = [
    { status: 'Available', count: 45 },
    { status: 'Sold', count: 32 },
    { status: 'Pending Pickup', count: 15 },
    { status: 'In Transit', count: 8 },
  ];

  const locationData = [
    { location: 'California', vehicles: 25 },
    { location: 'Texas', vehicles: 18 },
    { location: 'Florida', vehicles: 15 },
    { location: 'New York', vehicles: 12 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const reports = [
    { value: 'inventory', label: 'Inventory Status' },
    { value: 'pickup', label: 'Pickup Schedule' },
    { value: 'donors', label: 'Donor Follow-ups' },
    { value: 'location', label: 'Location Analysis' },
    { value: 'receivable', label: 'Accounts Receivable' },
    { value: 'titles', label: 'Title Status' },
  ];

  return (
    <Box sx={{ p: 3, width: '100%' }}>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          Reports
        </Typography>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <FormControl sx={{ minWidth: 200 }}>
              <InputLabel>Report Type</InputLabel>
              <Select
                value={selectedReport}
                onChange={(e) => setSelectedReport(e.target.value)}
                label="Report Type"
              >
                {reports.map((report) => (
                  <MenuItem key={report.value} value={report.value}>
                    {report.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl sx={{ minWidth: 150 }}>
              <InputLabel>Time Range</InputLabel>
              <Select
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
                label="Time Range"
              >
                <MenuItem value="week">Last Week</MenuItem>
                <MenuItem value="month">Last Month</MenuItem>
                <MenuItem value="quarter">Last Quarter</MenuItem>
                <MenuItem value="year">Last Year</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary">
              Generate Report
            </Button>
          </Grid>
        </Grid>
      </Box>

      <Grid container spacing={3}>
        {/* Chart Section */}
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3, height: '100%' }}>
            <Typography variant="h6" gutterBottom>
              Inventory Distribution
            </Typography>
            <Box sx={{ height: 400 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={inventoryData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="status" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="count" fill={theme.palette.primary.main} />
                </BarChart>
              </ResponsiveContainer>
            </Box>
          </Paper>
        </Grid>

        {/* Summary Cards */}
        <Grid item xs={12} md={4}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Paper sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>
                  Location Distribution
                </Typography>
                <Box sx={{ height: 300 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={locationData}
                        dataKey="vehicles"
                        nameKey="location"
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        label
                      >
                        {locationData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Grid>

        {/* Detailed Table */}
        <Grid item xs={12}>
          <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
              <Table stickyHeader>
                <TableHead>
                  <TableRow>
                    <TableCell>Location</TableCell>
                    <TableCell align="right">Available</TableCell>
                    <TableCell align="right">Sold</TableCell>
                    <TableCell align="right">Pending</TableCell>
                    <TableCell align="right">Total</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {locationData.map((row) => (
                    <TableRow key={row.location}>
                      <TableCell component="th" scope="row">
                        {row.location}
                      </TableCell>
                      <TableCell align="right">{Math.floor(row.vehicles * 0.4)}</TableCell>
                      <TableCell align="right">{Math.floor(row.vehicles * 0.3)}</TableCell>
                      <TableCell align="right">{Math.floor(row.vehicles * 0.3)}</TableCell>
                      <TableCell align="right">{row.vehicles}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Reports;
