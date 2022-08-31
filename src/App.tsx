import React from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/Accordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";

function App() {
    console.log('App')
    return (
        <div>
            <OnOff />
            <OnOff />
            <OnOff />

            <UncontrolledAccordion titleValue={'Menu'} />
            <UncontrolledRating />

            <UncontrolledAccordion titleValue={'Users'} />
            <UncontrolledRating />


            {/*<PageTittle title={'This is AP component'}/>
            <PageTittle title={'My friends'}/>
            Article 1
            <Rating value={3}/>
            <Accordion titleValue={'Menu'} collapsed={true}/>
            <Accordion titleValue={'Users'} collapsed={false}/>
            Article 2
            <Rating value={5}/>
            <Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>*/}
        </div>
    );
}

type PageTittlePropsType = {
    title: string
}

function PageTittle(props: PageTittlePropsType) {
    console.log("PageTittle rendering")
    return (
        <h1>{props.title}</h1>
    )
}


export default App;
