import "./featuredinfo.css"

export default function Featuredinfo() {
  return (
    <div className="featured">
        <div className="featuredItem">
            <span className="featuredTitle">Revenue</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$2000</span>
                <span className="featuredMoneyRate">
                    -11.3 <i class="icon negative fa fa-arrow-down" aria-hidden="true"></i>
                </span>
            </div>
            <span className="featuredSub">Compared to last Month</span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Sales</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$200</span>
                <span className="featuredMoneyRate">
                    -1.3 <i class="icon negative fa fa-arrow-down" aria-hidden="true"></i>
                </span>
            </div>
            <span className="featuredSub">Compared to last Month</span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">Cost</span>
            <div className="featuredMoneyContainer">
                <span className="featuredMoney">$3,000</span>
                <span className="featuredMoneyRate">
                    +2.3 <i class="icon fa fa-arrow-up" aria-hidden="true"></i>
                </span>
            </div>
            <span className="featuredSub">Compared to last Month</span>
        </div>
    </div>
  )
}
