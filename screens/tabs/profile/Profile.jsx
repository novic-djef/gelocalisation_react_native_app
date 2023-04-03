
  import React, {useState, useMemo} from 'react';
  import {
    StyleSheet,
    SafeAreaView,
    ScrollView,
    View,
    Text,
    Image,
    TouchableOpacity,
    Switch,
    Modal,
    Button,
  } from 'react-native';
  import FeatherIcon from 'react-native-vector-icons/Feather';
  import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

  
  const SECTIONS = [
    {
      header: 'Preferences',
      icon: 'settings',
      items: [
        { label: 'Langue', value: 'Francais', type: 'input' },
        { label: 'Dark Mode', value: false, type: 'boolean' },
        // { label: 'Use Wi-Fi', value: true, type: 'boolean' },
        { label: 'Localisation', value: 'Akwa, Daouala, CAM', type: 'input' },
        { label: 'Notifications', type: 'input', path: './Notifications' },
        { label: 'Historique', type: 'input' },
        { label: 'A Propos', type: 'input' },
      ],
    },
    {
      header: 'Mes Goupes',
      icon: 'help-circle',
      items: [
        { label: 'Goupe 1', type: 'link'  },
        { label: 'Goupe 2', type: 'input', value: 'Value' },
        { label: 'Goupe 3', type: 'input', },
        { label: 'Goupe 4', type: 'input', value: 'Value' },
        { label: 'Goupe 5', type: 'link' },
      ],
    },
    {
      header: 'Gestion Credit',
      icon: 'align-center',
      items: [
        {  label: 'Transaction 001', value: "vous avez effecturer un demande de credit de 1.000.000 au pres de iLink-World",  type: 'link' },
        {  label: 'Transaction 002', value: "vous avez effecturer un demande de credit de 1.000.000 au pres de iLink-World", type: 'link', },
        {  label: 'Transaction 003', value: "vous avez effecturer un demande de credit de 1.000.000 au pres de iLink-World", type: 'link' },
        {  label: 'Transaction 004', value: "vous avez effecturer un demande de credit de 1.000.000 au pres de iLink-World", type: 'link'},
        {  label: 'Transaction 005', value: "vous avez effecturer un demande de credit de 1.000.000 au pres de iLink-World", type: 'link' },
      ],
    },
  ];
  
  
  export default function Profile() {
    const [value, setValue] = useState(0);
    const [active , setactive] = useState(false);

    const { tabs, items } = useMemo(() => {
      return {
        tabs: SECTIONS.map(({ header, icon }) => ({
          name: header,
          icon,
        })),
        items: SECTIONS[value].items,
      };
    }, [value]);


    return (
      <SafeAreaView style={{ backgroundColor: '#f8f8f8', flex: 1 }}>
        <ScrollView contentContainerStyle={styles.container}>
          {/* <View style={styles.header}>
            <Text style={styles.title}>Settings</Text>
  
            <Text style={styles.subtitle}>
              Lorem ipsum dolor sit amet consectetur.
            </Text>
          </View> */}
  
          <View style={styles.profile}>
            <View style={styles.profileHeader}>
              <Image
                alt=""
                source={{
                  uri: 'https://avatars.githubusercontent.com/u/91409096?v=4',
                }}
                style={styles.profileAvatar}
              />
  
              <View style={styles.profileBody}>
                <Text style={styles.profileName}>Novic Tonleu</Text>
                <Text style={styles.profileHandle}>Agent (iLink-World)</Text>
                <Text style={styles.profileHandle}>Tfs4yR9qa</Text>
              </View>

              <MaterialCommunityIcons name="power-settings" color="red" size={35} style={styles.power} />
              <TouchableOpacity 
                onPress={() => { console.log("vous etes maintenant deconnecté") }}
              >
              <Text style={styles.powertitle}>Deconnexion</Text>
              </TouchableOpacity>
              <Text style={styles.profileHandleEmail}>nmelataguia@ilink-app.com</Text>
            </View>
            <View style={styles.container}>
            <Modal
        animationType="slide"
        transparent={true}
        visible={active}
        onRequestClose={() => {
          console.warn("closed");
        }}
        >
          <View style={styles.container}>
  
            <View style={styles.View}>
          
            <Text style={styles.text}>Information sur mon compte</Text>
            <View style={{
              flex: 1,
              display: "flex",
              justifyContent: "flex-start",
              alignItems: 'flex-start',

            }}>
            <Text style={{display: "flex", alignItems: "flex-start"}}>Nom: </Text>
            <Text>Telephone: </Text>
            <Text>Nom: </Text>
            <Text>code Menbre: </Text>
            <Text>Adress Mail: </Text>
            </View>
            <Button title="close" 
                    onPress={()=>{setactive(!active)}}/>
            </View>
          </View>
        </Modal>
       
            <TouchableOpacity
                onPress={()=>{setactive(!active)}}
              >
              <View style={styles.profileAction}>
                <Text style={styles.profileActionText}>Modifier profile</Text>
  
                <FeatherIcon color="#fff" name="edit-3" size={16} />
              </View>
            </TouchableOpacity>
            </View>
          </View>
  
          <View style={styles.content}>
            <View style={styles.tabs}>
              {tabs.map(({ name, icon }, index) => {
                const isActive = index === value;
  
                return (
                  <View
                    key={name}
                    style={[
                      styles.tabWrapper,
                      isActive && { borderBottomColor: '#6366f1' },
                    ]}>
                    <TouchableOpacity
                      onPress={() => {
                        setValue(index);
                      }}>
                      <View style={styles.tab}>
                        <FeatherIcon
                          color={isActive ? '#6366f1' : '#6b7280'}
                          name={icon}
                          size={16}
                        />
  
                        <Text
                          style={[
                            styles.tabText,
                            isActive && { color: '#6366f1' },
                          ]}>
                          {name}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                );
              })}
            </View>
  
            {items.map(({ path, label, type, value }, index) => {
              return (
                <View
                  key={label}
                  style={[
                    styles.rowWrapper,
                    index === 0 && { borderTopWidth: 0 },
                  ]}>
                  <TouchableOpacity
                    onPress={() => {
                        {path}
                        console.log("Route disposible")
                    }}>
                    <View style={styles.row}>
                      <Text style={styles.rowLabel}>{label}</Text>
  
                      <View style={styles.rowSpacer} />
  
                      {type === 'input' && (
                        <Text style={styles.rowValue}>{value}</Text>
                      )}
  
                      {type === 'boolean' && (
                        <Switch trackColor={{ true: '#007bff' }} value={value} />
                      )}
  
                      {(type === 'input' || type === 'link') && (
                        <FeatherIcon
                          color="#7f7f7f"
                          name="chevron-right"
                          size={20}
                        />
                      )}
                    </View>
                  </TouchableOpacity>
                </View>
              );
            })}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor : "black",
      alignItems: 'center',
      justifyContent: 'center',
    },
    // header: {
    //   paddingLeft: 24,
    //   paddingRight: 24,
    //   marginBottom: 12,
    // },
    // title: {
    //   fontSize: 12,
    //   fontWeight: '700',
    //   color: '#1d1d1d',
    //   marginBottom: 3,
    // },
    // subtitle: {
    //   fontSize: 15,
    //   fontWeight: '500',
    //   color: '#929292',
    // },
    View : {
      backgroundColor : "white" ,
      height : 200 ,
      width : 330,
      borderRadius : 15,
      display: "flex",
      alignItems : "center",
      justifyContent : "center",
      borderColor : "green",
      borderWidth:1,
    },
    text : {
      fontSize : 17,
      color : "green",
      marginBottom: 15,
    },
    button : {
      margin : 20,
      width:200,
    },
    profile: {
      paddingTop: 12,
      paddingHorizontal: 24,
      paddingBottom: 24,
      backgroundColor: '#fff',
      borderTopWidth: 1,
      borderBottomWidth: 1,
      borderColor: '#e3e3e3',
    },
    profileHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
    profileAvatar: {
      width: 80,
      height: 80,
      borderRadius: 9999,
      borderWidth: 1,
      borderColor: '#ccc',
      marginRight: 12,
    },
    profileName: {
      fontSize: 17,
      fontWeight: '600',
      color: '#3d3d3d',
    },
    profileHandle: {
      marginTop: 4,
      fontSize: 15,
      color: '#989898',
    },
    profileAction: {
      marginTop: 16,
      paddingVertical: 10,
      paddingHorizontal: 16,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#007bff',
      borderRadius: 12,
    },
    profileActionText: {
      marginRight: 8,
      fontSize: 15,
      fontWeight: '600',
      color: '#fff',
    },
    tabs: {
      padding: 16,
      flexDirection: 'row',
    },
    tab: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 10,
      paddingBottom: 10,
      position: 'relative',
      overflow: 'hidden',
    },
    tabWrapper: {
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: 0,
      borderColor: '#e5e7eb',
      borderBottomWidth: 2,
    },
    tabText: {
      fontSize: 13,
      fontWeight: '600',
      color: '#6b7280',
      marginLeft: 5,
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      height: 50,
      paddingLeft: 24,
      paddingRight: 24,
    },
    rowWrapper: {
      borderTopWidth: 1,
      borderColor: '#e3e3e3',
    },
    rowLabel: {
      fontSize: 17,
      fontWeight: '500',
      color: '#2c2c2c',
    },
    rowValue: {
      fontSize: 15,
      fontWeight: '500',
      color: '#7f7f7f',
      marginRight: 4,
    },
    rowSpacer: {
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: 0,
    },
    container: {
      paddingVertical: 24,
    },
    content: {
      backgroundColor: '#fff',
      borderBottomWidth: 1,
      borderColor: '#e3e3e3',
    },
    power: {
      position: "absolute",
      left: 296,
      marginTop: 18,
      top: -10,
      
    },
    powertitle: {
      left: 40,
      fontSize: 17,
      fontWeight: 700,
      marginBottom: -54,
      color: 'red',
      
    },
    profileHandleEmail: {
      position: 'absolute',
      left: 80,
      top: 96,
      color: "#000",
      fontSize: 16,

    }
  });