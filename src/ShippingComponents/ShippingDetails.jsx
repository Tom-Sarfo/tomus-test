import React from "react";
import SelectCountryInput from "./SelectCountryInput";
import TextInput from "./TextInput";
import MultiLineInput from "./MultiLineInput";

export default function ShippingDetails({shippingMethod}) {
  const ShippingDetails = {
    styles:
      "w-full my-4 flex flex-col py-4 px-4",
  };

  const fieldName = ["full Name", "email address", "phone"];
  return (
    <div className={ShippingDetails.styles}>
      {shippingMethod == "Deliver to my location" ? (
        <div>
          <form action="">
            <SelectCountryInput />
            {fieldName.map((field, index) => (
              <TextInput key={index} fieldName={field} />
            ))}
            <MultiLineInput />
          </form>
        </div>
      ) : (
        <div>
          <form action="">
          {fieldName.map((field, index) => (
              <TextInput key={index} fieldName={field} />
            ))}
          </form>
        </div>
      )}
    </div>
  );
}
