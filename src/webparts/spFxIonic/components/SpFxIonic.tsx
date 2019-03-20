import * as React from 'react';
import styles from './SpFxIonic.module.scss';
import { ISpFxIonicProps } from './ISpFxIonicProps';
import { escape } from '@microsoft/sp-lodash-subset';

import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import {
  IonApp,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonButton,
  IonModal,
  IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonIcon
} from '@ionic/react';



export default class SpFxIonic extends React.Component<ISpFxIonicProps, {
  showPopover: boolean,
  showPopoverEvent: null | MouseEvent
  showModal: boolean
}> {

  constructor(props: ISpFxIonicProps) {
    super(props);
    this.state = {
      showPopover: false,
      showPopoverEvent: undefined,
      showModal: false
    };
  }

  public render(): React.ReactElement<ISpFxIonicProps> {
    return (
      <div>
    <IonHeader>
          <IonToolbar color="primary">
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>About</IonTitle>
            <IonButtons slot="end">
              <IonButton icon-only onClick={this.presentPopover}>
                <IonIcon slot="icon-only" name="more"></IonIcon>
              </IonButton>
            </IonButtons>
          </IonToolbar>
        </IonHeader>
          <IonCard>
            <IonCardHeader>
              <IonCardSubtitle>Welcome to Ionic</IonCardSubtitle>
              <IonCardTitle>Running on React</IonCardTitle>
            </IonCardHeader>
          </IonCard>
          <IonButton click={() => {
            this.setState({
              showModal: true
            });
          }}>
          Open Modal
          </IonButton>
          <IonModal
  isOpen={this.state.showModal}
  onDidDismiss={() => this.setState(() => ({ showModal: false}))}
>
  Some content to display in the modal.
</IonModal>
      </div>
    );
  }

  presentPopover = (e: MouseEvent) => {
    this.setState(() => ({
      showPopover: true,
      showPopoverEvent: e
    }));
  }
}
