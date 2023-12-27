import { useState } from "react";
import { Animated, Text, TouchableOpacity, View } from "react-native";
import { Box, Icon } from "native-base";
import { SimpleLineIcons } from 'react-native-vector-icons';

import { styles } from "../styles/ProfileForm";
import data from './AccordionProfileForm';
import { THEME } from "../../../styles/theme";

export default function ProfileForm() {
  const [currentIndex, setCurrentIndex] = useState(null);
  
  return (
    <View style={styles.container}>
      {data.map(({title, icon, vectorIcon, subItens}, index) => {
        return (
          <TouchableOpacity
            key={title}
            onPress={() => {
              setCurrentIndex(index === currentIndex ? null : index)
            }}
            activeOpacity={0.8}
            style={styles.accordion}
          >
            <Box style={styles.area}>
              <Box style={styles.data}>
                <Box style={styles.iconArea}>
                  <Icon
                    as={vectorIcon}
                    name={icon}
                    color={THEME.colors.yellow[400]}
                    size={10}
                  />
                </Box>

                <Animated.View style={styles.infoArea}>
                  <Text style={styles.title}>{title}</Text>
                </Animated.View>
              </Box>

              <Animated.View
                style={
                  [styles.arrowArea, {
                    transform: [{rotate: index === currentIndex ? '180deg' : '0deg'}]
                  }]
                }
              >
                <SimpleLineIcons name={'arrow-down'} style={styles.arrowIcon} size={20} />
              </Animated.View>
            </Box>

            {index === currentIndex && (
              <Box>
                {subItens.map(subItens => (
                  <Text key={subItens}>{subItens}</Text>
                ))}
              </Box>
            )}
          </TouchableOpacity>
        )
      })}
    </View>
  );
}