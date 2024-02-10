import { View, Pressable, Text } from "react-native";
import { styles } from "./TabsBannerStyles";
import { ITabsStyles } from "../../screens/HomeScreen/HomeScreen";

interface TabsBannerProps {
  tabStyles: ITabsStyles;
  handleTabPressed: (createdTab: boolean) => void;
}

export function TabsBanner({ tabStyles, handleTabPressed }: TabsBannerProps) {
  const getTabStyles = (createdTab: boolean) => ({
    ...styles.tab,
    borderBottomColor: createdTab
      ? tabStyles.createdBorderColor
      : tabStyles.likedBorderColor,
  });

  const getTabTextStyles = (createdTab: boolean) => ({
    ...styles.tabText,
    color: createdTab ? tabStyles.createdTextColor : tabStyles.likedTextColor,
  });

  return (
    <View style={styles.banner}>
      <View style={styles.tabsContainer}>
        <Pressable
          onPress={() => handleTabPressed(true)}
          style={getTabStyles(true)}
        >
          <Text style={getTabTextStyles(true)}>Created</Text>
        </Pressable>
        <Pressable
          onPress={() => handleTabPressed(false)}
          style={getTabStyles(false)}
        >
          <Text style={getTabTextStyles(false)}>Liked</Text>
        </Pressable>
      </View>
    </View>
  );
}
