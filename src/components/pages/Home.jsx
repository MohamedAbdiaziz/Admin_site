import Chart from '../chart/Chart'
import Featuredinfo from '../featuredinfo/Featuredinfo'
import WidgetLg from '../widgetLg/WidgetLg'
import WidgetSm from '../widgetSm/WidgetSm'
import './home.css'

export default function Home() {
  return (
    <div className="home">
        <Featuredinfo/>
        <Chart/>
        <div className="homeWidgets">
          <WidgetSm/>
          <WidgetLg/>
        </div>
    </div>
  )
}
