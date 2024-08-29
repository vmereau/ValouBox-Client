import {getState, patchState, signalStore, withHooks, withMethods} from "@ngrx/signals";
import {addEntities, addEntity, withEntities} from "@ngrx/signals/entities";
import {User} from "../../shared/models/user.interface";
import {Message, PostMessage} from "../../shared/models/message.interface";
import {effect, inject} from "@angular/core";
import {MessageService} from "../../shared/services/message/message.service";

export const MessagesStore = signalStore(
  withEntities<Message>(),
  withMethods((store, messageService = inject(MessageService)) => ({
    async addMessage(newMessage: PostMessage): Promise<void> {

      messageService.sendMessage(newMessage).subscribe({
        next: (result) => {
          // @ts-ignore
          patchState(store, addEntity(result));
        },
        error: (error) => {
          console.log(error);
        }
      });
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
