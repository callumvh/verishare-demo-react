// This file is just the general layout of the app
import "./App.css";
import "@ionic/react/css/core.css";
import {
  IonApp,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { Form } from "./form/form";

import "./theme/variables.css";

import "./grid.css";

function App() {
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <ion-grid>
            <ion-row>
              <ion-col></ion-col>
              <ion-col size="7">
                <div>
                  <IonTitle>Verishare</IonTitle>
                </div>
              </ion-col>
              <ion-col></ion-col>
            </ion-row>
          </ion-grid>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <ion-grid>
          <ion-row>
            <ion-col></ion-col>
            <ion-col size="7">
              <div>
                <Form></Form>
                {/* <Dummy></Dummy> */}
              </div>
            </ion-col>
            <ion-col></ion-col>
          </ion-row>
        </ion-grid>
      </IonContent>
    </IonApp>
  );
}

export default App;
