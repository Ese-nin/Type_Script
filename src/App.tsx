import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import UncontrolledOnOff from "./components/OnOff/UncontrolledOnOff";
import UncontrolledAccordion from "./components/Accordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/Rating/UncontrolledRating";
import On from "./components/OnOff/On/On";
import Off from "./components/OnOff/Off/Off";
import Indicator from "./components/OnOff/Indicator/Indicator";

function App() {
    console.log('App')

    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const [on, setOn] = useState<boolean>(false)

    return (
        <div className="App">
            <UncontrolledOnOff/>
            <UncontrolledOnOff/>
            <UncontrolledOnOff/>

            <hr/>
            <div>
                <On status={on} setOn={setOn}/>
                <Off status={on} setOn={setOn}/>
                <Indicator status={on}/>
            </div>
            <div>
                <On status={on} setOn={setOn}/>
                <Off status={on} setOn={setOn}/>
                <Indicator status={on}/>
            </div>
            <div>
                <On status={on} setOn={setOn}/>
                <Off status={on} setOn={setOn}/>
                <Indicator status={on}/>
            </div>

            <UncontrolledAccordion titleValue={'Menu'} />
            <UncontrolledRating />

            <UncontrolledAccordion titleValue={'Users'} />
            <UncontrolledRating />


            <PageTittle title={'This is AP component'}/>
            <PageTittle title={'My friends'}/>
            Article 1
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <Accordion titleValue={'Menu'}
                       collapsed={accordionCollapsed}
                       onClick={setAccordionCollapsed}/>
            <Accordion titleValue={'Users'}
                       collapsed={accordionCollapsed}
                       onClick={setAccordionCollapsed}/>
            Article 2
            <Rating value={ratingValue} onClick={setRatingValue}/>
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
