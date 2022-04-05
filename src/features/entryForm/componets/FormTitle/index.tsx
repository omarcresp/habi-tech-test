import React, {FC} from 'react';

import './index.css';

const FormTitle: FC = ({ children }) => {
  return (
    <h4 className="form-title">{children}</h4>
  );
};

export default FormTitle;
