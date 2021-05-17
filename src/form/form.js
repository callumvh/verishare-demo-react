// This is the main component of he app, all of the data fetching is done
// here
import {
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonButton,
  IonSelect,
  IonSelectOption,
  IonTitle,
} from "@ionic/react";
import "./form.css";
// This is a library I used for collecting the data from a form and
//  transforming it into a JSON object.
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

const options = {
  cssClass: "my-custom-interface",
};
const webURL = "https://verishare-demo.herokuapp.com/agreement";

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    getQuoteData();
  }, []);

  const [requestAnswer, setRequestAnswer] = useState({});

  const getQuoteData = async (data) => {
    console.log("data", data);
    const rawResponse = await fetch(webURL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const content = await rawResponse.json();
    const amount = await content;

    setRequestAnswer(amount);
  };

  return (
    <form onSubmit={handleSubmit((data) => getQuoteData(data))}>
      <IonList>
        <IonItem>
          <IonInput
            autofocus
            placeholder="Name"
            type="text"
            {...register("name", { required: true })}
          >
            {errors.name && <span>Required</span>}
          </IonInput>
        </IonItem>
        <IonItem>
          <IonInput
            placeholder="Initial Amount"
            type="number"
            {...register("initialAmount", { required: true })}
          >
            {errors.initialAmount && <span>Required</span>}
          </IonInput>
        </IonItem>
        <IonItem>
          <IonSelect
            placeholder="Agreement Type"
            interface="action-sheet"
            interfaceOptions={options}
            {...register("agreementType")}
          >
            {errors.agreementType && <span>Required</span>}
            <IonSelectOption value="mortgageAgreements">
              Mortgage agreements
            </IonSelectOption>
            <IonSelectOption value="creditFacilities">
              Credit facilities
            </IonSelectOption>
            <IonSelectOption value="unsecuredCredit">
              UnsecuredCreditTransactions
            </IonSelectOption>
            <IonSelectOption value="devCreditAgreementSmallBsnss">
              Developmental credit agreements for development of a small
              business
            </IonSelectOption>
            <IonSelectOption value="devCreditAgreementLowIncome">
              Developmental credit agreements for low income housing (unsecured)
            </IonSelectOption>

            <IonSelectOption value="shortTermCredit">
              Short term credit transactions
            </IonSelectOption>
            <IonSelectOption value="otherCreditAgreements">
              Other credit agreements
            </IonSelectOption>
            <IonSelectOption value="incidentalCredit">
              Incidental credit agreements
            </IonSelectOption>
          </IonSelect>
        </IonItem>
        <IonItem>
          <IonLabel color="medium" position="stacked">
            Start Date
          </IonLabel>
          {/* <IonItemDivider>Start Date</IonItemDivider> */}
          <IonInput
            color="medium"
            placeholder="Start Date"
            type="date"
            {...register("startDate", { required: true })}
          >
            {errors.startDate && <span>Required</span>}
          </IonInput>
        </IonItem>
        <IonItem>
          <IonLabel color="medium" position="stacked">
            End Date
          </IonLabel>
          <IonInput
            color="medium"
            type="date"
            {...register("endDate", { required: true })}
          >
            {errors.endDate && <span>Required</span>}
          </IonInput>
        </IonItem>

        <IonButton type="submit">Submit</IonButton>
        <IonItem>
          <IonTitle>{requestAnswer.successOrNot}</IonTitle>
          <IonTitle>{requestAnswer.reasonIfUnsuccessful}</IonTitle>
          <IonTitle>{requestAnswer.calculatedInterestAmount}</IonTitle>
        </IonItem>
      </IonList>
    </form>
  );
};
