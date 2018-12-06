import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { IMessage } from '../../shared/interfaces';

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
}
