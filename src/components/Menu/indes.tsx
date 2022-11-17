import { FlatList } from 'react-native';

import { products } from '../../mocks/products';
import { Text } from '../Text';
import { PlusCircle } from '../Icons/PlusCircle';

import { formatCurrency } from '../../utils/formatCurrency';

import { ProductImage,
  Product,
  ProductDetais,
  Separator,
  AddToCardButton,
} from './styles';

export function Menu(){
  return (
    <FlatList
      data={products}
      style={{ marginTop: 32 }}
      ItemSeparatorComponent={Separator}
      contentContainerStyle={{ paddingHorizontal: 24 }}
      keyExtractor={product => product._id}
      renderItem={({item: product}) => (
        <Product>
          <ProductImage
            source={{
              uri: `http://192.168.0.103:3002/uploads/${product.imagePath}`
            }}
          />

          <ProductDetais>
            <Text weight='600'>{product.name}</Text>
            <Text size={14} color='#666' style={{ marginVertical: 8 }}>
              {product.description}
            </Text>
            <Text size={14} weight='600'>{formatCurrency(product.price)}</Text>
          </ProductDetais>

          <AddToCardButton>
            <PlusCircle />
          </AddToCardButton>

        </Product>
      )}
    />
  );
}
