
import inputFactory from '../../factories/inputFactory';

const HouseInfo = inputFactory({
  nodeName: 'House Info',
  title: 'Ingresa la informacion de tu casa',
  form: [
    {id: 'address', label: 'Direccion', placeholder: 'kr 14 # 149 - 75'},
    {id: 'price', label: 'Precio de venta', placeholder: '$300.000.000 COP', type: 'number'},
    {id: 'floor', label: 'Piso', placeholder: '1', type: 'number'},
  ],
});

export default HouseInfo;
