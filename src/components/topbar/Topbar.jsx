import React from 'react'
import "./topbar.css"

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">AdminSite</span>
        </div>
        <div className="topRight">
          <div className="topbarIconsContainer">
            <i className="fa fa-bell" aria-hidden="true"></i>
            <span className="topIconBadge">2</span>
          </div>

          <div className="topbarIconsContainer">
          <i class="fa fa-globe"></i>
            <span className="topIconBadge">2</span>
          </div>

          <div className="topbarIconsContainer">
          <i class="fa fa-solid fa-gear"></i>
            <span className="topIconBadge">2</span>
          </div>

          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3x1dkwCD15avFavbhVPArwctoXw3YeRhFyA&usqp=CAU" alt="" className="topAvartar" />
        </div>
      </div>
    </div>
  )
}
