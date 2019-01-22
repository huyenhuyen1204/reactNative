import AppNavigator from './src/component/nextScreen/demo'
import {View} from 'react-native'
export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <AppNavigator />
      </View>
    );
   }
 }