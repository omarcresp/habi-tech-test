
import inputFactory from '../../factories/inputFactory';

const PersonalInfo = inputFactory({
  nodeName: 'Personal Info',
  title: 'Enter you personal info',
  form: [
    {id: 'name', label: 'Nombre', placeholder: 'Frailejon Ernesto Perez'},
    {id: 'email', label: 'Correo', placeholder: 'frailejon@colombia.com'},
    {id: 'dni', label: 'Cedula', placeholder: '1', type: 'number'},
  ],
});

export default PersonalInfo;
