import { StatusBar } from 'expo-status-bar';
import { Modal } from 'react-native';
import { CheckCircle } from '../Icons/CheckCircle';
import { Text } from '../Text';
import { Container, OkButtom } from './styles';

interface OrderConfirmedModalProps {
  visible: boolean;
  onOk: () => void;
}

export function OrderConfirmedModal({ visible, onOk }: OrderConfirmedModalProps) {
  return (
    <Modal
      visible={visible}
      animationType='fade'
    >
      <StatusBar style='light' />

      <Container>
        <CheckCircle />

        <Text size={20} weight='600' color='#FFF' style={{ marginTop: 12 }}>
          Pedido confirmado
        </Text>
        <Text color='#FFF' opacity={0.9} style={{ marginTop: 4 }}>
          O pedido já entrou na fila de produção!
        </Text>

        <OkButtom onPress={onOk}>
          <Text color='#D73035' weight='600'>
            OK
          </Text>
        </OkButtom>
      </Container>
    </Modal>
  );
}
