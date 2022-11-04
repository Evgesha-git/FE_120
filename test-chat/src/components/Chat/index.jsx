import { useEffect, useState, useContext } from "react";
import { Context } from "../..";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { collection, addDoc, query, orderBy } from "firebase/firestore";
import { serverTimestamp } from "firebase/firestore";


const Chat = () => {
    const { auth, firestore } = useContext(Context);
    const [user] = useAuthState(auth);
    const [value, setValue] = useState('');
    let [messages, loading] = useCollectionData(
        query(collection(firestore, 'messages'), orderBy('createAt'))
    );

    console.log(messages, loading);

    const sendMessage = async (e) => {
        e.preventDefault();
        await addDoc(collection(firestore, 'messages'), {
            uid: user.uid,
            displayName: user.displayName,
            photoUrl: user.photoURL,
            text: value,
            createAt: serverTimestamp(),
        });
        setValue('');
    }

    if (loading){
        return <div>Loading...</div>
    }

    return (
        <div className="container">
            <div className="chat">
                {messages.map(message => {
                    return (
                        <div key={message.text} style={{
                            margin: 10,
                            border: user.uid === message.uid ? '2px solid green' : '2px solid red',
                            width: 'fit-content',
                            padding: 5
                        }}>
                            <div className="avatar">
                                <img src={message.photoUrl} alt="" />
                            </div>
                            <div className="text">{message.text}</div>
                        </div>
                    )
                })}
            </div>
            <form onSubmit={sendMessage}>
                <textarea onInput={e => setValue(e.target.value)} value={value}></textarea>
                <button type="submit">Отправить</button>
            </form>
        </div>
    )
}

export default Chat;