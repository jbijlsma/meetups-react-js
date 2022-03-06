import { Route, Switch } from "react-router-dom";
import AllMeetups from "./pages/AllMeetups";
import Favorites from "./pages/Favorites";
import NewMeetup from "./pages/NewMeetup";
import Layout from "./Components/layout/Layout";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/new-meetup">
          <NewMeetup />
        </Route>
        <Route path="/favorites">
          <Favorites />
        </Route>
        <Route path="/" exact>
          <AllMeetups />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
