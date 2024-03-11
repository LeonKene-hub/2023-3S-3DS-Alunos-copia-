import {
  AppointmentContent,
  ModalContent,
  TextModal,
  ModalImage,
  RowTextModal,
} from "./style";
import { Modal } from "react-native";

import { Title } from "../Title/Style";
import { ButtonModal, ButtonCancel } from "../Button/Style";
import { ButtonTitle, ButtonSecondaryTitle } from "../ButtonTitle/Style";

const AppointmentModal = ({
  situacao,
  visible,
  navigation,
  setShowModalAppointment,
  typeProfile = "paciente",
  ...rest
}) => {

  async function handleClose( screen ){
    await setShowModalAppointment(false)

    navigation.replace( screen )
  }

  return (
    <Modal {...rest} visible={visible} transparent={true} animationType="fade">
      <AppointmentContent>
        <ModalContent>
          <ModalImage
            source={require("../../../assets/profileLargeDoctor.png")}
          />

          <Title>Dr. Claudio</Title>

          <RowTextModal>
            <TextModal>Clinico Geral</TextModal>

            <TextModal>CRM-15286</TextModal>
          </RowTextModal>

          {situacao !== "pendente" ? (
            <ButtonModal onPress={ () => handleClose("Medico Prontuario") } >
              <ButtonTitle>Inserir prontuário </ButtonTitle>
            </ButtonModal>
          ) : (
            <ButtonModal onPress={ () => handleClose("Local consulta") }>
              <ButtonTitle>Ver local da consulta </ButtonTitle>
            </ButtonModal>
          )}

          <ButtonCancel onPress={() => setShowModalAppointment(false)}>
            <ButtonSecondaryTitle>Cancelar</ButtonSecondaryTitle>
          </ButtonCancel>

        </ModalContent>
      </AppointmentContent>
    </Modal>
  );
};

export default AppointmentModal;
