import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MessageService {

  public messages$: Observable<any[]>;
  private messagesCollection: AngularFirestoreCollection<any>;

  constructor(db: AngularFirestore) {
    this.messagesCollection = db.collection('messages', ref => ref.orderBy('timestamp', 'desc').limit(15));
    this.messages$ = this.messagesCollection.valueChanges();
  }
}
