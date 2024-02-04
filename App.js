import { Provider } from "react-redux";
import DrawerNavigator from "./app/DrawerNavigation/DrawerNavigator";
import { myStore } from "./Redux/Store/store";

export default function App() {
  return (
    <>
      <Provider store={myStore}>
        <DrawerNavigator />
      </Provider>
    </>
  );
}
