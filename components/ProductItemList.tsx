import { Text } from 'react-native';

export default function ProductItemList({product}) {
    return (
        <Text>
            {product.name}
        </Text>
    )
}