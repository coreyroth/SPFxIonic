import * as React from 'react';
import styles from './SpFxIonic.module.scss';
import { ISpFxIonicProps } from './ISpFxIonicProps';
import { escape } from '@microsoft/sp-lodash-subset';

import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonButton,
  IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonIcon, IonPopover, IonList, IonAvatar, IonItem, IonLabel, IonCardContent
} from '@ionic/react';



export default class SpFxIonic extends React.Component<ISpFxIonicProps, {
  showPopover: boolean,
  showPopoverEvent: null | MouseEvent
  showModal: boolean
}> {

  private sampleData = [
    {
      id: 1,
      image_url: 'https://via.placeholder.com/150',
      name: "Item 1"
    },
    {
      id: 2,
      image_url: 'https://via.placeholder.com/150',
      name: "Item 2"
    },
    {
      id: 3,
      image_url: 'https://via.placeholder.com/150',
      name: "Item 3"
    },
    {
      id: 4,
      image_url: 'https://via.placeholder.com/150',
      name: "Item 4"
    },
    {
      id: 5,
      image_url: 'https://via.placeholder.com/150',
      name: "Item 5"
    }
  ];

  constructor(props: ISpFxIonicProps) {
    super(props);
    this.state = {
      showPopover: false,
      showPopoverEvent: undefined,
      showModal: false
    };
    console.log('SPFxIonic Data - ', this.sampleData);
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
          <IonCardContent>
            <img src="https://via.placeholder.com/500x200"></img>
            <IonLabel>
              This is some card content.
            </IonLabel>
          </IonCardContent>
        </IonCard>
        <IonButton click={() => {
          alert('Click');
        }}>
          <IonIcon slot="start" name="airplane"></IonIcon>
          Button
          </IonButton>
        <IonButton color="danger" click={() => {
          alert('Click');
        }}>
          <IonIcon slot="start" name="flame"></IonIcon>
          Button
          </IonButton>
          <IonButton color="secondary" click={() => {
          alert('Click');
        }}>
          <IonIcon slot="start" name="nuclear"></IonIcon>
          Button
          </IonButton>

        <IonPopover
          isOpen={this.state.showPopover}
          event={this.state.showPopoverEvent}
          onDidDismiss={this.dismissPopover}
        >
          <div>
            This is a popover.
          </div>
        </IonPopover>
        <IonList>
          {
            this.sampleData.map(item => (
              <IonItem>
                <IonAvatar slot="start">
                  <img src={item.image_url}></img>
                </IonAvatar>
                <IonLabel>
                  {item.name}
                </IonLabel>
              </IonItem>
            ))
          }
        </IonList>
      </div>
    );
  }

  private presentPopover = (e: MouseEvent) => {
    this.setState(() => ({
      showPopover: true,
      showPopoverEvent: e
    }));
  }

  private dismissPopover = () => {
    this.setState(() => ({
      'showPopover': false,
      'showPopoverEvent': null
    }));
  }
}
