import { Provider } from "react-redux";
import DrawerNavigator from "./app/DrawerNavigation/DrawerNavigator";
import myStore from "./app/Redux/myStore";
export default function App() {
  return (
    <>
      <Provider store={myStore}>
        <DrawerNavigator />
      </Provider>
    </>
  );
}
