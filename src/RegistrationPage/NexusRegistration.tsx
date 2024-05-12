import { useMemo, useEffect } from "react";
import {
  ConditionalForm,
  FormInput,
  FormField,
  PhoneNumber,
} from "@nexusui/components";
import { FormProvider, useForm } from "react-hook-form";
import { Paper, Typography, Button, Stack } from "@mui/material";
import NavigationBar from "../component/NavigationBar";
import "../component/NavigationBar.css";
import { db, dbName } from "../Login/config";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";

import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import React from "react";

const basicFields: FormField[] = [
  {
    id: "firstName",
    name: "firstName",
    label: "First Name",
    type: "text",
    rules: {
      required: "First Name is required",
    },
    properties: {
      placeholder: "Enter your first name",
      required: true,
    },
  },
  {
    id: "lastName",
    name: "lastName",
    label: "Last Name",
    type: "text",
    rules: {
      required: "Last Name is required",
    },
    properties: {
      placeholder: "Enter your last name",
      required: true,
    },
  },
];

const emailField: FormField = {
  id: "email",
  name: "email",
  label: "Email",
  type: "text",
  rules: {
    required: "Email is required",
    pattern: {
      value: /\S+@\S+\.\S+/,
      message: "Entered value does not match email format",
    },
  },
  properties: {
    placeholder: "Enter your Email",
    required: true,
  },
};

const companyNameField: FormField = {
  id: "companyName",
  name: "companyName",
  label: "Company Name",
  type: "text",
  rules: {
    required: "Company Name is required",
  },
  properties: {
    rows: 1,

    placeholder: "Enter your description",
  },
};

const descriptionAboutCompanyField: FormField = {
  id: "companyDes",
  name: "companyDes",
  label: "About your Company",
  type: "text",
  rules: {
    required: "Company description is required",
  },
  properties: {
    rows: 2,
    multiline: true,
    placeholder: "Enter your description",
  },
};

const agreementField: FormField = {
  id: "agreement",
  label: "I hereby agree to the terms.",
  name: "agree",
  type: "checkbox",
  rules: {
    required: "Agreement is required",
  },
  properties: {
    defaultValue: false,
    required: true,
  },
};

export default function RegistrationFormNexus() {
  const { user } = useAuth0();
  const [phoneNumberValue, setPhoneNumberValue] = React.useState("");

  let userSub = "" + user?.sub;
  let userSubSplit = userSub.split("|");
  let userID = userSubSplit[1];
  //console.log("User ID from nexusRegistration" + userID);

  const defaultValues = useMemo(
    () => ({
      firstName: "",
      lastName: "",
      email: "",
      companyName: "",
      companyDes: "",
      phoneNumberValue: "",
    }),
    []
  );

  const methods = useForm({
    defaultValues,
    mode: "onChange",
  });

  const {
    handleSubmit,
    watch,
    reset,
    formState: { isDirty, isValid, errors },
  } = methods;

  const isDisabled = useMemo(() => !isDirty || !isValid, [isDirty, isValid]);

  const firstName = watch("firstName");
  const lastName = watch("lastName");
  const email = watch("email");
  const companyName = watch("companyName");
  const companyDes = watch("companyDes");
  const navigate = useNavigate();

  const showEmail =
    !errors.firstName &&
    !errors.lastName &&
    firstName?.length > 0 &&
    lastName?.length > 0;
  const showAgreement =
    !errors.email &&
    email?.length > 0 &&
    !errors.companyName &&
    companyName?.length > 0 &&
    !errors.companyDes &&
    companyDes?.length > 0;

  useEffect(() => {
    reset(defaultValues);
  }, [reset, defaultValues]);

  const onSubmit = async (data: any) => {
    console.log(data);

    console.log("" + user?.sub?.split("|")[1]);
    const userlistDemo = {
      FirstName: data["firstName"],
      LastName: data["lastName"],
      CompanyName: data["companyName"],
      email: user?.email,
      DefaultID: userID,
      PhoneNumber: phoneNumberValue,
      registered: true,
    };

    console.log(userlistDemo);

    try {
      const docLoction = doc(db, dbName, userID);
      await setDoc(docLoction, {
        FirstName: data["firstName"],
        LastName: data["lastName"],
        CompanyName: data["companyName"],
        email: user?.email,
        DefaultID: userID,
        PhoneNumber: phoneNumberValue,
        registered: true,
        timeStamp: serverTimestamp(),
      }).then(() => {
        console.log("Document written successfully");
        navigate("/personaGrid");
      });
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  const onInvalid = (data: any) => {
    console.log("onInvalid", data);
  };

  const onReset = () => {
    reset(defaultValues);
  };

  // const containerStyles = {
  //   flexDirection: "row",
  //   mt: 4,
  // };

  return (
    <>
      <NavigationBar />
      <br />
      <br />
      <Paper sx={{ p: 4 }}>
        <Stack spacing={4}>
          <Typography variant="h3" sx={{ mb: 4 }}>
            Welcome to Gudlyf
          </Typography>
          <Typography sx={{ mb: 2 }}>a few more details please</Typography>

          <FormProvider {...methods}>
            <ConditionalForm
              fields={basicFields}
              key="basicInfo"
              direction={"row"}
            />
            <ConditionalForm
              visible={showEmail}
              fields={[emailField]}
              key="additionBasicInfo"
            />

            <Typography variant="subtitle1" sx={{ my: 6 }}>
              About your company
            </Typography>

            <FormInput {...companyNameField} {...companyNameField.properties} />
            <FormInput
              {...descriptionAboutCompanyField}
              {...descriptionAboutCompanyField.properties}
            />
            <PhoneNumber
              value={phoneNumberValue}
              autoFormat={true}
              label="Phone Number"
              placeholder="Enter Phone Number"
              excludeCountries={[]}
              enableLongNumbers={false}
              disableDropdown={false}
              defaultCountry="in"
              variant="outlined"
              onChange={(value) => setPhoneNumberValue(value)}
            />
            {showAgreement && (
              <Typography variant="subtitle1" sx={{ my: 3 }}>
                Agreement
              </Typography>
            )}
            <ConditionalForm
              visible={showAgreement}
              fields={[agreementField]}
              key="agreementInfo"
            />
          </FormProvider>
        </Stack>
        <div>
          <Button
            disabled={isDisabled}
            onClick={handleSubmit(onSubmit, onInvalid)}
            variant={"contained"}
            className="submit-button2"
            sx={{ mr: 4 }}
          >
            Submit
          </Button>
          <Button
            onClick={onReset}
            variant={"outlined"}
            className="submit-button2"
          >
            Reset
          </Button>
        </div>
      </Paper>
    </>
  );
}
