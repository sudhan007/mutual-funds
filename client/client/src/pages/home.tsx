import Header from "./header"
import Partners from "./partners"
import About from "./about"
import Profile from "./profile"
import PlanCards from "./plans_card"
import Diverse_portfolio from "./diverse_portfolio"
import  Chart  from "./chart"
import Investment_journey from "./investment_journey"
import YourGoal from "./yourGoal"

export default function Home(){

    return(
<>
 <Header />
<Partners />
<About />
<Profile />
<PlanCards />
<Diverse_portfolio />
<Chart />
<Investment_journey />
<YourGoal />
</>

    )
 }