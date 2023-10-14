import { useState}  from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native'
import { useRouter } from 'expo-router';

import styles from './home.style'
import { icons, SIZES } from '../../../constants';

const home = ( { searchTerm, setSearchTerm, handleClick }) => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState('Full-time');
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.welcomeMessage}> CIRCLE </Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TouchableOpacity style={styles.searchBtn} onPress={(handleClick) => {}}>
            <Image
              source={icons.search}
              resizeMode='contain'
              style={styles.searchBtnImage}
            />
          </TouchableOpacity>
            <TextInput
              style={styles.searchInput}
              // parse in the value of what you searching for
              value={searchTerm}
              onChangeText={(text) => setSearchTerm(text)}
              maxLength={23}
              placeholder="Search event"
            />
        </View>
      </View>
    </View>
  )
}

export default Welcome;