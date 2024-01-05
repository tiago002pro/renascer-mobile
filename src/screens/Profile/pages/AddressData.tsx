import { useEffect, useState } from "react";
import { View } from "react-native";
import { Box, Button } from "native-base";
import { Masks } from "react-native-mask-input";

import { getAddressByCep } from "../../../services/ProfileService";
import { THEME } from "../../../styles/theme";
import { styles } from "../styles/AddressData";
import InputTextComponent from "../../components/InputText";

export function AddressData() {
  const [showDataAddress, setShowDataAddress] = useState(false);

  const [country, setCountry] = useState(null);
  const [zipCode, setZipCode] = useState('');
  const [publicPlace, setPublicPlace] = useState('');
  const [number, setNumber] = useState('');
  const [complement, setComplement] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');

  async function save() {
    console.log("AddressData", {country, zipCode, publicPlace, number, complement, neighborhood, city, state});
  }

  async function getAddress() {
    const address = await getAddressByCep(zipCode)
    setPublicPlace(address.logradouro)
    setNeighborhood(address.bairro)
    setCity(address.localidade)
    setState(address.uf)
    setShowDataAddress(true)
  }

  useEffect(() => {
    async function validateZipCode() {
      if (zipCode.length == 9) {
        await getAddress()
      }
    }
    validateZipCode()
  }, [zipCode])

  return (
    <View style={styles.container}>
      <Box style={styles.inputArea}>
        <InputTextComponent
          label={'País'}
          valiable={country}
          setValiable={setCountry}
        />
      </Box>

      <Box style={styles.inputArea}>
        <InputTextComponent
          label={'CEP'}
          valiable={zipCode}
          setValiable={setZipCode}
          mask={Masks.ZIP_CODE}
          type={'numeric'}
        />
      </Box>

      {showDataAddress ? 
        <View>
          <Box style={styles.inputArea}>
            <InputTextComponent
              label={'Endereço'}
              valiable={publicPlace}
              setValiable={setPublicPlace}
            />
          </Box>

          <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'}>
            <Box style={styles.inputArea} w={'48%'}>
              <InputTextComponent
                label={'Nº'}
                valiable={number}
                setValiable={setNumber}
              />
            </Box>

            <Box style={styles.inputArea} w={'48%'}>
              <InputTextComponent
                label={'Complemento'}
                valiable={complement}
                setValiable={setComplement}
              />
            </Box>
          </Box>

          <Box style={styles.inputArea}>
            <InputTextComponent
              label={'Bairro'}
              valiable={neighborhood}
              setValiable={setNeighborhood}
            />
          </Box>

          <Box display={'flex'} flexDirection={'row'} justifyContent={'space-between'}>
            <Box style={styles.inputArea} w={'48%'}>
              <InputTextComponent
                label={'Cidade'}
                valiable={city}
                setValiable={setCity}
              />
            </Box>

            <Box style={styles.inputArea} w={'48%'}>
              <InputTextComponent
                label={'UF'}
                valiable={state}
                setValiable={setState}
              />
            </Box>

          </Box>
        </View>
        : null
      }

      <Box mt={5}>
        <Button
          onPress={save}
          backgroundColor={THEME.colors.white}
          _text={{
            color: THEME.colors.backgroud,
          }}
        >
          Salvar
        </Button>
      </Box>
    </View>
  );
}