import React, { useState, useEffect, useRef } from 'react';
import { 
  Search, 
  Phone, 
  Video, 
  MoreHorizontal, 
  Smile, 
  Paperclip, 
  Mic, 
  Send, 
  ArrowLeft
} from 'lucide-react';

const Messages = () => {
  const [selectedContact, setSelectedContact] = useState(0);
  const [messageInput, setMessageInput] = useState('');
  const [isMobileView, setIsMobileView] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const contacts = [
    {
      id: 1,
      name: 'Victor',
      lastMessage: 'Those who are alcohol-dependent are 40% more likely to develop mild',
      time: '20m ago',
      unread: 3,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&auto=format&q=80'
    },
    {
      id: 2,
      name: 'Joseph',
      lastMessage: 'Hey! How are you doing today?',
      time: '1h ago',
      unread: 0,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&auto=format&q=80'
    },
    {
      id: 3,
      name: 'John',
      lastMessage: 'Can we schedule a meeting for tomorrow?',
      time: '2h ago',
      unread: 1,
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&auto=format&q=80'
    },
    {
      id: 4,
      name: 'Hamid',
      lastMessage: 'Thanks for your help with the project!',
      time: '3h ago',
      unread: 20,
      avatar: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=40&h=40&fit=crop&auto=format&q=80'
    },
    {
      id: 5,
      name: 'Alade',
      lastMessage: 'The presentation went really well',
      time: '5h ago',
      unread: 0,
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=40&h=40&fit=crop&auto=format&q=80'
    },
    {
      id: 6,
      name: 'Onyekwere',
      lastMessage: 'Looking forward to our call later',
      time: '1d ago',
      unread: 0,
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=40&h=40&fit=crop&auto=format&q=80'
    }
  ];

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'other',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna',
      time: '10:30',
      type: 'text'
    },
    {
      id: 2,
      sender: 'me',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna',
      time: '10:32',
      type: 'text'
    },
    {
      id: 3,
      sender: 'other',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis',
      time: '10:33',
      type: 'text'
    },
    {
      id: 4,
      sender: 'me',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna',
      time: '10:35',
      type: 'text'
    },
    {
      id: 5,
      sender: 'other',
      text: "Here's the image you requested for air fully optimized and ready to be used",
      time: '10:37',
      type: 'text',
      hasImage: true,
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop&auto=format'
    },
    {
      id: 6,
      sender: 'me',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna',
      time: '10:40',
      type: 'text'
    },
    {
      id: 7,
      sender: 'other',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis',
      time: '10:42',
      type: 'text'
    }
  ]);

  // Scroll to bottom whenever messages change or component mounts
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleMessageSend = (e) => {
    e.preventDefault();
    
    if (messageInput.trim() === '') return;
    
    const newMessage = {
      id: messages.length + 1,
      sender: 'me',
      text: messageInput.trim(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      type: 'text'
    };
    
    setMessages(prevMessages => [...prevMessages, newMessage]);
    setMessageInput('');
    setIsTyping(false);
  };

  const handleInputChange = (e) => {
    setMessageInput(e.target.value);
    setIsTyping(e.target.value.trim() !== '');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleMessageSend(e);
    }
  };

  const ContactsList = () => (
    <div className={`${isMobileView ? 'hidden' : 'flex'} lg:flex flex-col w-full lg:w-80 border-r border-gray-200 dark:border-gray-700`}>
      {/* Contacts Header */}
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Messages</h2>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="search for contact..."
            className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-sm text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Contacts List */}
      <div className="flex-1 overflow-y-auto">
        {contacts.map((contact, index) => (
          <div
            key={contact.id}
            onClick={() => {
              setSelectedContact(index);
              setIsMobileView(true);
            }}
            className={`flex items-center gap-3 p-4 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer ${
              selectedContact === index ? 'bg-gray-50 dark:bg-gray-700' : ''
            }`}
          >
            <div className="relative">
              <img
                src={contact.avatar}
                alt={contact.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              {contact.unread > 0 && (
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  {contact.unread}
                </div>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-medium text-gray-900 dark:text-white truncate">
                {contact.name}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                {contact.lastMessage}
              </p>
            </div>
            <span className="text-xs text-gray-400 whitespace-nowrap">
              {contact.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );

  const ChatArea = () => (
    <div className={`${!isMobileView ? 'hidden' : 'flex'} lg:flex flex-col flex-1`}>
      {/* Chat Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setIsMobileView(false)}
            className="lg:hidden p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded"
          >
            <ArrowLeft className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          </button>
          <img
            src={contacts[selectedContact]?.avatar}
            alt={contacts[selectedContact]?.name}
            className="w-8 h-8 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white">
              {contacts[selectedContact]?.name}
            </h3>
            <p className="text-sm text-green-500">Online</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
            <Phone className="w-4 h-4 text-gray-600 dark:text-gray-400" />
          </button>
          <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
            <Video className="w-4 h-4 text-gray-600 dark:text-gray-400" />
          </button>
          <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
            <MoreHorizontal className="w-4 h-4 text-gray-600 dark:text-gray-400" />
          </button>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-xs lg:max-w-md ${
              message.sender === 'me' 
                ? 'bg-teal-500 text-white' 
                : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white'
            } rounded-lg p-3`}>
              <p className="text-sm">{message.text}</p>
              {message.hasImage && (
                <img
                  src={message.image}
                  alt="Shared image"
                  className="mt-2 rounded-lg w-full h-32 object-cover"
                />
              )}
              <p className={`text-xs mt-1 ${
                message.sender === 'me' ? 'text-teal-100' : 'text-gray-500 dark:text-gray-400'
              }`}>
                {message.time}
              </p>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-3 max-w-xs">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              </div>
            </div>
          </div>
        )}
        {/* Invisible element to scroll to */}
        <div ref={messagesEndRef} />
      </div>

      {/* Message Input */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
            <Smile className="w-5 h-5 text-gray-500" />
          </button>
          <div className="flex-1 relative">
            <input
              type="text"
              value={messageInput}
              onChange={handleInputChange}
              onKeyDown={handleKeyPress}
              placeholder="Type a message..."
              className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
            <Paperclip className="w-5 h-5 text-gray-500" />
          </button>
          <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
            <Mic className="w-5 h-5 text-gray-500" />
          </button>
          <button onClick={handleMessageSend} className="p-2 bg-teal-500 hover:bg-teal-600 rounded-lg">
            <Send className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="h-screen bg-gray-50 dark:bg-gray-900 flex">
      <ContactsList />
      <ChatArea />
    </div>
  );
};

export default Messages;