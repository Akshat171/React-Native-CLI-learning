/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React, {useState} from 'react';
// import FlatCards from './components/FlatCards';
// import ElevatedCards from './components/ElevatedCards';
// import FancyCards from './components/FancyCards';
// import ActionCard from './components/ActionCard';
// import ContactList from './components/ContactList';
import * as Yup from 'yup';
const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(4, 'Should be min of 4 characters')
    .max(16, 'Should be max of 16 characters')
    .required('Length is required'),
});

const App = () => {
  const [password, setpassword] = useState('');
  const [isPassGenerated, setIsPassGenerated] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [lowerCase, setLowerCase] = useState(false);
  const [upperCase, setUpperCase] = useState(false);
  const [symbols, setSymbols] = useState(false);

  const generatePasswordString = (passwordLength: number) => {
    let characterList = '';

    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const digitChars = '0123456789';
    const specialChars = '!@#$%^&*()_+';

    if (upperCase) {
      characterList += upperCase;
    }

    if (lowerCase) {
      characterList += lowerCase;
    }

    if (numbers) {
      characterList += numbers;
    }

    if (symbols) {
      characterList += symbols;
    }

    const passwordResult = createPassword(characterList, passwordLength);
  };

  const createPassword = (characters: string, passwordLength: number) => {
    let result = '';
    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characters.length);
      result += characters.charAt(characterIndex);
    }
    return result;
  };

  const resetPasswordState = () => {
    //
  };

  return (
    <SafeAreaView>
      <ScrollView>
        {/* <FlatCards /> */}
        {/* <ElevatedCards /> */}
        {/* <FancyCards /> */}
        {/* <ActionCard /> */}
        {/* <ContactList /> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
