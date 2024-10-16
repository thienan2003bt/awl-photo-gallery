import { Container } from '@chakra-ui/react';
import IndexRoute from './routes/IndexRoute';

// App only used as a container for Routing component

function App() {
  	return (
		<Container margin={0} p={0} w={"100vw"} h={"100vh"} className="App">
			<IndexRoute />
		</Container>
  	);
}

export default App;
