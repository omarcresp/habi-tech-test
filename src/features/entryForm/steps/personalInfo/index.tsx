
import inputFactory from '../../factories/inputFactory';

const PersonalInfo = inputFactory({
  nodeName: 'Personal Info',
  title: 'Ingresa tu informacion personal',
  form: [
    {id: 'name', label: 'Nombre', placeholder: 'Frailejon Ernesto Perez'},
    {id: 'email', label: 'Correo', placeholder: 'frailejon@colombia.com', type: 'email'},
    {id: 'dni', label: 'Cedula', placeholder: '1', type: 'number'},
  ],
});

export default PersonalInfo;
