import './sidebar.css'

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Dashboard</h3>
            <ul className="sidebarList">
              <li className="sidebarListItem active">
              <i class="material-icons">dashboard</i>Home
              </li>
              <li className="sidebarListItem">
              <i class="material-icons">timeline</i>Analytics
              </li>

              <li className="sidebarListItem">
                <i class="fa fa-line-chart" aria-hidden="true"></i>Sales

              </li>
            </ul>
          </div>
          {/*  */}
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Quick Menu</h3>
            <ul className="sidebarList">
              <li className="sidebarListItem">
              <i class="material-icons">person</i>User
              </li>

              <li className="sidebarListItem">
              <i class="material-icons">store</i>Products
              </li>
              <li className="sidebarListItem">
                <i class="fa fa-dollar-sign"></i>Transactions
              </li>
              <li className="sidebarListItem">
              <i class="fa fa-solid fa-chart-simple"></i>Reports
              </li>
            </ul>
          </div>
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Notifications</h3>
            <ul className="sidebarList">
              <li className="sidebarListItem">
              <i class="material-icons">mail</i>Mail
              </li>
              <li className="sidebarListItem">
              <i class="material-icons">feedback</i>Feedback
              </li>
              <li className="sidebarListItem">
                <i class="material-icons" aria-hidden="true">message</i>Messages
              </li>
            </ul>
          </div>
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Staff</h3>
            <ul className="sidebarList">
              <li className="sidebarListItem">
              <i class="fa fa-thin fa-briefcase"></i>Manage
              </li>
              <li className="sidebarListItem">
              <i class="material-icons">timeline</i>Analytics
              </li>
              <li className="sidebarListItem">
                <i class="fa fa-exclamation-circle" aria-hidden="true"></i>Report
              </li>
            </ul>
          </div>

        </div>
        
    </div>
  )
}
