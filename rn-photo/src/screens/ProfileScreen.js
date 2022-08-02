import { Button, StyleSheet, Text, View } from 'react-native';
import { useUserState } from '../contexts/UserContext';
import { signOut } from '../api/auth';

const ProfileScreen = () => {
  const [user, setUser] = useUserState();
  console.log(user.uid, user.email, user.displayName, user.photoURL);

  return (
    <View style={styles.container}>
      <Text>Profile</Text>
      <Button
        title="로그아웃"
        onPress={async () => {
          await signOut();
          setUser({});
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProfileScreen;
