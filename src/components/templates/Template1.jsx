
import React from 'react';
import BaseTemplate from './BaseTemplate';
import { formatCurrency } from '../../utils/formatCurrency';
import { t } from '../../utils/translate';

const Template1 = ({ data }) => {
  const { billTo, shipTo, invoice, yourCompany, items, taxPercentage, taxAmount, subTotal, grandTotal, notes } = data;

  return (
    <BaseTemplate data={data}>
      <div className="bg-white p-8 max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div className="text-right">
            <h2 className="text-3xl font-semibold">{t("INVOICE")}</h2>
          </div>
        </div>

        <div className="flex justify-between mb-12">
          <div>
            <h1 className="text-2xl font-bold">{yourCompany.name}</h1>
            <p>{yourCompany.address}</p>
            <p>{yourCompany.phone}</p>
          </div>
          <div>
            <p>{t("Invoice Number")}: {invoice.number}</p>
            <p>{t("Invoice Date")}: {invoice.date}</p>
            <p>{t("Due Date")}: {invoice.paymentDate}</p>
          </div>
        </div>

        <div className="flex justify-between mb-8">
          <div>
            <h3 className="font-semibold">{t("Bill To")}:</h3>
            <p>{billTo.name}</p>
            <p>{billTo.address}</p>
            <p>{billTo.phone}</p>
          </div>
          <div>
            <h3 className="font-semibold">{t("Ship To")}:</h3>
            <p>{shipTo.name}</p>
            <p>{shipTo.address}</p>
            <p>{shipTo.phone}</p>
          </div>
        </div>

        <table className="w-full mb-8">
          <thead>
            <tr className="border-t border-b bg-gray-100">
              <th className="p-2 text-left">{t("Item")}</th>
              <th className="p-2 text-center">{t("Quantity")}</th>
              <th className="p-2 text-right">{t("Unit Price")}</th>
              <th className="p-2 text-right">{t("Total")}</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index} className="border-t-2 border-b-2 border-gray-800">
                <td className="p-2">
                  {item.name}
                  <div className="text-sm text-gray-500">
                    {item.description}
                  </div>
                </td>
                <td className="p-2 text-right">{item.quantity}</td>
                <td className="p-2 text-right">
                  {formatCurrency(item.amount)}
                </td>
                <td className="p-2 text-right">
                  {formatCurrency(item.total)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-end">
          <div className="w-1/3">
            <div className="flex justify-between mb-2">
              <span>{t("Subtotal")}:</span>
              <span>{formatCurrency(subTotal)}</span>
            </div>
            {taxPercentage > 0 && (
              <div className="flex justify-between mb-2">
                <span>{t("Tax")} ({taxPercentage}%):</span>
                <span>{formatCurrency(taxAmount)}</span>
              </div>
            )}
            <div className="flex justify-between font-bold">
              <span>{t("Total")}:</span>
              <span>{formatCurrency(grandTotal)}</span>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="font-semibold mb-2">{t("Notes")}:</h3>
          <p>{notes}</p>
        </div>
      </div>
    </BaseTemplate>
  );
};

export default Template1;
