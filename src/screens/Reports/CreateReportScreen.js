import react, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, SafeAreaView} from 'react-native';
import {useDispatch} from 'react-redux';
import {RNCamera} from 'react-native-camera';
import {Toast} from '@kyupss/native-popup';

import {saveReport} from '../../store/reports';
import CustonButton from '../../components/CustonButton';
import colors from '../../constants/colors';
import sizes from '../../constants/sizes';

const CreateReportScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const [uriImage, setUriImage] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [showCamera, setShowCamera] = useState(false);
  const [type, setType] = useState(RNCamera.Constants.Type.back);

  const takePicture = async camera => {
    const options = {quality: 0.5, base64: true};
    const data = await camera.takePictureAsync(options);
    setShowCamera(false);
    setUriImage(data.uri);
    Toast.show({
      title: 'Image captured',
      text: '',
      color: colors.success,
      position: 'top', 
    });
  };

  const generateId = () => {
    return Math.random().toString(30).substring(2);
  };

  const createReport = () => {
    if (!title || !description || !uriImage) {
      Toast.show({
        title: 'Please complete all fields',
        text: '',
        color: colors.danger,
        position: 'top', 
      });
    } else {
      dispatch(
        saveReport({
          id: generateId,
          title,
          description,
          image: uriImage,
        }),
      );
      setTitle('');
      setDescription('');
      setUriImage(null);
      navigation.goBack();
      Toast.show({
        title: 'Report created',
        text: '',
        color: colors.succes,
        position: 'top', 
      });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        placeholder="Title report"
        onChangeText={newText => setTitle(newText)}
        defaultValue=""
        style={styles.input}
      />
      <TextInput
        multiline={true}
        numberOfLines={20}
        placeholder="Detail report"
        onChangeText={newText => setDescription(newText)}
        defaultValue=""
        style={[styles.input, {height: 100}]}
      />
      <CustonButton
        text={showCamera ? 'Close camera' : 'Take photo'}
        bgButton={colors.brown}
        colorText={colors.white}
        press={() => setShowCamera(!showCamera)}
        widthButton="30%"
      />
      <CustonButton
        text="Create report"
        bgButton={colors.brown}
        colorText={colors.white}
        press={createReport}
        widthButton="90%"
      />
      {showCamera && (
        <View style={styles.containerCamera}>
          <RNCamera
            style={styles.preview}
            type={type}
            flashMode={RNCamera.Constants.FlashMode.on}
            androidCameraPermissionOptions={{
              title: 'Permission to use camera',
              message: 'We need your permission to use your camera',
              buttonPositive: 'Ok',
              buttonNegative: 'Cancel',
            }}>
            {({camera, status}) => {
              if (status !== 'READY') return <Text>Waiting</Text>;
              return (
                <View style={styles.containerButtonsCamera}>
                  {type === RNCamera.Constants.Type.back ? (
                    <CustonButton
                      text="front"
                      bgButton={colors.brown}
                      colorText={colors.white}
                      press={() => setType(RNCamera.Constants.Type.front)}
                      widthButton="30%"
                    />
                  ) : (
                    <CustonButton
                      text="back"
                      bgButton={colors.brown}
                      colorText={colors.white}
                      press={() => setType(RNCamera.Constants.Type.back)}
                      widthButton="30%"
                    />
                  )}
                  <CustonButton
                    text="Capture"
                    bgButton={colors.brown}
                    colorText={colors.white}
                    press={() => takePicture(camera)}
                    widthButton="30%"
                  />
                </View>
              );
            }}
          </RNCamera>
        </View>
      )}
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
  buttonPhoto: {
    marginBottom: sizes.margin,
    backgroundColor: colors.brown,
    width: '30%',
    alignSelf: 'center',
    padding: sizes.padding,
    borderRadius: sizes.borderRadius,
  },
  containerCamera: {
    flex: 1,
    backgroundColor: 'white',
    width: '100%',
    height: '60%',
    alignSelf: 'center',
    position: 'absolute',
    bottom: 0,
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  capture: {
    flex: 0,
    backgroundColor: colors.brown,
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
  containerButtonsCamera: {
    flex: 0,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default CreateReportScreen;
