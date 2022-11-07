import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { auth } from '../../firebase';
import { login } from '../../features/userSlice';

function Login() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [profilePic, setProfilePic] = useState("");
    const dispatch = useDispatch();

    const loginToApp = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then(userAuth => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: userAuth.user.displayName,
                    profileUrl: userAuth.user.photoURL
                }))
            })
            .catch(error => alert(error));
    };

    const register = () => {
        if (!name) {
            return alert("Please enter a full name!")
        }

        auth.createUserWithEmailAndPassword(email, password).then(
            (userAuth) => {
                userAuth.user
                    .updateProfile({
                        displayName: name,
                        photoURL: profilePic
                    })
                    .then(() => {
                        dispatch(
                            login({
                                email: userAuth.user.email,
                                uid: userAuth.user.uid,
                                displayName: userAuth.user.displayName,
                                photoUrl: profilePic,
                            })
                        );
                    });
            })
            .catch(error => alert(error.message));
    };

    return (
        <Container>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/2560px-LinkedIn_Logo.svg.png" alt="" />

            <form action="">
                <input
                    value={name}
                    onChange={e => setName(e.target.value)}
                    placeholder="Full name (required if registering)"
                    type="text"
                />

                <input
                    value={profilePic}
                    onChange={e => setProfilePic(e.target.value)}
                    placeholder="Profile pic URL (optional)"
                    type="text"
                />

                <input
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Email"
                    type="text"
                />

                <input
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="Password"
                    type="password"
                />

                <button onClick={loginToApp}>Sign In</button>
            </form>

            <p>Not a member? <span onClick={register}>Register Now</span>
            </p>
        </Container>
    )
}


const Container = styled.div`
    display: grid;
    place-items: center;
    margin-left: auto;
    margin-right: auto;
    margin-top: 100px;
    padding-top: 100px;
    padding-bottom: 100px;

    & > img {
        object-fit: contain;
        height: 70px;
        margin-top: 20px;
        margin-bottom: 20px;
    }

    & > form {
        display: flex;
        flex-direction: column;
    }

    & > form > input {
        width: 350px;
        height: 50px;
        font-size: 20px;
        padding-left: 10px;
        margin-bottom: 10px;
        border-radius: 5px;
    }

    & > form > button {
        width: 365px;
        height: 50px;
        font-size: large;
        color: #fff;
        background-color: #0074b1;
        border-radius: 5px;
    }

    & > p > span {
        color: #0177b7;
        cursor: pointer;
    }

    & > p {
        margin-top: 20px;

    }
`;


export default Login