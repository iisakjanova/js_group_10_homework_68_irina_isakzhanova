import {Switch, Route} from "react-router-dom";
import {Container, Typography} from "@material-ui/core";

import Layout from "./components/Layout/Layout";
import Counter from "./containers/Counter/Counter";
import ToDo from "./containers/ToDo/ToDo";

const App = () => (
    <Layout>
        <Container>
            <Switch>
                <Route path="/" exact component={Counter}/>
                <Route path="/counter" component={Counter}/>
                <Route path="/toDo" component={ToDo}/>
                <Route render={() => <Typography variant="h4">Not found</Typography>} />
            </Switch>
        </Container>
    </Layout>
);

export default App;
