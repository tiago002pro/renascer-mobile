import { useEffect, useState } from "react";
import { View } from "react-native";
import { Box, Button, ScrollView, VStack } from "native-base";
import { Masks } from "react-native-mask-input";
import { showMessage } from "react-native-flash-message";
import { ActivityIndicator } from "react-native-paper";

import AddressService from "../service/AddressService";

import InputTextComponent from "../../components/InputText";

import { THEME } from "../../../styles/theme";
import { styles } from "../styles/AddressData";

export function AddressData({ navigation, route }) {
  const [showDataAddress, setShowDataAddress] = useState(false);
  const [loading, setLoading] = useState(false);

  const [id, setId] = useState(null);
  const [country, setCountry] = useState(null);
  const [zipCode, setZipCode] = useState(null);
  const [publicPlace, setPublicPlace] = useState(null);
  const [number, setNumber] = useState(null);
  const [complement, setComplement] = useState(null);
  const [neighborhood, setNeighborhood] = useState(null);
  const [city, setCity] = useState(null);
  const [state, setState] = useState(null);

  useEffect(() => {
    if (route.params?.person) {
      const address = route.params?.person?.address

      setId(address?.id)
      setCountry(address?.country)
      setZipCode(address?.zipCode)
      setPublicPlace(address?.publicPlace)
      setNumber(address?.number)
      setComplement(address?.complement)
      setNeighborhood(address?.neighborhood)
      setCity(address?.city)
      setState(address?.state)

      if (zipCode) {
        setShowDataAddress(true)
      }
    }
  }, [route.params?.person])

  useEffect(() => {
    async function validateZipCode() {
      if (zipCode) {
        const replaceZipCode = zipCode.replace(/-/, '')
        if (replaceZipCode && replaceZipCode.length == 8) {
          await getAddress(replaceZipCode)
        }
      }
    }
    validateZipCode()
  }, [zipCode])

  async function getAddress(replaceZipCode) {
    setLoading(true)
    const addressData = await AddressService.getAddressByCep(replaceZipCode)
    setPublicPlace(addressData.logradouro)
    setNeighborhood(addressData.bairro)
    setCity(addressData.localidade)
    setState(addressData.uf)
    setShowDataAddress(true)
    setLoading(false)
  }

  async function save() {
    const address = { id, country, zipCode, publicPlace, number, complement, neighborhood, city, state }
    await AddressService.update(address).then(() => {
      showMessage({
        message: "Salvo com sucesso",
        type: "success",
      })
      navigation.goBack()
    }).catch(() => {
      showMessage({
        message: "Algo deu errado",
        type: "warning",
      })
    })
  }

  return (
    <VStack style={styles.container}>
      <ScrollView>
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

        {loading ?
          <Box mt={20}>
            <ActivityIndicator size={"large"} color={THEME.colors.yellow[500]} />
          </Box>
          : null 
        }   

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
          : null
        }
      </ScrollView>
    </VStack>
  );
}