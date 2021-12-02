import { useQuery } from "@apollo/client";
import { GET_VIEWER_DETAILS } from "./graphql/queries/myDetails";

function App() {
  const { data, loading, error } = useQuery(GET_VIEWER_DETAILS, {
    variables: {
      first: 10,
      orderBy: {
        field: "STARGAZERS",
        direction: "DESC",
      },
    },
  });

  console.log(data, loading, error);

  return <div>Hello World</div>;
}

export default App;
