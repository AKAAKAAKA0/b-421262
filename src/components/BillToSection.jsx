
import React from 'react';
import FloatingLabelInput from './FloatingLabelInput';
import { t } from '../utils/translate';

const BillToSection = ({ billTo, handleInputChange }) => {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-semibold mb-4">{t("Bill To")}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <FloatingLabelInput
          id="billToName"
          label={t("Name")}
          value={billTo.name}
          onChange={handleInputChange}
          name="name"
        />
        <FloatingLabelInput
          id="billToPhone"
          label={t("Phone")}
          value={billTo.phone}
          onChange={handleInputChange}
          name="phone"
        />
      </div>
      <FloatingLabelInput
        id="billToAddress"
        label={t("Address")}
        value={billTo.address}
        onChange={handleInputChange}
        name="address"
        className="mt-4"
      />
    </div>
  );
};

export default BillToSection;
