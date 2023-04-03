
import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const INPUT_OFFSET = 60;


export default function Inscription({navigation}) {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#3498db' }}>
      <View style={styles.container}>
        <View style={styles.header}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("HomeScreen")
              }}
            >
          <View style={styles.headerIcon}>
            <FeatherIcon color="#075eec" name="back" size={24} />
          </View>
          </TouchableOpacity>
                        <View style={styles.logoContaner}>
                           <Image style={styles.logo} source={require('./../../datas/img/icon3.png')}/>
                      </View>
          {/* <Text style={styles.title}>
            Welcome to <Text style={{ color: '#0742fc' }}>RealApps</Text>
          </Text> */}


          <Text style={styles.subtitle}>Entrez les informations demandé </Text>
        </View>

        <View style={styles.form}>
        <View style={styles.input}>
            <Text style={styles.inputLabel}>
            <MaterialCommunityIcons
                  color="#000"
                  name="face-recognition"
                  size={22}
                  style={{ marginRight: 12 }}
                />
            </Text>

            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              //keyboardType="Role"
              onChangeText={email => setForm({ ...form, email })}
              placeholder="Entrer votre nom"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
              value={form.email}
            />
          </View>
          <View style={styles.input}>
            <Text style={styles.inputLabel}>
            <MaterialCommunityIcons
                  color="#000"
                  name="face-recognition"
                  size={22}
                  style={{ marginRight: 12 }}
                />
            </Text>

            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="name"
              onChangeText={name => setForm({ ...form, name })}
              placeholder="Entrer votre Adresse  de localisation"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
              value={form.adress}
            />
          </View>
          <View style={styles.input}>
            <Text style={styles.inputLabel}>
            <MaterialCommunityIcons
                  color="#000"
                  name="city"
                  size={22}
                  style={{ marginRight: 12 }}
                />
            </Text>

            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="name"
              onChangeText={name => setForm({ ...form, name })}
              placeholder="Entrer votre Pays"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
              value={form.pays}
            />
          </View>
         
          <View style={styles.input}>
            <Text style={styles.inputLabel}>
            <MaterialCommunityIcons
                  color="#000"
                  name="face-recognition"
                  size={22}
                  style={{ marginRight: 12 }}
                />
            </Text>

            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="Adress-Email"
              onChangeText={email => setForm({ ...form, email })}
              placeholder="Entrer votre Adresse Email"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
              value={form.email}
            />
          </View>
        {/* <View style={styles.input}>
            <Text style={styles.inputLabel}>
             +237 |
                </Text>

            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="number"
              onChangeText={number => setForm({ ...form, number })}
              placeholder="Entrer votre numero de telephone"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
              value={form.number}
            />
          </View> */}
        

          <View style={styles.input}>
            <Text style={styles.inputLabel}>
            <MaterialCommunityIcons
                  color="#000"
                  name="face-recognition"
                  size={22}
                  style={{ marginRight: 12 }}
                />
            </Text>

            <TextInput
              autoCorrect={false}
              onChangeText={password => setForm({ ...form, password })}
              placeholder="entrer votre mot de passe"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
              secureTextEntry={true}
              value={form.password}
            />
          </View>
          <View style={styles.input}>
            <Text style={styles.inputLabel}>
            <MaterialCommunityIcons
                  color="#000"
                  name="face-recognition"
                  size={22}
                  style={{ marginRight: 12 }}
                />
            </Text>

            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="Reseau"
              onChangeText={Reseau => setForm({ ...form, Reseau })}
              placeholder="Choisir un reseau: (Nano-Santé)"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
              value={form.email}
            />
          </View>

          <View style={styles.formAction}>
            <TouchableOpacity
              onPress={() => {
                // navigation.navigate('inscription')
              }}>
              <View style={styles.btn}>
              <MaterialCommunityIcons
                  color="#000"
                  name="face-recognition"
                  size={22}
                  style={{ marginRight: 12 }}
                />
                <Text style={styles.btnText}>Creer mon Compte</Text>
              </View>
            </TouchableOpacity>

            <View style={styles.formActionSpacer} />

           
          </View>

          <Text style={styles.formFooter}>
            vous connecter permet de benficier des services offert
            <Text style={{ fontWeight: '600' }}> Terme & Conditions </Text>
            
            <Text style={{ fontWeight: '600', color: 'blue' }}> Privacy Policy</Text>.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  header: {
    marginVertical: 36,
    marginBottom: 6,
  },
  headerIcon: {
    alignSelf: 'flex-start',
    top: -48,
    right: 12,
    width: 40,
    height: 40,
    marginBottom: -16,
    backgroundColor: '#fff',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContaner: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: -65,
},
logo: {
    width: 320,
    resizeMode: "contain",
    top: -55,
},
  title: {
    fontSize: 27,
    fontWeight: '700',
    color: '#1d1d1d',
    marginBottom: 6,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#ccc',
    textAlign: 'center',
    top: -15
  },
  form: {
    marginBottom: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  formAction: {
    marginVertical: 24,
  },
  formActionSpacer: {
    marginVertical: 8,
  },
  formFooter: {
    marginBottom: 30,
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '400',
    color: '#ccc',
    textAlign: 'center',
  },
  input: {
    marginBottom: 16,
  },
  inputControl: {
    height: 44,
    backgroundColor: '#fff',
    paddingLeft: INPUT_OFFSET,
    paddingRight: 24,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
  },
  inputLabel: {
    position: 'absolute',
    width: INPUT_OFFSET,
    lineHeight: 44,
    top: 0,
    left: 0,
    bottom: 0,
    marginHorizontal: 12,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 13,
    fontWeight: '500',
    color: '#c0c0c0',
    zIndex: 9,
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: '#000',
    borderColor: '#000',
  },
  btnText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '600',
    color: '#fff',
  },
  btnSecondary: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: 'transparent',
    borderColor: '#000',
  },
  btnSecondaryText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '600',
    color: '#000',
  },
});