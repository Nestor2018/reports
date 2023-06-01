import react, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {useDispatch} from 'react-redux';

import {saveReport} from '../../store/reports';
import colors from '../../constants/colors';
import sizes from '../../constants/sizes';

const CreateReportScreen = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const generarIdUnico1 = () => {
    return Math.random().toString(30).substring(2);
  };

  const createReport = () => {
    dispatch(
      saveReport({
        id: generarIdUnico1(),
        title,
        description,
        image: 'https://picsum.photos/200/300',
      }),
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        placeholder="Title report"
        onChangeText={newText => setTitle(newText)}
        onBlur={() => console.log('blur')}
        defaultValue=""
        style={styles.input}
      />
      <TextInput
        placeholder="Detail report"
        onChangeText={newText => setDescription(newText)}
        defaultValue=""
        style={styles.input}
      />
      <TouchableOpacity onPress={createReport} style={styles.button}>
        <Text style={styles.buttonText}>Create report</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.champagne,
    paddingTop: 40,
  },
  input: {
    height: 40,
    margin: sizes.margin,
    padding: sizes.padding,
    borderWidth: 1,
    borderColor: colors.brown,
    borderRadius: sizes.borderRadius,
  },
  button: {
    backgroundColor: colors.brown,
    width: '90%',
    alignSelf: 'center',
    padding: sizes.padding,
    borderRadius: sizes.borderRadius,
  },
  buttonText: {
    color: colors.white,
    textAlign: 'center',
    fontSize: sizes.text,
  },
});

export default CreateReportScreen;
