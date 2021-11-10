import firestore from '@react-native-firebase/firestore';

export async function getSongs() {
  const songData = firestore()
    .collection('Songs')
    .onSnapshot(querySnapshot => {
      const songList = [];
      querySnapshot.forEach(documentSnapshot => {
        songList.push({
          ...documentSnapshot.data(),
        });
      });
      songData(songList);
    });
  return () => getSongs(songData);
}
