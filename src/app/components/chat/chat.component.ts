import { Component } from '@angular/core';
import { ChatservService } from 'src/app/services/chatserv.service';

interface Message {
  text: string;
  type: 'visitor' | 'operator';
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {

  isActive = false;
  buttonLabel = 'Any Question !';
  icons = {
    isClicked: 'X',
    isNotClicked: 'Any Question !'
  };
  mes: string = '';
  userMessage: string = '';
  conversation: Message[] = [];
  isTyping: boolean = false;

  constructor(private chatService: ChatservService) {}

  toggleChat() {
    this.isActive = !this.isActive;
    this.buttonLabel = this.isActive ? this.icons.isClicked : this.icons.isNotClicked;
  }

  sendMessage() {
    console.log("sent a message ?!")
    if (this.userMessage.trim()) {
      this.conversation.push({ text: this.userMessage, type: 'visitor' });
      this.mes=this.userMessage ;
      this.userMessage = ''; 
      this.isTyping = true; // Show typing animation
      this.chatService.sendMessage(this.mes).subscribe(response => {
        this.conversation.push({ text: response.response, type: 'operator' });
        this.isTyping = false; // Hide typing animation
      });
    }
  }
}
