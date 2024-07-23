import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    useEffect(() => {
        axios.get('http://localhost:3001/messages')
            .then(response => setMessages(response.data))
            .catch(error => console.error('Error fetching messages:', error));
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3001/messages', { content: input })
            .then(response => {
                setMessages([response.data, ...messages]);
                setInput('');
            })
            .catch(error => console.error('Error posting message:', error));
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold mb-6">Off Topic Chat</h1>
            <div className="w-full max-w-md bg-white shadow-md rounded-lg p-4">
                <div className="h-64 overflow-y-scroll mb-4">
                    {messages.map((msg, index) => (
                        <div key={index} className="p-2 border-b border-gray-200">
                            <strong>Anon:</strong> {msg.content}
                        </div>
                    ))}
                </div>
                <form onSubmit={handleSubmit} className="flex">
                    <input
                        type="text"
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        className="flex-1 p-2 border border-gray-300 rounded-l-md focus:outline-none"
                    />
                    <button type="submit" className="p-2 bg-blue-500 text-white rounded-r-md">
                        Enviar
                    </button>
                </form>
            </div>
        </div>
    );
};

export default App;
