import { useQuery } from "@apollo/client";
import { GET_DETAILS } from "./graphql/queries/myDetails";

function App() {
  const { data, loading, error } = useQuery(GET_DETAILS);

  console.log(data, loading, error);

  return <div>Hello World</div>;
}

export default App;
