import React, { useEffect, useState } from 'react'
import {
    Container,
    InputContainer,
    Input,
    InputOptions,
} from './FeedComponents';

import InputOption from './InputOption';
import Post from './Post';

import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import firebase from 'firebase/compat/app';
import { db } from '../../firebase';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import FlipMove from 'react-flip-move';

function Feed() {

    const user = useSelector(selectUser);
    const [input, setInput] = useState("");
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").orderBy('timestamp', 'desc').onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc => (
                {
                    id: doc.id,
                    data: doc.data()
                }
            )));
        });

    }, [])

    const sendPost = e => {
        e.preventDefault();
        db.collection("posts").add({
            name: user.displayName || user.email,
            description: user.email,
            message: input,
            photoUrl: user.photoUrl || "",
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });

        setInput("");
    }

    return (
        <Container>
            <InputContainer>
                <Input>
                    <CreateIcon />
                    <form>
                        <input
                            value={input}
                            type="text"
                            onChange={e => setInput(e.target.value)}
                        />
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </Input>

                <InputOptions>
                    <InputOption Icon={ImageIcon} title="Photo" color="#70b5f9" />
                    <InputOption Icon={SubscriptionsIcon} title="Video" color="#e7a33e" />
                    <InputOption Icon={EventNoteIcon} title="Photo" color="#c0cbcd" />
                    <InputOption Icon={CalendarViewDayIcon} title="Write article" color="#7fc15e" />
                </InputOptions>
            </InputContainer>

            <FlipMove>
                {posts.map(({
                    id,
                    data: { name, description, message, photoUrl }
                }) => (
                    <Post
                        key={id}
                        name={name}
                        description={description}
                        message={message}
                        photoUrl={photoUrl}
                    />
                ))}
            </FlipMove>

        </Container>
    )
}

export default Feed