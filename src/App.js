import './App.css';
import Sidebar from './sidebar'
import Chat from './chat'
import React, { useEffect ,useState} from 'react';
import Pusher from 'pusher-js';
import axios from "./axios"
function App() {
  const [messages, setMessages] = useState([])
  useEffect(() => {
    axios.get('/messages/sync').then((response) => {
      setMessages(response.data)
    })
  },[])

  useEffect(() => {

    const pusher = new Pusher('971483046d5e40bb2cd3', {
      cluster: 'mt1'
    });

    var channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage) => {
      // alert(JSON.stringify(newMessage)); 
      setMessages([...messages,newMessage])
    });

    return ()=>{
      channel.unbind_all();
      channel.unsubscribe();
    }

  }, [messages]);
  console.log(messages);
  return (
    <div className="App">
      <div className="app__body">
        <Sidebar />
        <Chat messages={messages}/>

      </div>
    </div>
  );
}

export default App;
