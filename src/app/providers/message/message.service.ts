import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMessage } from '../../shared/interfaces';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  public messages$: Observable<IMessage[]>;
  private messagesCollection: AngularFirestoreCollection<IMessage>;

  constructor(db: AngularFirestore) {
    this.messagesCollection = db.collection<IMessage>('messages', ref => ref.orderBy('timestamp', 'desc').limit(15));
    this.messages$ = this.messagesCollection.valueChanges();
  }

  public sendMessage(name: string, text: string) {
    const message: IMessage = {
      name: name,
      text: text,
      timestamp: this.timestamp
    };
    this.messagesCollection.add(message);
  }

  private get timestamp() {
    return firebase.firestore.FieldValue.serverTimestamp();
  }

}
