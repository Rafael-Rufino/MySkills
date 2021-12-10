import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Platform,
  FlatList,

  
} from 'react-native';
import {Button} from '../components/Button';
import {SkillCard} from '../components/SkillCard';
interface SkillData {
  id: string;
  name: string;
  
}
export const Home = () => {
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState<SkillData[]>([]);
  const [greenting, setGreenting] = useState('');

  
  function handleAddNewSkill() {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill,
    }
    setMySkills(oldState => [...oldState, data]);
  }

  function handleRemoveSkill(id: string){
    setMySkills(oldState => oldState.filter(
      skill => skill.id !== id
    ))
  }

  useEffect(() => {
    const currentHors = new Date().getHours();
    if(currentHors < 12){
      setGreenting('Good morning')
    }else if(currentHors >= 12 && currentHors < 18 ){
      setGreenting('Good afternoon')
    }else{
      setGreenting('Good night')
    }

  },[mySkills])
  return (
    <View style={styles.container}>
      
       <Text style={styles.text}>Welcome, Rafael</Text>
      <Text style={styles.greentings}>
        {greenting}
      </Text>
      <Text style={styles.title}>Escreva sua menssagem?</Text>
      <TextInput
        style={styles.input}
        placeholder="Escreva menssagem"
        placeholderTextColor="#555"
        onChangeText={setNewSkill}
      />

      <Button 
          onPress={handleAddNewSkill}
          title={'Adicionar'}
       />
      <Text 
        style={[styles.title, {marginVertical: 50, color:'yellow'}]}
      >
        My Skills
      </Text>

      <FlatList
        data={mySkills}
        keyExtractor={item => item.id}
        renderItem={({item}) => <SkillCard skill={item.name} 
        onPress={() => handleRemoveSkill(item.id)}
        />
      }
      />
      {/* mySkills.map(skill => (
          <SkillCard key={skill} skill={skill} />
        )) */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingHorizontal: 30,
    paddingVertical: 70,
  },
  title: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1F1e25',
    color: 'white',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 7,
  },
  greentings:{
    color: "#fff",
    fontSize: 20,
    marginBottom: 22,
  },
  text:{
    fontSize: 28,
    color: "#fff",
  }
});

// ScrollView ele rederiza todos os items da lista
// FlatList ele é mais peformatico devido so rederizar a quantidade
//de elementos que puder ser visualizado em tela por vez
