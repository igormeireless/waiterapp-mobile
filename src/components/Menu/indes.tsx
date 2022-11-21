import { useState } from 'react';
import { FlatList } from 'react-native';

import { Text } from '../Text';
import { PlusCircle } from '../Icons/PlusCircle';
import { ProductModal } from '../ProductModal';

import { formatCurrency } from '../../utils/formatCurrency';

import { ProductImage,
  ProductContainter,
  ProductDetais,
  Separator,
  AddToCardButton,
} from './styles';
import { Product } from '../../types/Product';

interface MenuProps {
  onAddToCart: (product: Product) => void;
  products: Product[];
}

export function Menu({ onAddToCart, products }: MenuProps){
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [seletedProduct, setSelectedProduct] = useState<Product | null>(null);

  function handleOpenModal(product: Product) {
    setIsModalVisible(true);
    setSelectedProduct(product);
  }

  return (
    <>
      <ProductModal
        visible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        product={seletedProduct}
        onAddToCart={onAddToCart}
      />

      <FlatList
        data={products}
        style={{ marginTop: 32 }}
        ItemSeparatorComponent={Separator}
        contentContainerStyle={{ paddingHorizontal: 24 }}
        keyExtractor={product => product._id}
        renderItem={({item: product}) => (
          <ProductContainter onPress={() => handleOpenModal(product)}>
            <ProductImage
              source={{
                uri: `http://192.168.0.103:3001/uploads/${product.imagePath}`
              }}
            />

            <ProductDetais>
              <Text weight='600'>{product.name}</Text>
              <Text size={14} color='#666' style={{ marginVertical: 8 }}>
                {product.description}
              </Text>
              <Text size={14} weight='600'>{formatCurrency(product.price)}</Text>
            </ProductDetais>

            <AddToCardButton onPress={() => onAddToCart(product)}>
              <PlusCircle />
            </AddToCardButton>

          </ProductContainter>
        )}
      />
    </>
  );
}
