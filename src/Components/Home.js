import { useState, useContext } from 'react';
import Form from "./Form"
import Header from "./Header";
import ListingData from "../ListComponents/Listing";
import { Context } from '../App';
import SecForm from "../ListComponents/SecForm";

function Home() {
    const [toggle, setToggle] = useState(true)
    const { addBtn } = useContext(Context)



    return (
        <div className="home">
            <Header setToggle={setToggle} />
            {toggle ? <ListingData /> : <Form setToggle={setToggle} />}
            {addBtn && <SecForm />}
        </div>
    );
}

export default Home;