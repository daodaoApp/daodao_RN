
import DemoScreen from './routes/DemoScreen'
import CalendarScreen from './routes/CalendarScreen'
import ReportScreen from './routes/ReportScreen'
import SettingScreen from './routes/SettingScreen'


export default {
  Home: { screen: CalendarScreen },
  Calendar: { screen: CalendarScreen },
  Demo: { screen: DemoScreen },
  Report: { screen: ReportScreen },
  Setting: { screen: SettingScreen },
}