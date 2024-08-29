import {getState, patchState, signalStore, withHooks, withMethods} from "@ngrx/signals";
import {addEntities, addEntity, withEntities} from "@ngrx/signals/entities";
import {User} from "../../shared/models/user.interface";
import {Message} from "../../shared/models/message.interface";
import {effect} from "@angular/core";

export const MessagesStore = signalStore(
  withEntities<Message>(),
  withMethods((store) => ({
    addMessage(message: Message): void {
      // @ts-ignore
      patchState(store, addEntity(message));
    }
  })),
  withHooks({
    onInit(store) {
      effect(() => {
        const state = getState(store);
        console.log(state);
      });
    }
  })
);
