// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// ** Icons Imports
import Poll from 'mdi-material-ui/Poll'
import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'
import HelpCircleOutline from 'mdi-material-ui/HelpCircleOutline'
import BriefcaseVariantOutline from 'mdi-material-ui/BriefcaseVariantOutline'

// ** Custom Components Imports
import CardStatisticsVerticalComponent from '../../@core/components/card-statistics/card-stats-vertical'

// ** Styled Component Import
import ApexChartWrapper from '../../@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
import Table from '../../views/dashboard/Table'
import Trophy from '../../views/dashboard/Trophy'
import TotalEarning from '../../views/dashboard/TotalEarning'
import StatisticsCard from '../../views/dashboard/StatisticsCard'
import WeeklyOverview from '../../views/dashboard/WeeklyOverview'
import DepositWithdraw from '../../views/dashboard/DepositWithdraw'
import SalesByCountries from '../../views/dashboard/SalesByCountries'
import LayoutAppBar from '../../@core/layouts/components/vertical/appBar'

const Dashboard = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <Typography variant="h5" sx={{lineHeight:2,fontWeight:'bold', color:'blueGray'}}>Attendance Tracker</Typography>
      </Grid>
      <Grid item xs={7}> 
        <Typography>xs=8</Typography>
      </Grid>
    </Grid>
  )
}

export default Dashboard