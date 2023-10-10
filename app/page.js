

import './css/subBackground.css';

export default async function Home() {

  return (
    <div>
      <div className="sub-background">
        <h4 className="main-title">Welcome, Let's find a cafe that suits your taste!</h4>
        <p className="sub-title">"This website recommends suitable cafes to users based on hashtags and allows them to explore cafes that match their preferences through a cafe map."</p>
      <form className="Search-box">
        <h1>What are you looking for?</h1>
        <input name="search-text" placeholder="Please enter your search term." type="text"/>
        <input name="search" type="submit" value="Search"/>
      </form>
      </div>
    </div>
  )
}
