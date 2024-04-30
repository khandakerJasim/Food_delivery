import { RouterProvider } from "react-router-dom";
import router from "./Routes/Router";
import store1 from "./Redux/App/Store1";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="App">
      <Provider store={store1}>
        <RouterProvider router={router}></RouterProvider>
      </Provider>
    </div>
  );
}

export default App;
