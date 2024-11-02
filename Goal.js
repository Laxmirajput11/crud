// import React from 'react';
// import {View, Text, StyleSheet} from 'react-native';

// const MissedGoalMessage = () => {
//   return (
//     <View style={styles.missedGoalContainer}>
//       <Text style={styles.missedGoalText}>Goal is Missed</Text>
//     </View>
//   );
// };

// const MadeGoalMessage = () => {
//   return (
//     <View style={styles.madeGoalContainer}>
//       <Text style={styles.madeGoalText}>Goal is Done</Text>
//     </View>
//   );
// };

// const GoalComponent = props => {
//   const {isGoalAchieved} = props;
//   return (
//     <View style={styles.container}>
//       {isGoalAchieved ? <MadeGoalMessage /> : <MissedGoalMessage />}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 22,
//   },
//   missedGoalContainer: {
//     padding: 20,
//     backgroundColor: 'red',
//     borderRadius: 8,
//   },
//   missedGoalText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   madeGoalContainer: {
//     padding: 20,
//     backgroundColor: 'green',
//     borderRadius: 8,
//   },
//   madeGoalText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

// export default GoalComponent;
